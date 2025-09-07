# Manipulating Complex Objects

Sometimes you may want to store data in a flexible _Data Structure_. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of _strings_, _numbers_, _booleans_, _arrays_, _functions_, and _objects_.

Here's an example of a complex data structure:

```javascript
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

This is an array which contains one object inside. The object has various pieces of _metadata_ about an album. It also has a nested `formats` array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, `"artist": "Daft Punk"` is a property that has a key of `artist` and a value of `Daft Punk`.

**Note**: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.

### Instructions:
1. `myMusic` should be an array
2. `myMusic` should have at least two elements
3. The elements in the `myMusic` array should be objects
4. Your object in `myMusic` should have at least 4 properties
5. Your object in `myMusic` should contain the property `artist` which is a string
6. Your object in `myMusic` should contain the property `title` which is a string
7. Your object in `myMusic` should contain the property `release_year` which is a number
8. Your object in `myMusic` should contain a `formats` property which is an array
9. `formats` should be an array of strings with at least two elements

## Before Output:
```javascript
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

## After Output:
```javascript
const myMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```