# Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like `const newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy. So changing a value in `newArr` would change the value in `arrVar`. 
2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of the array passed to it and return a new array (list). The `remove` function should remove the given `bookName` from the array passed to it.

**Note:** Both functions should return an array, and any new parameters should be added before the `bookName` parameter.

### Instructions:
1. `bookList` should not change and still equal `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
2. `add(bookList, "A Brief History of Time")` should return `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.
3. `remove(bookList, "On The Electrodynamics of Moving Bodies")` should return ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
4. `remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

## Before Output:
```javascript
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
```

## After Output:
```javascript
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  // Return a new array using the spread syntax (...) to copy existing elements
  // and then adding the new bookName to the end.
  return [...arr, bookName];


  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  // Find the index of the book to remove.
  const index = arr.indexOf(bookName);
  
  // If the book is found, create a new array and return it.
  if (index >= 0) {
    // Create a new array by cloning the original array.
    const newArray = [...arr];
    // Remove the book at the found index.
    newArray.splice(index, 1);
    return newArray;
  }
  
  // If the book is not found, return the original array.
  return arr;
    // Change code above this line
    
}
```