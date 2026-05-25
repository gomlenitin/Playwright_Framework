# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Projects\Project_4_TTA_Bank.spec.ts >> Transfer money and verify the final balance in TTA bank application
- Location: tests\Projects\Project_4_TTA_Bank.spec.ts:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: NaN
Received: "45000.00"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [active] [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: Nitin
            - generic [ref=e44]: Nitin1234@test.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Dashboard" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - paragraph [ref=e64]: Total Balance
                - heading "$45,000.00" [level=3] [ref=e65]
              - img [ref=e67]
            - generic [ref=e70]:
              - generic [ref=e71]:
                - img [ref=e72]
                - text: +2.5%
              - generic [ref=e75]: from last month
          - generic [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: Monthly Income
                - heading "$50,000" [level=3] [ref=e80]
              - img [ref=e82]
            - paragraph [ref=e85]: Based on recent activity
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - paragraph [ref=e89]: Monthly Expenses
                - heading "$5,315.48" [level=3] [ref=e90]
              - img [ref=e92]
            - paragraph [ref=e95]: Total debit transactions
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Balance History" [level=3] [ref=e98]
            - application [ref=e102]:
              - generic [ref=e111]:
                - generic [ref=e112]:
                  - generic [ref=e114]: Mon
                  - generic [ref=e116]: Tue
                  - generic [ref=e118]: Wed
                  - generic [ref=e120]: Thu
                  - generic [ref=e122]: Fri
                  - generic [ref=e124]: Sat
                  - generic [ref=e126]: Sun
                - generic [ref=e127]:
                  - generic [ref=e129]: $0k
                  - generic [ref=e131]: $15k
                  - generic [ref=e133]: $30k
                  - generic [ref=e135]: $45k
                  - generic [ref=e137]: $60k
          - generic [ref=e138]:
            - generic [ref=e139]:
              - heading "Recent Activity" [level=3] [ref=e140]
              - button "View All" [ref=e141] [cursor=pointer]
            - generic [ref=e142]:
              - generic [ref=e143]:
                - generic [ref=e144]:
                  - img [ref=e146]
                  - generic [ref=e148]:
                    - paragraph [ref=e149]: Transfer to Sarah Smith
                    - paragraph [ref=e150]: 5/24/2026
                - generic [ref=e151]: "-$5000.00"
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - img [ref=e155]
                  - generic [ref=e157]:
                    - paragraph [ref=e158]: Whole Foods Market
                    - paragraph [ref=e159]: 10/25/2023
                - generic [ref=e160]: "-$129.99"
              - generic [ref=e161]:
                - generic [ref=e162]:
                  - img [ref=e164]
                  - generic [ref=e167]:
                    - paragraph [ref=e168]: Opening Deposit
                    - paragraph [ref=e169]: 10/24/2023
                - generic [ref=e170]: +$50000.00
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - img [ref=e174]
                  - generic [ref=e176]:
                    - paragraph [ref=e177]: Netflix Subscription
                    - paragraph [ref=e178]: 10/23/2023
                - generic [ref=e179]: "-$15.99"
            - button "Quick Transfer" [ref=e180] [cursor=pointer]
  - generic [ref=e181]: $0k
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("Transfer money and verify the final balance in TTA bank application",async({page})=>{
  4  |     await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  5  |     await page.getByText("Sign Up").click();
  6  |     await page.getByPlaceholder('John Doe').fill('Nitin');
  7  |     await page.getByPlaceholder('you@example.com').fill('Nitin1234@test.com');
  8  |     await page.getByPlaceholder('••••••••').fill('Test@1234');
  9  |     await page.getByText("Create Account").click();
  10 | 
  11 |     // Validate the Opening Balance is $50,000.00
  12 |     let initialBalance:any = await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText();
  13 |     console.log("Initial Balance:", (initialBalance));
  14 |   //  initialBalance = (initialBalance.replace(/[^0-9.]/g, ''));
  15 | 
  16 |     // Navigate to Transfer Funds Tab
  17 |     await page.getByText('Transfer Funds').click();
  18 | 
  19 |     // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234567890
  20 |     await page.getByPlaceholder('0.00').fill('5000');
  21 |     await page.getByPlaceholder('e.g. Rent for October').fill('Transfering $5000 to account number 1234567890');
  22 |     let tranferAmount:any = await page.locator('//input[@type="number"]').inputValue();
  23 |     await page.getByRole('button', { name: 'Continue' }).click();
  24 | 
  25 |     // Review the Transfer Details and Click on Confirm Transfer Button
  26 |     await page.getByRole('button', { name: 'Confirm Transfer' }).click();
  27 | 
  28 |     // Navigate to Dashboard and Validate the Balance is reduced
  29 |     await page.getByText('Dashboard').click();
  30 |     let finalBalance:any = initialBalance - tranferAmount;
  31 |     console.log("Final Balance:", finalBalance);
  32 |     await page.waitForTimeout(3000);
> 33 |     expect(((await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText()).replace(/[^0-9.]/g,''))).toBe(finalBalance);
     |                                                                                                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  34 | 
  35 |    
  36 | 
  37 | })
```