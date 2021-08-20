// In javaScript there are two types of methods 
// Instance method and statiic method

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        return 'draw';
    }

    // Static Method are used to create utility functions for a particular class and not for any particular object
    static parse(str){
        // This static method is not available with a particular object but can be accessed via Circle class
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

let c = Circle.parse('{"radius": 1}');
console.log(c);
console.log(c.draw());