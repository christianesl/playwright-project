# playwright-project

Playwright practice project, set up with TypeScript. It uses a page-object structure with reusable pages and utilities, so new tests can build on a shared base instead of starting from scratch each time.

## Stack

- Playwright (`@playwright/test` ^1.20.0)
- TypeScript (^4.5.0)
- Node.js / npm

## Project structure

The actual project lives in the `playwright-project/` folder at the root of this repository:

```
playwright-project/
├── tests/
│   ├── example.spec.ts        # Example test suite
│   └── fixtures/
│       └── index.ts           # Fixture functions for test setup
├── src/
│   ├── pages/
│   │   └── basePage.ts        # Base class for page objects
│   └── utils/
│       └── helpers.ts         # Utility functions, e.g. data formatting
├── playwright.config.ts       # Playwright configuration
├── package.json               # npm configuration and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Documentation for the inner project
```

## Configuration

`playwright.config.ts` sets:

- `testDir: './tests'`
- Test timeout: 30 seconds, expect timeout: 5 seconds
- HTML reporter
- Trace on first retry
- Desktop Chrome as the default browser project

## Setup

```bash
cd playwright-project
npm install
```

## Running the tests

```bash
npx playwright test
```

The `package.json` scripts are:

- `npm test` — runs `playwright test`
- `npm run build` — runs `tsc`

## Adding a test

1. Add a new `.spec.ts` file under `tests/`.
2. Reuse the `BasePage` class in `src/pages/basePage.ts` for common page interactions.
3. Reuse the utility functions in `src/utils/helpers.ts` where they fit.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
