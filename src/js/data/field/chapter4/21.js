'use strict';

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_21",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField: "chapter4_20",
	upField:    null,
	downField:  "chapter4_24",
	background: "chapter4-21-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
	],
};

