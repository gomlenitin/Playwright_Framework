# Playwright `expect` Assertions — Interview Reference

---

## 1. Value Assertions (synchronous — no `await`)

**`toBe(value)`** → Strict equality (`===`)
```ts
expect(1 + 1).toBe(2);
```

**`toEqual(value)`** → Deep equality (objects, arrays)
```ts
expect({ role: 'admin' }).toEqual({ role: 'admin' });
```

**`toStrictEqual(value)`** → Deep equality + checks types
```ts
expect({ a: 1 }).toStrictEqual({ a: 1 });
```

**`toBeCloseTo(value, digits?)`** → Approximate number (floating point)
```ts
expect(0.1 + 0.2).toBeCloseTo(0.3);
```

**`toBeDefined()`** → Value is NOT `undefined`
```ts
expect(name).toBeDefined();
```

**`toBeUndefined()`** → Value IS `undefined`
```ts
expect(name).toBeUndefined();
```

**`toBeNull()`** → Value IS `null`
```ts
expect(x).toBeNull();
```

**`toBeNaN()`** → Value IS `NaN`
```ts
expect(NaN).toBeNaN();
```

**`toBeTruthy()`** → Value is truthy
```ts
expect('hello').toBeTruthy();
```

**`toBeFalsy()`** → Value is falsy
```ts
expect(0).toBeFalsy();
```

**`toBeGreaterThan(n)`** → Number > n
```ts
expect(10).toBeGreaterThan(5);
```

**`toBeGreaterThanOrEqual(n)`** → Number >= n
```ts
expect(5).toBeGreaterThanOrEqual(5);
```

**`toBeLessThan(n)`** → Number < n
```ts
expect(3).toBeLessThan(5);
```

**`toBeLessThanOrEqual(n)`** → Number <= n
```ts
expect(5).toBeLessThanOrEqual(5);
```

**`toBeInstanceOf(Class)`** → Instance of a class
```ts
expect(new Date()).toBeInstanceOf(Date);
```

**`toContain(item)`** → Array/string contains item
```ts
expect([1, 2, 3]).toContain(2);
expect('hello').toContain('ell');
```

**`toContainEqual(item)`** → Array contains a similar object
```ts
expect([{ a: 1 }]).toContainEqual({ a: 1 });
```

**`toHaveLength(n)`** → Array or string has length n
```ts
expect('abc').toHaveLength(3);
```

**`toHaveProperty(key, value?)`** → Object has a property
```ts
expect({ a: 1 }).toHaveProperty('a');
```

**`toMatch(regexp)`** → String matches regex
```ts
expect('hello@test.com').toMatch(/@test\.com$/);
```

**`toMatchObject(obj)`** → Object contains subset of properties
```ts
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
```

**`toThrow(error?)`** → Function call throws error
```ts
expect(() => { throw new Error('fail'); }).toThrow('fail');
```

---

## 2. Locator Assertions (async — with `await`)

**`toBeAttached()`** → Element is present in the DOM
```ts
await expect(btn).toBeAttached();
```

**`toBeChecked()`** → Checkbox/radio is checked
```ts
await expect(checkbox).toBeChecked();
```

**`toBeDisabled()`** → Element is disabled
```ts
await expect(btn).toBeDisabled();
```

**`toBeEditable()`** → Input/textarea is editable
```ts
await expect(input).toBeEditable();
```

**`toBeEmpty()`** → Container has no child elements or text
```ts
await expect(div).toBeEmpty();
```

**`toBeEnabled()`** → Element is enabled
```ts
await expect(btn).toBeEnabled();
```

**`toBeFocused()`** → Element currently has focus
```ts
await expect(input).toBeFocused();
```

**`toBeHidden()`** → Element is hidden in DOM
```ts
await expect(modal).toBeHidden();
```

**`toBeInViewport()`** → Element is visible within viewport
```ts
await expect(el).toBeInViewport();
```

**`toBeVisible()`** → Element is visible on page
```ts
await expect(heading).toBeVisible();
```

**`toContainText(text)`** → Element contains partial text
```ts
await expect(el).toContainText('Welcome');
```

**`toHaveAccessibleDescription(val)`** → Accessible description matches
```ts
await expect(el).toHaveAccessibleDescription('Close dialog');
```

