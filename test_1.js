var test = require('./testing.js');

test.assert(5, add(3, 3), " idk");
test.assert(6, add(2, 4), " is it?");

// console.log(test);

function add(a, b) {
    return a + b
}