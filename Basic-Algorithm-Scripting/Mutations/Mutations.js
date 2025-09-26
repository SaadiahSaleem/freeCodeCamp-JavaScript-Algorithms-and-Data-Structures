function mutation(arr) {
 let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      return false;   // letter not found
    }
  }
  return true;  // all letters found
}

console.log(mutation(['hello', 'hey']));