'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-09-event-03",
	serifWindow: "fukidashi_black",
	bgm: "chapter5-event-oku",
	expAnimes: [
		"chapter5-09-event-03-obj01",
		"chapter5-09-event-03-obj02",
		"chapter5-09-event-03-obj03",
		"chapter5-09-event-03-obj04",
		"chapter5-09-event-03-obj05",
	],
	serifs: [
		{"exp": "chapter5-09-event-03-obj01", "serif": _("あーっ"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("鳥さん捕まってる！"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("ピチチチ"), "option": {"x": 480, "y": 140, "loop": false}},
		{"exp": "chapter5-09-event-03-obj02", "serif": _("誰がやったの！"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("かわいそう"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": "chapter5-09-event-03-obj03", "serif": _("いま出してあげるね！"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": "chapter5-09-event-03-obj04", "serif": _("んにゃ"), "option": {"x": 630, "y": 350, "loop": false}},
		{"exp": null, "serif": _("お外がいちばんだよね！"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("ピピッ、ピピピッ！"), "option": {"x": 480, "y": 140, "loop": false}},
		{"exp": "chapter5-09-event-03-obj05", "serif": _("......"), "option": {"x": 630, "y": 380, "loop": false}},
	],
	endAnime: null,
	startSounds: [
		{"name": "event_in", "frame": 0},
	],
	endSounds: [
		{"name": "event_out", "frame": 180},
	],
	endProcess: [
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

