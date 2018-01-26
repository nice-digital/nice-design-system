# Contribution Guidelines

We welcome patches to NICE Design System, as long as you follow these
guidelines:

## Coding standards

Follow our [ESLint](https://github.com/nhsevidence/nice-design-system/blob/master/src/javascripts/.eslintrc) and [Sass Lint](https://github.com/nhsevidence/nice-design-system/blob/master/src/stylesheets/.sass-lint.yml) rules for linting. Run `npm run lint` to check for any linting errors.

If in doubt, follow the format of the surrounding code.

## Documentation

Keep all documentation e.g. comments and readmes up-to-date with any code changes.

## Tests

Include thoughtfully-worded, well-structured Mocha tests. See the [test folder](https://github.com/nhsevidence/nice-design-system/tree/master/test#readme) for more info.

## Commit hygiene

Follow [GOV.UK's Git style guide](https://github.com/alphagov/styleguides/blob/master/git.md).

## Versioning

We release versions from master using [SemVer](http://semver.org/) so your code shouldn't update the version number.

### Breaking changes

Mark any commits with breaking changes so that we can release a major version.
