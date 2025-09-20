# Use an Array to Store a Collection of Data

The below is an example of the simplest implementation of an array data structure. This is known as a _one-dimensional array_, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains _booleans_, _strings_, and _numbers_, among other valid JavaScript data types:

```javascript
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

The `console.log` call displays `7`.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax `Array.length`. A more complex implementation of an array can be seen below. This is known as a _multi-dimensional array_, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

```javascript
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

We have defined a variable called `yourArray`. Complete the statement by assigning an array of at least 5 elements in length to the `yourArray` variable. Your array should contain at least one _string_, one _number_, and one _boolean_.

### Instructions:
1. `yourArray` should be an array.
2. `yourArray` should be at least 5 elements long.
3. `yourArray` should contain at least one `boolean`.
4. `yourArray` should contain at least one `number`.
5. `yourArray` should contain at least one `string`.

## Before Output:
```javascript
let yourArray; // Change this line
```

## After Output:
```javascript
let yourArray = ['one', 2, 'three', true, false, undefined, null]; // Change this line
```