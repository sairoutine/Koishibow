'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-20-event-01",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter4-20-event-01-obj01",
		"chapter4-20-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter4-20-event-01-obj01", "serif": _("わたしわかったのよ！"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": null, "serif": _("みんな死ぬの！"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": "chapter4-20-event-01-obj02", "serif": _("でも今じゃないわ"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": null, "serif": _("私全部わかったのよ"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": null, "serif": _("おうちにかえしてあげる！"), "option": {"x": 500, "y": 250, "loop": false}},
	],
	endAnime: "chapter4-20-event-01-obj02",
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter4_42"]},
	],
};

