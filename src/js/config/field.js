'use strict';
var CONSTANT = require('../constant');
var field_list = [
	// chapter0
	require("../data/field/chapter0/myroom"),
	require("../data/field/chapter0/hospital_corridor1"),
	require("../data/field/chapter0/hospital_corridor2"),
	require("../data/field/chapter0/mansion_corridor1"),
	require("../data/field/chapter0/mansion_corridor2"),
	require("../data/field/chapter0/mansion_corridor3"),

	// chapter1
	require("../data/field/chapter1/01"),
	require("../data/field/chapter1/02"),
	require("../data/field/chapter1/03"),
	require("../data/field/chapter1/04"),
	require("../data/field/chapter1/05"),
	require("../data/field/chapter1/06"),
	require("../data/field/chapter1/07"),
	require("../data/field/chapter1/08"),
	require("../data/field/chapter1/09"),
	require("../data/field/chapter1/10"),
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

