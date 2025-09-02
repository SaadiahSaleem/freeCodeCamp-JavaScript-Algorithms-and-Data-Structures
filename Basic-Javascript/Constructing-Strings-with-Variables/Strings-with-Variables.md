# Constructing Strings with Variables

Sometimes you will need to build a string. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

**Example:**
```javascript
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` would have a value of the string `Hello, our name is freeCodeCamp, how are you?`.

Set `myName` to a string equal to your name and build `myStr` with `myName` between the strings `My name is ` and ` and I am well!`

### Instructions:
1. `myName` should be set to a string at least 3 characters long.
2. You should use two `+` operators to build `myStr` with `myName` inside it.

## Before Output:
```javascript
// Only change code below this line
const myName = "";
const myStr = "";
```

## After Output:
```javascript
const myName = "Saadiah Saleem";
const myStr = "My name is " + myName + " and I am well!";
```