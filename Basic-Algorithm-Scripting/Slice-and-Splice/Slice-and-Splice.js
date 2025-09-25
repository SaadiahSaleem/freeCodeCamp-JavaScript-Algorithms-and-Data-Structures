function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice(); // make a copy so arr2 isn't mutated
  arr2Copy.splice(n, 0, ...arr1); // insert arr1 at index n
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));