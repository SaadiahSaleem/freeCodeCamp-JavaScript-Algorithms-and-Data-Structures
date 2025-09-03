# Global vs. Local Scope in Functions

It is possible to have both _local_ and _global_ variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

```javascript
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

The function `myFun` will return the string `Head` because the local version of the variable is present.

Add a local variable to `myOutfit` function to override the value of `outerWear` with the string `sweater`.

### Instructions:
1. You should not change the value of the global `outerWear`.
2. `myOutfit` should return the string `sweater`.
3. You should not change the return statement.

## Before Output:
```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

## After Output:
```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
```