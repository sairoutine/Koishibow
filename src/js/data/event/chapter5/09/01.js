'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-09-event-01",
	chapter: 5,
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter5-09-event-01-obj01",
		"chapter5-09-event-01-obj02",
		"chapter5-09-event-01-obj03",
	],
	serifs: [
		{"exp": "chapter5-09-event-01-obj01", "serif": _("いま出してあげるわ！"), "option": {"x": 470, "y": 130, "loop": false, "is_koishi": true, "sounds": [
			{"name": "chapter5-09-event-01-01", "frame": 240},
			{"name": "chapter5-09-event-01-02", "frame": 340},
		]}},
		{"exp": null, "serif": _("これでいいわ！"), "option": {"x": 470, "y": 130, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("でておいで！"), "option": {"x": 470, "y": 130, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("ありがとう！"), "option": {"x": 480, "y": 130, "loop": false}},

		{"exp": "chapter5-09-event-01-obj02", "serif": _("あぶない！"), "option": {"x": 540, "y": 200, "loop": false, "sounds": [
			{"name": "chapter5-09-event-01-04", "frame": 10},
			{"name": "chapter5-09-event-01-05", "frame": 160},
			{"name": "chapter5-09-event-01-06", "frame": 230},
			{"name": "chapter5-09-event-01-07", "frame": 230},
		]}},
		{"exp": null, "serif": _("なんなの！？"), "option": {"x": 360, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("いたい！"), "option": {"x": 460, "y": 350, "loop": false}},
		{"exp": null, "serif": _("ああああ！"), "option": {"x": 460, "y": 350, "loop": false}},
		{"exp": null, "serif": _("いたい！！"), "option": {"x": 460, "y": 350, "loop": false}},
		{"exp": null, "serif": _("あっあう、ああああ！！"), "option": {"x": 460, "y": 350, "loop": false}},
		{"exp": null, "serif": _("足が！そんな！"), "option": {"x": 360, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("どうしよう"), "option": {"x": 360, "y": 200, "loop": false, "is_koishi": true}},
		{"exp": "chapter5-09-event-01-obj03", "serif": _("ごめんなさい"), "option": {"x": 360, "y": 240, "loop": false, "is_koishi": true}},
		{"exp": null, "serif": _("ごめんなさい......"), "option": {"x": 360, "y": 240, "loop": false, "is_koishi": true}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// BAD END
		{"type": "process", "value": "changeScene", "arguments": ["opening_movie_chapter6"]},
	],
};

