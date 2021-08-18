function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    return 'duplicate';
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius;
}

prototyper(Square, Shape)
// These lines have been encapsulated within function prototyper in order to increase the reusability and also to make the code attractive
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape('blue');
const c = new Circle(1);

function Square(size, color) {
    Shape.call(this, color)
    this.size = size;
}

prototyper(Circle, Shape)
// These lines have been encapsulated within function prototyper in order to increase the reusability and also to make the code attractive
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

const sq = new Square(10);
for (let key in sq)
console.log(key);

function prototyper(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}