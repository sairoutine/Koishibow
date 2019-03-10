'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var INPUT_FILE_NAME = "input.tsv";
var OUTPUT_FILE_NAME = "output.json";

var fs = require('fs');
var text = fs.readFileSync(INPUT_FILE_NAME, 'utf-8');

var lines = text.split("\n");

var out = [];
for (var i = 0, len = lines.length; i < len; i++) {
	if(!lines[i]) continue;
	var line = lines[i].split("\t");

	var serif1 = line[0];
	var anime_name1  = line[4];
	var anime_name2  = line[5];

	var exp;
	if (anime_name2.match(/停止/)) {
		exp = "null";
	}
	else {
		exp = '"' + anime_name1 + "-" + anime_name2 + '"';
	}

	if (exp !== "") {
		exp = '"exp": ' + exp + ', ';
	}

	out.push('{' + exp + '"serif": _("' + serif1 + '")}, "option": {"x": 0, "y": 0, "loop": false}},');
}

fs.writeFileSync(OUTPUT_FILE_NAME, out.join("\n"));

