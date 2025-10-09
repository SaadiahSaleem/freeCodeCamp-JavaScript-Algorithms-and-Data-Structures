function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // Check if the difference between adjacent letters is more than 1
    if (nextCode !== currentCode + 1) {
      // Missing letter found!
      return String.fromCharCode(currentCode + 1);
    }
  }
  // No missing letter
  return undefined;
}

console.log(fearNotLetter("abce")); // Output: "d"
console.log(fearNotLetter("abc"));  // Output: undefined
