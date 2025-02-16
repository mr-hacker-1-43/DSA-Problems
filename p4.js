
// ascending and descending order Arrow Function
// Bubble Sort
const ascendingOrder = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
const descendingOrder = (arr) => {
    // Bubble Sort
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}  //Example usage
arr=[1, 2, 4, 32, 34, 2, 3, 43, 4, 3, 44, 34, 3, 4, 5];
asc = ascendingOrder(arr);
des = descendingOrder(arr);
console.log('bubble Sort ->', asc, des);
// selection Sort 
const selectionSortDescending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the first element of the unsorted part as the maximum
        let maxIndex = i;
        // Find the maximum element in the unsorted part
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        // Swap the found maximum element with the first element of the unsorted part
        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; // Swap using destructuring
        }
    }
    return arr;
};
const selectionSortAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the first element of the unsorted part as the maximum
        let maxIndex = i;
        // Find the maximum element in the unsorted part
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxIndex]) {
                maxIndex = j;
            }
        }
        // Swap the found maximum element with the first element of the unsorted part
        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; // Swap using destructuring
        }
    }
    return arr;
};
// Example usage
let arr1 = [5, 3, 8, 1, 4, 7];
console.log('Selection Sort');
console.log(selectionSortDescending(arr1)); // Output: [8, 7, 5, 4, 3, 1]
console.log(selectionSortAscending(arr1)); // Output: [8, 7, 5, 4, 3, 1]
