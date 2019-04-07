'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending03-1",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-event-ending03-1-obj01",
		"chapter6-event-ending03-1-obj02",
		"chapter6-event-ending03-1-obj03",
	],
	serifs: [
		{"exp": "chapter6-event-ending03-1-obj01", "serif": _("もういや！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("あ゛あ゛"), "option": {"x": 180, "y": 0, "loop": false}},
		{"exp": null, "serif": _("うるさい！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending03-1-obj02", "serif": _("やめなさいこいし！"), "option": {"x": 600, "y": 100, "loop": false}},
		{"exp": null, "serif": _("わたしはやりたいようにやるわ！"), "option": {"x": 479, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("あ゛"), "option": {"x": 180, "y": 0, "loop": false}},
	],
	endAnime: "chapter6-event-ending03-1-obj03",
	endSounds: [
	],
	endProcess: [
		// スタッフロールへ
		{"type": "process", "value": "changeScene", "arguments": ["movie", "./movie/production/chapter6_staffroll.mp4", function (core) {
			core.scene_manager.changeScene("event_talk", "chapter6-event-ending03-2");
		}]},

	],
};

