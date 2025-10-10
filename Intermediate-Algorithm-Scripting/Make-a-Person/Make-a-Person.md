# Make a Person

Fill in the object constructor with the following methods below:

```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new `Person` instance as `new Person('Bob', 'Ross')`.

### Instructions:
1. You should not change the function signature.
2. You should not reassign the `first` parameter.
3. You should not reassign the `last` parameter.
4. No properties should be added. `Object.keys(Person).length` should always return `6`.
5. You should be able to instantiate your `Person` object.
6. Your `Person` object should not have a `firstName` property.
7. Your `Person` object should not have a `lastName` property.
8. The `.getFirstName()` method should return the string `Bob`.
9. The `.getLastName()` should return the string `Ross`.
10. The `.getFullName()` method should return the string `Bob Ross`.
11. The `.getFullName()` method should return the string `Haskell Ross` after calling `.setFirstName('Haskell')`.
12. The `.getFullName()` method should return the string `Bob Curry` after calling `.setLastName('Curry')`.
13. The `.getFullName()` method should return the string `Haskell Curry` after calling `.setFullName('Haskell', 'Curry')`.
14. The `.getFirstName()` method should return the string `Haskell` after calling `.setFullName('Haskell', 'Curry')`.
15. The `.getLastName()` method should return the string `Curry` after calling `.setFullName('Haskell', 'Curry')`.
16. The `.getFullName()` method should return the string `Emily Martinez de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.
17. The `.getFirstName()` property should return the string `Emily Martinez` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.
18. The `.getLastName()` property should return the string `de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.

## Before Output:
```javascript
const Person = function(first, last) {
  this.getFullName = function() {
    return "";
  };
  return "";
};
```

## After Output:
```javascript
const Person = function(first, last) {
  // Private variables
  let firstName = first;
  let lastName = last;

  // 1. Getter: First name
  this.getFirstName = function() {
    return firstName;
  };

  // 2. Getter: Last name
  this.getLastName = function() {
    return lastName;
  };

  // 3. Getter: Full name
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  // 4. Setter: First name
  this.setFirstName = function(newFirst) {
    firstName = newFirst;
  };

  // 5. Setter: Last name
  this.setLastName = function(newLast) {
    lastName = newLast;
  };

  // 6. Setter: Full name (two arguments)
  this.setFullName = function(newFirst, newLast) {
    firstName = newFirst;
    lastName = newLast;
  };
};

const p = new Person("Bob", "Ross");

console.log(p.getFullName());
p.setFirstName("Haskell");
console.log(p.getFullName());         

p.setLastName("Curry");
console.log(p.getFullName());         

p.setFullName("Emily Martinez", "de la Rosa");
console.log(p.getFirstName());        
console.log(p.getLastName());         
console.log(p.getFullName());         

console.log(Object.keys(p).length);   
console.log(Object.keys(p));     
```