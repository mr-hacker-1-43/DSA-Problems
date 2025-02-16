
const greaterLowerNo = (arr) => {
  let smallest = arr[0]; // Initialize with the first element
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]; // Update smallest if a smaller number is found
    }
    if (arr[i] > largest) {
      largest = arr[i]; //Update largest if a larger number is found
    }
  }

  return { smallest, largest }; // Return the smallest number
};

let arr = [20, 12, 3, 34, 3, 23, 2, 3.3, 22];
// console.log("Number:", greaterLowerNo(arr));
let number = greaterLowerNo(arr);
console.log("Smallest No: ", +number.smallest);
console.log("Largest No: ", +number.largest);

/*
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

*/