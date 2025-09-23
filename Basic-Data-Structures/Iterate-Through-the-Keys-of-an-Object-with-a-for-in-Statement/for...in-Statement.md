# Iterate Through the Keys of an Object with a for...in Statement

Sometimes you need to iterate through all the keys within an object. You can use a _for...in_ loop to do this. The _for...in_ loop looks like:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

This code logs `milk 1` and `eggs 12`, with each key-value pair on its own line.

We defined the variable `food` in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

**NOTE:** Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

We've defined a function `countOnline` which accepts one argument, `allUsers`. Use a for...in statement inside this function to loop through the `allUsers` object and return the number of users whose `online` property is set to `true`. An example of an object which could be passed to `countOnline` is shown below. Each user will have an `online` property set to either `true` or `false`.

```javascript
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

### Instructions:
1. The function `countOnline` should use a `for in` statement to iterate through the object keys of the object passed to it.
2. The function `countOnline` should return `1` when the object `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` is passed to it
3. The function `countOnline` should return `2` when the object `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` is passed to it
4. The function `countOnline` should return `0` when the object `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` is passed to it

## Before Output:
```javascript
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

## After Output:
```javascript
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let count = 0;
  for (const user in allUsers) {
    if (allUsers[user].online === true) {
      count++;
    }
  }
  return count;
  //console.log(users, allUsers[users]);
  // Only change code above this line
}

console.log(countOnline(users));
console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }));
console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } })); 

```