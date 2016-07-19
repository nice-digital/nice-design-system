# NICE.Bootstrap v2

Welcome to NICE Bootstrap v2.

## Prerequisites

- Node 6+
- NPM 3.9+

## Project structure

| Folder | Description |
| ---- | ----------- |
| .grunt | Grunt task configs loaded in from Gruntfile.js |
| src | SASS and JS source |
| web | Web app for the style guide |

## Running tasks

Before you run any tasks, you'll have to run the following from the command line to install dependencies:

- `npm install -g grunt-cli`
- `npm i`

### Grunt only

| Task | Description |
| ---- | ----------- |
| `grunt`      | Default. Lints, builds everything and spins up an express server and a watch task for changes |
| `grunt lint` | Lints SASS and JS |
| `grunt docs` | Generates documentation JSON files for SASS and JS |
| `grunt build` | Builds everything needed |

### NPM

| Task | Description |
| ---- | ----------- |
| `npm start`     | Runs `grunt` under the hood |
| `npm test`      | TODO |
| `npm run lint`  | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run serve` | Spins up an express server in node on port *54321* |
