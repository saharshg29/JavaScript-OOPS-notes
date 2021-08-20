// Implementing Inheritance in ES6 Classes

class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('red');
console.log(c.move());
console.log(c.draw());
console.log(c.color);

// In ES-6 constructor are used in parent class
// In order to use constructor in child class first we need to initialize the super constructor within the child constructor