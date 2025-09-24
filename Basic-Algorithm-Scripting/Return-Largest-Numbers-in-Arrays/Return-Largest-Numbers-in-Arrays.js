function largestOfFour(arr) {
  let results = [];   // will store largest numbers
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];   // assume first element is largest
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];   // update if we find bigger
      }
    }
    results.push(largest);     // push largest for this sub-array
  }
  return results;
}

console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]));