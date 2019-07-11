# FinnoConsult React boilerplate  

## Monorepo
This is a monorepo built with yarn workspaces. It also includes lerna, but we're using it for its task-running and versioning utility only.  
The dependencies are managed by yarn workspaces.  

### Structure
All the projects/packages go in the projects folder. You can add more projecs in this folder, and they will be automatically recognized as such by yarn workspaces.  

## Setup
After cloning, run "yarn install" in the root folder.  
To start all development servers, run "yarn dev" in the root folder.  
To build all projects, run "yarn build" in the root folder.  
To run only specific projects, use/create a script in the root package.json, for example: dev:frontend will only run the frontend package, and it's dependencies.  
You can also just cd into a project, and run its tasks.

You get the idea. Based on the above pattern, you can create other tasks in root with lerna: "lerna run [task]" will run all scripts named [task] in all the projects' package.jsons.

## What goes where
Common devDependencies, like TypeScript, ESLint packages etc. should go into root.  
Dependencies that are not used throughout the repo, should be installed in the needed projects only.  
CRA (react-scripts) is probably the only non-dev dependency that should be in root, as it also contains dev packages, like ESLint.

## Lintig
For consistent code throughout the packages, we keep the eslintrc in the root, and so all projects use the same rules.

## TypeScript
TypeScript is installed in the root, and there is a common tsconfig in root.
Projects should inherit from this, and add changes as necessary.

## Jest
Jest is installed with CRA in root. The config file (supports ts) is in the root as well. To run all the test, run "yarn tes" in root. To run a specific project's test, cd into the project and run the test there. Running specific tests from root with lerna is currently not supported.

## Versioning
We use lerna for this. Run the "bump-version" task in root, this will bump the version of all the packages that were changed, along with the monorepo's version in lerna.json. It will also commit and push to origin, and create a release.
The root package.json doesn't have a version, because it has to be private (for yarn workspaces).