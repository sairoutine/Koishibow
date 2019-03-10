'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var INPUT_FILE_NAME = "input.tsv";
var OUTPUT_FILE_NAME = "output.json";

// キャラごとの仮の座標
var CHARA_UTF8_TO_CHARA_MAP = {
	"こいし": {x: 10000, y: 20000},
	"さとり": {x: 30000, y: 40000},
	"メリー": {x: 50000, y: 60000},
	"蓮子":   {x: 70000, y: 80000},
};


var fs = require('fs');
var text = fs.readFileSync(INPUT_FILE_NAME, 'utf-8');

var lines = text.split("\n");

// セリフ設定
var serifs = [];
var anime_names = {};
(function () {
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

			// イベント一覧に追加
			anime_names[anime_name1 + "-" + anime_name2] = true;
		}

		if (exp !== "") {
			exp = '"exp": ' + exp + ', ';
		}

		var pos = CHARA_UTF8_TO_CHARA_MAP[chara_utf8] || {x: 0, y: 0};
		var x = pos.x;
		var y = pos.y;
		serifs.push('\t\t{' + exp + '"serif": _("' + serif1 + '"), "option": {"x": ' + x + ', "y": ' + y + ', "loop": false}},');

	}
})();


// イベント設定
var event_anime_require = [];
var key = "";
var event_anime_configs = [];
(function () {
	for (var anime_name in anime_names) {
		var line = anime_name.split("-");
		var chapter    = line[0];
		var field      = line[1];
		var event_name = [chapter, field, line[2],line[3]].join("-");
		var obj        = line[4];

		event_anime_require.push('\t"' + anime_name + '": require("../data/anime/' + chapter + '/event/' + event_name + '/' +obj + '_anime_1"),');
		event_anime_configs.push('\t\t"' + anime_name + '",');


		key = event_name;
	}
})();

fs.writeFileSync(OUTPUT_FILE_NAME, 
	"{\n\tkey: \"" + key + "\",\n},\n" + 
	"\t[\n" + event_anime_configs.join("\n") + "\n\t]\n" + 
	"\t[\n" + serifs.join("\n") + "\n\t]\n" + 
	"[\n" + event_anime_require.join("\n") + "\n]\n");

