function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  let result = [];

  for (let char of str) {
    result.push([char, pairs[char]]);
  }

  return result;
}

console.log(pairElement("GCG"));
