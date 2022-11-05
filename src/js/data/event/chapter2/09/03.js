'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-09-event-03",
	chapter: 2,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter2-09-event-03-obj01",
		"chapter2-09-event-03-obj02",
		"chapter2-09-event-03-obj03",
	],
	serifs: [
		{"exp": "chapter2-09-event-03-obj01", "serif": _("あれー？"), "option": {"x": 630, "y": 230, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("だれもいない"), "option": {"x": 630, "y": 230, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-09-event-03-obj02", "serif": _("ウワーッ！"), "option": {"x": 630, "y": 230, "loop": false, "is_koishi": true} },
	],
	endAnime: "chapter2-09-event-03-obj03",
	endSounds: [
	],
	endProcess: [
		// GOOD END
		// chapter3へ
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["opening_movie_chapter3"]},
	],

};

