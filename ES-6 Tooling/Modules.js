const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

const c = new Circle(90);
c.draw();
console.log(_radius.get(c));

// Benefits of using modules 
// Maintainability
// Reuseability
// Abstraction

// In ES-5 we dont had the concept of Modules
// There are two kind of modules format that were used by some of the developers
// AMD - Asynchronus Module Definition it is widely used in Browsers
// CommonJS - is used in Node.js
// UMD - Universal Module Definition are used widely in Browser or Node.js
// ES6 Mosdules - are used in Browser

