function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    curr += prev;
    prev = curr - prev;
  }

  return sum;
}

console.log(sumFibs(4)); // 5 (1 + 1 + 3)