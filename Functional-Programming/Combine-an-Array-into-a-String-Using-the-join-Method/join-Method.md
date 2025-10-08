# Combine an Array into a String Using the join Method

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

```javascript
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` would have a value of the string `Hello World`.

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, `I-like-Star-Wars` would be converted to `I like Star Wars`. For this challenge, do not use the `replace` method.

### Instructions:
1. Your code should use the `join` method.
2. Your code should not use the `replace` method.
3. `sentensify("May-the-force-be-with-you")` should return a string.
4. `sentensify("May-the-force-be-with-you")` should return the string `May the force be with you`.
5. `sentensify("The.force.is.strong.with.this.one")` should return the string `The force is strong with this one`.
6. `sentensify("There,has,been,an,awakening")` should return the string `There has been an awakening`.

## Before Output:
```javascript
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

## After Output:
```javascript
function sentensify(str) {
  // Only change code below this line
  return str.split(/\W+/).join(" ");

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
```