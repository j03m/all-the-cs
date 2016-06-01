var assert = require("assert");

function Graph(size){
    this.size = size;
    this.nodes = new Array(size);
}

Graph.prototype.addEdge = function(start, end){
    if (!this.nodes[start]){
      this.nodes[start] = [];
    }
    this.nodes[start].push(end);
};

//bfs o(e+v)
Graph.prototype.bfs = function(start){
    var visited = {};
    var queue = [];
    var path = [];
    queue.push(start);
    visited[start] = true;
    while(queue.length !== 0){
        var node = queue.shift();
        path.push(node);
        var list = this.nodes[node];
        if (list){
            for(var i=0;i<list.length;i++){
                var adj = list[i];
                if (!visited[adj]){
                    queue.push(adj);
                    visited[adj] = true;
                }
            }
        }
    }

    return path;
};


Graph.prototype.dfs = function(vertex, path, visited){
    if (!visited) { visited = [] };
    if (!path) { path = [] };

    path.push(vertex);
    visited[vertex] = true;
    var edges = this.nodes[vertex];
    for(var i=0;i<edges.length;i++){
        var edge = edges[i];
        if (!visited[edge]){
            this.dfs(edge, path, visited);
        }
    }
    return path;
};

var g = new Graph(4);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(2,3);
g.addEdge(3,3);
var path = g.bfs(2);
console.log(path);
assert.deepStrictEqual(path, [2, 0, 3, 1]);

g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
path = g.dfs(2);
console.log(path);
assert.deepStrictEqual(path, [2, 0, 1, 3]);


