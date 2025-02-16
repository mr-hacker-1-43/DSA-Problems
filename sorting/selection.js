const selectionSort = (arr) => { // O(n^2)
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let smallestIndex = i; // Initialize the smallest index with the current position
  
      // Find the index of the smallest element in the remaining unsorted part
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[smallestIndex]) { //Comparision
          smallestIndex = j;
        }
      }
  
      // Swap the current element with the smallest element found
      if (smallestIndex !== i) {
        [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]; // Destructuring for swapping
      }
    }
  
    return arr;
  };
  
  let arr = [10, 9, 3, 6, 7, 2, 4, 5,1,8];
  console.log("Sorted Array:", selectionSort(arr));
  