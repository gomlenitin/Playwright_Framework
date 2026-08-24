# Playwright Framework

A TypeScript learning and automation project built with [Playwright](https://playwright.dev/). It contains practical examples of common browser-automation techniques, plus end-to-end, page-object-model, and data-driven test projects.

## What's included

- Cross-browser execution in Chromium and Firefox
- Playwright Test fixtures, assertions, hooks, browser contexts, and session storage
- Locators, frames, shadow DOM, dialogs, file uploads/downloads, web tables, and drag-and-drop
- Data-driven tests using CSV, JSON, XLSX, and Faker
- Page Object Model examples, including the TTA Cart project
- HTML reports and a custom TTA reporter
- GitHub Actions workflow for automated test execution

## Prerequisites

- Node.js LTS
- npm
- Git

## Get started

```bash
git clone https://github.com/gomlenitin/Playwright_Framework.git
cd Playwright_Framework
npm ci
npx playwright install
```

Use `npm install` instead of `npm ci` if you are intentionally changing dependencies.

## Run tests

```bash
# Run the complete suite
npm test

# Run with a visible browser
npm run test:headed

# Open Playwright's interactive UI mode
npm run test:ui

# Run a configured browser project
npm run test:chromium
npm run test:firefox

# Run the Page Object Model examples
npm run test:po

# Run end-to-end examples
npm run test:e2e

# Debug a test
npm run test:debug
```

To run one file directly:

```bash
npx playwright test tests/11_JS_Alerts/243_JS_Alerts.spec.ts
```

## Reports

After a run, open the Playwright HTML report with:

```bash
npm run test:report
```

The configuration uses the HTML reporter and `utils/CustomTTAReporter.ts`. Test artifacts are collected for every test: trace, video, and screenshot.

Allure packages and example tests are included. To generate Allure results, uncomment the `allure-playwright` reporter entry in `playwright.config.ts`, run the tests, then generate the report with your preferred Allure command.

## Project layout

```text
.
├── e2e/                         # Basic end-to-end examples
├── tests/                       # Topic-based examples and project suites
│   ├── 01_Basics/
│   ├── 03_Locators_Commands/
│   ├── 05_Allure_Reporting/
│   ├── 17_Expect_Assertions/
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_TTACartProject/       # TTA Cart page objects and E2E tests
│   └── Projects/                 # Larger practice projects
├── utils/                        # Custom reporters and shared utilities
├── .github/workflows/            # GitHub Actions CI workflow
├── playwright.config.ts          # Playwright configuration
└── package.json                  # Scripts and dependencies
```

## Configuration

`playwright.config.ts` currently defines Chromium and Firefox projects. Tests run headed by default, with trace, video, and screenshots enabled. In CI, Playwright retries failed tests twice and runs with one worker.

The configuration loads a local `.env` file, so it is ready to support environment-specific settings. When wiring a test or `use.baseURL` to the supplied helper, the available variables are `BASE_URL`, `TTA_ENV`, `QA_BASE_URL`, `DEV_BASE_URL`, `STG_BASE_URL`, `PROD_BASE_URL`, and `API_BASE_URL`.

## Continuous integration

GitHub Actions runs the Playwright suite on pushes and pull requests to `main` and `master`. It installs dependencies and Playwright browsers, then publishes the HTML report as a workflow artifact.

## Useful commands

```bash
npm run typecheck   # Type-check without generating files
npm run build       # Compile TypeScript
npm run clean       # Remove generated local test artifacts
```

## Contributing

1. Fork the repository.
2. Create a branch for your change.
3. Add or update tests and documentation as needed.
4. Run the relevant test command and `npm run typecheck`.
5. Open a pull request.

## License

ISC