**`toHaveAccessibleName(val)`** → Accessible name matches
```ts
await expect(el).toHaveAccessibleName('Submit button');
```

**`toHaveAttribute(name, value?)`** → DOM attribute matches
```ts
await expect(input).toHaveAttribute('placeholder', 'Enter email');
```

**`toHaveClass(cls)`** → Element has exact CSS class
```ts
await expect(el).toHaveClass('active');
```

**`toHaveCSS(prop, val)`** → CSS property matches
```ts
await expect(el).toHaveCSS('color', 'rgb(255, 0, 0)');
```

**`toHaveCount(n)`** → List locator has exact number of elements
```ts
await expect(items).toHaveCount(5);
```

**`toHaveId(id)`** → Element has matching `id` attribute
```ts
await expect(el).toHaveId('main-header');
```

**`toHaveJSProperty(key, val)`** → JavaScript property matches
```ts
await expect(el).toHaveJSProperty('scrollTop', 0);
```

**`toHaveRole(role)`** → ARIA role matches
```ts
await expect(el).toHaveRole('button');
```

**`toHaveText(text)`** → Element matches exact text
```ts
await expect(el).toHaveText('Submit');
```

**`toHaveValue(val)`** → Input element has a value
```ts
await expect(input).toHaveValue('user@test.com');
```

**`toHaveValues(vals)`** → Select has multiple options selected
```ts
await expect(select).toHaveValues(['a', 'b']);
```

**`toMatchAriaSnapshot(snapshot)`** → Element matches Aria snapshot
```ts
await expect(el).toMatchAriaSnapshot(`- button "Submit"`);
```

---

## 3. Page Assertions (async — with `await`)

**`toHaveScreenshot(name?)`** → Page screenshot matches stored snapshot
```ts
await expect(page).toHaveScreenshot();
```

**`toHaveTitle(title)`** → Page title matches (string or regex)
```ts
await expect(page).toHaveTitle(/Dashboard/);
```

**`toHaveURL(url)`** → Page URL matches (string or regex)
```ts
await expect(page).toHaveURL('/login');
```

**`toMatchAriaSnapshot()`** → Page matches accessibility snapshot
```ts
await expect(page).toMatchAriaSnapshot();
```

---

## 4. Response Assertion (async — with `await`)

**`toBeOK()`** → API response status is 2xx
```ts
await expect(response).toBeOK();
```

---

## 5. Pattern Matching Helpers (used inside `toEqual`)

**`expect.any(constructor)`** → Matches any value of a given type
```ts
expect(value).toEqual(expect.any(Number));
```

**`expect.anything()`** → Matches everything except null/undefined
```ts
expect(value).toEqual(expect.anything());
```

**`expect.arrayContaining(arr)`** → Array must contain given elements
```ts
expect(result).toEqual(expect.arrayContaining([1, 2]));
```

**`expect.arrayOf(constructor)`** → All array elements must be of a type
```ts
expect(arr).toEqual(expect.arrayOf(Number));
```

**`expect.closeTo(n, numDigits?)`** → Approximate equality (within `toEqual`)
```ts
expect(val).toEqual(expect.closeTo(0.3));
```

**`expect.objectContaining(obj)`** → Object must contain given properties
```ts
expect(val).toEqual(expect.objectContaining({ a: 1 }));
```

**`expect.stringContaining(str)`** → String must contain substring
```ts
expect(val).toEqual(expect.stringContaining('hello'));
```

**`expect.stringMatching(regexp)`** → String must match regex
```ts
expect(val).toEqual(expect.stringMatching(/^h/));
```

---

## 6. Soft Assertion

Test continues even if assertion fails (marks test as failed at the end).
```ts
await expect.soft(locator).toBeVisible();
await expect.soft(locator).toHaveText('Hello');
```

---

## 7. Negation (`.not`)

Inverts any matcher.
```ts
await expect(locator).not.toBeVisible();
await expect(locator).not.toContainText('error');
expect(value).not.toBeNull();
```

---

## 8. Custom Timeout

Override default assertion timeout (default 5000ms).
```ts
await expect(locator).toBeVisible({ timeout: 10000 });
```

---

## 9. Promise-based (`.resolves` / `.rejects`)

Assert on resolved / rejected promises.
```ts
await expect(Promise.resolve(42)).resolves.toBe(42);
await expect(Promise.reject('err')).rejects.toMatch(/err/);
```
