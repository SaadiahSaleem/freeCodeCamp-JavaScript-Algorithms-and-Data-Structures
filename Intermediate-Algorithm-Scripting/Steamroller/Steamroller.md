# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

### Instructions:
1. `steamrollArray([[["a"]], [["b"]]])` should return `["a", "b"]`.
2. `steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.
3. `steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.
4. `steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.
5. Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.
6. Global variables should not be used.

## Before Output:
```javascript
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

## After Output:
```javascript
function steamrollArray(arr) {
  const flat = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      // Recursively flatten each element
      item.forEach(flatten);
    } else {
      flat.push(item);
    }
  }

  flatten(arr);
  return flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
```