'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_10",
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
	background: "chapter6-10-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_10_firstaccess"], "process": [
			// 1度目アクセス済み
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_10_secondaccess"], "process": [
					// 2度目アクセス済み
					[
					],
					// 2度目まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj04", "serif": _("......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("あぶあぶあぶ")},
								{"chara": "chapter6-10-obj01","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("ぶあー！！")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("ﾌﾞﾌﾞﾌﾞ")},
								{"chara": "chapter6-10-obj01","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("静かにしなさい")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("あば")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("ぶぶぶー")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05", "serif": _("しずかにして！")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05", "serif": _("私は悪くないのに！")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("う")},
								{"chara": "chapter6-10-obj01","exp": null, "serif": _("あ˝あ˝")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03", "serif": _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05", "serif": _("ううう")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj04", "serif": _("誰が悪いのかしら"), "option": {"changeField": "chapter6_13"}},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_10_secondaccess"]}
					],
				]},
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"id": "chapter6-04-show_eyedrops", "save": true},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("一体どうなってるんだ！")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("あんなに大きいのに可阿呆はまだ喋らないぞ")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("ちゃんと面倒みてるのか")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("そんな")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("私は精一杯――")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("育て方が正しいのなら生まれが悪いんだろう")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("本当に禁酒できていたんだろうな")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("何をおっしゃるのです")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("ずっと留守にして家の様子なんてご存じないでしょう")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("何を根拠に――")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("ふん、どうかな")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("うちの家は全員秀才揃いなんだ")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("私は３歳で福音書を暗唱できたのに")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("こいつはだんまりだ")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("みなさん利発そうだとほめてくださいます")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("社交辞令だよバカ")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("気を使われてるんだよ")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("そんな")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("私、良妻を務めてきました")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("ああそうだろう")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("だが母親失格だ")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("だってあたし、双子が生まれるだなんて")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("それも関係ない")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("それから、田舎臭い言葉も控えなさい")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("来月、弟が訪ねてくる")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("息子を連れてな")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02", "serif": _("男を産めないならせめてまともな娘を育ててくれ")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("それができないなら話せないやつは顔を出させるな")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03", "serif": _("わかりました......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj02", "serif": _("ママ？"), "option": {"changeField": "chapter6_04"}},
							]
						]},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_10_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: "chapter6-10-obj01",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "さとりとこいし",
			serif: null,
			x: 60.5*2/3, y: 469.00*2/3,
			width: 100,
			scale: 2/3,
			anime1: "chapter6-10-obj01-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "TVとイス",
			serif: null,
			x: 720*2/3, y: 469.00*2/3,
			width: 100,
			scale: 2/3,
			anime1: "chapter6-10-obj02-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: "chapter6-10-obj03",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "両親",
			serif: null,
			x: 1103*2/3, y: 509*2/3,
			width: 100,
			scale: 2/3,
			anime1: "chapter6-10-obj03-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},

	],
};

