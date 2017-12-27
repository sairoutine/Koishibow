"use strict";
var RouteSearch = require("../vendor/astar");
var Graph = RouteSearch.Graph;
var astar = RouteSearch.astar;


var graph = new Graph([
	[1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1],
]);
var start   = graph.grid[0][0];
var end     = graph.grid[1][2];
var options = {};
var result  = astar.search(graph, start, end, options);




console.log(result.join("=>"));
