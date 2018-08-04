'use strict';
/*
これがいいアイデアなの？
この子と一緒にやるの？
うん
だって作り方知らないから
*/

module.exports = {
	key: "chapter3-13-event-01",
	serifWindow: "fukidashi",
	bgm: "field3",
	startSE: "chapter0-mansion_corridor2-event_in",
	endSE: "chapter0-mansion_corridor2-event_out",
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],
	startAnime: "chapter3-13-event-01-obj01",
	endAnime: "chapter3-13-event-01-obj03",
	expAnimes: [
		"chapter3-13-event-01-obj01",
		"chapter3-13-event-01-obj02",
		"chapter3-13-event-01-obj03",
	],
	serifs: [
		{"exp": "chapter3-13-event-01-obj02", "serif":"11111111", "option": {"x": 400, "y": 400, "loop": false}},
		{"exp": "chapter3-13-event-01-obj02", "serif":"22222222", "option": {"x": 300, "y": 300, "loop": false}},
		{"exp": "chapter3-13-event-01-obj02", "serif":"33333333", "option": {"x": 200, "y": 200, "loop": false}},
	],
};

