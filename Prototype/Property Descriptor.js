let person = { naame: 'Saharsh' }
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

for (let keys in person)
    console.log(keys);


// Changiing the value of properties of an Object

let person1 = { name: 'Saharsh' };

Object.defineProperty(person1, 'name', {
    writable: false,
    enumerable: true,
    configurable: false,
});
delete person.name;
person1.name = 'John';

console.log(person1)
console.log(Object.keys(person1));