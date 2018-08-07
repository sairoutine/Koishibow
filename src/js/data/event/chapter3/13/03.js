'use strict';
/* フランがチルノの首を落とす */
module.exports = {
	key: "chapter3-13-event-03",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter3-13-event-03-obj01",
		"chapter3-13-event-03-obj02",
		"chapter3-13-event-03-obj03",
		"chapter3-13-event-03-obj04",
	],
	serifs: [
		/*
		// フラン
		{"exp": "chapter3-13-event-03-obj01", "serif":"11111111", "option": {"x": 550, "y": 200, "loop": false}},
		*/
		{"exp": "chapter3-13-event-03-obj01", "serif":"そうだ！", "option": {"x": 550, "y": 200, "loop": false}},
		{"exp": "chapter3-13-event-03-obj02", "serif":"ねえこれ貸して", "option": {"x": 550, "y": 300, "loop": false}},
		{"exp": "chapter3-13-event-03-obj03", "serif":"大丈夫よ", "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": null, "serif":"前にもやったから！", "option": {"x": 470, "y": 180, "loop": false}},
		{"exp": "chapter3-13-event-03-obj04", "serif":"私ってほんと達人！", "option": {"x": 550, "y": 200, "loop": false}},
	],

	endProcess: [
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter3-13-show_cirno"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_cirno_body"]},
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-13-show_cirno_head"]},
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],

};

