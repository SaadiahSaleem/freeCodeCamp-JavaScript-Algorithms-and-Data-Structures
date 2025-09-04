# Multiple Identical Options in Switch Statements

If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this:

```javascript
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set `answer` for the following ranges:
`1-3` - `Low`
`4-6` - `Mid`
`7-9` - `High`

**Note**: You will need to have a `case` statement for each number in the range.

### Instructions:
1. `sequentialSizes(1)` should return the string `Low`
2. `sequentialSizes(2)` should return the string `Low`
3. `sequentialSizes(3)` should return the string `Low`
4. `sequentialSizes(4)` should return the string `Mid`
5. `sequentialSizes(5)` should return the string `Mid`
6. `sequentialSizes(6)` should return the string `Mid`
7. `sequentialSizes(7)` should return the string `High`
8. `sequentialSizes(8)` should return the string `High`
9. `sequentialSizes(9)` should return the string `High`
10. You should not use any `if` or `else` statements
11. You should have nine `case` statements

## Before Output:
```javascript
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

## After Output:
```javascript
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```