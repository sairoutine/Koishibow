'use strict';
var _ = require('i18n4v')
// 病院の廊下2(こころ)
// chapter0, chapter6 それぞれに存在するので
// コレを修正する際はほかも修正する
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter2_03",
	chapter: 2,
	bgm: "field1",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_04",
	leftField: "chapter2_02",
	upField: null,
	downField: null,
	background: "chapter0-hospital2-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_03_20050"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", serif1: _("あ！"), serif2: _("あ！"), serif3: _("あ！"), serif4: _("あ！")},
						{"chara": "koishi", "exp": null, serif1: _("車椅子ない！"), serif2: _("車椅子ない！"), serif3: _("車椅子ない！"), serif4: _("車椅子ない！")},
						{"chara": "koishi", "exp": null, serif1: _("どこいったんだろー"), serif2: _("どこいったんだろー"), serif3: _("どこいったんだろー"), serif4: _("どこいったんだろー")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_03_20050"]}
			],
		]},

	],
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital2-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "くつした",
			serif: [
				{"chara": "koishi", serif1: _("やだやだ。"), serif2: _("やだやだ。"), serif3: _("やだやだ。"), serif4: _("やだやだ。")},
			],
			x: 302,
			y: 443,
			scale: 0.7,
			action_name: "look_bottom",
			position_type: "lying",
		},
	],

};

