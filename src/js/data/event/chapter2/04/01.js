'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-04-event-01",
	chapter: 2,
	serifWindow: "fukidashi_black",
	bgm: "chapter2-event-pars",
	startAnime: "chapter2-04-event-01-obj01",
	expAnimes: [
		"chapter2-04-event-01-obj01",
		"chapter2-04-event-01-obj02",
		"chapter2-04-event-01-obj03",
		"chapter2-04-event-01-obj04",
		"chapter2-04-event-01-obj05",
	],
	serifs: [
		{"exp": "chapter2-04-event-01-obj02", "serif": _("あ……"), "option": {"x": 750, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj03", "serif": _("ねえ……"), "option": {"x": 650, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-04-event-01-obj04", "serif": _("なによ！"), "option": {"x": 475, "y": 200, "loop": false} },
		{"exp": null, "serif": _("邪魔しないで！"), "option": {"x": 475, "y": 200, "loop": false} },
		{"exp": null, "serif": _("そんな……"), "option": {"x": 650, "y": 0, "loop": false, "is_koishi": true} },
	],
	endAnime: "chapter2-04-event-01-obj05",
	startSounds: [
		{"name": "event_in", "frame": 0},
	],
	endSounds: [
		{"name": "event_out", "frame": 180},
	],
	endProcess: [
		// BGMを変更してしまったので、ステージのBGMに戻す
		{"type": "process", "value": "playBGM", "arguments": ["field15"]},

		// ステージに戻る
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

