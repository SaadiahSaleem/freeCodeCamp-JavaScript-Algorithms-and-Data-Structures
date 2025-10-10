function addTogether() {
  const [first, second] = arguments;

  // Helper to check if a value is a number
  function isNumber(val) {
    return typeof val === "number";
  }

  // Case 1: Two arguments
  if (arguments.length === 2) {
    return (isNumber(first) && isNumber(second)) ? first + second : undefined;
  }

  // Case 2: One argument
  if (arguments.length === 1 && isNumber(first)) {
    return function(secondArg) {
      return isNumber(secondArg) ? first + secondArg : undefined;
    };
  }

  // Fallback
  return undefined;
}


console.log(addTogether(2,3));