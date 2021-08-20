class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move()
        return 'Circle Move';
    }
}

const c = new Circle()
console.log(c.move());