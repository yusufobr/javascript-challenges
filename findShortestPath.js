class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item, priority) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift().item;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function findShortestPath(graph, start, end) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (const vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue();
        if (currentVertex === end) {
            const path = [];
            let vertex = end;
            while (vertex !== null) {
                path.unshift(vertex);
                vertex = previous[vertex];
            }
            return path;
        }

        for (const neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const distance = distances[currentVertex] + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return null; // No path found
}

// Example usage:
const weightedGraph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'D': 5 },
    'C': { 'A': 2, 'D': 1 },
    'D': { 'B': 5, 'C': 1 }
};
console.log(findShortestPath(weightedGraph, 'A', 'D')); // Output: ['A', 'C', 'D']
