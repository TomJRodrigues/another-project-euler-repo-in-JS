// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function reverseNumber(a) {
    a = a + "";
    var str = a.split("").reverse().join("");
    var b = parseInt(str);
    return b;
}
var i;
var j;
var k;
var biggestPalindrome = 0;
for (i = 100; i < 1000; i++) {
    for (j = 100; j < 1000; j++) {
        k = i * j;
        if ((k) === (reverseNumber(k))) {
            console.log(k + " is the same as: " + reverseNumber(k));
            if (k > biggestPalindrome) {
                biggestPalindrome = k;
                console.log("Biggest Palindrome so far: " + k);
            }
        }
    }
}
console.log("Biggest Palindrome: " + biggestPalindrome);