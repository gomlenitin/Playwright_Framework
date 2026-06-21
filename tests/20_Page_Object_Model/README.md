# Page Object Model (POM) in Playwright

This folder demonstrates the implementation of the Page Object Model (POM) design pattern in Playwright. The Page Object Model is used to create an abstraction layer between the test scripts and the UI, making tests more maintainable, reusable, and readable.

## Contents

- **`LoginPage.ts`**: The Page Object class for the login page. It encapsulates the locators and common actions (like navigating to the page and performing login) to avoid duplication in test scripts.
- **`270_WithOut_POM.spec.ts`**: A sample test demonstrating how a test is written *without* POM. Locators and actions are defined directly within the test, which can lead to duplication and maintenance challenges as the project grows.
- **`271_Login_With_POM.spec.ts`**: A sample test demonstrating how to use the `LoginPage` POM class. This approach results in cleaner, more concise test code and separates the "what to test" (test logic) from the "how to interact" (page implementation).

## Benefits of POM Demonstrated Here

1. **Reusability**: The `LoginPage` class can be reused across multiple test files.
2. **Maintainability**: If a locator on the login page changes, it only needs to be updated in one place (`LoginPage.ts`) instead of in every single test that interacts with that page.
3. **Readability**: Tests become more declarative, focusing on the business flow rather than technical locator details.
