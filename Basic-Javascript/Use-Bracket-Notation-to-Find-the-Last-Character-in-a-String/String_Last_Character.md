# Use Bracket Notation to Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `const firstName = "Ada"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

**Example:**
```javascript
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` would have a value of the string `a`.

Use _bracket notation_ to find the last character in the `lastName` variable.

**Hint:** Try looking at the example above if you get stuck.


### Instructions:
1. `lastLetterOfLastName` should be the letter `e`.
2. You should use `.length` to get the last letter.


## Before Output:
```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

## After Output:
```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
```