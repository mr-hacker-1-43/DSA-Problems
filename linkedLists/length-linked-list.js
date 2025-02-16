// Definition for a Linked List Node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to find the length of the linked list
function getLength(head) {
    let count = 0;
    let current = head;
    
    while (current !== null) {
        count++; // Increment counter
        current = current.next; // Move to next node
    }
    
    return count;
}

// Creating a sample linked list: 1 → 2 → 3 → 4 → 5 → null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Length of linked list:", getLength(head)); // Output: 5

// input linked list
// 1 → 2 → 3 → 4 → 5 → null
