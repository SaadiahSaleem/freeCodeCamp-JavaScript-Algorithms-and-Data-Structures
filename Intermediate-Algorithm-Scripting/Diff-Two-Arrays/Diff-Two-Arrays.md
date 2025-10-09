# Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

**Note:** You can return the array with its elements in any order.

### Instructions:
1. `diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` should return an array.
2. `["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["pink wool"]`.
3. `["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with one item.
4. `["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["diorite", "pink wool"]`.
5. `["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with two items.
6. `["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return `[]`.
7. `["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return an empty array.
8. `[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return `[4]`.
9. `[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return an array with one item.
10. `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return `["piglet", 4]`.
11. `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return an array with two items.
12. `[], ["snuffleupagus", "cookie monster", "elmo"]` should return `["snuffleupagus", "cookie monster", "elmo"]`.
13. `[], ["snuffleupagus", "cookie monster", "elmo"]` should return an array with three items.
14. `[1, "calf", 3, "piglet"], [7, "filly"]` should return `[1, "calf", 3, "piglet", 7, "filly"]`.
15. `[1, "calf", 3, "piglet"], [7, "filly"]` should return an array with six items.

## Before Output:
```javascript
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## After Output:
```javascript
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    newArr.push(arr1[i]);
  }
}

for (let j = 0; j < arr2.length; j++) {
  if (!arr1.includes(arr2[j])) {
    newArr.push(arr2[j]);
  }
}
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
```