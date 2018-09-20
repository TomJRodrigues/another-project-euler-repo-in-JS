// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function square(x) {
    return x * x;
}

var sumOfSquares = 0;
var sum = 0;
var squareOfSum = 0;
var difference = 0;
var i = 0;

for (i = 0; i < 101; i++) {
    sumOfSquares = sumOfSquares + square(i);
    console.log("sumOfSquares now equals: " + sumOfSquares);
}

for (i = 0; i < 101; i++) {
    sum = sum + i;
}
squareOfSum = square(sum);
console.log("squareOfSum now equals: " + squareOfSum);
difference = squareOfSum - sumOfSquares;
console.log("the difference between them is: " + difference);