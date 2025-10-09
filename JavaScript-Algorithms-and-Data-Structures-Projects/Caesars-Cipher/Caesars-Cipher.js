function rot13(str) {
  return str.replace(/[A-Z]/g, function(char) {
    const code = char.charCodeAt(0);
    // Shift by 13, wrap around using modulo
    return String.fromCharCode((code - 65 + 13) % 26 + 65);
  });

}

console.log(rot13("SERR PBQR PNZC"));