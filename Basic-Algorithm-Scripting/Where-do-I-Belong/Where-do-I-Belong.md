# Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

### Instructions:
1. `getIndexToIns([10, 20, 30, 40, 50], 35)` should return a number.
2. `getIndexToIns([10, 20, 30, 40, 50], 35)` should return `3`.
3. `getIndexToIns([10, 20, 30, 40, 50], 30)` should return a number.
4. `getIndexToIns([10, 20, 30, 40, 50], 30)` should return `2`.
5. `getIndexToIns([40, 60], 50)` should return a number.
6. `getIndexToIns([40, 60], 50)` should return `1`.
7. `getIndexToIns([3, 10, 5], 3)` should return a number.
8. `getIndexToIns([3, 10, 5], 3)` should return `0`.
9. `getIndexToIns([5, 3, 20, 3], 5)` should return a number.
10. `getIndexToIns([5, 3, 20, 3], 5)` should return `2`.
11. `getIndexToIns([2, 20, 10], 19)` should return `2`.
12. `getIndexToIns([2, 20, 10], 19)` should return a number.
13. `getIndexToIns([2, 5, 10], 15)` should return `3`.
14. `getIndexToIns([2, 5, 10], 15)` should return a number.
15. `getIndexToIns([], 1)` should return a number.
16. `getIndexToIns([], 1)` should return `0`.

## Before Output:
```javascript
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

## After Output:
```javascript
function getIndexToIns(arr, num) {  
  arr.sort(function(a, b){return a - b});  
  arr.push(num);
  arr.sort(function(a, b){return a - b});
  console.log(arr);
  if (num == arr[0]) {
    return 0;
  }
  else if (num == arr[1]) {
    return 1;
  }
  else if (num == arr[2]) {
    return 2;
  }
  else {
    return 3;
  }

}

console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));
```
