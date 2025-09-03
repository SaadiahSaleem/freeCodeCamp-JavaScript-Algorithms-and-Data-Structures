# Global Scope and Functions

In JavaScript, _scope_ refers to the visibility of variables. Variables which are defined outside of a function block have _Global_ scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the `let` or `const` keywords are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `let` or `const`.

Using `let` or `const`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.

Inside function `fun1`, assign `5` to `oopsGlobal` **without** using the `var`, `let` or `const` keywords.

### Instructions:
1. `myGlobal` should be defined
2. `myGlobal` should have a value of `10`
3. `myGlobal` should be declared using the `let` or `const` keywords
4. `oopsGlobal` should be a global variable and have a value of `5`

## Before Output:
```javascript
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

## After Output:
```javascript
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here

}
let oopsGlobal = 5;
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```