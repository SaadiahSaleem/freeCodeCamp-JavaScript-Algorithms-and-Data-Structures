# Manipulate Arrays With shift Method

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

**Example:**
```javascript
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` would have a value of the string `Stimpson`, and `ourArray` would have `["J", ["cat"]]`.

Use the `.shift()` function to remove the first item from `myArray` and assign the "shifted off" value to a new variable, `removedFromMyArray`.

### Instructions:
1. `myArray` should now equal `[["dog", 3]]`.
2. `removedFromMyArray` should contain `["John", 23]`.

## Before Output:
```javascript
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

## After Output:
```javascript
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```