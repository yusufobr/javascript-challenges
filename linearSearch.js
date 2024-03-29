function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage:
const arr = [3, 7, 2, 9, 5];
console.log(linearSearch(arr, 2)); // Output: 2 (index)
