# Introducing Else If Statements

If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.

```javascript
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

Convert the logic to use `else if` statements.

### Instructions:
1. You should have at least two `else` statements
2. You should have at least two `if` statements
3. You should have closing and opening curly braces for each `if else` code block.
4. `testElseIf(0)` should return the string `Smaller than 5`
5. `testElseIf(5)` should return the string `Between 5 and 10`
6. `testElseIf(7)` should return the string `Between 5 and 10`
7. `testElseIf(10)` should return the string `Between 5 and 10`
8. `testElseIf(12)` should return the string `Greater than 10`

## Before Output:
```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

## After Output:
```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);
```