'use strict';
//水につかった屋敷
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter2_07",
	chapter: 2,
	bgm: "field15",
	rightStartPosition:   {x: 690, y: 450},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 350, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_08",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_07_20110"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "wave_look_front", serif1: _("うわ！"), serif2: _("うわ！"), serif3: _("うわ！"), serif4: _("うわ！")},
						{"chara": "koishi", "exp": null, serif1: _("みずびだし"), serif2: _("びちょびちょなんですけど！"), serif3: _("びちょびちょなんですけど！"), serif4: _("びちょびちょなんですけど！")},
						{"chara": "koishi", "exp": null, serif1: _("これうみ？"), serif2: _("これうみ？"), serif3: _("これうみ？"), serif4: _("これうみ？")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_07_20110"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter2-07-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "車いす",
			serif: [
				{"chara": "koishi", serif1: _("あ！"), serif2: _("あ！"), serif3: _("あ！"), serif4: _("あ！")},
				{"chara": "koishi", serif1: _("あった"), serif2: _("あった"), serif3: _("あった"), serif4: _("あった")},
				{"chara": "koishi", serif1: _("だれか逃げようとしたの？"), serif2: _("だれか逃げようとしたの？"), serif3: _("だれか逃げようとしたの？"), serif4: _("だれか逃げようとしたの？")},
			],
			serif_back: [
				{"chara": "koishi", serif1: _("あはは、へんなの"), serif2: _("あはは、へんなの"), serif3: _("あはは、へんなの"), serif4: _("あはは、へんなの")},
			],
			x: 1102*2/3, y: 736*2/3,
			scale: 2/3,
			anime1: "chapter2-07-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 160,
			height: 160,

			action_name: "wave_look_front",
			sound_name: "touch_wheelchair_in_water",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "家の壁",
			serif: null,
			width: 660, height: 480,
			x: 325, y: 240,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "ドア",
			x: 355,
			y: 355,
			width: 150,
			height: 260,
			next_field_name: "chapter2_05",
		},


	],
};

