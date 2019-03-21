'use strict';
var _ = require('i18n4v')
//メリー「まずはあっちへ行ってみましょ」（上を指さす）

var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_42",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_43",
	leftField:  "chapter4_41",
	upField:    "chapter4_38",
	downField:  "chapter4_30",
	background: "chapter4-42-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_42_40830"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "renko", "exp": "renko-reaction_05", "serif":_("なるほど")},
						{"chara": "renko", "exp": "renko-reaction_01", "serif":_("確かにこの辺りは怪しいわ")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("境界線が見つかりそう")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("でもメビウス環的パラドックスの気配もするわ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("私にまかせて！")},
						{"chara": "koishi", "exp": null, "serif":_("何を探せばいいんだっけ")},
						{"chara": "merry", "exp": "merry-reaction_03", "serif":_("......")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("境界を探すのよ")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("私はそれを見ればそれとわかる")},
						{"chara": "renko", "exp": "renko-reaction_02", "serif":_("ここに来た時もそこを通じて来たからこのあたりのはずよ")},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("私はその気配を感じ取れる")},
						{"chara": "renko", "exp": "renko-reaction_06", "serif":_("私は緯度と経度がわかる")},
						{"chara": "koishi", "exp": "look_top", "serif":_("けーどって何")},
						{"chara": "koishi", "exp": null, "serif":_("......")},
						{"chara": "renko", "exp": "renko-reaction_05", "serif":_("二酸化ケイ素が土の状態を取るとき――")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("やめなさいよ")},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("蓮子は今自分がどこにいるかわかるのよ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("すごーい")},
						{"chara": "koishi", "exp": null, "serif":_("でも私に任せて")},
						{"chara": "koishi", "exp": "yes", "serif":_("私が二人をお家に返してあげる！")},
						{"chara": "koishi", "exp": "use_eye", "serif":_("私は専門家だから！")},
						{"chara": "renko", "exp": "renko-reaction_01", "serif":_("なんの？")},
						{"chara": "koishi", "exp": "look_front", "serif":_("ともだち作ったり仲直りさせたり")},
						{"chara": "koishi", "exp": null, "serif":_("雪だるまだって名人よ！")},
						{"chara": "koishi", "exp": "yes", "serif":_("クッキーだって作れる")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("ねえ")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("一回だけチャンスをあげましょ")},
						{"chara": "renko", "exp": "renko-reaction_04", "serif":_("あのね、あなた帰りたいんだったら”自分の足で歩く”のよ")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("それは彼女も一緒でしょ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("はやくはじめましょ！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_42_40830"]}
			],
		]},

	],
	objects: [
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 960*2/3, y: 505*2/3,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "merry", "exp": "merry-reaction_13", "serif":_("まずはあっちへ行ってみましょ")},
			],
			x: 1160*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
		},
		SwitchMiss,  //スイッチ(ハズレ)
	],
};

