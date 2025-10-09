function palindrome(str) {
  let cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the cleaned string
  let reversed = cleaned.split('').reverse().join('');

  // Compare cleaned with reversed
  return cleaned === reversed;
}

console.log(palindrome("eye"));