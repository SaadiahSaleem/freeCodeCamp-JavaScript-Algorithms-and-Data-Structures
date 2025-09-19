# Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string `hah` with the letter `a` appearing at least `3` times, your regex would be `/ha{3,}h/`.

```javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

In order, the three `test` calls would return `true`, `false`, and `true`.

Change the regex `haRegex` to match the word `Hazzah` only when it has four or more letter `z`'s.

### Instructions:
1. Your regex should use curly brackets.
2. Your regex should not match the string `Hazzah`
3. Your regex should not match the string `Hazzzah`
4. Your regex should match the string `Hazzzzah`
5. Your regex should match the string `Hazzzzzah`
6. Your regex should match the string `Hazzzzzzah`
7. Your regex should match the string `Hazzah` with 30 `z`'s in it.

## Before Output:
```javascript
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

## After Output:
```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```