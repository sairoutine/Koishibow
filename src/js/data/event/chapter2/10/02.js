'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter2-10-event-02",
	chapter: 2,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter2-10-event-02-obj01",
		"chapter2-10-event-02-obj02",
		"chapter2-10-event-02-obj03",
		"chapter2-10-event-02-obj04",
		"chapter2-10-event-02-obj05",
		"chapter2-10-event-02-obj06",
	],
	serifs: [
		{"exp": "chapter2-10-event-02-obj01", "serif": _("これね、あげる"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": "chapter2-10-event-02-obj02", "serif": _("これいいおくすりだから"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("なんでくれるの"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": "chapter2-10-event-02-obj03", "serif": _("え～"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("え～"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": "chapter2-10-event-02-obj04", "serif": _("ほんとうに？"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("いいの？"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("それよりもなにかしよう"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("いいよ！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("さっきあげたやつで遊ぼ！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": "chapter2-10-event-02-obj05", "serif": _("悲鳴だ！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("誰か死んだかも！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
		{"exp": null, "serif": _("ねえねえ見に行こうよ！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": true} },
		{"exp": null, "serif": _("わーい！"), "option": {"x": 470, "y": 0, "loop": false, "is_koishi": false} },
	],
	endAnime: "chapter2-10-event-02-obj06",
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter2-09-event-03"]},
	],

};

