'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-01-event-01",
	serifWindow: "fukidashi_brown",
	expAnimes: [

		"chapter5-01-event-01-obj01",
		"chapter5-01-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter5-01-event-01-obj01", "serif": _("おやすみ"), "option": {"x": 700, "y": 200, "loop": false}},
		{"exp": "chapter5-01-event-01-obj02", "serif": _("こんどはうまくいきますように"), "option": {"x": 700, "y": 190, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_movie", "chapter5-01-event-02"]},
	],
};

