'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-01-event-01",
	chapter: 2,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter2-01-event-01-obj01",
		"chapter2-01-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter2-01-event-01-obj01", "serif":_("ふわーっ"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true}},
		{"exp": null, "serif":_("ねむいよー"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true}},
		{"exp": "chapter2-01-event-01-obj02", "serif":_("誰かみずだしてる？"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// 元のフィールドへ戻る
		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter2_01"]},
	],

};

