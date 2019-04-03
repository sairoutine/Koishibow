'use strict';
var _ = require('i18n4v')
//メリー「まずはあっちへ行ってみましょ」（上を指さす）

var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_42",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
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
						{"chara": "renko", "exp": "renko-reaction_05",  serif1: _("なるほど"), serif2: _("なるほど"), serif3: _("なるほど"), serif4: _("なるほど")},
						{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("確かにこの辺りは怪しいわ"), serif2: _("確かにこの辺りは怪しいわ"), serif3: _("確かにこの辺りは怪しいわ"), serif4: _("確かにこの辺りは怪しいわ")},
						{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("境界線が見つかりそう"), serif2: _("境界線が見つかりそう"), serif3: _("境界線が見つかりそう"), serif4: _("境界線が見つかりそう")},
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("でもメビウス環的パラドックスの気配もするわ"), serif2: _("でもメビウス環的パラドックスの気配もするわ"), serif3: _("でもメビウス環的パラドックスの気配もするわ"), serif4: _("でもメビウス環的パラドックスの気配もするわ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("私にまかせて！"), serif2: _("私にまかせて！"), serif3: _("私にまかせて！"), serif4: _("私にまかせて！")},
						{"chara": "koishi", "exp": null,  serif1: _("何を探せばいいんだっけ"), serif2: _("何を探せばいいんだっけ"), serif3: _("何を探せばいいんだっけ"), serif4: _("何を探せばいいんだっけ")},
						{"chara": "merry", "exp": "merry-reaction_03", "serif": _("......")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("境界を探すのよ"), serif2: _("境界を探すのよ"), serif3: _("境界を探すのよ"), serif4: _("境界を探すのよ")},
						{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("私はそれを見ればそれとわかる"), serif2: _("私はそれを見ればそれとわかる"), serif3: _("私はそれを見ればそれとわかる"), serif4: _("私はそれを見ればそれとわかる")},
						{"chara": "renko", "exp": "renko-reaction_02", "serif": _("ここに来た時もそこを通じて来たからこのあたりのはずよ")},
						{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("私はその気配を感じ取れる"), serif2: _("私はその気配を感じ取れる"), serif3: _("私はその気配を感じ取れる"), serif4: _("私はその気配を感じ取れる")},
						{"chara": "renko", "exp": "renko-reaction_06",  serif1: _("私は緯度と経度がわかる"), serif2: _("私は緯度と経度がわかる"), serif3: _("私は緯度と経度がわかる"), serif4: _("私は緯度と経度がわかる")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("けーどって何"), serif2: _("井戸は知ってるけど......"), serif3: _("井戸は知ってるけど......"), serif4: _("井戸は知ってるけど......")},
						{"chara": "koishi", "exp": null, "serif": _("......")},
						{"chara": "renko", "exp": "renko-reaction_05",  serif1: _("二酸化ケイ素が土の状態を取るとき――"), serif2: _("二酸化ケイ素が土の状態を取るとき――"), serif3: _("二酸化ケイ素が土の状態を取るとき――"), serif4: _("二酸化ケイ素が土の状態を取るとき――")},
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("やめなさいよ"), serif2: _("やめなさいよ"), serif3: _("やめなさいよ"), serif4: _("やめなさいよ")},
						{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("蓮子は今自分がどこにいるかわかるのよ"), serif2: _("蓮子は今自分がどこにいるかわかるのよ"), serif3: _("蓮子は今自分がどこにいるかわかるのよ"), serif4: _("蓮子は今自分がどこにいるかわかるのよ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("すごーい"), serif2: _("すごいね"), serif3: _("本当？"), serif4: _("本当？")},
						{"chara": "koishi", "exp": null,  serif1: _("でも私に任せて"), serif2: _("でも私に任せて"), serif3: _("それでも行先分からないの？"), serif4: _("それでも行先分からないの？")},
						{"chara": "koishi", "exp": "yes",  serif1: _("私が二人をお家に返してあげる！"), serif2: _("私が二人をお家に返してあげる！"), serif3: _("私が二人をお家に返してあげる！"), serif4: _("私が二人をお家に返してあげる！")},
						{"chara": "koishi", "exp": "use_eye",  serif1: _("私は専門家だから！"), serif2: _("私は専門家だから！"), serif3: _("私は専門家だから！"), serif4: _("私は専門家だから！")},
						{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("なんの？"), serif2: _("なんの？"), serif3: _("なんの？"), serif4: _("なんの？")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("ともだち作ったり仲直りさせたり"), serif2: _("ともだち作ったり仲直りさせたり"), serif3: _("ともだち作ったり仲直りさせたり"), serif4: _("ともだち作ったり仲直りさせたり")},
						{"chara": "koishi", "exp": null,  serif1: _("雪だるまだって名人よ！"), serif2: _("雪だるまだって名人よ！"), serif3: _("雪だるまだって名人よ！"), serif4: _("雪だるまだって名人よ！")},
						{"chara": "koishi", "exp": "yes",  serif1: _("クッキーだって作れる"), serif2: _("クッキーだって作れる"), serif3: _("クッキーだって作れる"), serif4: _("クッキーだって作れる")},
						{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("ねえ"), serif2: _("ねえ"), serif3: _("ねえ"), serif4: _("ねえ")},
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("一回だけチャンスをあげましょ"), serif2: _("一回だけチャンスをあげましょ"), serif3: _("一回だけチャンスをあげましょ"), serif4: _("一回だけチャンスをあげましょ")},
						{"chara": "renko", "exp": "renko-reaction_04", "serif": _("あのね、あなた帰りたいんだったら”自分の足で歩く”のよ")},
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("それは彼女も一緒でしょ"), serif2: _("それは彼女も一緒でしょ"), serif3: _("それは彼女も一緒でしょ"), serif4: _("それは彼女も一緒でしょ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("はやくはじめましょ！"), serif2: _("はやくはじめましょ！"), serif3: _("はやくはじめましょ！"), serif4: _("はやくはじめましょ！")},
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
				{"chara": "merry", "exp": "merry-reaction_13",  serif1: _("まずはあっちへ行ってみましょ"), serif2: _("まずはあっちへ行ってみましょ"), serif3: _("まずはあっちへ行ってみましょ"), serif4: _("まずはあっちへ行ってみましょ")},
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

