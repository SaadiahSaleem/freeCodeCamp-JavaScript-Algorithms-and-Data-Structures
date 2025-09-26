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