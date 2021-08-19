// Polymorphsim means many forms.
// It is a very powerful technique in Object Oriented Proggraming

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
    console.log('Hello world!')
}

Extend(Circle, Shape);

Square.prototype.duplicate = function () {
    return 'Duplicate Square';
}

function Square() {
    console.log('Hello world!')
}

Extend(Square, Shape);

Square.prototype.duplicate = function () {
    return 'Duplicate Square';
}

const c = new Circle();

console.log(c);

const s = new Square();

console.log(s);

const shapes = [new Circle(), new Square()];

for (shape of shapes)
    shape.duplicate();

// When to use Inheritance
// If a lot of object has same method then we can encapsulate that common method and apply inheritance polymorphism and all these stuffs


// Avoide creating iheritanace hierarchy as they are very fragile
// Always favour Composition over Inheritance
// Mixins can be used to create composition