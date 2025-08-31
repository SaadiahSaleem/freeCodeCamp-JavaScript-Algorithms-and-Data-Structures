# Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means *"Not a Number"*. If you concatenate a string with an `undefined` variable, you will get a string of `undefined`.

Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.

### Instructions:
1. `a` should be defined and have a final value of `6`.
2. `b` should be defined and have a final value of `15`.
3. `c` should not contain `undefined` and should have a final value of the string `I am a String!`
4. You should not change code below the specified comment.

## Before Output:

```javascript
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

## After Output: 

```javascript
// Only change code below this line
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```
