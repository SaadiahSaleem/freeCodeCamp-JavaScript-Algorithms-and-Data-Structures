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