# Assignment with a Returned Value

If you'll recall from our discussion about **_Storing Values with the Assignment Operator_**, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function `sum` which adds two numbers together.

```javascript
ourSum = sum(5, 12);
```

Calling the `sum` function with the arguments of `5` and `12` produces a return value of `17`. This return value is assigned to the `ourSum` variable.

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.

### Instructions:
1. `processed` should have a value of `2`
2. You should assign `processArg` to `processed`

## Before Output:
```javascript
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

## After Output:
```javascript
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
```