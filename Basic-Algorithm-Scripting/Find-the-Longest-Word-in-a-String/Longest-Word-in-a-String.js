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