# Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

### Instructions:
1. `factorialize(5)` should return a number.
2. `factorialize(5)` should return `120`.
3. `factorialize(10)` should return `3628800`.
4. `factorialize(20)` should return `2432902008176640000`.
5. `factorialize(0)` should return `1`.

## Before Output:
```javascript
function factorialize(num) {
  return num;
}

factorialize(5);
```

## After Output:
```javascript
function factorialize(num) {
  let result = 1;
  if(num>=0){    
    for(let i=1; i<=num; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));s
```