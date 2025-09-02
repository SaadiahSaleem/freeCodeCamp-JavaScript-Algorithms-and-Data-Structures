# Appending Variables to Strings

Just as we can build a string over multiple lines out of string _literals_, we can also append variables to a string using the plus equals (+=) operator.

**Example:**
```javascript
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` would have the value `freeCodeCamp is awesome!`.

Set `someAdjective` to a string of at least 3 characters and append it to `myStr` using the `+=` operator.

### Instructions:
1. `someAdjective` should be set to a string at least 3 characters long.
2. You should append `someAdjective` to `myStr` using the `+=` operator.


## Before Output:
```javascript
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

## After Output:
```javascript
const someAdjective = "a coolest thing.";
let myStr = "Learning to code is ";
myStr += someAdjective;
```