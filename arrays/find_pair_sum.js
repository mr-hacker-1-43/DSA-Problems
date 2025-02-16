// Optimized function to find a pair whose sum equals z
function hasPairWithSum(arr, targetSum) {
    let seenNumbers = new Set();

    for (let num of arr) {
        let complement = targetSum - num;
        if (seenNumbers.has(complement)) {
            return true; // Found a pair
        }
        seenNumbers.add(num);
    }

    return false; // No pair found
}

// Driver Code
let arr1 = [1, -2, 1, 0, 5, -1];
let arr2 = [2, 7, 11, 15];
let target = 0;

// Function Call
console.log(hasPairWithSum(arr1, target)); // Output: true
console.log(hasPairWithSum(arr2, target)); // Output: false
