# Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.

### Instructions:
1. `sumAll([1, 4])` should return a number.
2. `sumAll([1, 4])` should return 10.
3. `sumAll([4, 1])` should return 10.
4. `sumAll([5, 10])` should return 45.
5. `sumAll([10, 5])` should return 45.

## Before Output:
```javascript
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

## After Output:
```javascript
function sumAll(arr) {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]); 
  let sum = 0;
  for(let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
```