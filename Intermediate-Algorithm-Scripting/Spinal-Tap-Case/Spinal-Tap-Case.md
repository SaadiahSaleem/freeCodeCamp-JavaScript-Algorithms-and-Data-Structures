# Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

### Instructions:
1. `spinalCase("This Is Spinal Tap")` should return the string `this-is-spinal-tap`.
2. `spinalCase("thisIsSpinalTap")` should return the string `this-is-spinal-tap`.
3. `spinalCase("The_Andy_Griffith_Show")` should return the string `the-andy-griffith-show`.
4. `spinalCase("Teletubbies say Eh-oh")` should return the string `teletubbies-say-eh-oh`.
5. `spinalCase("AllThe-small Things")` should return the string `all-the-small-things`.

## Before Output:
```javascript
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```

## After Output:
```javascript
function spinalCase(str) {
  
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toLowerCase().trim().split(/\s+/).join('-');
  
}

console.log(spinalCase('This Is Spinal Tap'));
```