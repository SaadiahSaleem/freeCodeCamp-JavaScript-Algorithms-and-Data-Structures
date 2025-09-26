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