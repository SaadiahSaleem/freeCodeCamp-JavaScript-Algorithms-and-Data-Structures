# Chaining If Else Statements

`if/else` statements can be chained together for complex logic. Here is _pseudocode_ of multiple chained `if` / `else if` statements:

```javascript
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

Write chained `if`/`else if` statements to fulfill the following conditions:

`num < 5` - return `Tiny`
`num < 10` - return `Small`
`num < 15` - return `Medium`
`num < 20` - return `Large`
`num >= 20` - return `Huge`

### Instructions:
1. You should have at least four `else` statements
2. You should have at least four `if` statements
3. You should have at least one `return` statement
4. `testSize(0)` should return the string `Tiny`
5. `testSize(4)` should return the string `Tiny`
6. `testSize(5)` should return the string `Small`
7. `testSize(8)` should return the string `Small`
8. `testSize(10)` should return the string `Medium`
9. `testSize(14)` should return the string `Medium`
10. `testSize(15)` should return the string `Large`
11. `testSize(17)` should return the string `Large`
12. `testSize(20)` should return the string `Huge`
13. `testSize(25)` should return the string `Huge`

## Before Output:
```javascript
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

## After Output:
```javascript
function testSize(num) {
  // Only change code below this line
  if (num<5){
    return "Tiny";
  }
  else if (num<10){
    return "Small";
  }
  else if (num<15){
    return "Medium";
  }
  else if (num<20){
    return "Large";
  }
  else if (num>=20){
    return "Huge";
  }
  else
  return "Change Me";
  // Only change code above this line
}

testSize(7);
```