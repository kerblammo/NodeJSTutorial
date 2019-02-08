var ex = require('./exports');

//you can get a string
console.log('Author: ' + ex.author);
//or even a number
console.log('Number: ' + ex.five);

//you can call a function
console.log('Twice of five = ' + ex.double(5));
//and you can pass in arguments
console.log('Thrice of five = ' + ex.triple(ex.five));