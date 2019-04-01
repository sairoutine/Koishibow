'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_10",
	chapter: 6,
	bgm: "field13",
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
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("あぶあぶあぶ"), serif2: _("あぶあぶあぶ"), serif3: _("あぶあぶあぶ"), serif4: _("あぶあぶあぶ")},
								{"chara": "chapter6-10-obj01","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("ぶあー！！"), serif2: _("ぶあー！！"), serif3: _("ぶあー！！"), serif4: _("ぶあー！！")},
								{"chara": "chapter6-10-obj03","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("ﾌﾞﾌﾞﾌﾞ"), serif2: _("ﾌﾞﾌﾞﾌﾞ"), serif3: _("ﾌﾞﾌﾞﾌﾞ"), serif4: _("ﾌﾞﾌﾞﾌﾞ")},
								{"chara": "chapter6-10-obj01","exp": null, "serif": _("......")},
								{"chara": "chapter6-10-obj03","exp": null,  serif1: _("静かにしなさい"), serif2: _("静かにしなさい"), serif3: _("静かにしなさい"), serif4: _("静かにしなさい")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("あば"), serif2: _("あば"), serif3: _("あば"), serif4: _("あば")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("ぶぶぶー"), serif2: _("ぶぶぶー"), serif3: _("ぶぶぶー"), serif4: _("ぶぶぶー")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05",  serif1: _("しずかにして！"), serif2: _("しずかにして！"), serif3: _("しずかにして！"), serif4: _("しずかにして！")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05",  serif1: _("私は悪くないのに！"), serif2: _("私は悪くないのに！"), serif3: _("私は悪くないのに！"), serif4: _("私は悪くないのに！")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("う"), serif2: _("う"), serif3: _("う"), serif4: _("う")},
								{"chara": "chapter6-10-obj01","exp": null,  serif1: _("あ˝あ˝"), serif2: _("あ˝あ˝"), serif3: _("あ˝あ˝"), serif4: _("あ˝あ˝")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj03",  serif1: _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝"), serif2: _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝"), serif3: _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝"), serif4: _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝")},
								{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj05",  serif1: _("ううう"), serif2: _("ううう"), serif3: _("ううう"), serif4: _("ううう")},
								{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj04",  serif1: _("誰が悪いのかしら"), serif2: _("誰が悪いのかしら"), serif3: _("誰が悪いのかしら"), serif4: _("誰が悪いのかしら"), "option": {"changeField": "chapter6_13"}},
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
						{"id": "chapter6-04-show_eyedrops", "save": true},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("一体どうなってるんだ！"), serif2: _("一体どうなってるんだ！"), serif3: _("一体どうなってるんだ！"), serif4: _("一体どうなってるんだ！")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("あんなに大きいのに可阿呆はまだ喋らないぞ"), serif2: _("あんなに大きいのに可阿呆はまだ喋らないぞ"), serif3: _("あんなに大きいのに可阿呆はまだ喋らないぞ"), serif4: _("あんなに大きいのに可阿呆はまだ喋らないぞ")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("ちゃんと面倒みてるのか"), serif2: _("ちゃんと面倒みてるのか"), serif3: _("ちゃんと面倒みてるのか"), serif4: _("ちゃんと面倒みてるのか")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("そんな"), serif2: _("そんな"), serif3: _("そんな"), serif4: _("そんな")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("私は精一杯――"), serif2: _("私は精一杯――"), serif3: _("私は精一杯――"), serif4: _("私は精一杯――")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("育て方が正しいのなら生まれが悪いんだろう"), serif2: _("育て方が正しいのなら生まれが悪いんだろう"), serif3: _("育て方が正しいのなら生まれが悪いんだろう"), serif4: _("育て方が正しいのなら生まれが悪いんだろう")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("本当に禁酒できていたんだろうな"), serif2: _("本当に禁酒できていたんだろうな"), serif3: _("本当に禁酒できていたんだろうな"), serif4: _("本当に禁酒できていたんだろうな")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("何をおっしゃるのです"), serif2: _("何をおっしゃるのです"), serif3: _("何をおっしゃるのです"), serif4: _("何をおっしゃるのです")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("ずっと留守にして家の様子なんてご存じないでしょう"), serif2: _("ずっと留守にして家の様子なんてご存じないでしょう"), serif3: _("ずっと留守にして家の様子なんてご存じないでしょう"), serif4: _("ずっと留守にして家の様子なんてご存じないでしょう")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("何を根拠に――"), serif2: _("何を根拠に――"), serif3: _("何を根拠に――"), serif4: _("何を根拠に――")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("ふん、どうかな"), serif2: _("ふん、どうかな"), serif3: _("ふん、どうかな"), serif4: _("ふん、どうかな")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("うちの家は全員秀才揃いなんだ"), serif2: _("うちの家は全員秀才揃いなんだ"), serif3: _("うちの家は全員秀才揃いなんだ"), serif4: _("うちの家は全員秀才揃いなんだ")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("私は３歳で福音書を暗唱できたのに"), serif2: _("私は３歳で福音書を暗唱できたのに"), serif3: _("私は３歳で福音書を暗唱できたのに"), serif4: _("私は３歳で福音書を暗唱できたのに")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("こいつはだんまりだ"), serif2: _("こいつはだんまりだ"), serif3: _("こいつはだんまりだ"), serif4: _("こいつはだんまりだ")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("みなさん利発そうだとほめてくださいます"), serif2: _("みなさん利発そうだとほめてくださいます"), serif3: _("みなさん利発そうだとほめてくださいます"), serif4: _("みなさん利発そうだとほめてくださいます")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("社交辞令だよバカ"), serif2: _("社交辞令だよバカ"), serif3: _("社交辞令だよバカ"), serif4: _("社交辞令だよバカ")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("気を使われてるんだよ"), serif2: _("気を使われてるんだよ"), serif3: _("気を使われてるんだよ"), serif4: _("気を使われてるんだよ")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("そんな"), serif2: _("そんな"), serif3: _("そんな"), serif4: _("そんな")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("私、良妻を務めてきました"), serif2: _("私、良妻を務めてきました"), serif3: _("私、良妻を務めてきました"), serif4: _("私、良妻を務めてきました")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("ああそうだろう"), serif2: _("ああそうだろう"), serif3: _("ああそうだろう"), serif4: _("ああそうだろう")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("だが母親失格だ"), serif2: _("だが母親失格だ"), serif3: _("だが母親失格だ"), serif4: _("だが母親失格だ")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("だってあたし、双子が生まれるだなんて"), serif2: _("だってあたし、双子が生まれるだなんて"), serif3: _("だってあたし、双子が生まれるだなんて"), serif4: _("だってあたし、双子が生まれるだなんて")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("それも関係ない"), serif2: _("それも関係ない"), serif3: _("それも関係ない"), serif4: _("それも関係ない")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("それから、田舎臭い言葉も控えなさい"), serif2: _("それから、田舎臭い言葉も控えなさい"), serif3: _("それから、田舎臭い言葉も控えなさい"), serif4: _("それから、田舎臭い言葉も控えなさい")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("来月、弟が訪ねてくる"), serif2: _("来月、弟が訪ねてくる"), serif3: _("来月、弟が訪ねてくる"), serif4: _("来月、弟が訪ねてくる")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("息子を連れてな"), serif2: _("息子を連れてな"), serif3: _("息子を連れてな"), serif4: _("息子を連れてな")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj02",  serif1: _("男を産めないならせめてまともな娘を育ててくれ"), serif2: _("男を産めないならせめてまともな娘を育ててくれ"), serif3: _("男を産めないならせめてまともな娘を育ててくれ"), serif4: _("男を産めないならせめてまともな娘を育ててくれ")},
						{"chara": "chapter6-10-obj03","exp": null,  serif1: _("それができないなら話せないやつは顔を出させるな"), serif2: _("それができないなら話せないやつは顔を出させるな"), serif3: _("それができないなら話せないやつは顔を出させるな"), serif4: _("それができないなら話せないやつは顔を出させるな")},
						{"chara": "chapter6-10-obj03","exp": "chapter6-10-obj03-obj03",  serif1: _("わかりました......"), serif2: _("わかりました......"), serif3: _("わかりました......"), serif4: _("わかりました......")},
						{"chara": "chapter6-10-obj01","exp": "chapter6-10-obj01-obj02",  serif1: _("ママ？"), serif2: _("ママ？"), serif3: _("ママ？"), serif4: _("ママ？"), "option": {"changeField": "chapter6_04"}},
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

