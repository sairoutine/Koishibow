'use strict';
/*
再生済み"	30350					そうだ！			chapter3-13-event-03	obj01
フラン								こいしから斧をひったくる	ねえこれ貸して			chapter3-13-event-03	obj02
フラン								チルノのほうへ駆け寄って	大丈夫よ			chapter3-13-event-03	obj03
フラン								斧を振りかぶる	前にもやったから！			chapter3-13-event-03	obj03停止
フラン					独自	チルノの頭を出現		暗転、明転。チルノの首がはねられている	私ってほんと達人！			chapter3-13-event-03	obj04
*/
module.exports = {
	key: "chapter3-13-event-03",
	serifWindow: "fukidashi",
	startAnime: "chapter3-13-event-03-obj01",
	expAnimes: [
		"chapter3-13-event-03-obj01",
		"chapter3-13-event-03-obj02",
		"chapter3-13-event-03-obj03",
		"chapter3-13-event-03-obj04",
	],
	serifs: [
		{"exp": "chapter3-13-event-03-obj01", "serif":"11111111", "option": {"x": 400, "y": 400, "loop": false}},
		{"exp": "chapter3-13-event-03-obj02", "serif":"22222222", "option": {"x": 300, "y": 300, "loop": false}},
		{"exp": "chapter3-13-event-03-obj02", "serif":"33333333", "option": {"x": 200, "y": 200, "loop": false}},
	],

	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],

};

