function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.location = {x :1};
circle['location'] = { y:1 };
console.log(circle);

delete circle.location()