'use strict';
var _ = require('i18n4v')
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_12",
	chapter: 6,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 480, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter6-12-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_12_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","exp": "look_front",  serif1: _("ここどこ！？"), serif2: _("ここどこ！？"), serif3: _("ここどこ！？"), serif4: _("ここは？")},
						{"chara": "koishi","exp": null,  serif1: _("はやく逃げなきゃ！"), serif2: _("はやく逃げなきゃ！"), serif3: _("はやく逃げなきゃ！"), serif4: _("あの子を助けてあげないと")},
						{"chara": "koishi","exp": "look_bottom",  serif1: _("こわい！"), serif2: _("こわい！"), serif3: _("こわい！"), serif4: _("どうしよう")},
						{"chara": "koishi","exp": null,  serif1: _("誰か呼ばなきゃ"), serif2: _("誰か呼ばなきゃ"), serif3: _("誰か呼ばなきゃ"), serif4: _("急がなきゃ")},
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
				{"chara": "koishi","exp": "look_bottom",  serif1: _("こんなのさわってるばあいじゃない！"), serif2: _("こんなのさわってるばあいじゃない！"), serif3: _("こんなのさわってるばあいじゃない！"), serif4: _("遊びたいけれど今はダメだわ")},
				{"chara": "koishi","exp": null,  serif1: _("”ばか！”"), serif2: _("”ばか！”"), serif3: _("”ばか！”"), serif4: _("うーん")},
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
				{"chara": "koishi","exp": "touch",  serif1: _("なにかないかな"), serif2: _("なにかないかな"), serif3: _("なにかないかな"), serif4: _("お薬ないかな")},
				{"chara": "koishi","exp": null,  serif1: _("包丁とか......"), serif2: _("包丁とか......"), serif3: _("包丁とか......"), serif4: _("ないな......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "koishi","exp": "look_bottom",  serif1: _("なにもない！"), serif2: _("なにもない！"), serif3: _("なにもない！"), serif4: _("早くしなきゃ")},
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
				{"chara": "koishi","exp": null,  serif1: _("こいつ動かない！"), serif2: _("こいつ動かない！"), serif3: _("こいつ動かない！"), serif4: _("でも動かない！")},
			],
			serif_back: [
				{"chara": I, "exp": null,  serif1: _("ｼﾞﾘﾘﾘﾘﾘﾘﾘ!!!!"), serif2: _("ｼﾞﾘﾘﾘﾘﾘﾘﾘ!!!!"), serif3: _("ｼﾞﾘﾘﾘﾘﾘﾘﾘ!!!!"), serif4: _("ｼﾞﾘﾘﾘﾘﾘﾘﾘ!!!!")},
				{"chara": "koishi","exp": "look_top", "serif": _("うわ！")},
				{"chara": "koishi","exp": null, "serif": _("やめて！")},
				{"chara": I, "exp": null,  serif1: _("こいし？"), serif2: _("こいし？"), serif3: _("こいし？"), serif4: _("こいし？")},
				{"chara": I, "exp": null,  serif1: _("あなたなのね？"), serif2: _("あなたなのね？"), serif3: _("あなたなのね？"), serif4: _("あなたなのね？")},
				{"chara": "koishi","exp": "look_top",  serif1: _("誰よ！"), serif2: _("誰よ！"), serif3: _("誰よ！"), serif4: _("この声―-"), "option": {"playEvent": "chapter6-12-event-01"}},
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
			x: 760, y: 360,
		},

	],
};

