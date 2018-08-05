'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_08",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_09",
	leftField: "chapter3_07",
	background: "chapter3-08-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08_30050"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","serif":"あら"},
						{"chara": "koishi","serif":"出られないの？"},
						{"chara": "koishi","serif":"助けてあげるね"},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_08_30050"]}
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
			anime1: "chapter3-08-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-08-obj-01-obj02",
			anime5: "chapter3-08-obj-01-obj03",
			anime6: "chapter3-08-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter3-08-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チルノが埋まってる雪山",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 711.50*2/3, y: 643.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter3-08-event-02_played",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "チルノ",
			loop: true,
			serif: [

				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-" + I + "-_firstEvent"], "serifs": [
					[
						{"chara": "koishi","serif":"ねえあなたお友達いる？"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"いないよ！"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"わたしに釣り合う奴なんていないから！"},
					],
					[
						{"id": "chapter3_08-" + I + "-_firstEvent", "save": true},
						{"chara": I, "exp": "cirno-reaction_01", "serif":"おまえー！"},
						{"chara": I, "exp": "cirno-reaction_01", "serif":"せっかくいいところだったのに！"},
						{"chara": "koishi","serif":"でも死んじゃうわ"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"あたいはね、"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"だるまになりたいの！"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"邪魔しないでよ"},
						{"chara": "koishi","serif":"？"},
						{"chara": "koishi","serif":"のこぎり使えば？"},
						{"chara": I, "exp": "cirno-reaction_01", "serif":"スノーマンよ！"},
						{"chara": "koishi","serif":"ふーん"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"あたいは人気者になりたいの！"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"責任取って雪だるまにして！"},
						{"chara": "koishi","serif":"なんで？"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"雪だるまはねえ！"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"みんなに抱きしめてもらえるの！"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"氷の像なんかと違ってね！"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"だからあたいを雪だるまにして！", "junction": ["いいよ！","いいよ","いいよ......"]},
						// TODO: イベント再生
						{"chara": I, "exp": "cirno-reaction_02", "serif":"計画はね！"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"わたしのからだにいっぱい雪をつけるでしょ"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"そしたらからだがおっきくなるから"},
						{"chara": I, "exp": "cirno-reaction_03", "serif":"そしたらおっきなゆきだるまになるから"},
						{"chara": I, "exp": "cirno-reaction_02", "serif":"すごいでしょ！"},
						{"chara": "koishi","serif":"いいわ"},
						{"chara": "koishi","serif":"やる"},
						{"chara": I, "exp": "cirno-reaction_04", "serif":"これ見て！", "option": {"showPicture": "picture_chapter3-08-illust-01"}},
						{"chara": I, "exp": "cirno-reaction_04", "serif":"完璧な計画よね！"},
						// TODO: イベント再生
					],
				]},
			],
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "cirno-wait",
			anime2: null,
			anime3: null,
			anime4: "cirno-reverse_ura",
			anime5: "cirno-ura_wait",
			anime6: "cirno-reverse_omote",
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3-08-event-02_played",
		},
		{
			no: ++I,
			image: "chapter3-08-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "枯れ木",
			serif: [
				// TODO: イベントのあとのセリフです
				{"chara": "koishi","serif":"この木さむそう！"},
			],
			x:967*2/3, y:366.50*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
	],
};

