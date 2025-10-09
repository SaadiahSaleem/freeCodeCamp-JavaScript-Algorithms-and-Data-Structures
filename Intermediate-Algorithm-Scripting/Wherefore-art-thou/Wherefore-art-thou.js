function whatIsInAName(collection, source) {
 const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    // check if every key in source exists in obj and has the same value
    return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });

}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));