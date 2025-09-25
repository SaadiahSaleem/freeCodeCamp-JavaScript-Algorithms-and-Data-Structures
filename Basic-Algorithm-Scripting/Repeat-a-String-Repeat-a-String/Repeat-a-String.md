# Repeat a String Repeat a String

Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number. For the purpose of this challenge, do not use the built-in `.repeat()` method.

### Instructions:
1. `repeatStringNumTimes("*", 3)` should return the string `***`.
2. `repeatStringNumTimes("abc", 3)` should return the string `abcabcabc`.
3. `repeatStringNumTimes("abc", 4)` should return the string `abcabcabcabc`.
4. `repeatStringNumTimes("abc", 1)` should return the string `abc`.
5. `repeatStringNumTimes("*", 8)` should return the string `********`.
6. `repeatStringNumTimes("abc", -2)` should return an empty string (`""`).
7. The built-in `repeat()` method should not be used.
8. `repeatStringNumTimes("abc", 0)` should return `""`

## Before Output:
```javascript
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes('abc', 3);
```

## After Output:
```javascript
function repeatStringNumTimes(str, num) {
  let repeat = "";
  if(num <= 0) {
    return "";
  }
  else {
     for(let i = 0; i < num; i++) {
    repeat += str;
  }
  }
  return repeat;
}

console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
```