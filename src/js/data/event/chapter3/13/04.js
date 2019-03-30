'use strict';
var _ = require('i18n4v')
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
		{"exp": "chapter3-13-event-04-obj01", "serif":_("11111111"), "option": {"x": 470, "y": 50, "loop": false}},
		// こいし
		{"exp": "chapter3-13-event-04-obj01", "serif":_("11111111"), "option": {"x": 350, "y": 120, "loop": false}},
		// フラン
		{"exp": "chapter3-13-event-04-obj02", "serif":_("22222222"), "option": {"x": 625, "y": 165, "loop": false}},
		*/
		{"exp": "chapter3-13-event-04-obj01", "serif":_("えーい"), "option": {"x": 350, "y": 120, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-01", "frame": 10},
			{"name": "chapter3-13-event-04-02", "frame": 30},
		]}},
		{"exp": null, "serif":_("うーん"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj02", "serif":_("まあまあ"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":_("まあまあまあ"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj03", "serif":_("これよこれ！"), "option": {"x": 470, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-04", "frame": 0},
		]}},
		{"exp": "chapter3-13-event-04-obj04", "serif":_("最高だわ！"), "option": {"x": 470, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-03", "frame": 0},
		]}},
		{"exp": "chapter3-13-event-04-obj05", "serif":_("すごいね"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":_("ごめんね"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": null, "serif":_("いいよ"), "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": null, "serif":_("ごめんね"), "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": "chapter3-13-event-04-obj06", "serif":_("いいよ"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj03", "serif":_("もう帰らなきゃ"), "option": {"x": 350, "y": 120, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-04", "frame": 0},
		]}},
		{"exp": null, "serif":_("私も！"), "option": {"x": 625, "y": 165, "loop": false}},
		{"exp": null, "serif":_("うん"), "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": null, "serif":_("じゃあね"), "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": null, "serif":_("またねー"), "option": {"x": 470, "y": 50, "loop": false}},
		{"exp": "chapter3-13-event-04-obj07", "serif":_("これあげる！"), "option": {"x": 200, "y": 50, "loop": false, "sounds": [
			{"name": "chapter3-13-event-04-05", "frame": 45},
			{"name": "chapter3-13-event-04-06", "frame": 210},
		], "getItem": "19"}},
		{"exp": null, "serif":_("いいの？"), "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": null, "serif":_("友達だから！"), "option": {"x": 200, "y": 50, "loop": false}},
		{"exp": null, "serif":_("また遊ぼうね"), "option": {"x": 200, "y": 50, "loop": false}},
		{"exp": null, "serif":_("うん"), "option": {"x": 350, "y": 120, "loop": false}},
		{"exp": "chapter3-13-event-04-obj08", "serif":_("きれい"), "option": {"x": 470, "y": 50, "loop": false}},
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
		// GOOD END
		// 発達度 +1
		{"type": "process", "value": "growUp", "arguments": []},
		// chapter4 へ
		{"type": "process", "value": "changeSceneWithFadeout", "arguments": ["opening_movie_chapter4"]},
	],

};

