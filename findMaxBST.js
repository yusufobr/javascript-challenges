class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMax(root) {
  if (!root) {
    return null; // Return null for empty trees
  }

  let current = root;

  // Traverse to the rightmost node of the BST
  while (current.right) {
    current = current.right;
  }

  return current.value; // Return the value of the rightmost node
}

// Example usage:
// Constructing a sample binary search tree
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// Finding the largest element in the BST
const maxValue = findMax(root);
console.log("The largest element in the BST is:", maxValue);
