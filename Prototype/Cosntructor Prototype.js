function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        return 'move';
    }
}

Circle.prototype.draw = function () {
    this.move();
    return 'draw';
}

Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}

const c1 = new Circle(1)
const c2 = new Circle(2)

console.log(c1);
console.log(c2);

console.log(c1.draw());
console.log(c2.toString());

console.log(c1.move());
// There are two type of properties and methods in javaScript
// Instance members
// Prototype members

// Returns only instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1)
    console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));

// Remember not to modify objects that you dont know or are built in methods
