// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
    cook(){
        console.log("The vegetable is: " + this.Cook + "!");
    }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
carrot.name;
console.log(carrot.name); // Should display 'carrot'