# Use the parseInt Function

The `parseInt()` function parses a string and returns an integer. Here's an example:

```javascript
const a = parseInt("007");
```

The above function converts the string `007` to the integer `7`. If the first character in the string can't be converted into a number, then it returns `NaN`.

Use `parseInt()` in the `convertToInteger` function so it converts the input string `str` into an integer, and returns it.

### Instructions:
1. `convertToInteger` should use the `parseInt()` function
2. `convertToInteger("56")` should return a number
3. `convertToInteger("56")` should return 56
4. `convertToInteger("77")` should return 77
5. `convertToInteger("JamesBond")` should return NaN

## Before Output:
```javascript
function convertToInteger(str) {

}

convertToInteger("56");
```

## After Output:
```javascript
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));
console.log(convertToInteger("77"));
```