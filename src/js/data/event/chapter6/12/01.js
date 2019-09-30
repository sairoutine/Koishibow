'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-12-event-01",
	chapter: 6,
	bgm: "silent",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-12-event-01-obj01",
		"chapter6-12-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter6-12-event-01-obj01", "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"x": 479, "y": 20, "loop": false, "sounds": [
			{"name": "chapter6-12-event-01-01", "frame": 15},
			{"name": "chapter6-12-event-01-02", "frame": 90},
		]}},
		{"exp": null, "serif": _("いや！"), "option": {"x": 650, "y": 250, "loop": false, "is_koishi": true}},
	],
	endAnime: "chapter6-12-event-01-obj02",
	endSounds: [
		{"name": "chapter6-12-event-01-03", "frame": 15},
		{"name": "chapter6-12-event-01-04", "frame": 20},
		{"name": "chapter6-12-event-01-03", "frame": 40},
		{"name": "chapter6-12-event-01-04", "frame": 55},

		{"name": "chapter6-12-event-01-05", "frame": 180},
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter6-12-event-02"]},
	],
};

