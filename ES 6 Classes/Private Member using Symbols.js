// We know that abstraction is a core principal of object oriented proggraming
// Abstraction means hiding the details and complexity and only showing the required part 
// We hide certain members of the object so that they wont be visible from the outside

const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
    }
}

const c = new Circle(25);
const key = Object.getOwnPropertySymbols(c) [0];
console.log(c[key]);