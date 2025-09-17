# Find More Than the First Match

So far, you have only been able to extract or search a pattern once.

```javascript
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Here `match` would return `["Repeat"]`.

To search or extract a pattern more than once, you can use the global search flag: `g`.

```javascript
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

And here `match` returns the value `["Repeat", "Repeat", "Repeat"]`

Using the regex `starRegex`, find and extract both `Twinkle` words from the string `twinkleStar`.

**Note**
You can have multiple flags on your regex like `/search/gi`

### Instructions:
1. Your regex `starRegex` should use the global flag `g`
2. Your regex `starRegex` should use the case insensitive flag `i`
3. Your match should match both occurrences of the word `Twinkle`
4. Your match `result` should have two elements in it.

## Before Output:
```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

## After Output:
```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
```