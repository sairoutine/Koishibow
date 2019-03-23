'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-12-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter6-12-event-01-obj01",
		"chapter6-12-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter6-12-event-01-obj01", "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"x": 479, "y": 20, "loop": false}},
		{"exp": null, "serif": _("いや！"), "option": {"x": 650, "y": 250, "loop": false}},
	],
	endAnime: "chapter6-12-event-01-obj02",
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter6-12-event-02"]},
	],
};

