'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending03-2",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-event-ending03-2-obj01",
		"chapter6-event-ending03-2-obj02",
		"chapter6-event-ending03-2-obj03",
		"chapter6-event-ending03-2-obj04",
	],
	serifs: [
		{"exp": "chapter6-event-ending03-2-obj01", "serif": _("これでいいわ"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("これで"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending03-2-obj02", "serif": _("第三者の目とは関係なくなる"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("あはは！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("もうなにも考えなくていいんだわ！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending03-2-obj03", "serif": _("あははは！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("ばいばーい"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
	],
	endAnime: "chapter6-event-ending03-2-obj04",
	endSounds: [
	],
	endProcess: [
		// タイトルへ
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],
};

