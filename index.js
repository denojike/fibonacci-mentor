
const { uuid } = require('uuid');

function generateFibonacciSequence(length) {
    let fibonacciList = [0, 1];
    for (let i = 2; i < length; i++) {
        fibonacciList.push(fibonacciList[i - 1] + fibonacciList[i - 2]);
    }
    return fibonacciList;
}

// Usage
const fibonacciList = generateFibonacciSequence(10);
console.log(fibonacciList);


module.exports = { generateFibonacciSequence };
