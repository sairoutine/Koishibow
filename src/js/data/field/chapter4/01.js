'use strict';
var _ = require('i18n4v')
var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_01",
	chapter: 4,
	bgm: "field9",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:  {x: 480, y: 530},
	rightField: "chapter4_02",
	leftField:  null,
	upField:    null,
	downField:  null,
	background: "chapter4-01-bg-001",
	walkSound: "walking_bare_sand",
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
						{"chara": "koishi", "exp": "look_bottom",  serif1: _("疲れた"), serif2: _("疲れたわ"), serif3: _("やっちゃった"), serif4: _("やっちゃった")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("ここはどこ"), serif2: _("どこかしら"), serif3: _("どこかしら"), serif4: _("どこかしら")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_01_40050"]}
			],
		]},
	],


	objects: [
	],
};

