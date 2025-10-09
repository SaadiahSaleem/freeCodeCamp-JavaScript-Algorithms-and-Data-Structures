# Roman Numeral Converter

Convert the given number into a roman numeral.

## 🏛️ Roman to Arabic Numerals Table

| Roman Numerals | Arabic Numerals |
|----------------|------------------|
| M              | 1000             |
| CM             | 900              |
| D              | 500              |
| CD             | 400              |
| C              | 100              |
| XC             | 90               |
| L              | 50               |
| XL             | 40               |
| X              | 10               |
| IX             | 9                |
| V              | 5                |
| IV             | 4                |
| I              | 1                |

All roman numerals answers should be provided in upper-case.

### Instructions:
1. `convertToRoman(2)` should return the string `II`.
2. `convertToRoman(3)` should return the string `III`.
3. `convertToRoman(4)` should return the string `IV`.
4. `convertToRoman(5)` should return the string `V`.
5. `convertToRoman(9)` should return the string `IX`.
6. `convertToRoman(12)` should return the string `XII`.
7. `convertToRoman(16)` should return the string `XVI`.
8. `convertToRoman(29)` should return the string `XXIX`.
9. `convertToRoman(44)` should return the string `XLIV`.
10. `convertToRoman(45)` should return the string `XLV`.
11. `convertToRoman(68)` should return the string `LXVIII`
12. `convertToRoman(83)` should return the string `LXXXIII`
13. `convertToRoman(97)` should return the string `XCVII`
14. `convertToRoman(99)` should return the string `XCIX`
15. `convertToRoman(400)` should return the string `CD`
16. `convertToRoman(500)` should return the string `D`
17. `convertToRoman(501)` should return the string `DI`
18. `convertToRoman(649)` should return the string `DCXLIX`
19. `convertToRoman(798)` should return the string `DCCXCVIII`
20. `convertToRoman(891)` should return the string `DCCCXCI`
21. `convertToRoman(1000)` should return the string `M`
22. `convertToRoman(1004)` should return the string `MIV`
23. `convertToRoman(1006)` should return the string `MVI`
24. `convertToRoman(1023)` should return the string `MXXIII`
25. `convertToRoman(2014)` should return the string `MMXIV`
26. `convertToRoman(3999)` should return the string `MMMCMXCIX`

## Before Output:
```javascript
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

## After Output:
```javascript
function convertToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900,  symbol: 'CM' },
    { value: 500,  symbol: 'D' },
    { value: 400,  symbol: 'CD' },
    { value: 100,  symbol: 'C' },
    { value: 90,   symbol: 'XC' },
    { value: 50,   symbol: 'L' },
    { value: 40,   symbol: 'XL' },
    { value: 10,   symbol: 'X' },
    { value: 9,    symbol: 'IX' },
    { value: 5,    symbol: 'V' },
    { value: 4,    symbol: 'IV' },
    { value: 1,    symbol: 'I' }
  ];

  let result = '';

  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      result += romanMap[i].symbol;
      num -= romanMap[i].value;
    }
  }

  return result;
}

console.log(convertToRoman(36));     // Output: XXXVI
console.log(convertToRoman(1000));   // Output: M
console.log(convertToRoman(1987));   // Output: MCMLXXXVII

```