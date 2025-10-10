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