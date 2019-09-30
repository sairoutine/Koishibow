'use strict';
var _ = require('i18n4v')

// こいし＆さとりフラッシュバック



module.exports = {
	key: "chapter3-08-event-01",
	chapter: 3,
	serifWindow: "fukidashi_black",
	animeNum: 4,
	bgm: "chapter0-event-encounter_satori",
	bg: "chapter3-08-event-01-bg-001",
	startSounds: [
		{"name": "event_in", "frame": 0},
	],
	endSounds: [
		{"name": "event_out", "frame": 180},
	],
	expAnimes: {
		"chapter3-08-event-01-obj01": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj01",
			"chapter3-08-event-01-satori-obj01",
		],
		"chapter3-08-event-01-obj02": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj02",
			"chapter3-08-event-01-satori-obj02"
		],
		"chapter3-08-event-01-obj03": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj03",
			"chapter3-08-event-01-satori-obj03"
		],
		"chapter3-08-event-01-obj04": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj04",
			"chapter3-08-event-01-satori-obj04"
		],
		"chapter3-08-event-01-obj05": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj05",
			"chapter3-08-event-01-satori-obj05"
		],
		"chapter3-08-event-01-obj06": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj06",
			"chapter3-08-event-01-satori-obj06"
		],
		"chapter3-08-event-01-obj07": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj07",
			"chapter3-08-event-01-satori-obj07"
		],
		"chapter3-08-event-01-obj08": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj08",
			"chapter3-08-event-01-satori-obj08"
		],
		"chapter3-08-event-01-obj09": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj09",
			"chapter3-08-event-01-satori-obj09"
		],
		"chapter3-08-event-01-obj10": [
			"chapter3-08-event-01-obj-01",
			"chapter3-08-event-01-obj-02",
			"chapter3-08-event-01-koishi-obj10",
			"chapter3-08-event-01-satori-obj10"
		],
	},
	serifs: [
		{"exp": "chapter3-08-event-01-obj01", "serif":_("おねえちゃん！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-08-event-01-obj02", "serif":_("みてみてクッキー！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-08-event-01-obj03", "serif":_("ぜんぶじぶんでやったのよ！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("え……"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj04", "serif":_("だれに教わったの？"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj05", "serif":_("んーん！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("ご本を読んで作ったのよ！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": "chapter3-08-event-01-obj06", "serif":_("そう、すごいわね"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj07", "serif":_("めしあがれ！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("え？"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj07",  "serif":_("めしあがれ！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("おなかすいてないから……"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": null, "serif":_("夕ご飯食べられなくなっちゃうし"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj08", "serif":_("うん、だから一枚だけね！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("ありがとう"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": null, "serif":_("おいしいわ"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": null, "serif":_("いままで食べたことないくらい"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": null, "serif":_("ほんとお！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("はじめてなのに上手にできた！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("そうね、あなたは何でも上手ね"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": null, "serif":_("えへへ"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("えらい？"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("そうね、えらいわ"), "option": {"x": 500, "y": 220, "loop": false}},
		{"exp": "chapter3-08-event-01-obj09", "serif":_("えへへへ"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("もっといっぱいつくらなきゃ！"), "option": {"x": 460, "y": 250, "loop": false}},
		{"exp": null, "serif":_("わたしなんでもつくるんだ！"), "option": {"x": 460, "y": 250, "loop": false}},
	],
	endAnime: "chapter3-08-event-01-obj10",
	endProcess: [
		// BGMを通常BGMに戻す
		{"type": "process", "value": "playBGM", "arguments": ["field7"]},
		// 戻る
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

