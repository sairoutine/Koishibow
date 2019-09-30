'use strict';
module.exports = {
	key: "chapter4-19-event-01",
	chapter: 4,
	bgm: "silent",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter4-19-event-01-obj01",
		"chapter4-19-event-01-obj02",
	],
	serifs: [
		{"exp": "chapter4-19-event-01-obj01", "serif": "", "option": {"x": 5000, "y": 2500, "loop": false, "sounds": [
			{"name": "chapter4-19-event-01-01", "frame": 0},
		]}},
		{"exp": "chapter4-19-event-01-obj02", "serif": "", "option": {"x": 5000, "y": 2500, "loop": false, "sounds": [
			{"name": "chapter4-19-event-01-02", "frame": 0},
			{"name": "chapter4-19-event-01-03", "frame": 150},
			{"name": "chapter4-19-event-01-04", "frame": 320},
			{"name": "chapter4-19-event-01-05", "frame": 380},
		]}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};

