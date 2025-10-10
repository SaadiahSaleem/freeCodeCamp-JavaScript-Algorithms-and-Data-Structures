# Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.

Calling this returned function with a single argument will then return the sum:

```javascript
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` returns `5`.

If either argument isn't a valid number, return undefined.

### Instructions:
1. `addTogether(2, 3)` should return `5`.
2. `addTogether(23.4, 30)` should return `53.4`.
3. `addTogether("2", 3)` should return `undefined`.
4. `addTogether(5, undefined)` should return `undefined`.
5. `addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` should return `undefined`.
6. `addTogether(5)` should return a function.
7. `addTogether(5)(7)` should return `12`.
8. `addTogether(2)([3])` should return `undefined`.
9. `addTogether(2, "3")` should return `undefined`.

## Before Output:
```javascript
function addTogether() {
  return false;
}

addTogether(2,3);
```

## After Output:
```javascript
function addTogether() {
  const [first, second] = arguments;

  // Helper to check if a value is a number
  function isNumber(val) {
    return typeof val === "number";
  }

  // Case 1: Two arguments
  if (arguments.length === 2) {
    return (isNumber(first) && isNumber(second)) ? first + second : undefined;
  }

  // Case 2: One argument
  if (arguments.length === 1 && isNumber(first)) {
    return function(secondArg) {
      return isNumber(secondArg) ? first + secondArg : undefined;
    };
  }

  // Fallback
  return undefined;
}


console.log(addTogether(2,3));
```