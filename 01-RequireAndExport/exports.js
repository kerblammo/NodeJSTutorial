//we can define constants to be exported
exports.five = 5;
exports.author = "Peter";

//we can also define functions
exports.double = twofold;
exports.triple = triple; //note that they can have the same name

/**
 * Double a number, or increase it twofold.
 * @param {number} num The number to increase twofold
 * @returns {number} The doubled number
 */
function twofold(num) {
    return num * 2;
}

/**
 * Triple a number
 * @param {number} num The number to be tripled
 * @returns {number} The tripled number
 */
function triple(num){
    return num * 3;
}