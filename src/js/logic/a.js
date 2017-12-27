"use strict";

var TILE_NUM = 8;
var map = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
];

var adjacent = create_adjacent_by_map(map);
function create_adjacent_by_map (map) {
	var adjacent = {};
	for (var i = 0, i_len=map.length; i<i_len; i++) {
		var row = map[i];
		for (var j = 0, j_len=row.length; j<j_len; j++) {
			adjacent[create_name(i, j)] = open(i, j, map);
		}
	}
	return adjacent;
}

function create_name (i, j) {
	return i.toString() + "_" + j.toString();
}

function open (i, j, map) {
	var r = [];

	if (map[i  ][j+1] === 0)             r.push(create_name(i  , j+1));
	if (map[i  ][j-1] === 0)             r.push(create_name(i  , j-1));
	if (map[i+1] && map[i+1][j]   === 0) r.push(create_name(i+1, j));
	if (map[i-1] && map[i-1][j]   === 0) r.push(create_name(i-1, j));

	return r;
}


/*
var adjacent = {
	'A': ['B', 'C'],
	'B': ['A', 'C', 'D'],
	'C': ['A', 'B', 'E'],
	'D': ['B', 'E', 'F'],
	'E': ['C', 'D', 'G'],
	'F': ['D'],
	'G': ['E'],
};
*/
function backtrack_search (path, goal){
	var point = path[0];

	if (point === goal) {
		//ゴールに到着
		// 最初に発見したルートを返す(ちょっと遠回りでも構わない)
		console.log(path.reverse());
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

backtrack_search(['0_0'], '1_1');
//backtrack_search(['A'], 'G');
