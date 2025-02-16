const insertionSort = (arr) => {  //   O(n^2)
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i]; // The element to be inserted
      let j = i - 1;
  
      // Move elements that are greater than `key` one position ahead
      while (j >= 0 && arr[j] > key) { //Comparision
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the `key` at its correct position
      arr[j + 1] = key;
    }
  
    return arr;
  };
  
  let arr = [9, 3, 7, 6, 2, 1, 8, 5];
  console.log("Sorted Array:", insertionSort(arr));
  