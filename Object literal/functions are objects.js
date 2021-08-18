function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`)

const circlee = new Circle1(1);
console.log(circlee)

// Primitive value are copied by their values 
// Objects are copied by their references

let obj = {value: 10};
function increase(obj) {
    obj.value++
}

console.log(increase(obj));
console.log(obj);