'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-04-event-01",
	chapter: 2,
	serifWindow: "fukidashi_brown",
	startAnime: "chapter2-04-event-01-obj01",
	expAnimes: [
		"chapter2-04-event-01-obj01",
		"chapter2-04-event-01-obj02",
		"chapter2-04-event-01-obj03",
		"chapter2-04-event-01-obj04",
		"chapter2-04-event-01-obj05",
	],
	serifs: [
		{"exp": "chapter2-04-event-01-obj01", "serif": _(""), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj02", "serif": _("あ……"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj03", "serif": _("ねえ……"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj04", "serif": _("なによ！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("邪魔しないで！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("そんな……"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj05", "serif": _("……"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// ステージに戻る
		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter2_10"]},
	],

};

