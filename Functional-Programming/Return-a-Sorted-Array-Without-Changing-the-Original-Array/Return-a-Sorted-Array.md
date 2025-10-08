# Return a Sorted Array Without Changing the Original Array

A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `slice` and `concat` return a new array), then run the `sort` method.

Use the `sort` method in the `nonMutatingSort` function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the `globalArray` variable.

### Instructions:
1. Your code should use the `sort` method.
2. The `globalArray` variable should not change.
3. `nonMutatingSort(globalArray)` should return `[2, 3, 5, 6, 9]`.
4. `nonMutatingSort(globalArray)` should not be hard coded.
5. The function should return a new array, not the array passed to it.
6. `nonMutatingSort([1, 30, 4, 21, 100000])` should return `[1, 4, 21, 30, 100000]`.
7. `nonMutatingSort([140000, 104, 99])` should return `[99, 104, 140000]`.

## Before Output:
```javascript
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
```

## After Output:
```javascript
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const sorting = arr.slice();
  return sorting.sort(function(a, b) {
    return a - b;
  });

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
```