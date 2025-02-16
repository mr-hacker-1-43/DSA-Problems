const findMinMax = (arr) => {
    // Initialize smallest and largest with the first element of the array
    let smallest = arr[0];
    let largest = arr[0];

    // Loop through the array using forEach
    arr.forEach((num) => {
        if (num < smallest) {
            smallest = num;
        }
        if (num > largest) {
            largest = num;
        }
    });

    return { smallest, largest };
};

// Example array
const arr = [34, 15, 88, 2, -10, 44];

// Call the arrow function
const result = findMinMax(arr);

// Display the result
console.log(`Smallest: ${result.smallest}`);
console.log(`Largest: ${result.largest}`);
