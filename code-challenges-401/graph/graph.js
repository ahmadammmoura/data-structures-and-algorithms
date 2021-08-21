const Edge = require('./edge')
const Vertex = require('./vertex')


class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addEdge(start, end, weight = 0) {
    
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw Error("invalid vertices");
    }

    const listOfEdges = this.adjacencyList.get(start);
    listOfEdges.push(new Edge(end, weight));
  }

  getNodes() {
    return this.adjacencyList;
  }

  getNeighbors(node) {
    return [...this.adjacencyList.get(node)];
  }

  size() {
    return this.adjacencyList.size;
  }
}


module.exports = Graph