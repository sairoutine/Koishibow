'use strict';
var _ = require('i18n4v')

// 雪からチルノを助け出す

module.exports = {
	key: "chapter3-08-event-02",
	chapter: 3,
	serifWindow: "fukidashi_brown",
	animeNum: 3,
	bg: "chapter3-08-event-02-bg-001",
	expAnimes: {
		"chapter3-08-event-02-obj01": [
			"chapter3-08-event-02-tree-obj01",
			"chapter3-08-event-02-koishi-obj01",
			"chapter3-08-event-02-cirno-obj01",
		],
		"chapter3-08-event-02-obj02": [
			"chapter3-08-event-02-tree-obj01",
			"chapter3-08-event-02-koishi-obj02",
			"chapter3-08-event-02-cirno-obj02",
		],
		"chapter3-08-event-02-obj03": [
			"chapter3-08-event-02-tree-obj01",
			"chapter3-08-event-02-koishi-obj03",
			"chapter3-08-event-02-cirno-obj03",
		],
		"chapter3-08-event-02-obj04": [
			"chapter3-08-event-02-tree-obj01",
			"chapter3-08-event-02-koishi-obj04",
			"chapter3-08-event-02-cirno-obj04",
		],
	},
	serifs: [
		{"exp": "chapter3-08-event-02-obj01", "serif":_("よいしょ"), "option": {"x": 700, "y": 200, "loop": false, "is_koishi": true, "sounds": [
			{"name": "chapter3-08-event-02-01", "frame": 0},
		]}},

		{"exp": "chapter3-08-event-02-obj02", "serif":_("CHAPTER3_FIELD_08_SERIF0001"), "option": {"x": 700, "y": 200, "loop": false, "is_koishi": true, "sounds": [
			{"name": "chapter3-08-event-02-02", "frame": 30},
		]}},
		{"exp": null, "serif":_("ぐえ"), "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": null, "serif":_("えい"), "option": {"x": 700, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif":_("ぐえ"), "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": "chapter3-08-event-02-obj03", "serif":_("えい"), "option": {"x": 700, "y": 200, "loop": false, "is_koishi": true, "sounds": [
			{"name": "chapter3-08-event-02-03", "frame": 0},
		]}},
		{"exp": null, "serif":_("ぐええっ"), "option": {"x": 470, "y": 0, "loop": false}},
		{"exp": "chapter3-08-event-02-obj04", "serif":_("やった！"), "option": {"x": 700, "y": 200, "loop": false, "is_koishi": true, "sounds": [
			{"name": "chapter3-08-event-02-04", "frame": 45},
		]}},
		{"exp": null, "serif":_("うげっ"), "option": {"x": 470, "y": 350, "loop": false}},
	],
	endProcess: [
		// チルノ表示 3-8に
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-08-show_cirnosnow"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_cirno"]},
		// 戻る
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["stage", "chapter3_08"]},
	],

};

