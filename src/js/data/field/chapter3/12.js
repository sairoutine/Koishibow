'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_12",
	chapter: 3,
	bgm: "field8",
	sub_bgms: ["chapter3-12-wood"],
	rightStartPosition: {x: 690, y: 450},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_13",
	leftField: "chapter3_11",
	background: "chapter3-12-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12_Event_30210"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// フラン表示
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_fran"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_12_Event_30210"]},
				{"type": "process", "value": "changeScene", "arguments": ["event_talk_old", "chapter3-12-event-01"]},
			],
		]},
	],

	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-12-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-12-obj-01-obj02",
			anime5: "chapter3-12-obj-01-obj03",
			anime6: "chapter3-12-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-12-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "おもちゃ箱",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3-08-show_fran"], "serifs": [
					// フランがいるとき
					[
						{"chara": "fran", "exp": "fran-reaction_04", "serif":_("それはだめよ！")},
						{"chara": "fran", "exp": "fran-wait", "serif":_("それはわたしの")},
						{"chara": "koishi","exp": "back", "serif":_("わかった")},
					],
					// フランがいないとき
					[
						{"chara": "koishi","serif":_("おもちゃいーなー")},
					],
				]},

			],
			x: 1268*2/3, y: 770.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: "chapter3-12-touch_toybox",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓄音機",
			serif: [
				{"chara": "koishi","serif":_("わたしもこうゆうのほしいな...")},
			],
			x: 412*2/3, y: 628*2/3,
			scale: 2/3,
			anime1: "chapter3-12-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クリスマスツリー",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3-08-show_fran"], "serifs": [
					// フランがいるとき
					[
						{"chara": "koishi","serif":_("おっきいなー")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("えへへ")},
						{"chara": "koishi", "exp": "back", "serif":_("これなに？")},
						{"chara": "fran", "exp": "fran-wait", "serif":_("冬飾りよ")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("毎年雪が積もったら木をきれいにするの")},
						{"chara": "koishi","serif":_("なんで？")},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":_("そのほうが楽しいから！")},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":_("いっぱい雪が降ったら\nやることなくなっちゃうからね！")},
					],
					// フランがいないとき
					[
						{"chara": "koishi","serif":_("きれい！")},
					],
				]},
			],
			x: 717*2/3, y: 400*2/3,
			scale: 2/3,
			anime1: "chapter3-12-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,

			width: 150,
			action_name: "look_top",
			sound_name: null,
		},
		{
			no: "fran",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "フラン",
			loop: true,
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30310"], "serifs": [
					// good root
					[
						{"id": "chapter3_12-fran-serif-30320", "save": true},
						{"chara": "koishi","serif":_("また作ってる")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("うん")},
						{"chara": "koishi","serif":_("なんで")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("つくるの、楽しいから")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("私上手だし！")},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":_("達人なんだ！")},
						{"chara": "fran", "exp": "fran-reaction_05", "serif":_("えへへ")},
						{"chara": "koishi","serif":_("うん")},
						{"chara": "koishi","serif":_("なんでそんなに上手なの")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("おねえちゃんに習ったから")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("あなたは？")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("誰に習った？")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("パパ？")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("ママ？")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("おねえちゃん？")},
						{"chara": "koishi","serif":_("............")},
						{"chara": "koishi","serif":_("あのね")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("なあに")},
						{"chara": "koishi","serif":_("本当はわからないの")},
						{"chara": "fran", "exp": "fran-wait", "serif":_("............")},
						{"chara": "koishi","serif":_("あのこも")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("うん")},
						{"chara": "koishi","serif":_("手伝ってちょうだい")},
						{"chara": "koishi","serif":_("すごいのつくろう")},
						{"chara": "fran", "exp": "fran-wait", "serif":_("ふーん")},
						{"chara": "fran", "exp": "fran-reaction_05", "serif":_("いいわね")},
						{"chara": "koishi","serif":_("じゃあ丘の上でね")},
						{"chara": "fran", "exp": "fran-reaction_06", "serif":_("ん")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":_("わかった")},
					],
					[
						{"chara": "fran", "exp": "fran-reaction_01", "serif":_("はやく作りましょ！")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":_("どこで作る？")},
						{"chara": "koishi","serif":_("こっちよ")},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":_("はやくいきましょ！")},
					],
				]},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-fran-_uraFirst"], "serifs": [
					[
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":_("ねえねえおねえちゃん")},
						{"chara": "fran", "exp": "fran-ura_reaction_04", "serif":_("いまお人形作ってるんだけど")},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":_("おめめがね？")},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":_("おめめをどうしたらいいかわからないの")},
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":_("おねえちゃんのもらっていーい？")},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":_("だめなの？")},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":_("なんで")},
					],
					[
						{"id": "chapter3_12-fran-_uraFirst", "save": true},
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":_("私のが一番だったの！？")},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":_("やったあ！")},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":_("うれしい！")},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":_("あのね、おねえちゃんが\n教えてくれたから上手にできたの！")},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":_("おねえちゃん大好き")},
					],
				]}
			],
			x: 650, y: 400,
			scale: 2/3,
			anime1: "fran-wait",
			anime2: null,
			anime3: null,
			anime4: "fran-reverse_ura",
			anime5: "fran-ura_wait",
			anime6: "fran-reverse_omote",
			action_name: null,
			sound_name: null,
			width: 150,
			show_if_event_true: "chapter3-08-show_fran",
		},

	],
};

