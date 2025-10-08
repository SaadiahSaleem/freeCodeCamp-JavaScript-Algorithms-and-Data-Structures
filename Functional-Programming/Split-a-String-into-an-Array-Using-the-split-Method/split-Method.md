# Split a String into an Array Using the split Method

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```javascript
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` would have the value `["Hello", "World"]` and `byDigits` would have the value `["How", "are", "you", "today"]`.

Since strings are immutable, the `split` method makes it easier to work with them.

Use the `split` method inside the `splitify` function to split `str` into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

### Instructions:
1. Your code should use the `split` method.
2. `splitify("Hello World,I-am code")` should return `["Hello", "World", "I", "am", "code"]`.
3. `splitify("Earth-is-our home")` should return `["Earth", "is", "our", "home"]`.
4. `splitify("This.is.a-sentence")` should return `["This", "is", "a", "sentence"]`.

## Before Output:
```javascript
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");
```

## After Output:
```javascript
function splitify(str) {
  // Only change code below this line
   return str.split(/\W+/);
  
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
```