# Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

### Instructions:
1. `truncateString("A-tisket a-tasket A green and yellow basket", 8)` should return the string `A-tisket...`.
2. `truncateString("Peter Piper picked a peck of pickled peppers", 11)` should return the string `Peter Piper...`.
3. `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` should return the string `A-tisket a-tasket A green and yellow basket`.
4. `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` should return the string `A-tisket a-tasket A green and yellow basket`.
5. `truncateString("A-", 1)` should return the string `A...`.
6. `truncateString("Absolutely Longer", 2)` should return the string `Ab...`.

## Before Output:
```javascript
function truncateString(str, num) {
  return str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
```

## After Output:
```javascript
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
    }
  return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
```