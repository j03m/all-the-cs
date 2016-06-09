function Graph(size){
    this.size = size;
    this.nodes = new Array(size);
}

Graph.prototype.addEdge = function(start, end, cost){
    if (!this.nodes[start]){
      this.nodes[start] = [];
    }
    this.nodes[start].push({ cost:cost, end:end });
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
                var adj = list[i].end;
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
        var edge = edges[i].end;
        if (!visited[edge]){
            this.dfs(edge, path, visited);
        }
    }
    return path;
};


Graph.prototype.shortestPath = function(start, end){

};

module.exports = Graph;


