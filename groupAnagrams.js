function groupAnagrams(words) {
  const hashTable = {};

  // Iterate through the input array
  for (const word of words) {
    // Sort the characters of the word to create a key
    const sortedWord = word.split('').sort().join('');

    // If the key exists in the hash table, add the word to its bucket
    // Otherwise, create a new bucket with the key and add the word
    if (hashTable[sortedWord]) {
      hashTable[sortedWord].push(word);
    } else {
      hashTable[sortedWord] = [word];
    }
  }

  // Construct the final array by iterating through the hash table
  const result = [];
  for (const key in hashTable) {
    result.push(hashTable[key]);
  }

  return result;
}

// Example usage:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);
