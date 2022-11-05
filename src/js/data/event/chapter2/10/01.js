'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-10-event-01",
	chapter: 2,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter2-10-event-01-obj01",
		"chapter2-10-event-01-obj02",
		"chapter2-10-event-01-obj03",
	],
	serifs: [
		//20320イベント（システム）
		{"exp": "chapter2-10-event-01-obj01", "serif": _("……"), "option": {"x": 600, "y": 380, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("しらないっ"), "option": {"x": 475, "y": 380, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-10-event-01-obj02", "serif": _("…………"), "option": {"x": 475, "y": 380, "loop": false} },
	],
	endAnime: "chapter2-10-event-01-obj03",
	endSounds: [
	],
	endProcess: [
		// BAD END
		{"type": "process", "value": "changeScene", "arguments": ["movie", "./movie/production/chapter2-09-event-02.mp4", function (core) {
			// chapter3へ
			core.scene_manager.changeScene("opening_movie_chapter3");
		}]},
	],
};

