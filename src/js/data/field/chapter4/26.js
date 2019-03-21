'use strict';

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_26",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_27",
	leftField:  "chapter4_25",
	upField:    "chapter4_23",
	downField:  null,
	background: "chapter4-26-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
	],
};

