class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For an undirected graph
    }

    dfs(start: number) {
        const visited: Set<number> = new Set();
        const result: number[] = [];

        const traverse = (vertex: number) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
            const neighbors = this.adjacencyList.get(vertex);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        traverse(neighbor);
                    }
                }
            }
        };

        traverse(start);
        return result;
    }
}

// For example
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

const result = graph.dfs(1);
console.log(result); // Output: [1, 2, 4, 3, 5]
