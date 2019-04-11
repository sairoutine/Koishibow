'use strict';
// 混沌
module.exports = {
	key: "chapter6_18",
	chapter: 6,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 690, y: 380, isTowardLeft: true},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter6-event-ending02-2"]},
	],
	objects: [
	],
};

