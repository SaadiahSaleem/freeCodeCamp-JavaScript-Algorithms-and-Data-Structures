# Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

### Instructions:
1. `smallestCommons([1, 5])` should return a number.
2. `smallestCommons([1, 5])` should return 60.
3. `smallestCommons([5, 1])` should return 60.
4. `smallestCommons([2, 10])` should return 2520.
5. `smallestCommons([1, 13])` should return 360360.
6. `smallestCommons([23, 18])` should return 6056820.

## Before Output:
```javascript
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

## After Output:
```javascript
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
```