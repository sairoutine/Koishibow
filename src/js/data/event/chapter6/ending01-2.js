'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending01-2",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter6-event-ending01-2-obj01",
		"chapter6-event-ending01-2-obj02",
		"chapter6-event-ending01-2-obj03",
		"chapter6-event-ending01-2-obj04",
		"chapter6-event-ending01-2-obj05",
		"chapter6-event-ending01-2-obj06",
		"chapter6-event-ending01-2-obj07",
		"chapter6-event-ending01-2-obj08",
	],
	serifs: [
		{"exp": "chapter6-event-ending01-2-obj01", "serif": _("あなたが眠っている間にいろんなことがあったわ"), "option": {"x": 480, "y": 100, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj02", "serif": _("そうなの"), "option": {"x": 479, "y": 90, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("山のほうからお客さんが来たり"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("街道のほうもにぎやかになったりね"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj02", "serif": _("ふうん"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": null, "serif": _("いいね"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": null, "serif": _("さとりさまーっ"), "option": {"x": 0, "y": 0, "loop": false}},
		{"exp": null, "serif": _("さとりさまーっお客様ですーっ"), "option": {"x": 0, "y": 0, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("またお山のお客さんね"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("いいお話を持ってきてくれるんだけど"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("あなたがいてくれるし"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("あの子たちのことも気になるし"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("お断りしなくちゃ"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("ちょっと行ってくるわね"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj04", "serif": _("こいし"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("わたしの気持ちが伝わってうれしいわ"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": null, "serif": _("うふふ"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj05", "serif": _("あきらめなくてよかったわ"), "option": {"x": 30000, "y": 40000, "loop": false}},
		{"exp": "-", "serif": _(""), "option": {"x": 0, "y": 0, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj06", "serif": _("ふーっ"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj06", "serif": _("家族って大変"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj06", "serif": _("でも頑張んなきゃ"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": null, "serif": _("周りの目――"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj07", "serif": _("第三の目もあるからね"), "option": {"x": 10000, "y": 20000, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj08", "serif": _("あは！"), "option": {"x": 0, "y": 0, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// ゲームエンド タイトルへ
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],
};

