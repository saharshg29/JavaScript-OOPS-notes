function Extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function () {
    return 'Duplicate';
}

function Circle() {
}

Extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    return 'Duplicate Circle.';
}
for (let keys in Circle)
    console.log(keys)