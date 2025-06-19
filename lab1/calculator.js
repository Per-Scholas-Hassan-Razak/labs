function sum(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    return a + b;
}

function subtract(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    return a - b;
}
function multiply(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    return a * b;
}
function divide(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return sum(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

console.log(calculate(10, 5, 'add')); // Output: 15
console.log(calculate(10, 5, 'subtract')); // Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: 50
console.log(calculate(10, 5, 'divide')); // Output: 2
console.log(calculate(10, 0, 'divide')); // Output: Cannot divide by zero
console.log(calculate(10, 5, 'modulus')); // Output: Invalid operation
console.log(calculate(10, '5', 'add')); // Output: Invalid input
console.log(calculate('10', 5, 'add')); // Output: Invalid input
console.log(calculate(10, 5, '')); // Output: Invalid operation
console.log(calculate(10, 5, null)); // Output: Invalid operation   
