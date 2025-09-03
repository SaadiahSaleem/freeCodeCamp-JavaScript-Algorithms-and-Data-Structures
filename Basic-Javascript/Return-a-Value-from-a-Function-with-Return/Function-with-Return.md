# Return a Value from a Function with Return

We can pass values into a function with _arguments_. You can use a return statement to send a value back out of a function.

**Example**
```javascript
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` has the value `8`.

`plusThree` takes an _argument_ for `num` and returns a value equal to `num + 3`.

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value.

### Instructions:
1. `timesFive` should be a function
2. `timesFive(5)` should return `25`
3. `timesFive(2)` should return `10`
4. `timesFive(0)` should return `0`

## Before Output:
```javascript

```

## After Output:
```javascript
function timesFive(num) {
  return num * 5;
}

const answer1 = timesFive(5);
const answer2 = timesFive(2);
const answer3 = timesFive(0);
```