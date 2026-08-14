# TTACart Tests

This directory contains the TTACart end-to-end spec.

## Key File

- `ttacartE2E.spec.ts`: loads `TTACART_USERNAME` and `TTACART_PASSWORD` from `.env` (or the existing legacy `env` file), logs in through `Loginpage`, adds inventory through `TtacartinventorypageTs`, completes checkout details through `TtacartcheckoutpageTs`, and asserts the cart and checkout-step-two URLs.

## Run

From the repository root:

```bash
npx playwright test tests/21_TTACartProject/tests/ttacartE2E.spec.ts
```

Run with a visible browser:

```bash
npx playwright test tests/21_TTACartProject/tests/ttacartE2E.spec.ts --headed
