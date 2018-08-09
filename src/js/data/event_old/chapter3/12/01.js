'use strict';
/*
あら！
こんにちは
あー
こんにちは
奇麗でしょう！
ぜんぶ作ったのよ！
雪だるまもぜーんぶ
すごいでしょ
そうね
おねえちゃんが教えてくれたんだ
あなた家族は
（こいし無言で間があく）
私も雪だるま作るの
............
そうなんだ
じゃあこれ貸してあげる
ありがとう！
ゆきだるまいっしょにやる？
やる！
わたし、ものづくりの達人なのよ！
*/
module.exports = {
	key: "chapter3-12-event-01",
	serifWindow: "fukidashi",
	bgm: "field7",
	animeNum: 3,
	bg: "chapter3-12-event-01-bg-001",
	expAnimes: {
		"chapter3-12-event-01-obj01": [
			"chapter3-12-event-01-obj-01-obj01",
			"chapter3-12-event-01-koishi-obj01",
			"chapter3-12-event-01-fran-obj01",
		],
		"chapter3-12-event-01-obj02": [
			"chapter3-12-event-01-obj-01-obj02",
			"chapter3-12-event-01-koishi-obj02",
			"chapter3-12-event-01-fran-obj02",
		],
		"chapter3-12-event-01-obj03": [
			"chapter3-12-event-01-obj-01-obj03",
			"chapter3-12-event-01-koishi-obj03",
			"chapter3-12-event-01-fran-obj03",
		],
	},
	serifs: [
		/*
		// こいし
		{"exp": "chapter3-12-event-01-obj01", "serif":"おねえちゃん！", "option": {"x": 320, "y": 250, "loop": false}},
		// フラン
		{"exp": "chapter3-12-event-01-obj01", "serif":"おねえちゃん！", "option": {"x": 490, "y": 200, "loop": false}},
		*/
		{"exp": "chapter3-12-event-01-obj01", "serif":"あら！", "option": {"x": 490, "y": 200, "loop": false}},
		{"exp": "chapter3-12-event-01-obj02", "serif":"こんにちは", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"あー", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": "chapter3-12-event-01-obj03", "serif":"こんにちは", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": null, "serif":"奇麗でしょう！", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"ぜんぶ作ったのよ！", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"雪だるまもぜーんぶ", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"すごいでしょ", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"そうね", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": null, "serif":"おねえちゃんが教えてくれたんだ", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"あなた家族は", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"............", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": null, "serif":"私も雪だるま作るの", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"............", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"そうなんだ", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"じゃあこれ貸してあげる", "option": {"x": 400, "y": 250, "loop": false}},
		// TODO: シャベルを手渡す
		{"exp": null, "serif":"ありがとう！", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": null, "serif":"ゆきだるまいっしょにやる？", "option": {"x": 280, "y": 250, "loop": false}},
		{"exp": null, "serif":"やる！", "option": {"x": 400, "y": 250, "loop": false}},
		{"exp": null, "serif":"わたし、ものづくりの達人なのよ！", "option": {"x": 400, "y": 250, "loop": false}},
	],
	endProcess: [
		// 戻る
		{"type": "process", "value": "addItem", "arguments": ["13"]},
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

