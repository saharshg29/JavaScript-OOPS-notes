function mixin(target, ...sources) {
    Object.assign(target, ...sources); 
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
};

function Person() {
}

// Assign method of object can be used to copy all the properties from one objecat to another
const person = mixin(Person.prototype, canEat, canWalk);
console.log(person);

function Goldfish() {
}

const goldfish = mixin(Goldfish.prototype, canSwim, canEat);
console.log(goldfish);
