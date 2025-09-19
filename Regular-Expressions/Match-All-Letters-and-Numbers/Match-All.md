# Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet with `[a-z]`. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

```javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

All four of these `test` calls would return `true`.

These shortcut character classes are also known as _shorthand character classes_.

Use the shorthand character class `\w` to count the number of alphanumeric characters in various quotes and strings.

### Instructions:
1. Your regex should use the global flag.
2. Your regex should use the shorthand character `\w` to match all characters which are alphanumeric.
3. Your regex should find 31 alphanumeric characters in the string `The five boxing wizards jump quickly`.
4. Your regex should find 32 alphanumeric characters in the string `Pack my box with five dozen liquor jugs`.
5. Your regex should find 30 alphanumeric characters in the string `How vexingly quick daft zebras jump!`
6. Your regex should find 36 alphanumeric characters in the string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ`.

## Before Output:
```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

## After Output:
```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```