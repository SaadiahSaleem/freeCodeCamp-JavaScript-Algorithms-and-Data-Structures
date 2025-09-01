# Compound Assignment With Augmented Addition

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

```javascript
myVar = myVar + 5;
```
to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

```javascript
let myVar = 1;
myVar += 5;
console.log(myVar);
```
`6` would be displayed in the console.

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.

### Instructions:
1. `a` should equal `15`.
2. `b` should equal `26`.
3. `c` should equal `19`.
4. You should use the `+=` operator for each variable.
5. You should not modify the code above the specified comment.

## Before Output:
```javascript
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

## After Output:
```javascript
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
```