# Compound Assignment With Augmented Subtraction

Like the `+=` operator, `-=` subtracts a number from a variable.

```javascript
myVar = myVar - 5;
```
will subtract `5` from `myVar`. This can be rewritten as:

```javascript
myVar -= 5;
```

Convert the assignments for `a`, `b`, and `c` to use the `-=` operator.

### Instructions:
1. `a` should equal `5`.
2. `b` should equal `-6`.
3. `c` should equal `2`.
4. You should use the `-=` operator for each variable.
5. You should not modify the code above the specified comment.

## Before Output:
```javascript
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

## After Output:
```javascript
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
```