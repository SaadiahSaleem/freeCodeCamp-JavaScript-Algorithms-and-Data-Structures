# Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

### Instructions:
1. `findLongestWordLength("The quick brown fox jumped over the lazy dog")` should return a number.
2. `findLongestWordLength("The quick brown fox jumped over the lazy dog")` should return `6`.
3. `findLongestWordLength("May the force be with you")` should return `5`.
4. `findLongestWordLength("Google do a barrel roll")` should return `6`.
5. `findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` should return `8`.
6. `findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` should return `19`.

## Before Output:
```javascript
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
```

## After Output:
```javascript
function findLongestWordLength(str) {
  var strSplit = str.split(' ');
  console.log(strSplit);
    var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
```