'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-09-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter5-09-event-01-obj01",
		"chapter5-09-event-01-obj02",
		"chapter5-09-event-01-obj03",
		"chapter5-09-event-01-obj04",

	],
	serifs: [
		{"exp": "chapter5-09-event-01-obj01", "serif": _("いま出してあげるわ！"), "option": {"x": 470, "y": 130, "loop": false}},
		{"exp": null, "serif": _("これでいいわ！"), "option": {"x": 470, "y": 130, "loop": false}},
		{"exp": null, "serif": _("でておいで！"), "option": {"x": 470, "y": 130, "loop": false}},
		{"exp": null, "serif": _("ありがとう！"), "option": {"x": 460, "y": 130, "loop": false}},
		{"exp": "chapter5-09-event-01-obj02", "serif": _("あぶない！"), "option": {"x": 580, "y": 200, "loop": false}},
		{"exp": null, "serif": _("なんなの！？"), "option": {"x": 420, "y": 200, "loop": false}},
		{"exp": "chapter5-09-event-01-obj03", "serif": _("いたい！"), "option": {"x": 460, "y": 130, "loop": true}},
		{"exp": null, "serif": _("ああああ！"), "option": {"x": 460, "y": 130, "loop": false}},
		{"exp": null, "serif": _("いたい！！"), "option": {"x": 460, "y": 130, "loop": false}},
		{"exp": null, "serif": _("あっあう、ああああ！！"), "option": {"x": 460, "y": 130, "loop": false}},
		{"exp": null, "serif": _("どうしよう"), "option": {"x": 420, "y": 200, "loop": false}},
		{"exp": null, "serif": _("どうしよう"), "option": {"x": 420, "y": 200, "loop": false}},
		{"exp": null, "serif": _("ごめんなさい"), "option": {"x": 420, "y": 200, "loop": false}},
		{"exp": null, "serif": _("ごめんなさい......"), "option": {"x": 420, "y": 200, "loop": false}},

	],
	endAnime: "chapter5-09-event-01-obj04",
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["opening_movie_chapter6"]},
	],
};

