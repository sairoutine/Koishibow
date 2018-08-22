'use strict';
var _ = require("i18n4v")
/*
これがいいアイデアなの？
この子と一緒にやるの？
うん
だって作り方知らないから
*/

module.exports = {
	key: "chapter3-13-event-01",
	bgm: "field7",
	serifWindow: "fukidashi",
	startAnime: "chapter3-13-event-01-obj01",
	expAnimes: [
		"chapter3-13-event-01-obj01",
		"chapter3-13-event-01-obj02",
		"chapter3-13-event-01-obj03",
	],
	serifs: [
		/*
		// こいし
		{"exp": "chapter3-13-event-01-obj01", "serif":_("11111111"), "option": {"x": 250, "y": 283, "loop": false}},
		// フラン
		{"exp": "chapter3-13-event-01-obj01", "serif":_("22222222"), "option": {"x": 491, "y": 200, "loop": false}},
		// チルノ
		{"exp": "chapter3-13-event-01-obj02", "serif":_("33333333"), "option": {"x": 470, "y": 200, "loop": false}},
		*/

		{"exp": null, "serif":_("これがいいアイデアなの？"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif":_("この子と一緒にやるの？"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif":_("うん"), "option": {"x": 250, "y": 283, "loop": false}},
		{"exp": "chapter3-13-event-01-obj02", "serif":_("だって作り方知らないから"), "option": {"x": 250, "y": 283, "loop": false}},
		{"exp": "chapter3-13-event-01-obj03", "serif":_("わかったわよ！"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif":_("じゃあほら、とっととやりましょう"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif":_("でもせかいいちなのよ！\nせかいいち、作れるの？"), "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": null, "serif":_("もちろんよ"), "option": {"x": 491, "y": 200, "loop": false}},
		{"exp": null, "serif":_("私だって世界一の達人なのよ"), "option": {"x": 491, "y": 200, "loop": false}},
		{"exp": null, "serif":_("おねえちゃんがそう言ったんだから"), "option": {"x": 491, "y": 200, "loop": false}},
	],
	endProcess: [
		// チルノとフランを 3-8 → 3-13 へ移動
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-08-show_fran"]},
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-08-show_cirno"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_fran"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_cirno"]},
		//イベント再生済みフラグ
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_13-Event-_30370"]},
		// ステージに戻る
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

