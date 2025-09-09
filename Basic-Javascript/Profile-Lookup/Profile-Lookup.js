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