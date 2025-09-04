# Comparisons with the Logical Or Operator

The _logical_ or operator (`||`) returns true if either of the _operands_ is `true`. Otherwise, it returns `false`.

The _logical_ or operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints.

```javascript
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

This code will return `Yes` if `num` is between `5` and `10` (`5` and `10` included). The same logic can be written with the _logical_ or operator.

```javascript
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";
```

Combine the two `if` statements into one statement which returns the string `Outside` if `val` is not between `10` and `20`, inclusive. Otherwise, return the string `Inside`.

### Instructions:
1. You should use the `||` operator once
2. You should only have one `if` statement
3. `testLogicalOr(0)` should return the string `Outside`
4. `testLogicalOr(9)` should return the string `Outside`
5. `testLogicalOr(10)` should return the string `Inside`
6. `testLogicalOr(15)` should return the string `Inside`
7. `testLogicalOr(19)` should return the string `Inside`
8. `testLogicalOr(20)` should return the string `Inside`
9. `testLogicalOr(21)` should return the string `Outside`
10. `testLogicalOr(25)` should return the string `Outside`


## Before Output:
```javascript
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

## After Output:
```javascript
function testLogicalOr(val) {
  // Only change code below this line

  if (val>=0 && val<10 || val>12 && val>20) {
    return "Outside";
  }  

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```