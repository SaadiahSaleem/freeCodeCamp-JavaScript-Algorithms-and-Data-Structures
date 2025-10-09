function destroyer(arr, ...valsToRemove) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
  if (!valsToRemove.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));