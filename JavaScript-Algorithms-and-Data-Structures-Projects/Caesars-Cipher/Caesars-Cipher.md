# Caesars Cipher

One of the simplest and most widely known _ciphers_ is a _Caesar cipher_, also known as a _shift cipher_. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the **ROT13** cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a **ROT13** encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### Instructions:
1. `rot13("SERR PBQR PNZC")` should decode to the string `FREE CODE CAMP`
2. `rot13("SERR CVMMN!")` should decode to the string `FREE PIZZA!`
3. `rot13("SERR YBIR?")` should decode to the string `FREE LOVE?`
4. `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to the string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`.

## Before Output:
```javascript
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
```

## After Output:
```javascript
function rot13(str) {
  return str.replace(/[A-Z]/g, function(char) {
    const code = char.charCodeAt(0);
    // Shift by 13, wrap around using modulo
    return String.fromCharCode((code - 65 + 13) % 26 + 65);
  });
  
}

console.log(rot13("SERR PBQR PNZC"));
```