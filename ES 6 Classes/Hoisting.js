// In modern javaScirpt there are two ways of creating a function

// Function Declaration are hoisted
function sayHello() { }

// Function Expression  are not hoisted
const sayGoodbye = function () { };

// Function declaration should be prefferd over function expression way of creating a function because 
// function created by declaraion method are hoisted (that is moved to the top of the file) and ther is no need of using semicolon at the end of code

// In other ways it can also be stated as sayHello() function can be invoked before it has been declared but sayGoodbye can only be invoked after creating the method by expression method


// In the same way classes can be also declared by declaring and also by expression method

// class Declaration are not hoisted
class sayHello {
    constructor()
}

// Class expression are not hoisted
let sayGoodbye = class {
    constructor()
};

// Unlike the functions in javaScript classes do not get hoisted to the top of file
// Hence these classes or object constructors can not be invoked before creating

