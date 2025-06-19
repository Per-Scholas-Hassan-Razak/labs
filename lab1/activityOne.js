let x = 1;
let y = 2;

function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    return a + b;
}

console.log(addNumbers(x,y));