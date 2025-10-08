# Combine Two Arrays Using the concat Method

_Concatenation_ means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```javascript
[1, 2, 3].concat([4, 5, 6]);
```

The returned array would be `[1, 2, 3, 4, 5, 6]`.

Use the `concat` method in the `nonMutatingConcat` function to concatenate `attach` to the end of `original`. The function should return the concatenated array.

### Instructions:
1. Your code should use the `concat` method.
2. The `first` array should not change.
3. The `second` array should not change.
4. `nonMutatingConcat([1, 2, 3], [4, 5])` should return `[1, 2, 3, 4, 5]`.

## Before Output:
```javascript
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

## After Output:
```javascript
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));
```