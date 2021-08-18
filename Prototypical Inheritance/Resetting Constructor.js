function Shape() {
}

Shape.prototype.duplicate = function() {
    return 'duplicate';
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.constructor = Ciircle;
// new Circle.prototype.constructor() => new Circle;
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    return 'draw';
}

const s = new Shape();
const c = new Circle(1);