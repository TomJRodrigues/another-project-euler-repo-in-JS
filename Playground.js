let a = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
    let sortedArr = arr.sort();
    let minSum = 0;
    let maxSum = 0;
    let i = 0;
    for (i; i < arr.length - 1; i++) {
        minSum += sortedArr[i]
    }
    let j = 1;
    for (j; j < arr.length; j++) {
        maxSum += sortedArr[j]
    }
    console.log(minSum + " " + maxSum);
}

miniMaxSum(a);