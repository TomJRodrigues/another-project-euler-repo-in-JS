// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
var i;
for (i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum += i;
    }
}
console.log(sum);

var sum2 = 0;
var j;
for (j = 0; j < 10; j++) {
    if ((j % 3 === 0) || (j % 5 === 0)) {
        sum2 += j;
        console.log(j + ' ' + sum2);
    }
}
console.log(sum2);