const squareList = arr => {
  // Only change code below this line
  // Filter only positive integers
  const positiveInt = arr.filter(num => num > 0 && Number.isInteger(num));
  console.log('Positive Integers:', positiveInt);

  // Square each number
  const squares = positiveInt.map(num => num * num);
  console.log('Squares:', squares);

  return squares;

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);