# Change the Prototype to a New Object

Up until now you have been adding properties to the `prototype` individually:

```javascript
Bird.prototype.numLegs = 2;
```

This becomes tedious after more than a few properties.

```javascript
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the `prototype` to a new object that already contains the properties. This way, the properties are added all at once:

```javascript
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Add the property `numLegs` and the two methods `eat()` and `describe()` to the `prototype` of `Dog` by setting the `prototype` to a new object.

### Instructions:
1. `Dog.prototype` should be set to a new object.
2. `Dog.prototype` should have the property `numLegs`.
3. `Dog.prototype` should have the method `eat()`.
4. `Dog.prototype` should have the method `describe()`.

## Before Output:
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

## After Output:
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
