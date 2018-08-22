'use strict';
var _ = require("i18n4v")
// 30270
/*
うわーっ
だめだこりゃ
*/
module.exports = {
	key: "chapter3-11-event-01",
	serifWindow: "fukidashi",
	animeNum: 3,
	//bg: "chapter3-11-event-01-bg-001",
	expAnimes: {
		"chapter3-11-event-01-obj01": [
			"chapter3-11-event-01-obj-01",
			"chapter3-11-event-01-obj-02",
			"chapter3-11-event-01-koishi-obj01",
		],
	},
	serifs: [
		{"exp": "chapter3-11-event-01-obj01", "serif":_("うわーっ"), "option": {"x": 470, "y": 300, "loop": false, "sounds": [
			{"name": "chapter3-11-event-01-01", "frame": 120},
			{"name": "chapter3-11-event-01-02", "frame": 30},
		]}},
		{"exp": null, "serif":_("だめだこりゃ"), "option": {"x": 470, "y": 300, "loop": false}},
	],
	endProcess: [
		// 3-11に戻される
		{"type": "process", "value": "changeField", "arguments": ["chapter3_11"]},
	],

};

