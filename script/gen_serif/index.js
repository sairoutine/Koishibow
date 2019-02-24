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
	var chara  = line[4];
	var reaction  = line[5];

	out.push('{"chara": "' + chara + '", "exp": "' + reaction + '", "serif":_("' + serif1 + '")},');
}

fs.writeFileSync(OUTPUT_FILE_NAME, out.join("\n"));

