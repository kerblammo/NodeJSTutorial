// this is a function that takes a different function as
// a parameter
function doMath(operation){
    return operation(num1, num2);
}

// these are functions for the above function
function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

//let's put them to use
//start by defining our arguments
var num1 = 12;
var num2 = 6;

//now let's call our doMath function
//start by adding
console.log('12 + 6 = ' + doMath(add)); // 18

//subtraction
console.log('12 - 6 = ' + doMath(subtract)); //6

//multiplication
console.log('12 * 6 = ' + doMath(multiply)); //72

//divide
console.log('12 / 6 = ' + doMath(divide)); //2