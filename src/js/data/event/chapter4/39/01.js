'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-39-event-01",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter4-39-event-01-obj01",
		"chapter4-39-event-01-obj02",
		"chapter4-39-event-01-obj03",
		"chapter4-39-event-01-obj04",
		"chapter4-39-event-01-obj05",
		"chapter4-39-event-01-obj06",
	],
	serifs: [
		{"exp": "chapter4-39-event-01-obj01", "serif": _("つかれた"), "option": {"x": 370, "y": 180, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("かえりたい"), "option": {"x": 370, "y": 180, "loop": false, "is_koishi": true}},
		{"exp": "chapter4-39-event-01-obj02", "serif": _("でもどっちだろ"), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": "chapter4-39-event-01-obj03", "serif": _("うー"), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("....."), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("いく"), "option": {"x": 370, "y": 210, "loop": false, "is_koishi": true}},
		{"exp": "chapter4-39-event-01-obj04", "serif": _("こいし！"), "option": {"x": 730, "y": 285, "loop": false, "sounds": [
			{"name": "chapter4-39-event-01-01", "frame": 300},
		]}},
		{"exp": "chapter4-39-event-01-obj05", "serif": _("どこなの！"), "option": {"x": 730, "y": 285, "loop": false}},
	],
	endAnime: "chapter4-39-event-01-obj06",
	endSounds: [
		{"name": "chapter4-39-event-01-02", "frame": 130},
	],
	endProcess: [
		// chapter5 へ
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["opening_movie_chapter5"]},
	],
};

