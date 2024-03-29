class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findLCA(root, n1, n2) {
    if (!root || root.value === n1 || root.value === n2) {
        return root;
    }

    const leftLCA = findLCA(root.left, n1, n2);
    const rightLCA = findLCA(root.right, n1, n2);

    if (leftLCA && rightLCA) {
        return root;
    }

    return leftLCA ? leftLCA : rightLCA;
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(findLCA(root, 5, 1).value); // Output: 3
console.log(findLCA(root, 5, 4).value); // Output: 5
