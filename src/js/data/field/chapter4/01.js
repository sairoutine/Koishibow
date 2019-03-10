'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4_01",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_02",
	leftField: null,
	background: "chapter4-01-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_01_40010"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// こいしとさとりの最初のイベント 再生
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_01_40010"]},
				{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter4-00-event-01"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_01_40040"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_01_40040"]},
				{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter4-02-event-01"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_01_40050"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_bottom", "serif":_("疲れた")},
						{"chara": "koishi", "exp": "look_front", "serif":_("ここはどこ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_01_40050"]}
			],
		]},
	],


	objects: [
	],
};

