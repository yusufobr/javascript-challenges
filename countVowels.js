function countVowels(str) {
    const vowels = /[aeiou]/gi; // Regular expression to match vowels (case-insensitive)
    const matches = str.match(vowels); // Match vowels in the string
    return matches ? matches.length : 0; // Return the number of matches (vowels)
}

// Example usage:
const str = "Hello World";
console.log(countVowels(str)); // Output: 3
