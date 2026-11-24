#!/usr/bin/env node
/**
 * Alpha release with a branch-specific prerelease id (preid).
 *
 * Why: in the past several developers published plain `-alpha.N` versions from
 * parallel branches. Those versions (e.g. 4.1.1-alpha.0, 4.1.2-alpha.0) are now
 * permanently taken on npm and tagged in git, so a plain `--preid alpha` release
 * fails with "tag already exists" / "cannot publish over previously published version".
 * A per-ticket preid (e.g. alpha-nds-548) keeps every branch in its own version space.
 *
 * Usage:
 *   npm run release:alpha                              # preid derived from branch, e.g. NDS-548-foo -> alpha-nds-548
 *   npm run release:alpha -- --preid alpha-nds-548     # explicit preid (required if the branch has no ticket prefix)
 *   npm run release:alpha -- --dry-run                 # show the preid and lerna command, then exit
 *   npm run release:alpha -- --yes --otp 123456        # any other args are passed through to `lerna publish`
 */
const { execFileSync, spawnSync } = require("child_process");
const path = require("path");

const REGISTRY = "https://registry.npmjs.org/";
const PROTECTED_BRANCHES = ["main", "master", "HEAD"];
// Ticket prefix at the start of the branch name, e.g. NDS-548-publish-logo or PARS-9-migrate
const TICKET_PATTERN = /^([A-Za-z]+-\d+)(?:-|$)/;

const fail = (message) => {
	console.error(`\nrelease:alpha: ${message}\n`);
	process.exit(1);
};

// --- Parse our own flags; everything else is passed through to lerna publish
const args = process.argv.slice(2);
let preid;
let dryRun = false;
const passthrough = [];
for (let i = 0; i < args.length; i++) {
	const arg = args[i];
	if (arg === "--preid") {
		preid = args[++i];
		if (!preid) fail("--preid needs a value, e.g. --preid alpha-nds-548");
	} else if (arg.startsWith("--preid=")) {
		preid = arg.slice("--preid=".length);
	} else if (arg === "--dry-run") {
		dryRun = true;
	} else if (
		["--dist-tag", "--registry", "--canary"].some(
			(f) => arg === f || arg.startsWith(f + "=")
		)
	) {
		fail(`${arg.split("=")[0]} is set by this script and can't be overridden`);
	} else {
		passthrough.push(arg);
	}
}

// --- Work out the preid from the branch name if not given explicitly
const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
	encoding: "utf8"
}).trim();

if (!preid) {
	if (PROTECTED_BRANCHES.includes(branch)) {
		fail(
			`refusing to derive a preid on '${branch}'. Alpha releases should come from a ticket branch, ` +
				`or pass one explicitly: npm run release:alpha -- --preid alpha-<ticket>`
		);
	}
	const match = branch.match(TICKET_PATTERN);
	if (!match) {
		fail(
			`couldn't find a ticket prefix (e.g. NDS-548-) in branch '${branch}'. ` +
				`Pass one explicitly: npm run release:alpha -- --preid alpha-<ticket>`
		);
	}
	preid = `alpha-${match[1].toLowerCase()}`;
}

// --- Validate: semver prerelease identifier, alpha- prefixed, and never the clash-prone plain "alpha"
if (!/^[0-9A-Za-z-]+$/.test(preid))
	fail(
		`'${preid}' isn't a valid semver prerelease id (letters, digits and hyphens only)`
	);
if (preid === "alpha")
	fail(
		"plain 'alpha' clashes with old published versions; use a ticket preid such as alpha-nds-548"
	);
if (!preid.startsWith("alpha-"))
	fail(`preid '${preid}' should start with 'alpha-', e.g. alpha-nds-548`);

const lernaCli = path.join(
	__dirname,
	"..",
	"node_modules",
	"lerna",
	"dist",
	"cli.js"
);
const lernaArgs = [
	"publish",
	"prerelease",
	"--preid",
	preid,
	"--dist-tag",
	"alpha",
	"--registry",
	REGISTRY,
	...passthrough
];

console.log(`\nrelease:alpha: branch '${branch}' -> preid '${preid}'`);
console.log(
	`release:alpha: versions will look like x.y.z-${preid}.N, published to ${REGISTRY} with dist-tag 'alpha'`
);
console.log(`release:alpha: lerna ${lernaArgs.join(" ")}\n`);

if (dryRun) process.exit(0);

// --- Build, then publish. Fixed command strings only, so shell: true is safe (needed for npm.cmd on Windows).
for (const script of ["clean:ts", "build:ts", "icons:start"]) {
	const result = spawnSync(`npm run ${script}`, {
		stdio: "inherit",
		shell: true
	});
	if (result.status !== 0) fail(`'npm run ${script}' failed`);
}

// lerna is run directly with node (no shell), so passthrough args are never shell-interpreted
const publish = spawnSync(process.execPath, [lernaCli, ...lernaArgs], {
	stdio: "inherit"
});
process.exit(publish.status ?? 1);
