'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var INPUT_FILE_NAME = "input.tsv";

var fs = require('fs');
var text = fs.readFileSync(INPUT_FILE_NAME, 'utf-8');

var lines = text.split("\n");

var serif_to_serif_list = {};
var exists_serif1 = [];
for (var i = 0, len = lines.length; i < len; i++) {
	if(!lines[i]) continue;
	var line = lines[i].split("\t");

	var serif1 = line[0];
	var serif2 = line[1];
	var serif3 = line[2];
	var serif4 = line[3];

	if (serif_to_serif_list[serif1]) {
		if (
			serif_to_serif_list[serif1][0] !== serif1 ||
			serif_to_serif_list[serif1][1] !== serif2 ||
			serif_to_serif_list[serif1][2] !== serif3 ||
			serif_to_serif_list[serif1][3] !== serif4
		) {
			exists_serif1.push(serif1);
			continue;

			console.log({
				serif1: serif_to_serif_list[serif1][0],
				serif2: serif_to_serif_list[serif1][1],
				serif3: serif_to_serif_list[serif1][2],
				serif4: serif_to_serif_list[serif1][3]
			});
			console.log({serif1, serif2, serif3, serif4});
		}
	}

	serif_to_serif_list[serif1] = [
		serif1,
		serif2,
		serif3,
		serif4,
	];
}

exists_serif1.forEach((serif) => {
	delete serif_to_serif_list[serif];
});


let allFileList = [];
const basedir = "../../src/js/data/field/";
const files = fs.readdirSync(basedir);
files.forEach((dir) => {
	const files = fs.readdirSync(basedir + dir);
	files.filter(function(file){
		return fs.statSync(basedir + dir + "/" + file).isFile() &&
			/.*\.js$/.test(basedir + dir + "/" + file); //絞り込み
	}).forEach((file) => {
		allFileList.push(basedir + dir + "/" + file);
	});
});

allFileList.forEach((file) => {
	var text = fs.readFileSync(file, 'utf-8');

	var new_text = text.replace(/"serif"\s*:\s*_\(['"](.+?)['"]\)/g, function (match, p1, offset, string) {
		if (!serif_to_serif_list[p1]) {
			console.log("not exists: " + p1);
			return '"serif": _("' + p1 + '")';
		}
		else {
			return ` serif1: _("${serif_to_serif_list[p1][0]}"), serif2: _("${serif_to_serif_list[p1][1]}"), serif3: _("${serif_to_serif_list[p1][2]}"), serif4: _("${serif_to_serif_list[p1][3]}")`;
		}
	});

	fs.writeFileSync(file, new_text);
});
