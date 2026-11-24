# :art: NICE Design System

> Lerna-managed monorepo for the NICE Design System

[![npm](https://img.shields.io/npm/v/@nice-digital/design-system.svg)](https://www.npmjs.com/package/@nice-digital/design-system)
[![GitHub release](https://img.shields.io/github/release/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system)
[![License](https://img.shields.io/github/license/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system/blob/master/LICENSE)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<details>
<summary><strong>Table of contents</strong></summary>

- [What is it?](#what-is-it)
- [Development](#development)
	- [Quick start](#quick-start)
	- [Slow start](#slow-start)
	- [Help! I'm getting complaints about icons!](#help-im-getting-complaints-about-icons)
	- [NextJS](#nextjs)
	- [Tests](#tests)
	- [Commands](#commands)
		- [Release TL;DR](#release-tldr)
		- [Publishing to npm](#publishing-to-npm)
		- [Alpha releases](#alpha-releases)
		- [If a publish fails part way](#if-a-publish-fails-part-way)
		- [Latest releases](#latest-releases)
</details>

## What is it?

The NICE Design System (NDS) is a pattern library, front-end toolkit and set of guidelines for rapidly building modern, accessible digital services that are consistent with the NICE brand guidelines.

## Development

We recommend using vscode as the IDE when developing with the NICE Design System. We have a set of [recommended extensions](.vscode/extensions.json) you should install to make development easier. You should be prompted to install these when opening the folder in vscode.


### Requirements

The Design System now requires the following runtime versions:

- **Node:** 22.19.0  
- **npm:** 10.9.3  

We recommend using Volta to manage versions.

### Quick start

    TL;DR:
    	1. `volta install node`
    	2. `npm ci`
    	3. `npm start`
    	4. http://localhost:3000/

### Slow start

To run the design system site and tests locally, first install [Node](https://nodejs.org/en/download/). We use [Volta](https://volta.sh/) to manage Node versions; you may need to [install that first](https://docs.volta.sh/guide/getting-started).

Then before you can run any tasks, run `npm ci` from the command line to install dependencies from npm. This will also link local packages together and install remaining package dependencies.

Next, run `npm start` from the command line to run a server for local development, and view http://localhost:3000/ in a browser.

### Help! I'm getting complaints about icons!

You may need to generate the icon packages first. Change to the components/icons
folder, run `npm ci` and then `npm start`. You should then be able to return to
the root folder and run `npm start` again without any issues.

### NextJS

The NDS docs site is built using [NextJS](https://nextjs.org/). It can be found in the **docs** folder.

### Tests

All the components have tests, written with [Jest](https://jestjs.io/) and 
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). 
Run `test:unit:watch` to run unit tests and watch for changes.

To run tests for a just a single component, run the following:

```sh
npm run test:unit:watch -- breadcrumbs
```

### Commands

Run `npm start` and `test:unit:watch` for development. However, there are other npm scripts available to be run for other tasks - here are some useful ones:

| Task                            | Description                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------|
| `npm start`                     | Runs a server for local development and watches for changes                   |
| `npm run lerna`                 | Runs `lerna` under the hood                                                   |
| `npm run lerna:clean`           | Runs `lerna clean` under the hood for removing package node_modules           |
| `npm run lerna:changed`         | Runs `lerna changed` for checking changed packages since the last release     |
| `npm run release:alpha`         | Builds, then publishes an alpha with a branch-specific preid ([see below](#alpha-releases)) |
| `npm run release:latest`        | Runs `lerna publish` under the hood for the latest full release               |
| `npm test`                      | Lints JS and SCSS and runs JS unit tests                                      |
| `npm run test:unit`             | Runs JS unit tests                                                            |
| `npm run test:unit:watch`       | Runs JS test tests and watches for changes to re-run tests                    |
| `npm run test:unit:coverage`    | Runs JS test tests and generates a coverage report                            |
| `npm run lint`                  | Lints both JS and SCSS                                                        |
| `npm run lint:js`               | Lints just JS                                                                 |
| `npm run lint:scss`             | Lints just SCSS                                                               |
| `npm run clean:ts`              | Cleans the Typescript output                                                  |
| `npm run build:ts`              | Compiles all Typescript components                                            |
| `npm run docs:dev`              | Starts the Next.js documentation site in development mode                     |
| `npm run docs:build`            | Builds the Next.js documentation site for production                          |

> **Note:** `npm run lint:scss` requires Stylelint as a project dependency. Stylelint is not yet installed; this will be added in an upcoming update.

Check [package.json](package.json) for a complete list of scripts.

> **Note:** because lerna is installed locally, you can use `npm run lerna -- ` to run lerna commands.

#### Release TL;DR

We don't release often, so here's the short version. Details are in the sections below.

**Before any release**

```sh
npm login --registry https://registry.npmjs.org/     # we install from CodeArtifact but publish to npmjs
npm whoami --registry https://registry.npmjs.org/    # check it worked
git status                                           # working tree must be clean
```

**Alpha (from your ticket branch, e.g. `NDS-548-my-change`)**

```sh
npm run release:alpha -- --dry-run   # check the preid, e.g. alpha-nds-548
npm run release:alpha                # build, version x.y.z-alpha-nds-548.N, tag, push, publish with dist-tag 'alpha'
```

Never use plain `--preid alpha`. Old `x.y.z-alpha.N` versions are already taken ([why](#alpha-releases)).

**Latest (from `main`, after the ticket's PR is squash-merged)**

```sh
git checkout main && git pull
npx lerna changed                    # should list every package your ticket changed or alpha-released
npm run release:latest               # choose "Patch" (or Minor/Major) at the prompt, never a prerelease
```

If `lerna changed` lists fewer packages than expected (for example only `icons`, while others are still on `-alpha-…` versions), run `npx lerna publish patch --dist-tag latest --registry https://registry.npmjs.org/` instead. An explicit bump also releases packages that are still on a prerelease version.

**Afterwards**

- Check it's on npm, e.g. `npm view @nice-digital/design-system dist-tags --registry https://registry.npmjs.org/`.
- CodeArtifact syncs from npmjs with a delay, so consuming apps may not see the new version for a while. To test straight away, install from npmjs without saving: `npm i @nice-digital/icons@<version> --no-save --registry https://registry.npmjs.org/`.

**If it fails part way:** don't run the release again. Follow [If a publish fails part way](#if-a-publish-fails-part-way).

#### Publishing to npm

Packages are **installed** from our private CodeArtifact registry, but **published** to the public npm registry (https://registry.npmjs.org/). Every publishable package sets `publishConfig.registry` to npmjs, so publishing never goes to CodeArtifact. `npm run release:alpha` also passes `--registry https://registry.npmjs.org/` to lerna.

Because your default registry is CodeArtifact, plain `npm whoami` / `npm login` talk to CodeArtifact, not npmjs. Point them at npmjs explicitly:

```sh
npm login --registry https://registry.npmjs.org/
npm whoami --registry https://registry.npmjs.org/
```

> Please make sure 2FA is enabled on your account for at least auth, and preferably writes as well.

Next, check you have access to the @nice-digital org on npm by running `npm org ls nice-digital USERNAME --registry https://registry.npmjs.org/`. It should list your username and role. You should have at least the *developers* role, which will give you write access.

> **Don't put `registry=https://registry.npmjs.org/` in a project or user `.npmrc`.** That would also send `npm install` to npmjs and bypass CodeArtifact. Use `--registry` per command instead.

#### Alpha releases

> **Why alphas need a branch-specific preid**
>
> Alpha releases used to use a plain `alpha` preid (`x.y.z-alpha.N`). When several developers published alphas from parallel branches, lerna on each branch calculated the same "next" version independently, because tagging wasn't robust enough for parallel development. For example, the NDS-426 accordion branches published `4.1.1-alpha.0` and `4.1.2-alpha.0` for almost every component in 2024 and were never merged to `main`.
>
> Those versions are now permanently taken: they're tagged in git **and** published on npm, and npm never allows a version to be reused. So any branch that releases with plain `--preid alpha` from `4.1.0` fails with `fatal: tag '@nice-digital/nds-a-z-list@4.1.1-alpha.0' already exists` (or, if the tag is deleted, "cannot publish over the previously published version"). Deleting tags doesn't fix it.

To avoid this, every alpha uses a preid that's unique to the ticket, e.g. `4.1.1-alpha-nds-548.0`. `npm run release:alpha` works this out from the branch name:

| Branch                                  | Preid           | Example version          |
| --------------------------------------- | --------------- | ------------------------ |
| `NDS-548-publish-nice-logo`             | `alpha-nds-548` | `6.1.8-alpha-nds-548.0`  |
| `PARS-9-migrate-to-codeartifact`        | `alpha-pars-9`  | `4.1.1-alpha-pars-9.0`   |

Releasing again from the same branch bumps the last number (`…-alpha-nds-548.1`), and the versions are still published under the `alpha` [dist tag](https://docs.npmjs.com/cli/dist-tag).

```sh
# Preid from the branch name (branch must start with a ticket, e.g. NDS-548-)
npm run release:alpha

# Check the preid and lerna command without building or publishing
npm run release:alpha -- --dry-run

# Explicit preid, e.g. if the branch has no ticket prefix
npm run release:alpha -- --preid alpha-nds-548

# Other args are passed through to lerna publish, e.g. a 2FA one-time password
npm run release:alpha -- --otp 123456
```

The script ([scripts/release-alpha.js](scripts/release-alpha.js)) refuses to run on `main`/`master` without an explicit preid, rejects plain `alpha`, then runs `clean:ts`, `build:ts` and `icons:start` before `lerna publish prerelease --preid <preid> --dist-tag alpha --registry https://registry.npmjs.org/`. As with any lerna publish, you can pass other [lerna publish arguments](https://github.com/lerna/lerna/tree/main/libs/commands/publish#readme).

> **Note:** lerna won't publish with uncommitted changes. If the build changes tracked files (for example `npm run icons:start` regenerates the icons README), commit those changes before releasing.

#### If a publish fails part way

Lerna versions, commits, tags and pushes **before** it publishes to npm. So if the npm step fails (e.g. you weren't logged in to npmjs), the version bump commit and tags already exist. **Don't release again from scratch**, because that bumps versions a second time. Instead:

1. Discard the `gitHead` fields lerna temporarily added to each `package.json`. Don't commit them:
   ```sh
   git restore -- "components/*/package.json" docs/package.json
   ```
2. Fix the problem (e.g. `npm login --registry https://registry.npmjs.org/`).
3. Publish the versions that are already committed. This skips anything already on npm, so it's safe to re-run:
   ```sh
   npm run build:ts && npm run icons:start
   npx lerna publish from-package --dist-tag alpha --registry https://registry.npmjs.org/
   ```
   For a failed latest release, use `--dist-tag latest` instead. If the build changed tracked files, `git restore` them first so the working tree is clean.

#### Latest releases

Full releases are done from `main`. Tickets are squash-merged into `main` via their PR, and then someone runs the release on `main`. That creates a `Publish` commit and tags directly on `main`.

```sh
git checkout main && git pull
npx lerna changed
npm run release:latest
```

At lerna's version prompt, choose **Patch**, **Minor** or **Major**. Don't choose a prerelease option for a latest release. A package on an alpha such as `4.1.1-alpha-nds-548.0` graduates to `4.1.1` with Patch.

> **Why check `lerna changed` first?** With lerna's interactive prompt, a package is only released if its files changed since its last tag. Squash-merging normally makes this work, because the alpha tags stay on the ticket branch and lerna compares against the last full release. But if alpha tags do end up on `main` (for example after a normal merge commit), packages that were only version-bumped by the alpha aren't seen as changed. They'd be left on `-alpha-…` versions. Passing an explicit bump fixes that, because lerna then also includes every package currently on a prerelease:
>
> ```sh
> npx lerna publish patch --dist-tag latest --registry https://registry.npmjs.org/
> ```

If the npm step fails after lerna has versioned and pushed, follow [If a publish fails part way](#if-a-publish-fails-part-way) and use `--dist-tag latest` instead of `alpha`.

#### Alpha release detects no changes?

If you make changes, run `npm start` to rebuild the project and let lerna update version numbers. If `npm run release:alpha` still detects no changes, as a last resort, run this beforehand to bump version numbers manually. It won't commit, tag or push. Use your ticket preid, not plain `alpha`:

```sh
npx lerna version prerelease --preid alpha-nds-548 --no-push --no-git-tag-version
```

### npm workspaces and Lerna

Since Lerna v6+, several legacy package management commands have been deprecated and removed.  
Lerna now relies on npm and npm workspaces for dependency management.

For the Design System monorepo, **use npm workspaces for all package installation tasks**, and use Lerna for orchestration tasks such as versioning and publishing.

The following Lerna commands are no longer available:
- `lerna bootstrap`
- `lerna add`
- `lerna link`

More information is avaiable in [Lerna's Legacy Package Management documentation](https://lerna.js.org/docs/legacy-package-management)

#### Example: Adding dependencies
Previously, to add a dependency to a specific Design System package, we used:

```sh
npm run lerna -- add @nice-digital/icons --scope=@nice-digital/nds-filters
```
 
As `lerna add` has been removed, **dependencies must now be added using the npm workspace commands**.
```sh
npm install @nice-digital/icons -w @nice-digital/nds-filters
```
This ensures that dependencies are installed and linked correctly within the workspace.


#### Common workspace commands

All commands should be run from the repository root.

**Install a dependency into a specific workspace package**
Adds a dependency to a specific workspace package, identified by the name field in its package.json.

```sh
npm install <dependency> -w <workspace-package-name>
```

**Example:**
```sh
npm install @nice-digital/icons -w @nice-digital/nds-filters
```

**Add a dev dependency to a specific workspace package**
```sh
npm install <dependency> --save-dev -w <workspace-package-name>
```

**Example:**
```sh
npm install eslint --save-dev -w @nice-digital/nds-filters

## alternative shorthand
npm install -D eslint -w @nice-digital/nds-filters
```

**Install dependencies for all workspace packages**
Installs dependencies for the entire monorepo and sets up workspace linking.

```sh
npm install
```

**Run a script in a specific workspace package**
Runs a script defined in the target package’s package.json.

```sh
npm run <script> -w <workspace-package-name>
```

**Example:**
```sh
npm run build -w @nice-digital/nds-filters
```


**Run a script across all workspace packages**
Runs the specified script in every workspace package where it exists.

```sh
npm run <script> --workspaces
```

**Note:** For simple scripts in a single workspace package, use npm workspace commands.  
> For more complex scenarios, such as running tasks across multiple packages while respecting dependency order or caching use [`lerna run`](https://lerna.js.org/docs/features/run-tasks.
