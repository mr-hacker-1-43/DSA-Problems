// Definition of a Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to find the max value in the binary tree
function findMax(root) {
    if (root === null) return -Infinity; // Base case

    let leftMax = findMax(root.left);  // Max in left subtree
    let rightMax = findMax(root.right); // Max in right subtree

    return Math.max(root.value, leftMax, rightMax); // Return max of all
}

// Creating the sample tree
let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);
root.right.right = new TreeNode(25);

console.log("Maximum value in tree:", findMax(root)); // Output: 50
/*
Tree
     10
    /  \
  20   30
 /  \    \
40   50   25

*/
