# Reverse a String

Reverse the provided string and return the reversed string.

For example, `"hello"` should become `"olleh"`.

### Instructions:
1. `reverseString("hello")` should return a string.
2. `reverseString("hello")` should return the string `olleh`.
3. `reverseString("Howdy")` should return the string `ydwoH`.
4. `reverseString("Greetings from Earth")` should return the string `htraE morf sgniteerG`.

## Before Output:
```javascript
function reverseString(str) {
  return str;
}

reverseString('hello');
```

## After Output:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));
```