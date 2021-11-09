let graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["thom"] = [];
graph["jonny"] = [];
graph["peggy"] = [];

function breadthfirstsearch(g, first) {
  let sequence = g[first];
  while (sequence.length) {
    let person = sequence.shift();

    if (person[person.length - 1] === "m") {
      return person + " is mango seller";
    } else {
      sequence = sequence.concat(g[person]);
    }
  }

  return "There are no mango seller in the sequence";
}

// console.log(breadthfirstsearch(graph, "you"));

const classmates = {
  1: {
    id: 1,
    name: "Maria",
    gender: "female",
    friends: [4, 2, 3],
  },
  2: {
    id: 2,
    name: "Vova",
    gender: "male",
    friends: [1, 3, 4],
  },
  3: {
    id: 3,
    name: "Marina",
    gender: "female",
    friends: [2, 1, 5],
  },
  4: {
    id: 4,
    name: "Kate",
    gender: "female",
    friends: [1, 2, 5],
  },
  5: {
    id: 5,
    name: "Andrey",
    gender: "male",
    friends: [4, 3],
  },
};

// const getVertex = (adjList, vertexId) => Object.values(adjList).find(vertex => vertex.id === vertexId);

// const marina = getVertex(classmates, 3);
// const marinaFriends = marina.friends.map(friendId => getVertex(classmates, friendId));

class Graph {
  constructor(adjList = {}) {
    this.adjList = adjList;
  }

  getList() {
    return this.adjList;
  }

  addVertex(vertex) {
    const vertexId = vertex.id || new Date().getTime() + vertex.name;
    this.adjList[vertexId] = {
      ...vertex,
      id: vertexId,
    };
  }

  addEdge(firstVertexId, secondVertexId) {
    if (!this.adjList[firstVertexId] || !this.adjList[secondVertexId]) {
      return;
    }

    const isSecondVertexValidToAdd =
      this.adjList[firstVertexId].friends.indexOf(secondVertexId) === -1;
    const isFirstVertexValidToAdd =
      this.adjList[secondVertexId].friends.indexOf(firstVertexId) === -1;

    if (isSecondVertexValidToAdd) {
      this.adjList[firstVertexId].friends.push(secondVertexId);
    }

    if (isFirstVertexValidToAdd) {
      this.adjList[secondVertexId].friends.push(firstVertexId);
    }
  }

  getVertexByName(name) {
    return Object.values(this.adjList).find((vertex) => vertex.name === name);
  }
}

const classMatesGraph = new Graph(classmates);

classMatesGraph.addVertex({ name: "Julia", gender: "female", friends: [] });
classMatesGraph.addVertex({ name: "Sasha", gender: "male", friends: [] });

classMatesGraph.addEdge(
  classMatesGraph.getVertexByName("Julia").id,
  classMatesGraph.getVertexByName("Sasha").id
);

console.log(classMatesGraph.getList());
