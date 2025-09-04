# Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The _logical and_ operator (`&&`) returns `true` if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an `if` statement inside another `if`.

```javascript
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

This code will return `Yes` if `num` is greater than `5` and less than `10`. The same logic can be written with the _logical and_ operator.

```javascript
if (num > 5 && num < 10) {
    return "Yes";
}
return "No";
```

Replace the two if statements with one statement, using the `&&` operator, which will return the string `Yes` if `val` is less than or equal to `50` and greater than or equal to `25`. Otherwise, will return the string `No`.

### Instructions:
1. You should use the `&&` operator once
2. You should only have one `if` statement
3. `testLogicalAnd(0)` should return the string `No`
4. `testLogicalAnd(24)` should return the string `No`
5. `testLogicalAnd(25)` should return the string `Yes`
6. `testLogicalAnd(30)` should return the string `Yes`
7. `testLogicalAnd(50)` should return the string `Yes`
8. `testLogicalAnd(51)` should return the string `No`
9. `testLogicalAnd(75)` should return the string `No`
10. `testLogicalAnd(80)` should return the string `No`

## Before Output:
```javascript
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

## After Output:
```javascript
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
    
    return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```