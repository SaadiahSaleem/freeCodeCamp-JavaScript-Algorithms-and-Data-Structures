# Escape Sequences in Strings

Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

| Code  | Output          |
|-------|-----------------|
| `\'`  | single quote    |
| `\"`  | double quote    |
| `\\`  | backslash       |
| `\n`  | newline         |
| `\t`  | tab             |
| `\r`  | carriage return |
| `\b`  | backspace       |
| `\f`  | form feed       |

_Note that the backslash itself must be escaped in order to display as a backslash._

Assign the following three lines of text into the single variable `myStr` using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

**Note:** The indentation for `SecondLine` is achieved with the tab escape character, not spaces.

### Instructions:
1. `myStr` should not contain any spaces
2. `myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)
3. `FirstLine` should be followed by the newline character `\n`
4. `myStr` should contain a tab character `\t` which follows a newline character
5. `SecondLine` should be preceded by the backslash character `\`
6. There should be a newline character between `SecondLine` and `ThirdLine`
7. `myStr` should only contain characters shown in the instructions

## Before Output
```javascript
const myStr = ""; // Change this line
```

## After Output
```javascript
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```