const _radius = new WeakMap();           // WeakMap is actually a dictionary where keys are Object and values can be anything
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _radius.set(this, function () {
            console.log('move', this);
        });
    }

    draw() {
        console.log(_radius.get(this))
    }
}

const c = new Circle(1);