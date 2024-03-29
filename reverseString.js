function reverseString(str) {
    // Using built-in string methods split, reverse, and join
    return str.split('').reverse().join('');
}

// Example usage:
const str = "Hello World";
console.log(reverseString(str)); // Output: "dlroW olleH"
