'use strict';
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
		{"exp": "chapter3-08-event-04-obj01", "serif":"おまたせ", "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj01", "serif":"ええ！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"全然足りないじゃない！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"ボタンが足りない！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"見つからない", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj01", "serif":"ごめんなさい", "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj02", "serif":"やだ！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"やだ！やだ！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"ちゃんととってこれないんだったら", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"わたし帰るから！", "option": {"x": 270, "y": 200, "loop": false}},
		{"exp": null, "serif":"ごめん", "option": {"x": 470, "y": 200, "loop": false}},
		{"exp": "chapter3-08-event-04-obj03", "serif":"............", "option": {"x": 470, "y": 200, "loop": false}},
		/*
		// こいし
		{"exp": "chapter3-08-event-04-obj01", "serif":"おまたせ", "option": {"x": 470, "y": 200, "loop": false}},
		// チルノ
		{"exp": "chapter3-08-event-04-obj01", "serif":"ええ！", "option": {"x": 270, "y": 200, "loop": false}},
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

