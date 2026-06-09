# Playwright Framework

A comprehensive test automation framework built with Playwright for end-to-end testing of web applications.

## Overview

This project provides a robust testing framework using Playwright, a modern automation library that supports all major browsers (Chromium, Firefox, WebKit) and provides powerful APIs for test automation, including features like:
- Cross-browser testing
- Screenshots and video recording
- Network request/response mocking
- Accessibility testing
- Performance testing with Allure reporting

## Requirements

- Node.js (LTS recommended - v16 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/gomlenitin/Playwright_Framework.git
cd Playwright_Framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
Playwright_Framework/
├── e2e/                              # End-to-end test examples
├── tests/                            # Main test suite directory
│   ├── 01_Alerts/                    # Alert handling tests
│   ├── 02_Browser_Context/           # Browser context tests
│   ├── 03_Locators/                  # Locator strategy tests
│   ├── 04_Assertions/                # Assertion tests
│   ├── 05_Dialog_Box/                # Dialog handling tests
│   ├── 06_Radio_CheckBox/            # Radio button and checkbox tests
│   ├── 07_DropDown/                  # Dropdown interaction tests
│   ├── 08_WebTableUI/                # Web table handling tests
│   ├── 09_Frame_Iframe/              # Frame and iframe tests
│   ├── 10_Keyboard_Hover_Drag_Drop/  # Keyboard, hover, and drag-drop tests
│   └── Projects/                     # Project-based test scenarios
├── utils/                            # Utility functions and helpers
├── playwright.config.ts              # Playwright configuration
├── playwright-report/                # HTML test reports
├── allure-results/                   # Allure report results
├── tta-report/                       # TTA (Test Tracking Analysis) reports
├── package.json                      # Project dependencies
├── tsconfig.json                     # TypeScript configuration
├── README.md                         # Project documentation
└── .vscode/                          # VS Code settings
```

## Configuration

The framework is configured in `playwright.config.ts` with the following defaults:
- Browser: Chromium
- Headless: true
- Screenshots: on failure
- Video: retain-on-failure
- Timeout: 30 seconds per test

## Usage

### Run all tests:
```bash
npm test
```

### Run specific test file:
```bash
npx playwright test tests/01_Alerts/AlertTest.spec.ts
```

### Run tests in headed mode (browser visible):
```bash
npx playwright test --headed
```

### Run tests with debugging:
```bash
npx playwright test --debug
```

### Generate test report:
```bash
npx playwright show-report
```

### Run tests with specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Categories

- **Alerts** - JavaScript alert, confirm, and prompt dialogs
- **Browser Context** - Multi-page and context management
- **Locators** - Various locator strategies (CSS, XPath, text, etc.)
- **Assertions** - UI element assertions and validations
- **Dialogs** - Dialog box handling and interactions
- **Radio & Checkboxes** - Form element interactions
- **Dropdowns** - Select element and custom dropdown tests
- **Web Tables** - Dynamic table handling and data extraction
- **Frames & Iframes** - Nested frame navigation
- **Keyboard & Hover** - Keyboard input, hover actions, drag-drop operations
- **Projects** - End-to-end project test scenarios

## Reporting

The framework generates multiple types of reports:
- **Playwright HTML Report**: View with `npx playwright show-report`
- **Allure Reports**: Located in `allure-results/` directory
- **TTA Reports**: Located in `tta-report/` directory

## Technologies Used

- **Playwright** - Cross-browser automation framework
- **TypeScript** - Type-safe JavaScript superset
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Submit a pull request

## License

ISC

## Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/gomlenitin/Playwright_Framework/issues).

---

**Last Updated**: 2026-06-09
