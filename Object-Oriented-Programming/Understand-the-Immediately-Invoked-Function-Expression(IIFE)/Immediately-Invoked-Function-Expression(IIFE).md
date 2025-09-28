# Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:

```javascript
(function () {
  console.log("Chirp, chirp!");
})();
```

This is an anonymous function expression that executes right away, and outputs `Chirp, chirp!` immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an _immediately invoked function expression_ or _IIFE_.

Rewrite the function `makeNest` and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

### Instructions:
1. The function should be anonymous.
2. Your function should have parentheses at the end of the expression to call it immediately.

## Before Output:
```javascript
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

## After Output:
```javascript
(function () {
  console.log("A cozy nest is ready");
})();

```