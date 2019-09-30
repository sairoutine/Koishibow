'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-03-event-01",
	chapter: 5,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter5-03-event-01-obj01",
	],
	serifs: [
		{"exp": "chapter5-03-event-01-obj01", "serif": _(""), "option": {"x": 0, "y": 0, "loop": false, "sounds": [
			{"name": "chapter5-03-event-01-01", "frame": 90},
			{"name": "chapter4-20-fall_jizo", "frame": 180},
		]}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// 汚れた義眼を獲得
		{"type": "process", "value": "addItem", "arguments": ["32"]},

		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

