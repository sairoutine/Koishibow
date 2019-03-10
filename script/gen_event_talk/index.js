'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var INPUT_FILE_NAME = "input.tsv";
var OUTPUT_FILE_NAME = "output.json";

// キャラごとの仮の座標
var CHARA_UTF8_TO_CHARA_MAP = {
	"こいし": {x: 888, y: 888},
	"さとり": {x: 999, y: 999},
};


var fs = require('fs');
var text = fs.readFileSync(INPUT_FILE_NAME, 'utf-8');

var lines = text.split("\n");

var out = [];
for (var i = 0, len = lines.length; i < len; i++) {
	if(!lines[i]) continue;
	var line = lines[i].split("\t");

	var chara_utf8 = line[0];
	var serif1 = line[9];
	var anime_name1  = line[13];
	var anime_name2  = line[14];
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

	var pos = CHARA_UTF8_TO_CHARA_MAP[chara_utf8] || {x: 0, y: 0};
	var x = pos.x;
	var y = pos.y;
	out.push('\t\t{' + exp + '"serif": _("' + serif1 + '"), "option": {"x": ' + x + ', "y": ' + y + ', "loop": false}},');
}

fs.writeFileSync(OUTPUT_FILE_NAME, out.join("\n"));

