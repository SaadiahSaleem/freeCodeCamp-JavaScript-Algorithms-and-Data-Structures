# Return Early Pattern for Functions

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**
```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

The above will display the string `Hello` in the console, and return the string `World`. The string `byebye` will never display in the console, because the function exits at the `return` statement.

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

**Hint**
Remember that `undefined` is a keyword, not a string.

### Instructions:
1. `abTest(2, 2)` should return a number
2. `abTest(2, 2)` should return `8`
3. `abTest(-2, 2)` should return `undefined`
4. `abTest(2, -2)` should return `undefined`
5. `abTest(2, 8)` should return `18`
6. `abTest(3, 3)` should return `12`
7. `abTest(0, 0)` should return `0`

## Before Output:
```javascript
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

## After Output:
```javascript
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a<0 && b>0 || a>0 && b<0){
    return undefined;
  }
  else {

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
}

abTest(2,2);
```