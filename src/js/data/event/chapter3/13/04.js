'use strict';
module.exports = {
	key: "chapter3-13-event-04",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter3-13-event-04-obj01",
		"chapter3-13-event-04-obj02",
		"chapter3-13-event-04-obj03",
		"chapter3-13-event-04-obj04",
		"chapter3-13-event-04-obj05",
		"chapter3-13-event-04-obj06",
		"chapter3-13-event-04-obj07",
		"chapter3-13-event-04-obj08",
		"chapter3-13-event-04-obj09",
	],
	serifs: [
		/*
		// チルノ
		{"exp": "chapter3-13-event-04-obj01", "serif":"11111111", "option": {"x": 470, "y": 50, "loop": false}},
		// こいし
		{"exp": "chapter3-13-event-04-obj01", "serif":"11111111", "option": {"x": 350, "y": 120, "loop": false}},
		// フラン
		{"exp": "chapter3-13-event-04-obj02", "serif":"22222222", "option": {"x": 625, "y": 165, "loop": false}},
		*/
		{"exp": "chapter3-13-event-04-obj01", "serif":"えーい", "option": {"x": 350, "y": 120, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-01", "frame": 10},
			{"name": "chapter3-13-event-04-02", "frame": 30},
		]}},
		{"exp": null, "serif":"うーん", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj02", "serif":"まあまあ", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":"まあまあまあ", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj03", "serif":"これよこれ！", "option": {"x": 470, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-04", "frame": 0},
		]}},
		{"exp": "chapter3-13-event-04-obj04", "serif":"最高だわ！", "option": {"x": 470, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-03", "frame": 0},
		]}},
		{"exp": "chapter3-13-event-04-obj05", "serif":"すごいね", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":"ごめんね", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":"いいよ", "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": null, "serif":"ごめんね", "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": "chapter3-13-event-04-obj06", "serif":"いいよ", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj03", "serif":"もう帰らなきゃ", "option": {"x": 350, "y": 120, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-04", "frame": 0},
		]}},
		{"exp": null, "serif":"私も！", "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": null, "serif":"うん", "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": null, "serif":"じゃあね", "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": null, "serif":"またねー", "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj07", "serif":"これあげる！", "option": {"x": 200, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-05", "frame": 45},
			{"name": "chapter3-13-event-04-06", "frame": 210},
		]}},
		{"exp": null, "serif":"いいの？", "option": {"x": 350, "y": 120, "loop": false}},//TODO:, "getItem": "19"}},
		{"exp": null, "serif":"友達だから！", "option": {"x": 200, "y": 50, "loop": false}},
		{"exp": null, "serif":"また遊ぼうね", "option": {"x": 200, "y": 50, "loop": false}},
		{"exp": null, "serif":"うん", "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": "chapter3-13-event-04-obj08", "serif":"きれい", "option": {"x": 470, "y": 50, "loop": false}},
	],
	endAnime: "chapter3-13-event-04-obj09",
	endSounds: [
			{"name": "chapter3-13-event-04-07", "frame": 0},
			{"name": "chapter3-13-event-04-08", "frame": 30},
			{"name": "chapter3-13-event-04-09", "frame": 60},
			{"name": "chapter3-13-event-04-10", "frame": 90},
			{"name": "chapter3-13-event-04-11", "frame": 120},
			{"name": "chapter3-13-event-04-12", "frame": 210},
	],
	endProcess: [
		// 体験版終了
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["event_for_trial_last"]},
	],

};

