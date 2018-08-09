'use strict';
/* フラン爆発イベント */
module.exports = {
	key: "chapter3-09-event-01",
	serifWindow: "fukidashi",
	bgm: "field7",
	expAnimes: [
		"chapter3-09-event-01-obj01",
		"chapter3-09-event-01-obj02",
	],
	serifs: [
		/*
		// こいし
		{"exp": "chapter3-09-event-01-obj01", "serif":"おまたせ", "option": {"x": 470, "y": 240, "loop": false}},
		// フラン
		{"exp": "chapter3-09-event-01-obj01", "serif":"おまたせ", "option": {"x": 550, "y": 240, "loop": false}},
		*/
		{"exp": "chapter3-09-event-01-obj01", "serif":"どうしたの？", "option": {"x": 550, "y": 240, "loop": false}},
		{"exp": null, "serif":"この下が気になるの？", "option": {"x": 550, "y": 240, "loop": false}},
		{"exp": null, "serif":"そうなの", "option": {"x": 470, "y": 240, "loop": false}},
		{"exp": null, "serif":"じゃあねー", "option": {"x": 550, "y": 240, "loop": false}},
		{"exp": null, "serif":"はいこれ！", "option": {"x": 550, "y": 240, "loop": false}},
	],
	endAnime: "chapter3-09-event-01-obj02",
	endSounds: [
		{"name": "chapter3-09-event-01-01", "frame": 1},
		{"name": "chapter3-09-event-01-02", "frame": 90},
		{"name": "chapter3-09-event-01-03", "frame": 120},
		{"name": "chapter3-09-event-01-04", "frame": 120},
		{"name": "chapter3-09-event-01-05", "frame": 200},
	],
	endProcess: [
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["stage", "chapter3_09"]},
	],

};

