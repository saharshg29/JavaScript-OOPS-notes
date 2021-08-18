// Object oriented programming is an important tool which one must have as a developer

// There are four pillars of Object Oriented Proggraming


// let us identify the problem between prcedural paradigm and object oriented paradigm by small code snippets

// Procedural Oriented Proggraming
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getwage(baseSalary, overTime, rate) {
    return baseSalary + overTime * rate
}
console.log(getwage(baseSalary, overTime, rate));

// Object Oriented Proggraming
let employee = {
    baseSalary : 30000,
    overTime : 25,
    rate: 20,
    getwage : function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

console.log(employee.getwage())

// Four pillars of Object Oriented Proggraming are
// Encapsulation
// Abstraction
// Inheritance


// Abstraction benefits
// will give simpler interface and will reduce the impact of change

// Inheritance helps in removing the reductant code

// In Object Oriented Proggraming Polymorphism helps us in reducing the no of if-else condition or switch-case statement

// Benefits of Object Oriented Proggraming
// Encapsulation -> Reduces complexity + Increases reusability
// Abstraction -> Reduce complexity + isolate impact of change
// Inheritance -> Eliminate redundant code
// Polymorphism -> Refactors ugly switch/case statements
