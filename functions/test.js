// console.log(6 == 1 + 1)
console.log(6 === add(2, 4))

function add(x, y) {

    return x + y;
}


function sub(x, y) {

    return x - y;
}
console.log(2 === sub(3, 1));

function multi(x, y) {

    return x * y;
}
console.log(3 === multi(3, 1));

function divide(x, y) {

    return x / y;
}
console.log(3 === multi(3, 1));

function assert(expected, actual, message) {

    if (expected === actual) {
        return true;
    } else {
        console.log(message)
    }

}
assert(6, add(4, 2), "should be true");
assert(6, add(4, 4), "should be false");