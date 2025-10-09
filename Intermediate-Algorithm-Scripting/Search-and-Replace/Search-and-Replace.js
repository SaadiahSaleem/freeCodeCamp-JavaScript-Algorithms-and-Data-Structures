function myReplace(str, before, after) {
   if (before[0] === before[0].toUpperCase()) {
    // Capitalize 'after' as well
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    // Otherwise make sure 'after' starts lowercase
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
