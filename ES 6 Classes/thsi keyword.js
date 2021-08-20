'use strict';

// by using the above text we enable the strict mode and instead of getting an error now we will get undefined

const Circle = function () {
    this.draw = function () {
        return this;
    }
};

const c = new Circle();
console.log(c.draw());          // Method Call

const draw = c.draw;
console.log(draw());            // Function call


// By default the JavaScript will read the body of class in strict mode hence preventing us from modifying the global classes
// Remember modifying the global classes is a bad practice

class Square {
    drawing() {
        console.log(this);
    }
}

const c1 = new Square();
const drawing = c1.drawing;
drawing();