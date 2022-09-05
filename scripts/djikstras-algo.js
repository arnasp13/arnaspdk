"use strict";

// the graph
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = node;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

const djikstra = () => {
  let node = findLowestCostNode(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbours = graph[node];

    Object.keys(neighbours).forEach((i) => {
      const new_cost = neighbours[i] + cost;
      if (costs[i] > new_cost) {
        costs[i] = new_cost;
        parents[i] = node;
      }
    });
    // Mark the node as processed
    processed = processed.concat(node);

    // Find the next node to process, and loop
    node = findLowestCostNode(costs);
  }
};

console.log("Costs in the beginning:");
console.log({ costs });

djikstra();

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
