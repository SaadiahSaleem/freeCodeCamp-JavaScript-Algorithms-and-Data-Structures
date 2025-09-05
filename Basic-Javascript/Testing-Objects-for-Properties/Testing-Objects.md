# Testing Objects for Properties

To check if a property on a given object exists or not, you can use the `.hasOwnProperty()` method. `someObject.hasOwnProperty(someProperty)` returns `true` or `false` depending on if the property is found on the object or not.

**Example**
```javascript
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

The first `checkForProperty` function call returns `true`, while the second returns `false`.

Modify the function `checkObj` to test if the object passed to the function parameter `obj` contains the specific property passed to the function parameter `checkProp`. If the property passed to `checkProp` is found on `obj`, return that property's value. If not, return `Not Found`.

### Instructions:
1. `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` should return the string `pony`.
2. `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` should return the string `kitten`.
3. `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` should return the string `Not Found`.
4. `checkObj({city: "Seattle"}, "city")` should return the string `Seattle`.
5. `checkObj({city: "Seattle"}, "district")` should return the string `Not Found`.
6. `checkObj({pet: "kitten", bed: "sleigh"}, "gift")` should return the string `Not Found`.

## Before Output:
```javascript
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
```

## After Output:
```javascript
function checkObj(obj, checkProp) {
  // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }


  // Only change code above this line
}
```