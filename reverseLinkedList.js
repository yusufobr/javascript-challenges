class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head; // Return head if list is empty or has only one node
  }

  let prev = null;
  let current = head;

  while (current) {
    const next = current.next; // Store next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current node
    current = next; // Move current to next node
  }

  return prev; // Return the new head
}

// Example usage:
// Constructing a sample linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reversing the linked list
const reversedHead = reverseLinkedList(head);

// Printing the reversed linked list
let currentNode = reversedHead;
while (currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
