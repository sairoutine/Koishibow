'use strict';
// ナースステーション
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_04",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_06",
	leftField: "chapter6_03",
	upField: null,
	downField: null,
	background: "chapter6-04-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 589*2/3, y: 281.50*2/3,
			scale: 2/3,
			item_id: "01"
		},
	],
};

