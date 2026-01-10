# Playwright Project

This is a Playwright project set up using TypeScript. It includes a structured approach to testing web applications with reusable components and utilities.

## Project Structure

```
playwright-project
├── tests
│   ├── example.spec.ts        # Test suite for Playwright
│   └── fixtures
│       └── index.ts          # Fixture functions for test setup
├── src
│   ├── pages
│   │   └── basePage.ts       # Base class for page objects
│   └── utils
│       └── helpers.ts        # Utility functions for various tasks
├── playwright.config.ts       # Configuration for Playwright
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd playwright-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   ```
   npx playwright test
   ```

## Usage Examples

- To create a new test, add a new `.spec.ts` file in the `tests` directory.
- Utilize the `BasePage` class in `src/pages/basePage.ts` for common page interactions.
- Use the utility functions in `src/utils/helpers.ts` for tasks like data formatting.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.