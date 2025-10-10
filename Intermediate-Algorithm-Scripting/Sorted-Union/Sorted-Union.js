function uniteUnique(...arrays) {
  const combined = [].concat(...arrays); // Flatten all arrays into one
  const uniqueArr = [];

  for (let i = 0; i < combined.length; i++) {
    if (!uniqueArr.includes(combined[i])) {
      uniqueArr.push(combined[i]);
    }
  }

  return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

