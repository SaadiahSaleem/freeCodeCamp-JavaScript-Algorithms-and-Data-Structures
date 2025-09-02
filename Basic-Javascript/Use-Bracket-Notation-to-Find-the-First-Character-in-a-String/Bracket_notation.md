# Use Bracket Notation to Find the First Character in a String

_Bracket notation_ is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as _Zero-based_ indexing.

For example, the character at index 0 in the word `Charles` is `C`. So if `const firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

**Example:**
```javascript
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` would have a value of the string `C`.

Use bracket notation to find the first character in the `lastName` variable and assign it to `firstLetterOfLastName`.

**Hint**: Try looking at the example above if you get stuck.

### Instructions:
1. The `firstLetterOfLastName` variable should have the value of `L`.
2. You should use bracket notation.


## Before Output:
```javascript
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

## After Output:
```javascript
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
```