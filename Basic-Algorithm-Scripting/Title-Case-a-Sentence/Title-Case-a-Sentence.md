# Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.

### Instructions:
1. `titleCase("I'm a little tea pot")` should return a string.
2. `titleCase("I'm a little tea pot")` should return the string `I'm A Little Tea Pot`.
3. `titleCase("sHoRt AnD sToUt")` should return the string `Short And Stout`.
4. `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` should return the string `Here Is My Handle Here Is My Spout`.

## Before Output:
```javascript
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

## After Output:
```javascript
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
```