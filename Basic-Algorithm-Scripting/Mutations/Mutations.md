# Mutations

Return `true` if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return `true` because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return `false` because the string `hello` does not contain a `y`.

Lastly, `["Alien", "line"]`, should return `true` because all of the letters in `line` are present in `Alien`.

### Instructions:
1. `mutation(["hello", "hey"])` should return `false`.
2. `mutation(["hello", "Hello"])` should return `true`.
3. `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` should return `true`.
4. `mutation(["Mary", "Army"])` should return `true`.
5. `mutation(["Mary", "Aarmy"])` should return `true`.
6. `mutation(["Alien", "line"])` should return `true`.
7. `mutation(["floor", "for"])` should return `true`.
8. `mutation(["hello", "neo"])` should return `false`.
9. `mutation(["voodoo", "no"])` should return `false`.
10. `mutation(["ate", "date"])` should return `false`.
11. `mutation(["Tiger", "Zebra"])` should return `false`.
12. `mutation(["Noel", "Ole"])` should return `true`.

## Before Output:
```javascript
function mutation(arr) {
  return arr;
}

mutation(['hello', 'hey']);
```

## After Output:
```javascript
function mutation(arr) {
 let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      return false;   // letter not found
    }
  }
  return true;  // all letters found
}

console.log(mutation(['hello', 'hey']));
```