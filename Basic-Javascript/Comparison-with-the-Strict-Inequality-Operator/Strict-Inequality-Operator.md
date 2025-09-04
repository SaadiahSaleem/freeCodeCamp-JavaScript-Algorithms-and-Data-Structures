# Comparison with the Strict Inequality Operator

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and vice versa. The strict inequality operator will not convert data types.

**Examples**
```javascript
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

Add the strict inequality operator to the `if` statement so the function will return the string `Not Equal` when `val` is not strictly equal to `17`

### Instructions:
1. `testStrictNotEqual(17)` should return the string `Equal`
2. `testStrictNotEqual("17")` should return the string `Not Equal`
3. `testStrictNotEqual(12)` should return the string `Not Equal`
4. `testStrictNotEqual("bob")` should return the string `Not Equal`
5. You should use the `!==` operator

## Before Output:
```javascript
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

## After Output:
```javascript
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```