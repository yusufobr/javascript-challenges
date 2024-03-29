function findIntersection(arr1, arr2) {
    const intersection = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] === arr2[pointer2]) {
            intersection.push(arr1[pointer1]);
            pointer1++;
            pointer2++;
        } else if (arr1[pointer1] < arr2[pointer2]) {
            pointer1++;
        } else {
            pointer2++;
        }
    }

    return intersection;
}

// Example usage:
const arr1 = [1, 3, 4, 6, 7];
const arr2 = [2, 3, 5, 6];
console.log(findIntersection(arr1, arr2)); // Output: [3, 6]
