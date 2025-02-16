const bubbleSort = (arr) => {
    // Optimized Bubble Sort with early termination
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let swapped = false; // Initialize swapped flag
  
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {  //Comparision
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true; // Set flag to true when a swap occurs
        }
      }
  
      // If no swaps were made, the array is already sorted
      if (!swapped) break;
    }
  
    return arr;
  };
  
  let arr = [12, 3.2, 1.2, 3.12, 21, 5, 7, 8, 4, 9, 0, 32, 3, 2, 3, 2.1, 1, 33];
  console.log("Sorted Array:", bubbleSort(arr));
  