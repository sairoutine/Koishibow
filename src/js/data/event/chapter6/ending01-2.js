'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending01-2",
	chapter: 6,
	serifWindow: "fukidashi_brown",
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
		{"exp": "chapter6-event-ending01-2-obj01", "serif": _("あなたが眠っている間にいろんなことがあったわ"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj02", "serif": _("そうなの"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("山のほうからお客さんが来たり"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": null, "serif": _("街道のほうもにぎやかになったりね"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj02", "serif": _("ふうん"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("いいね"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("さとりさまーっ"), "option": {"x": 710, "y": 30, "loop": false}},
		{"exp": null, "serif": _("さとりさまーっお客様ですーっ"), "option": {"x": 710, "y": 30, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("またお山のお客さんね"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": null, "serif": _("いいお話を持ってきてくれるんだけど"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj03", "serif": _("あなたがいてくれるし"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": null, "serif": _("あの子たちのことも気になるし"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": null, "serif": _("お断りしなくちゃ"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ちょっと行ってくるわね"), "option": {"x": 480, "y": 20, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj04", "serif": _("こいし"), "option": {"x": 480, "y": 50, "loop": false}},
		{"exp": null, "serif": _("わたしの気持ちが伝わってうれしいわ"), "option": {"x": 480, "y": 50, "loop": false}},
		{"exp": null, "serif": _("うふふ"), "option": {"x": 480, "y": 50, "loop": false}},
		{"exp": null, "serif": _("あきらめなくてよかったわ"), "option": {"x": 480, "y": 50, "loop": false}},
		{"exp": "chapter6-event-ending01-2-obj05", "serif": _("ふーっ"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending01-2-obj06", "serif": _("家族って大変"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending01-2-obj06", "serif": _("でも頑張んなきゃ"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("周りの目――"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending01-2-obj07", "serif": _("第三の目もあるからね"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending01-2-obj08", "serif": _("あは！"), "option": {"x": 479, "y": 25, "loop": false, "is_koishi": true}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// ゲームエンド タイトルへ
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],
};

