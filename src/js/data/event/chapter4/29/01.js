'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-29-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter4-29-event-01-obj01",
		"chapter4-29-event-01-obj02",
		"chapter4-29-event-01-obj03",
		"chapter4-29-event-01-obj04",
		"chapter4-29-event-01-obj05",
		"chapter4-29-event-01-obj06",
	],
	serifs: [
		{"exp": "chapter4-29-event-01-obj01", "serif": _("ここだわ。空間の重なりの境界線があるわ"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("どこ"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": "chapter4-29-event-01-obj02", "serif": _("そこよ"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("あなたには見えないわ"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("私が見つけたのより大きいのに見えないの"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("大きい力ほど目には見えないものなのよ"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("そうかなー"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": "chapter4-29-event-01-obj03", "serif": _("じゃあね"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("行っちゃうの"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("うん"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("なんで"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("なんでって"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif": _("私たちは住む世界が違うのよ"), "option": {"x": 280, "y": 50, "loop": false}},
		{"exp": "chapter4-29-event-01-obj04", "serif": _("お手伝いしてくれてありがとう"), "option": {"x": 470, "y": 240, "loop": false}},
		{"exp": null, "serif": _("行かなきゃ"), "option": {"x": 470, "y": 240, "loop": false}},
		{"exp": null, "serif": _("また会えるんだよね"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("いいえ"), "option": {"x": 470, "y": 240, "loop": false}},
		{"exp": null, "serif": _("行くわよ"), "option": {"x": 280, "y": 50, "loop": false}},
		{"exp": null, "serif": _("さよなら"), "option": {"x": 470, "y": 240, "loop": false}},
		{"exp": "chapter4-29-event-01-obj05", "serif": _("あれー......"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("ほんとにいなくなっちゃった"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": "chapter4-29-event-01-obj06", "serif": _("....."), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("行かなきゃ"), "option": {"x": 480, "y": 300, "loop": false}},
		{"exp": null, "serif": _("どこだっけ"), "option": {"x": 480, "y": 300, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4-29-event-01"]},
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

