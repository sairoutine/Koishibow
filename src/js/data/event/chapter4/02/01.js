'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-02-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter4-02-event-01-obj01",
		"chapter4-02-event-01-obj02",
		"chapter4-02-event-01-obj03",
		"chapter4-02-event-01-obj04",
		"chapter4-02-event-01-obj05",
		"chapter4-02-event-01-obj06",
		"chapter4-02-event-01-obj07",
		"chapter4-02-event-01-obj08",
		"chapter4-02-event-01-obj09",
		"chapter4-02-event-01-obj10",
	],
	serifs: [
		{"exp": "chapter4-02-event-01-obj01", "serif": _("またへんなとこへ来ちゃったわ"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj02", "serif": _("蓮子ともはぐれたし"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj03", "serif": _("参ったわね"), "option": {"x": 480, "y": 150, "loop": false, "sounds": [
			{"name": "chapter4-02-event-01-01", "frame": 5},
		]}},
		{"exp": "chapter4-02-event-01-obj02", "serif": _("うーん"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj04", "serif": _("まあゆっくり行きましょう"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj05", "serif": _("あら？"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj06", "serif": _("なにかしら"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj07", "serif": _("暗くてよく見えないわ"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj08", "serif": _("うーん"), "option": {"x": 480, "y": 150, "loop": false}},
		{"exp": "chapter4-02-event-01-obj09", "serif": _("う！"), "option": {"x": 480, "y": 150, "loop": false, "sounds": [
			{"name": "chapter4-02-event-01-02", "frame": 20},
			{"name": "chapter4-02-event-01-04", "frame": 110},
		]}},
		{"exp": "chapter4-02-event-01-obj10", "serif": _("なにこれ"), "option": {"x": 480, "y": 250, "loop": false, "sounds": [
			{"name": "chapter4-02-event-01-03", "frame": 20},
			{"name": "chapter4-02-event-01-05", "frame": 100},
		]}},
		{"exp": null, "serif": _("うう"), "option": {"x": 480, "y": 250, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_movie", "chapter4-chikurin-event-01"]},
	],
};

