function removeFirstTwo(list) {
    const[a, b, ...arr] = list;
    return arr;
}

console.log(removeFirstTwo([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(removeFirstTwo([1, 2, 3]));       // [3]