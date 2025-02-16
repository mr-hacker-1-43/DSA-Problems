// JavaScript program for the above approach

// Function to find a pair in the given
// array whose sum is equal to z
function findPair(a, n, z)
{
	
	// Iterate through all the pairs
	for(let i = 0; i < n; i++)
		for(let j = 0; j < n; j++)
		
			// Check if the sum of the pair
			// (a[i], a[j]) is equal to z
			if (i != j && a[i] + a[j] == z)
				return true;

	return false;
}

// Driver Code

// Given Input
let a = [ 1, -2, 1, 0, 5,-1 ];
let aa=[2,7,11,15];
let z = 0;
let n = a.length;

// Function Call
if (findPair(a, n, z))
    console.log(true);
    
else
    console.log(false);