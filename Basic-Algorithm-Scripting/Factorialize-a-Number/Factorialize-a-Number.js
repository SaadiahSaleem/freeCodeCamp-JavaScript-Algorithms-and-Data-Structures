function factorialize(num) {
  let result = 1;
  if(num>=0){
    for(let i=1; i<=num; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));