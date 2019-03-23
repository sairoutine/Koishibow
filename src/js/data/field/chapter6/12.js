'use strict';
var _ = require('i18n4v')
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_12",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter6-12-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_12_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","exp": "look_front", "serif": _("ここどこ！？")},
						{"chara": "koishi","exp": null, "serif": _("はやく逃げなきゃ！")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("こわい！")},
						{"chara": "koishi","exp": null, "serif": _("誰か呼ばなきゃ")},
					],
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_12_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "chapter6-12-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "雪山",
			serif: [
				{"chara": "koishi","exp": "look_bottom", "serif": _("こんなのさわってるばあいじゃない！")},
				{"chara": "koishi","exp": null, "serif": _("”ばか！”")},
			],
			x: 320*2/3, y: 705*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter6-12-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi","exp": "touch", "serif": _("なにかないかな")},
				{"chara": "koishi","exp": null, "serif": _("包丁とか......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("なにもない！")},
				{"chara": "bm","exp": null, "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛")},
			],
			x: 416*2/3, y:516*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter6-12-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "電話ボックス",
			serif: [
				{"chara": "koishi","exp": "touch", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("こいつ動かない！")},
			],
			serif_back: [
				{"chara": I, "exp": null, "serif": _("ｼﾞﾘﾘﾘﾘﾘﾘﾘ!!!!")},
				{"chara": "koishi","exp": "look_top", "serif": _("うわ！")},
				{"chara": "koishi","exp": null, "serif": _("やめて！")},
				{"chara": I, "exp": null, "serif": _("こいし？")},
				{"chara": I, "exp": null, "serif": _("あなたなのね？"), "option": {"playEvent": "chapter6-12-event-01"}},
			],
			x: 1252*2/3, y: 457*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: "bm",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "BM(左)",
			serif: null,
			width: 0, height: 0,
			x: 960, y: 360,
		},

	],
};

