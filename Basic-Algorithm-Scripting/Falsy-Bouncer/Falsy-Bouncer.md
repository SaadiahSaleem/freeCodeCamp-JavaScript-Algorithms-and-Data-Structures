# Falsy Bouncer

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

**Hint:** Try converting each value to a Boolean.

### Instructions:
1. `bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`.
2. `bouncer(["a", "b", "c"])` should return `["a", "b", "c"]`.
3. `bouncer([false, null, 0, NaN, undefined, ""])` should return `[]`.
4. `bouncer([null, NaN, 1, 2, undefined])` should return `[1, 2]`.
5. You should not mutate `arr`.

## Before Output:
```javascript
function bouncer(arr) {
  return arr;
}

bouncer([7, 'ate', '', false, 9]);
```


## After Output:
```javascript
function bouncer(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== undefined && !Number.isNaN(arr[i])               
    ) {
      newArr.push(arr[i]); 
    }
  }

  return newArr;
}

console.log(bouncer([7, 'ate', '', false, 9]));
```