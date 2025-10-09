# Palindrome Checker

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A _palindrome_ is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**: You'll need to remove all **non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

### Instructions:
1. `palindrome("eye")` should return a boolean.
2. `palindrome("eye")` should return `true`.
3. `palindrome("_eye")` should return `true`.
4. `palindrome("race car")` should return `true`.
5. `palindrome("not a palindrome")` should return `false`.
6. `palindrome("A man, a plan, a canal. Panama")` should return `true`.
7. `palindrome("never odd or even")` should return `true`.
8. `palindrome("nope")` should return `false`.
9. `palindrome("almostomla")` should return `false`.
10. `palindrome("My age is 0, 0 si ega ym.")` should return `true`.
11. `palindrome("1 eye for of 1 eye.")` should return `false`.
12. `palindrome("0_0 (: /-\ :) 0-0")` should return `true`.
13. `palindrome("five|\_/|four")` should return `false`.

## Before Output:
```javascript
function palindrome(str) {
 return str;
}

palindrome("eye");
```

## After Output:
```javascript
function palindrome(str) {
  let cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the cleaned string
  let reversed = cleaned.split('').reverse().join('');
  
  // Compare cleaned with reversed
  return cleaned === reversed;
}

console.log(palindrome("eye"));
```