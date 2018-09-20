// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10,001st prime number?

var i = 13;
var j = 0;
var primes = [2, 3, 5, 7, 11, 13];

for (i = 15; i < 100; i = i + 2) {
    for (j = primes.length; j > -1; j--) {
        if (i % primes[j] === 0) {
            i = i + 2;
        }
        else {
            j--;
        }
        if (j === 0) {
            primes.push(i);
            console.log(primes);
        }
    }
}
console.log(primes);