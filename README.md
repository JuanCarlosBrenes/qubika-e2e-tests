# Qubika Sports Club Management - End-to-End Testing Framework

This project provides a robust end-to-end (E2E) automation testing framework built with **Playwright** and **TypeScript**. 

---

## Technologies

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [uuid](https://www.npmjs.com/package/uuid) – to generate unique test data

---

## Project Structure

project-root/
│
├── tests/ # Test suites
│ └── e2e-qubika.spec.ts # Main E2E test combining API + UI
│
├── pages/ # Page Object Models (UI layer)
│ ├── loginPage.ts
│ ├── dashboardPage.ts
│ └── categoriesPage.ts
│
├── utils/ # Utility functions (e.g. random email, data generators)
│ └── generateUser.ts
│
├── playwright.config.ts # Playwright configuration file
├── README.md # Project documentation
└── package.json # NPM dependencies and scripts


## Design Pattern

This framework follows the **Page Object Model (POM)** and **API abstraction layers** to promote:

- Reusability of selectors and functions
- Clear separation of concerns
- Easy maintenance and scalability
- Clean test scripts with logic abstracted into components


## How to Run the Tests
Run in a Specific Browser

## Chromium
npx playwright test --project=chromium

## Firefox
npx playwright test --project=firefox

## WebKit (Safari)
npx playwright test --project=webkit

## Run in all browsers
npx playwright test

## Run in headed mode (UI visible)
npx playwright test --headed

## Generate report
npx playwright test --reporter=html

## Run with report output
npx playwright test --reporter=html