function deepClone(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (visited.has(obj)) {
        return visited.get(obj);
    }

    let clone = Array.isArray(obj) ? [] : {};
    visited.set(obj, clone);

    for (const key in obj) {
        clone[key] = deepClone(obj[key], visited);
    }

    return clone;
}

// Example usage:
const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};
const cloned = deepClone(original);
console.log(cloned); // Output: { a: 1, b: { c: 2, d: [3, 4] } }
