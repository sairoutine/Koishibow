'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-03-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter5-03-event-01-obj01",
	],
	serifs: [
		{"exp": "chapter5-03-event-01-obj01", "serif": _(""), "option": {"x": 0, "y": 0, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

