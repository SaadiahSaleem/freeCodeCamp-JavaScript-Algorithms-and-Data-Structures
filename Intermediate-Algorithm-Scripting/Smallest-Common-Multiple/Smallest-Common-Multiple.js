function smallestCommons(arr) {
  // Step 1: Sort the array to determine min and max
  const [min, max] = arr.sort((a, b) => a - b);

  // Step 2: Create a range of numbers from min to max
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  // Step 3: Function to compute the GCD (Greatest Common Divisor)
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Step 4: Function to compute the LCM (Least Common Multiple)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Step 5: Reduce the range to a single LCM value
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons([1, 5]));