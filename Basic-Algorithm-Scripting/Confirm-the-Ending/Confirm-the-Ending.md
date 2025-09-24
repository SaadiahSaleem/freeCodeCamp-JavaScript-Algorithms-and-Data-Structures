# Confirm the Ending

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

### Instructions:
1. `confirmEnding("Bastian", "n")` should return `true`.
2. `confirmEnding("Congratulation", "on")` should return `true`.
3. `confirmEnding("Connor", "n")` should return `false`.
4. `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` should return `false`.
5. `confirmEnding("He has to give me a new name", "name")` should return `true`.
6. `confirmEnding("Open sesame", "same")` should return `true`.
7. `confirmEnding("Open sesame", "sage")` should return `false`.
8. `confirmEnding("Open sesame", "game")` should return `false`.
9. `confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` should return `false`.
10. `confirmEnding("Abstraction", "action")` should return `true`.
11. Your code should not use the built-in method `.endsWith()` to solve the challenge.

## Before Output:
```javascript
function confirmEnding(str, target) {
  return str;
}

confirmEnding('Bastian', 'n');
```

## After Output:
```javascript
function confirmEnding(str, target) {
  let array = str.split('');
   let lastPart = array.slice(-target.length).join(''); // take last N chars and rejoin
   return lastPart === target;            // compare with target
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
```