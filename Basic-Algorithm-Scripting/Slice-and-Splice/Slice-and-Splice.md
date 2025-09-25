# Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

### Instructions:
1. `frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`.
2. `frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`.
3. `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` should return `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.
4. All elements from the first array should be added to the second array in their original order. `frankenSplice([1, 2, 3, 4], [], 0)` should return `[1, 2, 3, 4]`.
5. The first array should remain the same after the function runs.
6. The second array should remain the same after the function runs.

## Before Output:
```javascript
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

## After Output:
```javascript
function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice(); // make a copy so arr2 isn't mutated
  arr2Copy.splice(n, 0, ...arr1); // insert arr1 at index n
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
```