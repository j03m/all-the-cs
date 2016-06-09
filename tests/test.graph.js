var Graph = require("../graphs/graph.js");
var assert = require("assert");
describe("graphs", function() {
    it("should have correct bfs", function() {
        var g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
        var path = g.bfs(2);
        assert.deepStrictEqual(path, [2, 0, 3, 1]);
    });
    it("should have a correct dfs", function() {
        var g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
        var path = g.dfs(2);
        assert.deepStrictEqual(path, [2, 0, 1, 3]);

    });
});
