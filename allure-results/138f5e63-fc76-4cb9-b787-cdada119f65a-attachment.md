# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Projects\Project_4_TTA_Bank.spec.ts >> Verify that the Balance reduced on Transfer in TTA Bank
- Location: tests\Projects\Project_4_TTA_Bank.spec.ts:3:1

# Error details

```
Error: toHaveText can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - status [ref=e9]: Account created successfully!
    - generic [ref=e10]:
      - complementary [ref=e11]:
        - generic [ref=e12]:
          - img [ref=e13]
          - generic [ref=e16]: TTA Bank
        - navigation [ref=e18]:
          - button "Dashboard" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - text: Dashboard
          - button "Transfer Funds" [ref=e25] [cursor=pointer]:
            - img [ref=e26]
            - text: Transfer Funds
          - button "Expense Tracker" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
            - text: Expense Tracker
          - button "Transactions" [ref=e33] [cursor=pointer]:
            - img [ref=e34]
            - text: Transactions
          - button "AI Support" [ref=e38] [cursor=pointer]:
            - img [ref=e39]
            - text: AI Support
          - button "Settings" [ref=e41] [cursor=pointer]:
            - img [ref=e42]
            - text: Settings
        - generic [ref=e45]:
          - generic [ref=e46]:
            - img "User" [ref=e47]
            - generic [ref=e48]:
              - generic [ref=e49]: Sathish Kumar
              - generic [ref=e50]: gomlenitin@gmail.com
          - button "Sign Out" [ref=e51] [cursor=pointer]:
            - img [ref=e52]
            - text: Sign Out
      - main [ref=e55]:
        - generic [ref=e56]:
          - heading "Dashboard" [level=1] [ref=e57]
          - button [ref=e59] [cursor=pointer]:
            - img [ref=e60]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68]:
                - generic [ref=e69]:
                  - paragraph [ref=e70]: Total Balance
                  - heading "$50,000.00" [level=3] [ref=e71]
                - img [ref=e73]
              - generic [ref=e76]:
                - generic [ref=e77]:
                  - img [ref=e78]
                  - text: +2.5%
                - generic [ref=e81]: from last month
            - generic [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - paragraph [ref=e85]: Monthly Income
                  - heading "$50,000" [level=3] [ref=e86]
                - img [ref=e88]
              - paragraph [ref=e91]: Based on recent activity
            - generic [ref=e92]:
              - generic [ref=e93]:
                - generic [ref=e94]:
                  - paragraph [ref=e95]: Monthly Expenses
                  - heading "$315.48" [level=3] [ref=e96]
                - img [ref=e98]
              - paragraph [ref=e101]: Total debit transactions
          - generic [ref=e102]:
            - generic [ref=e103]:
              - heading "Balance History" [level=3] [ref=e104]
              - generic [ref=e107]:
                - generic:
                  - status:
                    - paragraph: Thu
                    - list:
                      - listitem: "balance : 48000"
                - application [ref=e108]:
                  - generic [ref=e122]:
                    - generic [ref=e123]:
                      - generic [ref=e125]: Mon
                      - generic [ref=e127]: Tue
                      - generic [ref=e129]: Wed
                      - generic [ref=e131]: Thu
                      - generic [ref=e133]: Fri
                      - generic [ref=e135]: Sat
                      - generic [ref=e137]: Sun
                    - generic [ref=e138]:
                      - generic [ref=e140]: $0k
                      - generic [ref=e142]: $15k
                      - generic [ref=e144]: $30k
                      - generic [ref=e146]: $45k
                      - generic [ref=e148]: $60k
            - generic [ref=e149]:
              - generic [ref=e150]:
                - heading "Recent Activity" [level=3] [ref=e151]
                - button "View All" [ref=e152] [cursor=pointer]
              - generic [ref=e153]:
                - generic [ref=e154]:
                  - generic [ref=e155]:
                    - img [ref=e157]
                    - generic [ref=e159]:
                      - paragraph [ref=e160]: Whole Foods Market
                      - paragraph [ref=e161]: 10/25/2023
                  - generic [ref=e162]: "-$129.99"
                - generic [ref=e163]:
                  - generic [ref=e164]:
                    - img [ref=e166]
                    - generic [ref=e169]:
                      - paragraph [ref=e170]: Opening Deposit
                      - paragraph [ref=e171]: 10/24/2023
                  - generic [ref=e172]: +$50000.00
                - generic [ref=e173]:
                  - generic [ref=e174]:
                    - img [ref=e176]
                    - generic [ref=e178]:
                      - paragraph [ref=e179]: Netflix Subscription
                      - paragraph [ref=e180]: 10/23/2023
                  - generic [ref=e181]: "-$15.99"
                - generic [ref=e182]:
                  - generic [ref=e183]:
                    - img [ref=e185]
                    - generic [ref=e187]:
                      - paragraph [ref=e188]: Uber Ride
                      - paragraph [ref=e189]: 10/22/2023
                  - generic [ref=e190]: "-$24.50"
              - button "Quick Transfer" [ref=e191] [cursor=pointer]
  - generic [ref=e192]: $0k
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify that the Balance reduced on Transfer in TTA Bank', async ({ page }) => {
  4  |     // Navigate to the URL
  5  |     await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  | 
  7  |     // Click on Sign Up Button
  8  |     await page.getByRole('button', { name: 'Sign Up' }).click();
  9  | 
  10 |     // Fill in the Sign Up Form Details and Click on Create Account Button
  11 |     await page.getByRole('textbox', { name: 'John Doe' }).fill('Sathish Kumar');
  12 |     await page.getByRole('textbox', { name: 'you@example.com' }).fill('gomlenitin@gmail.com');
  13 |     await page.getByRole('textbox', { name: '••••••••' }).fill('Nitin@4321');
  14 |     await page.getByRole('button', { name: 'Create Account' }).click();
  15 | 
  16 |     // Validate the Opening Balance is $50,000.00
  17 |     let initialBalance : any = await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
  18 |     console.log("Initial Balance:", (initialBalance));
> 19 |     await expect(initialBalance).toHaveText("$50,000.00");
     |                                  ^ Error: toHaveText can be only used with Locator object, was called with undefined
  20 | 
  21 |     // // Navigate to Transfer Funds Tab
  22 |     // await page.getByText('Transfer Funds').click();
  23 | 
  24 |     // // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234567890
  25 |     // await page.getByPlaceholder('0.00').fill('5000');
  26 |     // await page.getByPlaceholder('e.g. Rent for October').fill('Transfering $5000 to account number 1234567890');
  27 |     // await page.getByRole('button', { name: 'Continue' }).click();
  28 | 
  29 |     // // Review the Transfer Details and Click on Confirm Transfer Button
  30 |     // await page.getByRole('button', { name: 'Confirm Transfer' }).click();
  31 | 
  32 |     // // Navigate to Dashboard and Validate the Balance is reduced to $45,000.00
  33 |     // await page.getByText('Dashboard').click();
  34 |     // await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
  35 |     // await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");
  36 | 
  37 |     // // Logout from the Application
  38 |     // await page.getByRole('button', { name: 'Sign Out' }).click();
  39 | 
  40 | });
```