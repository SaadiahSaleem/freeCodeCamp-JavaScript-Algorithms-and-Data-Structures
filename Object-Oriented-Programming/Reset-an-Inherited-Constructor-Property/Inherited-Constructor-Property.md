# Reset an Inherited Constructor Property

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.

Here's an example:

```javascript
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set the constructor property of `Bird` to the `Bird` object:

```javascript
Bird.prototype.constructor = Bird;
duck.constructor
```

Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.

### Instructions:
1. `Bird.prototype` should be an instance of `Animal`.
2. `duck.constructor` should return `Bird`.
3. `Dog.prototype` should be an instance of `Animal`.
4. `beagle.constructor` should return `Dog`.

## Before Output:
```javascript
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

## After Output:
```javascript
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


Bird.prototype.constructor = Bird;
let duck = new Bird();
duck.constructor
Dog.prototype.constructor = Dog;
let beagle = new Dog();
beagle.constructor
```