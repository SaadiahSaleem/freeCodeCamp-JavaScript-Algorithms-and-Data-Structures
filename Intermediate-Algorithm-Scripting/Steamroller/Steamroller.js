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