function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

let keys = Object.keys(circle);
console.log(keys);      // With these methodology we can not seperate properties from our object

if ('raidus' in circle) {
    console.log('Circle has a radius.');
}