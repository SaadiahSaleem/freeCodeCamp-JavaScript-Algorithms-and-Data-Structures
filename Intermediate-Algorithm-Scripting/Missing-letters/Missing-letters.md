# Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return `undefined`.

### Instructions:
1. `fearNotLetter("abce")` should return the string `d`.
2. `fearNotLetter("abcdefghjklmno")` should return the string `i`.
3. `fearNotLetter("stvwx")` should return the string `u`.
4. `fearNotLetter("bcdf")` should return the string `e`.
5. `fearNotLetter("abcdefghijklmnopqrstuvwxyz")` should return `undefined`.

## Before Output:
```javascript
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

## After Output:
```javascript
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // Check if the difference between adjacent letters is more than 1
    if (nextCode !== currentCode + 1) {
      // Missing letter found!
      return String.fromCharCode(currentCode + 1);
    }
  }
  // No missing letter
  return undefined;
}

console.log(fearNotLetter("abce")); // Output: "d"
console.log(fearNotLetter("abc"));  // Output: undefined

```