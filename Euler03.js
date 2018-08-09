// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var factors = [];
var i;
var product = 1;
var a = 600851475143;
for (i = 0; i < a; i++) {
    if (product === a){
        break;
    }
    if (a % i === 0) {
        product = product * i;
        factors.push(i);
    }
}
factors.splice(0, 1);
console.log("The prime factors are: " + factors);
console.log("The largest prime factor is: " + factors.pop());