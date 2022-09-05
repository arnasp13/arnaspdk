const graph = {};

graph["you"] = ["alice", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
let searched = [];

const queue = [];
queue.push(...graph["you"]);

const isPersonSeller = (name) => {
  return name[name.length - 1] === "m";
};

const bfs = () => {
  while (queue?.length > 0) {
    let person = queue.shift();

    if (!searched.includes(person)) {
      if (isPersonSeller(person)) {
        return person;
      } else {
        queue.push(...graph[person]);
      }
    } else {
      return false;
    }
  }

  return false;
};

console.log(bfs());
