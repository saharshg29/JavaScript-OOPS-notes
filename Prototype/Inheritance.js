// Inheritance increases the reusability of code

// Inheritance are also of two types Classical and Prototypical

// Classical inheritance comes into action where we have classes
// Prototypical inheritance is what we are going to study in javaScript

// A prototype is just a regular object


function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);


// Objects and arrays created by same constructor will have the same prototype

