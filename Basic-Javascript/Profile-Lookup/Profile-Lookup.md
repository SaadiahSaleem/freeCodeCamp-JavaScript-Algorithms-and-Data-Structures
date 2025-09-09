# Profile Lookup

We have an array of objects representing different people in our contacts lists.

A `lookUpProfile` function that takes `name` and a property (`prop`) as arguments has been pre-written for you.

The function should check if `name` is an actual contact's `firstName` and the given property (`prop`) is a property of that contact.

If both are true, then return the "value" of that property.

If `name` does not correspond to any contacts then return the string `No such contact`.

If `prop` does not correspond to any valid properties of a contact found to match `name` then return the string `No such property`.

### Instructions:
1. `lookUpProfile("Kristian", "lastName")` should return the string `Vos`
2. `lookUpProfile("Sherlock", "likes")` should return `["Intriguing Cases", "Violin"]`
3. `lookUpProfile("Harry", "likes")` should return an array
4. `lookUpProfile("Bob", "number")` should return the string `No such contact`
5. `lookUpProfile("Bob", "potato")` should return the string `No such contact`
6. `lookUpProfile("Akira", "address")` should return the string `No such property`

## Before Output:
```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```

## After Output:
```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  
  // Step 1: Loop through all contacts
  for (let i = 0; i < contacts.length; i++) {

    // Step 2: Check if the current contact's firstName matches the 'name' input
    if (contacts[i].firstName === name) {

      // Step 3: Check if the property exists on this contact
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; // Return the value of that property
      } else {
        return "No such property"; // Name matched, but property not found
      }

    }
  }

  // Step 4: If no contact matched the name at all
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```