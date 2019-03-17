'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-03-event-01",
	serifWindow: "fukidashi",
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
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

