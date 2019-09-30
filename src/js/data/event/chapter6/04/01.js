'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-04-event-01",
	chapter: 6,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-04-event-01-obj01",
		"chapter6-04-event-01-obj02",
		"chapter6-04-event-01-obj03",
		"chapter6-04-event-01-obj04",
	],
	serifs: [
		{"exp": "chapter6-04-event-01-obj01", "serif": _("もらお"), "option": {"x": 360, "y": 20, "loop": false, "is_koishi": true, "getItem": "01"}},
		{"exp": "chapter6-04-event-01-obj02", "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"x": 630, "y": 15, "loop": false, "sounds": [
			{"name": "chapter6-04-event-01-01", "frame": 15},
			{"name": "chapter6-02-bark_bm", "frame": 210},
		]}},
		{"exp": "chapter6-04-event-01-obj03", "serif": _("いや！"), "option": {"x": 240, "y": 30, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("”赤ん坊なんて嫌い！”"), "option": {"x": 240, "y": 30, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("”あっちいって！”"), "option": {"x": 240, "y": 30, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("”嫌！”"), "option": {"x": 240, "y": 30, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"x": 630, "y": 15, "loop": false}},
		{"exp": null, "serif": _("\"あたしを見ないで！\""), "option": {"x": 240, "y": 30, "loop": false, "is_koishi": true, "useItem": "01"}},
	],
	endAnime: "chapter6-04-event-01-obj04",
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter6-04-event-02"]},
	],
};

