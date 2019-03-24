'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter5-09-event-02",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter5-09-event-02-obj01",
		"chapter5-09-event-02-obj02",
		"chapter5-09-event-02-obj03",
		"chapter5-09-event-02-obj04",
		"chapter5-09-event-02-obj05",
	],
	serifs: [
		{"exp": "chapter5-09-event-02-obj01", "serif": _("やめるわ"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("にゃー"), "option": {"x": 630, "y": 220, "loop": false}},
		{"exp": null, "serif": _("どうしたの？"), "option": {"x": 479, "y": 50, "loop": false}},
		{"exp": null, "serif": _("ごめんね"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("お姉ちゃんが決めたことだから"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": "chapter5-09-event-02-obj02", "serif": _("やだあ！"), "option": {"x": 479, "y": 50, "loop": true, "sounds": [
			{"name": "chapter5-09-event-01-03", "frame": 0},
		]}},
		{"exp": null, "serif": _("わたしもボールであそぶの！"), "option": {"x": 479, "y": 50, "loop": false}},
		{"exp": null, "serif": _("わたしも友達とお出かけするのお！"), "option": {"x": 479, "y": 50, "loop": false}},
		{"exp": null, "serif": _("ごめんね"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": "chapter5-09-event-02-obj03", "serif": _("でもいまのあなたには"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("外は危ないの"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("”わたしたち”ちゃんと練習してから外に出なきゃ......"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("大丈夫だよ"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("わたしが遊びに来てあげるから"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": null, "serif": _("ぐわぁ......"), "option": {"x": 479, "y": 50, "loop": false}},
		{"exp": null, "serif": _("こっちへ"), "option": {"x": 630, "y": 220, "loop": false}},
		{"exp": null, "serif": _("......"), "option": {"x": 420, "y": 130, "loop": false}},
		{"exp": "chapter5-09-event-02-obj04", "serif": _("ごめんね"), "option": {"x": 680, "y": 220, "loop": false}},
		{"exp": "chapter5-09-event-02-obj05", "serif": _("ありがとう、こいし"), "option": {"x": 479, "y": 280, "loop": false}},
		{"exp": null, "serif": _("みんなもありがとう"), "option": {"x": 479, "y": 280, "loop": false}},
		{"exp": null, "serif": _("あなたも"), "option": {"x": 479, "y": 280, "loop": false}},
		{"exp": null, "serif": _("あの子に付き合ってくれてありがとう"), "option": {"x": 479, "y": 280, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// 発達度+1
		{"type": "process", "value": "growUp", "arguments": []},
		// GOOD END
		{"type": "process", "value": "changeScene", "arguments": ["opening_movie_chapter6"]},
	],
};

