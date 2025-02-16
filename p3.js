const readline = require('readline');

// Create an interface to read lines from the standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("Enter numbers separated by commas (e.g., 1,2,3,4,5): ", (input) => {
    // Convert the input string into an array of numbers
    const arr =input.split(',').map(Number);
    console.log(input);
    console.log(arr);
    

    // Function to reverse the array in place
    const reverseArrayInPlace = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        return arr;
    };

    // Reverse the array and display the result
    const reversedArray = reverseArrayInPlace(arr);
    console.log("Reversed Array:", reversedArray);

    // Close the readline interface
    rl.close();
});
