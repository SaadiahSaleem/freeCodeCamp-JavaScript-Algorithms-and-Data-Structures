# Adding a Default Option in Switch Statements

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.

```javascript
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

Write a switch statement to set `answer` for the following conditions:
`a` - `apple`
`b` - `bird`
`c` - `cat`
`default` - `stuff`

### Instructions:
1. `switchOfStuff("a")` should return the string `apple`
2. `switchOfStuff("b")` should return the string `bird`
3. `switchOfStuff("c")` should return the string `cat`
4. `switchOfStuff("d")` should return the string `stuff`
5. `switchOfStuff(4)` should return the string `stuff`
6. You should not use any `if` or `else` statements
7. You should use a `default` statement
8. You should have at least 3 `break` statements

## Before Output:
```javascript
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

## After Output:
```javascript
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
  }
  // Only change code above this line
  return answer;
}

console.log(switchOfStuff('a')); // Output: apple
console.log(switchOfStuff('b')); // Output: bird
console.log(switchOfStuff('c')); // Output: cat
console.log(switchOfStuff('x')); // Output: stuff

```