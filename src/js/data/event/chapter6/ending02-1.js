'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending02-1",
	chapter: 6,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-event-ending02-1-obj01",
		"chapter6-event-ending02-1-obj02",
		"chapter6-event-ending02-1-obj03",
	],
	serifs: [
		{"exp": "chapter6-event-ending02-1-obj01", "serif": _("うう"), "option": {"x": 529, "y": 237, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending02-1-obj02", "serif": _("なにこれ"), "option": {"x": 529, "y": 237, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending02-1-obj02", "serif": _("えっと"), "option": {"x": 529, "y": 237, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending02-1-obj02", "serif": _("ねえ！"), "option": {"x": 529, "y": 237, "loop": false, "is_koishi": true}},
		{"exp": "chapter6-event-ending02-1-obj02", "serif": _("だれか！"), "option": {"x": 529, "y": 237, "loop": false, "is_koishi": true}},
	],
	endAnime: "chapter6-event-ending02-1-obj03",
	endSounds: [
	],
	endProcess: [
		// 混沌フィールドへ
		{"type": "process", "value": "changeField", "arguments": ["chapter6_14"]},
	],
};

