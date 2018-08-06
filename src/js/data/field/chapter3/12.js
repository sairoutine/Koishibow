'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_12",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 450},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_13",
	leftField: "chapter3_11",
	background: "chapter3-12-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12_firstaccess"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// フラン表示
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_fran"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_12_firstaccess"]}
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
						{"chara": "fran", "exp": "fran-reaction_04", "serif":"それはだめよ！"},
						{"chara": "fran", "exp": "fran-wait", "serif":"それはわたしの"},
						{"chara": "koishi","exp": "back", "serif":"わかった"},
					],
					// フランがいないとき
					[
						{"chara": "koishi","serif":"おもちゃいーなー"},
					],
				]},

			],
			x: 1268*2/3, y: 770.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓄音機",
			serif: [
				{"chara": "koishi","serif":"わたしもこうゆうのほしいな..."},
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
						{"chara": "koishi","serif":"おっきいなー"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"えへへ"},
						{"chara": "koishi", "exp": "back", "serif":"これなに？"},
						{"chara": "fran", "exp": "fran-wait", "serif":"冬飾りよ"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"毎年雪が積もったら木をきれいにするの"},
						{"chara": "koishi","serif":"なんで？"},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":"そのほうが楽しいから！"},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":"いっぱい雪が降ったら\nやることなくなっちゃうからね！"},
					],
					// フランがいないとき
					[
						{"chara": "koishi","serif":"きれい！"},
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
					[],
					// good root
					[
						{"chara": "koishi","serif":"また作ってる"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"うん"},
						{"chara": "koishi","serif":"なんで"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"つくるの、楽しいから"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"私上手だし！"},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":"達人なんだ！"},
						{"chara": "fran", "exp": "fran-reaction_05", "serif":"えへへ"},
						{"chara": "koishi","serif":"うん"},
						{"chara": "koishi","serif":"なんでそんなに上手なの"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"おねえちゃんに習ったから"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"あなたは？"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"誰に習った？"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"パパ？"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"ママ？"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"おねえちゃん？"},
						{"chara": "koishi","serif":"............"},
						{"chara": "koishi","serif":"あのね"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"なあに"},
						{"chara": "koishi","serif":"本当はわからないの"},
						{"chara": "fran", "exp": "fran-wait", "serif":"............"},
						{"chara": "koishi","serif":"あのこも"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"うん"},
						{"chara": "koishi","serif":"手伝ってちょうだい"},
						{"chara": "koishi","serif":"すごいのつくろう"},
						{"chara": "fran", "exp": "fran-wait", "serif":"ふーん"},
						{"chara": "fran", "exp": "fran-reaction_05", "serif":"いいわね"},
						{"chara": "koishi","serif":"じゃあ丘の上でね"},
						{"chara": "fran", "exp": "fran-reaction_06", "serif":"ん"},
						{"chara": "fran", "exp": "fran-reaction_03", "serif":"わかった"},
					],
					[
						{"chara": "fran", "exp": "fran-reaction_01", "serif":"はやく作りましょ！"},
						{"chara": "fran", "exp": "fran-reaction_02", "serif":"どこで作る？"},
						{"chara": "koishi","serif":"こっちよ"},
						{"chara": "fran", "exp": "fran-reaction_01", "serif":"はやくいきましょ！"},
					],
				]},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-fran-_uraFirst"], "serifs": [
					[
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":"ねえねえおねえちゃん"},
						{"chara": "fran", "exp": "fran-ura_reaction_04", "serif":"いまお人形作ってるんだけど"},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":"おめめがね？"},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":"おめめをどうしたらいいかわからないの"},
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":"おねえちゃんのもらっていーい？"},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":"だめなの？"},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":"なんで"},
					],
					[
						{"id": "chapter3_12-fran-_uraFirst", "save": true},
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":"私のが一番だったの！？"},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":"やったあ！"},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":"うれしい！"},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":"あのね、おねえちゃんが\n教えてくれたから上手にできたの！"},
						{"chara": "fran", "exp": "fran-ura_reaction_02", "serif":"おねえちゃん大好き"},
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
			show_if_event_true: "chapter3-08-show_fran",
		},

	],
};

