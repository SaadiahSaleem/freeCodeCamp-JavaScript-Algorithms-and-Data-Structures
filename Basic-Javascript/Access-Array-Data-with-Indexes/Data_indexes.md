# Access Array Data with Indexes

We can access the data inside arrays using _indexes_.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use _zero-based_ indexing, so the first element in an array has an index of `0`.

**Example:**
```javascript
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

The `console.log(array[0])` prints `50`, and data has the value `60`.

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

### Instructions:
1. The variable `myData` should equal the first value of `myArray`.
2. The data in variable `myArray` should be accessed using bracket notation.

## Before Output:
```javascript
const myArray = [50, 60, 70];
```

## After Output:
```javascript
const myArray = [50, 60, 70];
console.log(myArray[0]);
const myData = myArray[0];
```