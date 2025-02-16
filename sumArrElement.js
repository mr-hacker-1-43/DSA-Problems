const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of elements (n): ", (n) => {
  n = parseInt(n);
  rl.question("Enter the array elements separated by space: ", (input) => {
    const arr = input.split(" ").map(Number);

    if (arr.length !== n) {
      console.log("Error: Number of elements does not match 'n'.");
    } else {
      const sumArrItem = (n, arr) => {
        let total = 0;
        for (let i = 0; i < n; i++) {
          total += arr[i];
        }
        return total;
      };

      console.log("Sum of array elements:", sumArrItem(n, arr));
    }

    rl.close();
  });
});
