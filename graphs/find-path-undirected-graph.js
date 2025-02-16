// Function to build an adjacency list from edges
function buildGraph(edges, n) {
    let graph = new Map();
    for (let i = 0; i < n; i++) graph.set(i, []);
    
    for (let [u, v] of edges) {
        graph.get(u).push(v);
        graph.get(v).push(u); // Since it's an undirected graph
    }
    return graph;
}

// DFS function to check if a path exists
function dfs(graph, src, dest, visited) {
    if (src === dest) return true; // Found path
    visited.add(src);
    
    for (let neighbor of graph.get(src)) {
        if (!visited.has(neighbor)) {
            if (dfs(graph, neighbor, dest, visited)) return true;
        }
    }
    
    return false;
}

// Function to check if a path exists between two nodes
function isPathExists(n, edges, src, dest) {
    let graph = buildGraph(edges, n);
    let visited = new Set();
    return dfs(graph, src, dest, visited);
}

// Example Usage
let edges = [[0,1], [0,2], [1,3], [2,3]];
let n = 4; // Number of nodes

console.log(isPathExists(n, edges, 0, 3)); // Output: true
console.log(isPathExists(n, edges, 1, 2)); // Output: true
console.log(isPathExists(n, edges, 0, 4)); // Output: false (Node 4 doesn't exist)

/*
    0 --- 1
    |     |
    2 --- 3

*/