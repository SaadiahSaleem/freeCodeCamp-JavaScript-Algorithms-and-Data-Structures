let i = 'function scope'; // Global scope
function checkScope() {
    let i = 'function scope'; // Function scope
    if (true) {
        let i = 'block scope'; // Block scope
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
console.log(checkScope(i));