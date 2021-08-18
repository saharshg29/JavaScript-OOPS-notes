
function Shape() {
}

Shape.prototype.duplicate = function () {
    return 'duplicate';
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
    return 'draw';
}

const s = new Shape();
const c = new Circle(1);

for (let key in c)
    console.log(key)

for (let key in s)
    console.log(key)