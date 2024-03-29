function removeDuplicates(arr) {
    const uniqueArray = [];
    const hashTable = {};

    for (const num of arr) {
        if (!hashTable[num]) {
            uniqueArray.push(num);
            hashTable[num] = true;
        }
    }

    return uniqueArray;
}

// Example usage:
const arr = [1, 3, 2, 1, 5, 2, 6];
console.log(removeDuplicates(arr)); // Output: [1, 3, 2, 5, 6]
