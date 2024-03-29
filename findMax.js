function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
    }
    
    let max = arr[0]; // Initialize max with the first element
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is larger
        }
    }
    
    return max;
}

// Example usage:
const numbers = [3, 7, 2, 9, 5];
console.log(findMax(numbers)); // Output: 9
