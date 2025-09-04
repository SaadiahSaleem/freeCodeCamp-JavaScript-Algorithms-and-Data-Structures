# Comparison with the Greater Than Or Equal To Operator

The greater than or equal to operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

**Examples**
```javascript
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

### Instructions:
1. `testGreaterOrEqual(0)` should return the string `Less than 10`
2. `testGreaterOrEqual(9)` should return the string `Less than 10`
3. `testGreaterOrEqual(10)` should return the string `10 or Over`
4. `testGreaterOrEqual(11)` should return the string `10 or Over`
5. `testGreaterOrEqual(19)` should return the string `10 or Over`
6. `testGreaterOrEqual(100)` should return the string `20 or Over`
7. `testGreaterOrEqual(21)` should return the string `20 or Over`
8. You should use the `>=` operator at least twice

## Before Output:
```javascript
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

## After Output:
```javascript
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```