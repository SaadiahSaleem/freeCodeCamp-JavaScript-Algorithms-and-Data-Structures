# Use Multiple Conditional (Ternary) Operators

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses `if`, `else if`, and `else` statements to check multiple conditions:

```javascript
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

The above function can be re-written using multiple conditional operators:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

In the `checkSign` function, use multiple conditional operators - following the recommended format used in `findGreaterOrEqual` - to check if a number is positive, negative or zero. The function should return `positive`, `negative` or `zero`.

### Instructions:
1. `checkSign` should use multiple conditional operators
2. `checkSign(10)` should return the string `positive`. Note that capitalization matters
3. `checkSign(-12)` should return the string `negative`. Note that capitalization matters
4. `checkSign(0)` should return the string `zero`. Note that capitalization matters

## Before Output:
```javascript
function checkSign(num) {

}

checkSign(10);
```

## After Output:
```javascript
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
```