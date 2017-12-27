"use strict";

var adjacent = {
	'A': ['B', 'C'],
	'B': ['A', 'C', 'D'],
	'C': ['A', 'B', 'E'],
	'D': ['B', 'E', 'F'],
	'E': ['C', 'D', 'G'],
	'F': ['D'],
	'G': ['E'],
};

function backtrack_search (path, goal){
	var point = path[0];

	if (point === goal) {
		//ゴールに到着
		var route = path.reverse();

		console.log("found: " + route.join("=>"));
	}
	else {
		var next_point = [];

		var i, len;
		for (i = 0, len = adjacent[point].length; i < len; i++) {
			var q = adjacent[point][i];
			//探索に現在までの経路を含まない
			if (path.indexOf(q) >= 0) continue;

			next_point.push(q);
		}
		for (i = 0, len = next_point.length; i < len; i++) {
			var _ = next_point[i];
			backtrack_search([_].concat(path), goal);
		}
	}
}

backtrack_search(['A'], 'G');
