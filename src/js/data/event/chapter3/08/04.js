'use strict';
var _ = require('i18n4v')
/*
おまたせ
ええ！
全然足りないじゃない！
ボタンが足りない！
見つからない
ごめんなさい
やだ！
やだ！やだ！
ちゃんととってこれないんだったら
わたし帰るから！
ごめん
............
*/
module.exports = {
	key: "chapter3-08-event-04",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter3-08-event-04-obj01",
		"chapter3-08-event-04-obj02",
		"chapter3-08-event-04-obj03",
		"chapter3-08-event-04-obj04",
	],
	serifs: [
		{"exp": "chapter3-08-event-04-obj01", "serif":_("おまたせ"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj01", "serif":_("ええ！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("全然足りないじゃない！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("ボタンが足りない！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("見つからない"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj01", "serif":_("ごめんなさい"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj02", "serif":_("やだ！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("やだ！やだ！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("ちゃんととってこれないんだったら"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("わたし帰るから！"), "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":_("ごめん"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj03", "serif":_("............"), "option": {"x": 470, "y": 200, "loop": false}},
		/*
		// こいし
		{"exp": "chapter3-08-event-04-obj01", "serif":_("おまたせ"), "option": {"x": 470, "y": 200, "loop": false}},
		// チルノ
		{"exp": "chapter3-08-event-04-obj01", "serif":_("ええ！"), "option": {"x": 270, "y": 200, "loop": false}},
		*/
	],
	endAnime: "chapter3-08-event-04-obj04",
	endSounds: [
		{"name": "chapter3-08-event-04-01", "frame": 0},
		{"name": "chapter3-08-event-04-02", "frame": 90},
	],
	endProcess: [
		// 喧嘩イベント再生済みフラグを消す(また good と bad を選べる)
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3_11_Event-30250"]},
		// 1人でがんばるフラグを消す
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3_12-Event-_30260"]},
		// 雪崩フラグも消す
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-11-show_skred"]},
		// bad end
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["title"]},
	],

};

