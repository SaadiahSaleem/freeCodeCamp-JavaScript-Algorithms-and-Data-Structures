# Comparison with the Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator. Inequality means not equal. The inequality operator returns `false` when the equality operator would return `true` and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```javascript
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

Add the inequality operator `!=` in the `if` statement so that the function will return the string `Not Equal` when `val` is not equivalent to `99`.

### Instructions:
1. `testNotEqual(99)` should return the string `Equal`
2. `testNotEqual("99")` should return the string `Equal`
3. `testNotEqual(12)` should return the string `Not Equal`
4. `testNotEqual("12")` should return the string `Not Equal`
5. `testNotEqual("bob")` should return the string `Not Equal`
6. You should use the `!=` operator

## Before Output:
```javascript
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

## After Output:
```javascript
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```