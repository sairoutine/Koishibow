'use strict';
var CONSTANT = require('../constant');
var field_list = [
	require("./field/chapter0/myroom"),
	require("./field/chapter0/hospital_corridor1"),
	require("./field/chapter0/hospital_corridor2"),
	require("./field/chapter0/mansion_corridor1"),
	require("./field/chapter0/mansion_corridor2"),
	require("./field/chapter0/mansion_corridor3"),
];

var field_map = {};

for (var i = 0, len = field_list.length; i < len; i++) {
	var field = field_list[i];

	// key 名が被ってたらデバッグではエラー
	if(CONSTANT.DEBUG.ON) {
		if(field_map[field.key]) {
			throw new Error("duplicate field key name: ". field.key);
		}
	}

	field_map[field.key] = field;
}
module.exports = field_map;

