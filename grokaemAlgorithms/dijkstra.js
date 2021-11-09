const { log: c } = console;

let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
// console.log(Object.keys(graph["start"]));
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

const find_lowest_cost_node = (costs) => {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  for (node in costs) {
    let cost = costs[node];
    if (cost < lowest_cost && processed.indexOf(node) === -1) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }

  return lowest_cost_node;
};

const dijkstra = () => {
  let node = find_lowest_cost_node(costs);
  while (node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];

    for (n of Object.keys(neighbors)) {
      let new_cost = cost + neighbors[n];
      if (costs[n] > new_cost) {
        costs[n] = new_cost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = find_lowest_cost_node(costs);
  }
};
console.log("costs:", costs);
console.log("parents:", parents);
console.log("processed:", processed);

dijkstra();
console.log("-".repeat(20));
console.log("costs:", costs);
console.log("parents:", parents);
console.log("processed:", processed);
