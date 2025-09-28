# Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a `prototype`. Also, an object’s `prototype` itself is an object.

```javascript
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Because a `prototype` is an object, a `prototype` can have its own `prototype`! In this case, the `prototype` of `Bird.prototype` is `Object.prototype`:

```javascript
Object.prototype.isPrototypeOf(Bird.prototype);
```

How is this useful? You may recall the `hasOwnProperty` method from a previous challenge:

```javascript
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can then be accessed by `duck`. This is an example of the `prototype` chain. In this `prototype` chain, `Bird` is the `supertype` for `duck`, while `duck` is the `subtype`. `Object` is a `supertype` for both `Bird` and `duck`. `Object` is a `supertype` for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

Modify the code to show the correct prototype chain.

### Instructions:
1. Your code should show that `Object.prototype` is the prototype of `Dog.prototype`

## Before Output:
```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

## After Output:
```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```