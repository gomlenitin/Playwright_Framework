# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\06_Multiple_Element\231_IQ_Multiple_Elements.spec.ts >> Multiple Elements Tests >> Basic Test - Verify page title
- Location: tests\06_Multiple_Element\231_IQ_Multiple_Elements.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#customers tbody tr').filter({ hasText: 'Helen Bennett' }).locator('td').nth(2)

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - 'region "Announcement: AI Tester Blueprint new batch" [ref=e2]':
    - generic [ref=e3]: LIVE
    - generic [ref=e5]: AI Tester Blueprint
    - generic [ref=e6]: New batch
    - generic [ref=e7]: "|"
    - generic [ref=e8]: 23 May 2026 · 11:00 AM IST
    - generic [ref=e9]: "|"
    - generic [ref=e10]:
      - text: ₹35,000₹9,999
      - emphasis [ref=e11]: 33% OFF
    - generic [ref=e12]:
      - text: Code
      - code [ref=e13]: AITESTER
    - link "Join" [ref=e14] [cursor=pointer]:
      - /url: https://bit.ly/aitester2026
    - link "Chat on WhatsApp" [ref=e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=e16] [cursor=pointer]: ×
  - generic [ref=e17]:
    - complementary "Practice navigation" [ref=e18]:
      - generic [ref=e19]:
        - link "T The Testing Academy" [ref=e20] [cursor=pointer]:
          - /url: ./index.html
          - generic [ref=e21]: T
          - strong [ref=e23]: The Testing Academy
        - button "Toggle sidebar" [ref=e24] [cursor=pointer]:
          - img [ref=e25]
      - generic [ref=e28]:
        - img [ref=e29]
        - searchbox / [ref=e32]
        - generic [ref=e33]: /
      - navigation [ref=e34]:
        - generic [ref=e35]:
          - button "Get started" [expanded] [ref=e36] [cursor=pointer]:
            - img [ref=e37]
            - generic [ref=e39]: Get started
            - img [ref=e40]
          - list [ref=e42]:
            - listitem [ref=e43]:
              - link "Overview" [ref=e44] [cursor=pointer]:
                - /url: ./index.html
                - img [ref=e46]
                - generic [ref=e49]: Overview
        - generic [ref=e50]:
          - button "Tools" [expanded] [ref=e51] [cursor=pointer]:
            - img [ref=e52]
            - generic [ref=e54]: Tools
            - img [ref=e55]
          - list [ref=e57]:
            - listitem [ref=e58]:
              - link "SnapLocator (Chrome ext)" [ref=e59] [cursor=pointer]:
                - /url: ./snaplocator.html
                - img [ref=e61]
                - generic [ref=e64]: SnapLocator (Chrome ext)
        - generic [ref=e65]:
          - button "Selectors & Locators" [expanded] [ref=e66] [cursor=pointer]:
            - img [ref=e67]
            - generic [ref=e69]: Selectors & Locators
            - img [ref=e70]
          - list [ref=e72]:
            - listitem [ref=e73]:
              - link "Multiple Element Filter" [ref=e74] [cursor=pointer]:
                - /url: ./multiple_element_filter.html
                - img [ref=e76]
                - generic [ref=e79]: Multiple Element Filter
            - listitem [ref=e80]:
              - link "Web Table Directory" [ref=e81] [cursor=pointer]:
                - /url: ./webtable.html
                - img [ref=e83]
                - generic [ref=e88]: Web Table Directory
        - generic [ref=e89]:
          - button "Tables & Forms" [expanded] [ref=e90] [cursor=pointer]:
            - img [ref=e91]
            - generic [ref=e94]: Tables & Forms
            - img [ref=e95]
          - list [ref=e97]:
            - listitem [ref=e98]:
              - link "QA Profile Form" [ref=e99] [cursor=pointer]:
                - /url: ./tables/practice.html
                - img [ref=e101]
                - generic [ref=e104]: QA Profile Form
            - listitem [ref=e105]:
              - link "Companies Table" [ref=e106] [cursor=pointer]:
                - /url: ./tables/webtable.html
                - img [ref=e108]
                - generic [ref=e111]: Companies Table
            - listitem [ref=e112]:
              - link "Tall Buildings Table" [ref=e113] [cursor=pointer]:
                - /url: ./tables/webtable1.html
                - img [ref=e115]
                - generic [ref=e117]: Tall Buildings Table
            - listitem [ref=e118]:
              - link "Custom Dropdowns" [ref=e119] [cursor=pointer]:
                - /url: ./tables/dropdowns.html
                - img [ref=e121]
                - generic [ref=e124]: Custom Dropdowns
            - listitem [ref=e125]:
              - link "Select Box Variants" [ref=e126] [cursor=pointer]:
                - /url: ./tables/select-boxes.html
                - img [ref=e128]
                - generic [ref=e131]: Select Box Variants
            - listitem [ref=e132]:
              - link "Sortable Admin Table" [ref=e133] [cursor=pointer]:
                - /url: ./tables/sortable.html
                - img [ref=e135]
                - generic [ref=e139]: Sortable Admin Table
            - listitem [ref=e140]:
              - link "Cricket Scorecard" [ref=e141] [cursor=pointer]:
                - /url: ./tables/scorecard.html
                - img [ref=e143]
                - generic [ref=e146]: Cricket Scorecard
        - generic [ref=e147]:
          - button "Frames" [expanded] [ref=e148] [cursor=pointer]:
            - img [ref=e149]
            - generic [ref=e154]: Frames
            - img [ref=e155]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Frames overview" [ref=e159] [cursor=pointer]:
                - /url: ./frames/index.html
                - img [ref=e161]
                - generic [ref=e163]: Frames overview
            - listitem [ref=e164]:
              - link "Multi-frame frameset" [ref=e165] [cursor=pointer]:
                - /url: ./frames/multi-frames.html
                - img [ref=e167]
                - generic [ref=e172]: Multi-frame frameset
            - listitem [ref=e173]:
              - link "Nested iframes" [ref=e174] [cursor=pointer]:
                - /url: ./frames/nested-iframes.html
                - img [ref=e176]
                - generic [ref=e180]: Nested iframes
            - listitem [ref=e181]:
              - link "Courses frameset" [ref=e182] [cursor=pointer]:
                - /url: ./frames/courses-frameset.html
                - img [ref=e184]
                - generic [ref=e186]: Courses frameset
        - generic [ref=e187]:
          - button "Widgets" [expanded] [ref=e188] [cursor=pointer]:
            - img [ref=e189]
            - generic [ref=e192]: Widgets
            - img [ref=e193]
          - list [ref=e195]:
            - listitem [ref=e196]:
              - link "SVG locators" [ref=e197] [cursor=pointer]:
                - /url: ./widgets/svg.html
                - img [ref=e199]
                - generic [ref=e203]: SVG locators
            - listitem [ref=e204]:
              - link "Shadow DOM" [ref=e205] [cursor=pointer]:
                - /url: ./widgets/shadow-dom.html
                - img [ref=e207]
                - generic [ref=e209]: Shadow DOM
            - listitem [ref=e210]:
              - link "Calendar / date picker" [ref=e211] [cursor=pointer]:
                - /url: ./widgets/calendar.html
                - img [ref=e213]
                - generic [ref=e215]: Calendar / date picker
            - listitem [ref=e216]:
              - link "Drag & drop Kanban" [ref=e217] [cursor=pointer]:
                - /url: ./widgets/dnd.html
                - img [ref=e219]
                - generic [ref=e226]: Drag & drop Kanban
            - listitem [ref=e227]:
              - link "Toasts & notifications" [ref=e228] [cursor=pointer]:
                - /url: ./widgets/toasts.html
                - img [ref=e230]
                - generic [ref=e233]: Toasts & notifications
            - listitem [ref=e234]:
              - link "Native dialogs" [ref=e235] [cursor=pointer]:
                - /url: ./widgets/dialogs.html
                - img [ref=e237]
                - generic [ref=e239]: Native dialogs
            - listitem [ref=e240]:
              - link "Hover menus" [ref=e241] [cursor=pointer]:
                - /url: ./widgets/hover-menu.html
                - img [ref=e243]
                - generic [ref=e245]: Hover menus
            - listitem [ref=e246]:
              - link "Right-click menu" [ref=e247] [cursor=pointer]:
                - /url: ./widgets/context-menu.html
                - img [ref=e249]
                - generic [ref=e251]: Right-click menu
            - listitem [ref=e252]:
              - link "Keyboard navigation" [ref=e253] [cursor=pointer]:
                - /url: ./widgets/keyboard-form.html
                - img [ref=e255]
                - generic [ref=e258]: Keyboard navigation
            - listitem [ref=e259]:
              - link "Windows & Tabs" [ref=e260] [cursor=pointer]:
                - /url: ./widgets/windows-tabs.html
                - img [ref=e262]
                - generic [ref=e264]: Windows & Tabs
            - listitem [ref=e265]:
              - link "Upload & Download" [ref=e266] [cursor=pointer]:
                - /url: ./widgets/upload-download.html
                - img [ref=e268]
                - generic [ref=e271]: Upload & Download
            - listitem [ref=e272]:
              - link "Scroll" [ref=e273] [cursor=pointer]:
                - /url: ./widgets/scroll.html
                - img [ref=e275]
                - generic [ref=e278]: Scroll
            - listitem [ref=e279]:
              - link "Assertions (expect)" [ref=e280] [cursor=pointer]:
                - /url: ./widgets/expect.html
                - img [ref=e282]
                - generic [ref=e284]: Assertions (expect)
            - listitem [ref=e285]:
              - link "Test modifiers · hooks · data" [ref=e286] [cursor=pointer]:
                - /url: ./widgets/test-modifiers.html
                - img [ref=e288]
                - generic [ref=e293]: Test modifiers · hooks · data
            - listitem [ref=e294]:
              - link "Data-driven + POM" [ref=e295] [cursor=pointer]:
                - /url: ./widgets/data-driven.html
                - img [ref=e297]
                - generic [ref=e301]: Data-driven + POM
            - listitem [ref=e302]:
              - link "JavaScript notes" [ref=e303] [cursor=pointer]:
                - /url: ./notes.html
                - generic [ref=e305]: JavaScript notes
        - generic [ref=e306]:
          - button "Network" [expanded] [ref=e307] [cursor=pointer]:
            - img [ref=e308]
            - generic [ref=e311]: Network
            - img [ref=e312]
          - list [ref=e314]:
            - listitem [ref=e315]:
              - link "Network interception" [ref=e316] [cursor=pointer]:
                - /url: ./network/intercept.html
                - img [ref=e318]
                - generic [ref=e320]: Network interception
        - generic [ref=e321]:
          - button "Coming next" [expanded] [ref=e322] [cursor=pointer]:
            - img [ref=e323]
            - generic [ref=e325]: Coming next
            - img [ref=e326]
          - list
        - generic [ref=e328]:
          - button "Projects" [expanded] [ref=e329] [cursor=pointer]:
            - img [ref=e330]
            - generic [ref=e332]: Projects
            - img [ref=e333]
          - list [ref=e335]:
            - listitem [ref=e336]:
              - link "TTACart demo" [ref=e337] [cursor=pointer]:
                - /url: ./ttacart/index.html
                - img [ref=e339]
                - generic [ref=e343]: TTACart demo
            - listitem [ref=e344]:
              - link "TTAStays booking" [ref=e345] [cursor=pointer]:
                - /url: ./booking/index.html
                - img [ref=e347]
                - generic [ref=e350]: TTAStays booking
            - listitem [ref=e351]:
              - link "TTA AI Chat" [ref=e352] [cursor=pointer]:
                - /url: ./ai-chat/index.html
                - img [ref=e354]
                - generic [ref=e359]: TTA AI Chat
        - generic [ref=e360]:
          - button "Frameworks" [expanded] [ref=e361] [cursor=pointer]:
            - img [ref=e362]
            - generic [ref=e365]: Frameworks
            - img [ref=e366]
          - list [ref=e368]:
            - listitem [ref=e369]:
              - link "Framework" [ref=e370] [cursor=pointer]:
                - /url: ./advance-framework.html
                - img [ref=e372]
                - generic [ref=e375]: Framework
            - listitem [ref=e376]:
              - link "Framework + AI" [ref=e377] [cursor=pointer]:
                - /url: ./advance-framework-ai.html
                - img [ref=e379]
                - generic [ref=e384]: Framework + AI
      - generic [ref=e385]:
        - generic [ref=e386]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=e387] [cursor=pointer]:
          - img [ref=e388]
    - generic [ref=e390]:
      - banner [ref=e391]:
        - button "Open sidebar" [ref=e392] [cursor=pointer]:
          - img [ref=e393]
        - generic [ref=e395]:
          - link "Practice" [ref=e396] [cursor=pointer]:
            - /url: ./index.html
          - img [ref=e397]
          - strong [ref=e399]: Multiple Element Filter
        - generic [ref=e400]:
          - generic [ref=e401]: Practice
          - button "Toggle dark mode" [ref=e402] [cursor=pointer]:
            - img [ref=e403]
            - img [ref=e405]
      - main [ref=e408]:
        - region "Master multiple element filters on a real login UI" [ref=e409]:
          - generic [ref=e410]:
            - generic [ref=e411]: Locator practice · Login UI
            - heading "Master multiple element filters on a real login UI" [level=1] [ref=e413]:
              - text: Master
              - emphasis [ref=e414]: multiple element filters
              - text: on a real login UI
            - paragraph [ref=e415]:
              - text: This dummy login page is built for practising
              - strong [ref=e416]: allInnerTexts()
              - text: ","
              - strong [ref=e417]: locator.all()
              - text: ","
              - strong [ref=e418]: "filter({ hasText })"
              - text: ", and clicking a specific link from many similar links. Your target for the class exercise is the"
              - strong [ref=e419]: Forgotten Password
              - text: link in the account panel.
            - generic [ref=e420]:
              - generic [ref=e421]:
                - strong [ref=e422]: "13"
                - generic [ref=e423]:
                  - code [ref=e424]: a.list-group-item
                  - text: account links
              - generic [ref=e425]:
                - strong [ref=e426]: "16"
                - generic [ref=e427]:
                  - code [ref=e428]: footer a
                  - text: footer links
              - generic [ref=e429]:
                - strong [ref=e430]: "1"
                - generic [ref=e431]:
                  - text: Exact
                  - code [ref=e432]: Forgotten Password
                  - text: target
            - group [ref=e433]:
              - generic "Playwright solution Try the practice on the right first — reveal the snippet only when you need a hint. Show solution" [ref=e434] [cursor=pointer]:
                - img [ref=e436]
                - generic [ref=e438]:
                  - strong [ref=e439]: Playwright solution
                  - generic [ref=e440]: Try the practice on the right first — reveal the snippet only when you need a hint.
                - generic [ref=e441]: Show solution
          - complementary [ref=e442]:
            - region "Student Login" [ref=e443]:
              - generic [ref=e444]:
                - generic [ref=e445]:
                  - heading "Student Login" [level=2] [ref=e446]
                  - paragraph [ref=e447]: Practice page for Playwright selectors
                - generic [ref=e448]: Secure Practice
              - generic [ref=e449]:
                - generic [ref=e450]:
                  - generic [ref=e451]: Email Address
                  - textbox "Email Address" [ref=e452]:
                    - /placeholder: student@thetestingacademy.com
                - generic [ref=e453]:
                  - generic [ref=e454]: Password
                  - textbox "Password" [ref=e455]:
                    - /placeholder: Enter your password
                - generic [ref=e456]:
                  - generic [ref=e457]:
                    - checkbox "Remember me" [ref=e458]
                    - text: Remember me
                  - link "Forget password?" [ref=e459] [cursor=pointer]:
                    - /url: "#forgotten-password"
                - button "Login to Practice Account" [ref=e460] [cursor=pointer]
              - generic "Social login links" [ref=e461]:
                - link "Continue with GitHub" [ref=e462] [cursor=pointer]:
                  - /url: "#github-login"
                - link "Continue with Google" [ref=e463] [cursor=pointer]:
                  - /url: "#google-login"
            - region "Account navigation" [ref=e464]:
              - heading "Account navigation" [level=3] [ref=e465]
              - generic [ref=e466]:
                - link "Login ›" [ref=e467] [cursor=pointer]:
                  - /url: "#login"
                - link "Register ›" [ref=e468] [cursor=pointer]:
                  - /url: "#register"
                - link "Forgotten Password ›" [ref=e469] [cursor=pointer]:
                  - /url: "#forgotten-password"
                - link "My Account ›" [active] [ref=e470] [cursor=pointer]:
                  - /url: "#my-account"
                - link "Address Book ›" [ref=e471] [cursor=pointer]:
                  - /url: "#address-book"
                - link "Wish List ›" [ref=e472] [cursor=pointer]:
                  - /url: "#wish-list"
                - link "Order History ›" [ref=e473] [cursor=pointer]:
                  - /url: "#order-history"
                - link "Downloads ›" [ref=e474] [cursor=pointer]:
                  - /url: "#downloads"
                - link "Recurring Payments ›" [ref=e475] [cursor=pointer]:
                  - /url: "#recurring-payments"
                - link "Reward Points ›" [ref=e476] [cursor=pointer]:
                  - /url: "#reward-points"
                - link "Returns ›" [ref=e477] [cursor=pointer]:
                  - /url: "#returns"
                - link "Transactions ›" [ref=e478] [cursor=pointer]:
                  - /url: "#transactions"
                - link "Newsletter ›" [ref=e479] [cursor=pointer]:
                  - /url: "#newsletter"
        - region "Teaching cards" [ref=e480]:
          - article [ref=e481]:
            - heading "Use case 1 — collect text" [level=3] [ref=e482]
            - paragraph [ref=e483]: Capture all right-panel link texts and assert the count before clicking the target link.
            - code [ref=e484]: page.locator('a.list-group-item').allInnerTexts()
          - article [ref=e485]:
            - heading "Use case 2 — filter one link" [level=3] [ref=e486]
            - paragraph [ref=e487]: Filter from many account links and click the one that has exact visible text.
            - code [ref=e488]: "filter({ hasText: 'Forgotten Password' })"
          - article [ref=e489]:
            - heading "Use case 3 — footer links" [level=3] [ref=e490]
            - paragraph [ref=e491]: Collect every footer anchor, print its text and href, then validate important legal links.
            - code [ref=e492]: page.locator('footer a').all()
        - generic [ref=e493]:
          - generic [ref=e494]:
            - heading "The Testing Academy" [level=3] [ref=e495]
            - paragraph [ref=e496]:
              - text: A public practice page from
              - strong [ref=e497]: The Testing Academy
              - text: for learning multiple element filtering, link collection, footer-link traversal, and targeted clicks.
          - generic [ref=e498]:
            - heading "Information" [level=4] [ref=e499]
            - link "About Us" [ref=e500] [cursor=pointer]:
              - /url: "#about-us"
            - link "Delivery Information" [ref=e501] [cursor=pointer]:
              - /url: "#delivery-information"
            - link "Privacy Policy" [ref=e502] [cursor=pointer]:
              - /url: "#privacy-policy"
            - link "Terms & Conditions" [ref=e503] [cursor=pointer]:
              - /url: "#terms-conditions"
          - generic [ref=e504]:
            - heading "Customer Service" [level=4] [ref=e505]
            - link "Contact Us" [ref=e506] [cursor=pointer]:
              - /url: "#contact-us"
            - link "Returns" [ref=e507] [cursor=pointer]:
              - /url: "#returns-footer"
            - link "Site Map" [ref=e508] [cursor=pointer]:
              - /url: "#site-map"
            - link "Brands" [ref=e509] [cursor=pointer]:
              - /url: "#brands"
          - generic [ref=e510]:
            - heading "Extras" [level=4] [ref=e511]
            - link "Gift Certificates" [ref=e512] [cursor=pointer]:
              - /url: "#gift-certificates"
            - link "Affiliate" [ref=e513] [cursor=pointer]:
              - /url: "#affiliate"
            - link "Specials" [ref=e514] [cursor=pointer]:
              - /url: "#specials"
            - link "Support Center" [ref=e515] [cursor=pointer]:
              - /url: "#support-center"
          - generic [ref=e516]:
            - heading "My Account" [level=4] [ref=e517]
            - link "My Account" [ref=e518] [cursor=pointer]:
              - /url: "#footer-my-account"
            - link "Order History" [ref=e519] [cursor=pointer]:
              - /url: "#footer-order-history"
            - link "Wish List" [ref=e520] [cursor=pointer]:
              - /url: "#footer-wish-list"
            - link "Newsletter" [ref=e521] [cursor=pointer]:
              - /url: "#footer-newsletter"
  - status: Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Multiple Elements Tests', () => {
  4  |     test('Basic Test - Verify page title', async ({ page }) => {
  5  |         // Navigate to a sample page
  6  |         await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  7  | 
  8  |         // allInnerTexts() - Get the inner text of all elements matching the selector
  9  |         const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
  10 |         console.log(`rightPanelLinksTexts: ${rightPanelLinksTexts.length}`); // Print the count of links
  11 | 
  12 |         // Click on the link with text 'My Account'
  13 |         for (const linktext of rightPanelLinksTexts) {
  14 |             if (linktext === 'My Account') {
  15 |                 await page.getByText(linktext).first().click();
  16 |                 break;
  17 |             }
  18 |         }
  19 | 
  20 |         // all - Get all elements matching the selector
  21 |         const rightPanelLinks: any[] = await page.locator('a.list-group-item').all();
  22 |         console.log(`rightPanelLinks: ${rightPanelLinks.length}`);
  23 | 
  24 |         // Get the href attribute of each link and print it
  25 |         for (const link of rightPanelLinks) {
  26 |             console.log(await link.getAttribute('href'));
  27 |         }
  28 | 
  29 | 
  30 |         // Playwright Native Locators is very much recommended. 
  31 | 
  32 |         const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
> 33 |         const country1 = await row1.locator('td').nth(2).innerText();
     |                                                          ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  34 |         console.log(`Helen Bennett is In - ${country1}`);
  35 | 
  36 |     });
  37 | 
  38 | });
  39 | 
```