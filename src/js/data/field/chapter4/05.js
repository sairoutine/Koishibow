'use strict';
var _ = require('i18n4v')
//・テープ「チャルメラ」
// ・メリー
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_05",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_06",
	leftField: "chapter4_04",
	upField:    null,
	downField:  "chapter4_08",
	background: "chapter4-05-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-wait",
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
			type: CONSTANT.STATIC_IMAGE_TYPE,
			image: "item_23",
			name: "カセットテープ「チャルメラ」",
			serif: [
				//カセットテープ「チャルメラ」獲得
				{"chara": "koishi", "exp": "touch", "serif": _("またみっけた！	またあった！"), "option": {"getItem": "24"}},
				//カセットテープ「チャルメラ」を非表示
				{"id": "chapter4-03-show_tape2", "save": true},
				{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("竹林の中にテープ？"), serif2: _("竹林の中にテープ？"), serif3: _("竹林の中にテープ？"), serif4: _("竹林の中にテープ？")},
				{"chara": "koishi", "exp": "yes", "serif": _("へんなの")},
				{"chara": "koishi", "exp": "look_top",  serif1: _("誰かが落としたのかな"), serif2: _("誰かが落としたのかな"), serif3: _("誰かが落としたのかな"), serif4: _("誰かが落としたのかな")},
				{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("うーんどうかな"), serif2: _("うーんどうかな"), serif3: _("うーんどうかな"), serif4: _("うーんどうかな")},
				{"chara": "merry", "exp": null,  serif1: _("蓮子のじゃあないと思うんだけど"), serif2: _("蓮子のじゃあないと思うんだけど"), serif3: _("蓮子のじゃあないと思うんだけど"), serif4: _("蓮子のじゃあないと思うんだけど")},
				{"chara": "koishi", "exp": "look_top",  serif1: _("蓮子って？"), serif2: _("蓮子って？"), serif3: _("蓮子って？"), serif4: _("蓮子って？")},
				{"chara": "koishi", "exp": null,  serif1: _("さがしてるお友達のこと？"), serif2: _("さがしてるお友達のこと？"), serif3: _("さがしてるお友達のこと？"), serif4: _("さがしてるお友達のこと？")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif": _("そうよ")},
				{"chara": "koishi", "exp": "yes",  serif1: _("れんこんさんみたい！"), serif2: _("蓮根みたい！へんなの"), serif3: _("蓮根みたい！へんなの"), serif4: _("蓮根みたい！へんなの")},
				{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("本当にそういう字を書くのよ"), serif2: _("本当にそういう字を書くのよ"), serif3: _("本当にそういう字を書くのよ"), serif4: _("本当にそういう字を書くのよ")},
				{"chara": "koishi", "exp": "look_front", "serif": _("えっ")},
				{"chara": "koishi", "exp": "wait", "serif": _("......")},
				{"chara": "koishi", "exp": null,  serif1: _("どういうこと"), serif2: _("......"), serif3: _("......"), serif4: _("......")},
				{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("ごめん、難しかったわね"), serif2: _("ごめん、難しかったわね"), serif3: _("ごめん、難しかったわね"), serif4: _("ごめん、難しかったわね")},
				{"chara": "merry", "exp": null,  serif1: _("今のは忘れて"), serif2: _("今のは忘れて"), serif3: _("今のは忘れて"), serif4: _("今のは忘れて")},
				{"chara": "koishi", "exp": "wait",  serif1: _("蓮根がお友達だなんて"), serif2: _("蓮根がお友達だなんて"), serif3: _("蓮根がお友達だなんて"), serif4: _("蓮根がお友達だなんて")},
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("忘れられないよ"), serif2: _("忘れられないよ"), serif3: _("忘れられないよ"), serif4: _("忘れられないよ")},
				{"chara": "merry", "exp": "merry-wait", "serif": _("......")},
				{"chara": "koishi", "exp": "look_bottom", "serif": _("......")},
				{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("あなたにはどんな友達がいるの？"), serif2: _("あなたにはどんな友達がいるの？"), serif3: _("あなたにはどんな友達がいるの？"), serif4: _("あなたにはどんな友達がいるの？")},
				{"chara": "koishi", "exp": "wait",  serif1: _("わたし？"), serif2: _("わたし？"), serif3: _("わたし？"), serif4: _("わたし？")},
				{"chara": "koishi", "exp": null,  serif1: _("いっぱい"), serif2: _("いっぱい"), serif3: _("こないだ遊んだ子は一緒に雪だるまつくったの"), serif4: _("こないだ遊んだ子は一緒に雪だるまつくったの")},
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("えっとね、"), serif2: _("えっとね、"), serif3: _("あたま足りない子になったから"), serif4: _("あたま足りない子になったから")},
				{"chara": "koishi", "exp": null,  serif1: _("えっと......"), serif2: _("えっと......"), serif3: _("その子の頭をはねてね"), serif4: _("その子の頭をはねてね")},
				{"chara": "koishi", "exp": "yes",  serif1: _("いっぱいいるよ"), serif2: _("いっぱいいるよ"), serif3: _("雪だるまの頭にしたの"), serif4: _("雪だるまの頭にしたの")},
				{"chara": "koishi", "exp": null, "serif": _("......")},
				{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("そうなんだ"), serif2: _("そうなんだ"), serif3: _("そうなんだ"), serif4: _("そうなんだ")},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter4-03-show_tape2",
		},



	],
};

