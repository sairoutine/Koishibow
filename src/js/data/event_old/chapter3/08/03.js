'use strict';

// チルノ雪を集める

module.exports = {
	key: "chapter3-08-event-03",
	serifWindow: "fukidashi",
	animeNum: 3,
	bg: "chapter3-08-event-03-bg-001",
	expAnimes: {
		"chapter3-08-event-03-obj01": [
			"chapter3-08-event-03-tree-obj01",
			"chapter3-08-event-03-koishi-obj01",
			"chapter3-08-event-03-cirno-obj01",
		],
	},
	serifs: [
		{"exp": "chapter3-08-event-03-obj01", "serif":"わたしは雪を集めておくから！", "option": {"x": 470, "y": 280, "loop": false, "sounds": [
				{"name": "chapter3-08-event-03-01", "frame": 30},
		]}},
		{"exp": null, "serif":"冷たくないの？", "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":"なにがー？", "option": {"x": 470, "y": 280, "loop": false}},
		{"exp": null, "serif":"手が", "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":"つめたくないよ！", "option": {"x": 470, "y": 280, "loop": false}},
		{"exp": null, "serif":"ゆきんこだからへいきなの！", "option": {"x": 470, "y": 280, "loop": false}},
		{"exp": null, "serif":"ゆきんこだから\nゆきだるまも一番になるから！", "option": {"x": 470, "y": 280, "loop": false}},
		{"exp": null, "serif":"あなたもじゅんびしてよ！", "option": {"x": 470, "y": 280, "loop": false}},
		{"exp": null, "serif":"材料用意して！", "option": {"x": 470, "y": 280, "loop": false}},
	],
	endProcess: [
		// 戻る
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

