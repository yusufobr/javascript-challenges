class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    autoComplete(prefix) {
        let node = this.root;
        const result = [];

        // Traverse to the node corresponding to the prefix
        for (const char of prefix) {
            if (!node.children[char]) {
                return result;
            }
            node = node.children[char];
        }

        // Perform DFS to find all words with the given prefix
        const dfs = (node, word) => {
            if (node.isEndOfWord) {
                result.push(prefix + word);
            }
            for (const char in node.children) {
                dfs(node.children[char], word + char);
            }
        };

        dfs(node, '');
        return result;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
console.log(trie.autoComplete("app")); // Output: ["apple", "app"]
