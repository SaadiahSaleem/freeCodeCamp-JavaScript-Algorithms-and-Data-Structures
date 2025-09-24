function confirmEnding(str, target) {
  let array = str.split('');
   let lastPart = array.slice(-target.length).join(''); // take last N chars and rejoin
   return lastPart === target;            // compare with target
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));