'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-07-event-01",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter4-07-event-01-obj01",
		"chapter4-07-event-01-obj02",
		"chapter4-07-event-01-obj03",
		"chapter4-07-event-01-obj04",
		"chapter4-07-event-01-obj05",
		"chapter4-07-event-01-obj06",
	],
	serifs: [
		{"exp": "chapter4-07-event-01-obj01", "serif": _("これなに？"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": null, "serif": _("チャルメラね"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("チャルメラって？"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": "chapter4-07-event-01-obj02", "serif": _("わからない"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ラッパみたいなものよ"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ふーん"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": "chapter4-07-event-01-obj03", "serif": _("あれ？"), "option": {"x": 200, "y": 0, "loop": false}},
		{"exp": "chapter4-07-event-01-obj04", "serif": _("メリーみっけ"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("あっ蓮子！"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("よかった"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("どこ行ってたのよ"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("こっちのセリフよ"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("手分けして探そうなんて言って"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ぱーっと走っていくのがいけないんじゃない"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": "chapter4-07-event-01-obj05", "serif": _("それよりチャルメラの音が聞こえたんだけど"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("てっきり現実に戻れると思っていたのに"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ここは現実よ"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("チャルメラは偽物だけど"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("鴨川の屋台ラーメンかと思ったのに"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("残念ね"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("このひとがともだち？"), "option": {"x": 500, "y": 250, "loop": false}},
		{"exp": "chapter4-07-event-01-obj06", "serif": _("そうよ"), "option": {"x": 600, "y": 20, "loop": false}},
		{"exp": null, "serif": _("......"), "option": {"x": 350, "y": 20, "loop": false}},
		{"exp": null, "serif": _("......"), "option": {"x": 500, "y": 250, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

