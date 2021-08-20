// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         return 'draw';
//     }
// }

// Now we will look at the better way of writting the same code

class Circle {
    constructor(radius) {       // constructor method is used to initislize an object
        this.radius = radius;
        this.move = function () { }        // This method is a part of object instance and not of a prototype
    }
    draw() {
        console.log('Draw');        // This method will be a part of prototype.
    }
}

const c = new Circle(1);
console.log(c);
console.log(typeof c);              // But these classes create an object
console.log(typeof Circle)          // Classes in javaScript are of function type