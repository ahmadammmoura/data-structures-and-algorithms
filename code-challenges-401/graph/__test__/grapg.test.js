const Graph = require('../graph');
const Vertex = require('../vertex')
const Edge = require('../edge')
describe('graph', () => {
  test('Vertex add', () => {
    const graph = new Graph();
    const map = new Map();
  
    const vertex = new Vertex('test');
    map.set(vertex, []);
  
    graph.addVertex('test');
    expect(graph.adjacencyList).toEqual(map);
  });
  
  test('Edge added', () => {
    const graph = new Graph();
  
    const start = graph.addVertex('start');
    const end = graph.addVertex('end');
    const edge = new Edge(end);
  
    graph.addEdge(start, end);
    expect(graph.getNeighbors(start)[0]).toEqual(edge);
  });
  
  test('get all vertex', () => {
    const graph = new Graph();
  
    graph.addVertex('test');
  
    const vertex = new Vertex('test');
    const map = new Map();
    map.set(vertex, []);
  
    expect(graph.getNodes()).toEqual(map);
  });
});
