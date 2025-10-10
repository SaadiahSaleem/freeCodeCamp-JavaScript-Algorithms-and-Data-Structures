function dropElements(arr, func) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      // Found the element that passes the function
      // Splice from this index to the end
      return arr.splice(i);
    }
  }
  // If no element satisfies the function, return an empty array
  return [];
}

console.log(dropElements([1, 2, 3], function(n) { return n < 3; }));