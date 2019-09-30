'use strict';
var _ = require('i18n4v')
/* フランがチルノの首を落とす */
module.exports = {
	key: "chapter3-13-event-03",
	chapter: 3,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter3-13-event-03-obj01",
		"chapter3-13-event-03-obj02",
		"chapter3-13-event-03-obj03",
		"chapter3-13-event-03-obj04",
	],
	serifs: [
		/*
		// フラン
		{"exp": "chapter3-13-event-03-obj01", "serif":_("11111111"), "option": {"x": 550, "y": 200, "loop": false}},
		*/
		{"exp": "chapter3-13-event-03-obj01", "serif":_("そうだ！"), "option": {"x": 550, "y": 200, "loop": false}},
		{"exp": "chapter3-13-event-03-obj02", "serif":_("ねえこれ貸して"), "option": {"x": 550, "y": 300, "loop": false, "sounds": [
			{"name": "chapter3-13-event-03-01", "frame": 20},

		]}},
		{"exp": "chapter3-13-event-03-obj03", "serif":_("大丈夫よ"), "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": null, "serif":_("前にもやったから！"), "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": "chapter3-13-event-03-obj04", "serif":_("私ってほんと達人！"), "option": {"x": 550, "y": 200, "loop": false, "sounds": [
			{"name": "chapter3-13-event-03-02", "frame": 60},
		]}},
	],

	endProcess: [
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-13-show_cirno"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_cirno_body"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_cirno_head"]},
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

