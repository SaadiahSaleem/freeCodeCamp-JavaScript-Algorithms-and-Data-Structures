# Concatenating Strings with Plus Operator
In JavaScript, when the `+` operator is used with a `String` value, it is called the _concatenation_ operator. You can build a new string out of other strings by _concatenating_ them together.

**Example**

```javascript
'My name is Alan,' + ' I concatenate.'
```

**Note:** Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

**Example:**
```javascript
const ourStr = "I come first. " + "I come second.";
```

The string `I come first. I come second.` would be displayed in the console.

Build `myStr` from the strings `This is the start.` and `This is the end.` using the `+` operator. Be sure to include a space between the two strings.

### Instructions:
1. `myStr` should have a single space character between the two strings.
2. `myStr` should have a value of the string `This is the start. This is the end.`
3. You should use the `+` operator to build `myStr`.
4. `myStr` should be created using the `const` keyword.
5. You should assign the result to the `myStr` variable.

## Before Output:
```javascript
const myStr = ""; // Change this line
```

## After Output
```javascript
const myStr = "This is the start. "+"This is the end.";
```