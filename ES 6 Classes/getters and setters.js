// In ES-6 we can use getter and setter methods easily just by using get and set keywords in front of the property

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0){
            throw new Error('Invalid Radius...')
        }
        _radius.set(this, value);
    }
}

const c = new Circle(1);
console.log(c.radius);

console.log(c.radius);

c.radius = 45;
console.log(c.radius);

c.radius = -45;
console.log(c.radius);
