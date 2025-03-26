# Grunt Tasks Documentation

This document lists all available Grunt tasks in the project.

## Development Tasks

### Main Development Tasks
- `grunt dev` - Main development task that runs multiple subtasks including:
  - Folder list generation
  - Mail preview files generation
  - Printable ticket generation
  - Development build
  - ULS development
  - Various file copying tasks
  - Watch mode

- `grunt dev_minus_watch` - Runs development tasks without watch mode
- `grunt common_tasks` - Runs common development tasks
- `grunt build:dev` - Builds development environment

### Component-Specific Development Tasks
- `grunt portal_dev` - Runs portal development tasks
- `grunt preview_dev` - Runs preview development tasks
- `grunt embed_dev` - Runs embed development tasks
- `grunt vc_dev` - Runs virtual community development tasks
- `grunt site_entity` - Runs site entity development tasks
- `grunt build:badge_preview_dev` - Builds badge preview development environment
- `grunt build:agenda_printer` - Builds agenda printer
- `grunt admin` - Runs admin tasks with Redis server and pricing proto development build

## Production Tasks

### ULS Tasks
- `grunt ulsDev` - Runs ULS development tasks
- `grunt ulsProd` - Runs ULS production tasks

### Production Build Tasks
- `grunt preProdBuild` - Runs pre-production build tasks in parallel:
  - Generate mail preview files for translations
  - Generate mail editor components
  - Generate printable ticket
  - Properties
  - Copy various production files

- `grunt prodBuild1` - Runs first set of production build tasks in parallel:
  - Community production build
  - Preview production build
  - Portal production build
  - Pricing proto production build

- `grunt prodBuild` - Runs second set of production build tasks in parallel:
  - Embed production build
  - Badge preview production build
  - Agenda printer production build

- `grunt afterProdBuild` - Runs post-production build tasks in parallel:
  - File blocks for production
  - CSS concatenation
  - Server template copying
  - Various minification tasks

## Utility Tasks

### File Generation Tasks
- `grunt generateMailPreviewFilesForTranslations` - Generates mail preview files for all languages
- `grunt generatePrintableTicket` - Generates printable ticket format

### Testing Tasks
- `grunt scalaTest` - Runs Scala tests

### Deployment Tasks
- `grunt localDeployment` - Handles local deployment
- `grunt startServer` - Starts the server with necessary setup
- `grunt replaceDev` - Replaces development configuration

## Default Task
- `grunt` or `grunt default` - Runs the default task (same as `grunt dev`)
