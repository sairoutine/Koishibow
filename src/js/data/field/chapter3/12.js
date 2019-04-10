'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_12",
	chapter: 3,
	bgm: null,
	sub_bgms: ["chapter3-12-wood"],
	rightStartPosition:   {x: 690, y: 450},
	leftStartPosition:    {x: 200, y: 450},
	defaultStartPosition: {x: 200, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_13",
	leftField: "chapter3_11",
	upField: null,
	downField: null,
	background: "chapter3-12-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		// BGM 再生
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-play_fran_bgm"], "process": [
			[
				// フランBGM
				{"type": "process", "value": "playBGM", "arguments": ["field8"]},
			],
			[
				// 通常BGM
				{"type": "process", "value": "playBGM", "arguments": ["field7"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12_Event_30210"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// フラン表示
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_fran"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_12_Event_30210"]},
				{"type": "process", "value": "changeScene", "arguments": ["event_talk_old", "chapter3-12-event-01"]},
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "serif": "", "option": {"getItem": "13"}},
					],
				]},
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
						{"chara": "fran", "exp": "fran-reaction_04",  serif1: _("それはだめよ！"), serif2: _("それはだめよ！"), serif3: _("それはだめよ！"), serif4: _("それはだめよ！")},
						{"chara": "fran", "exp": "fran-wait",  serif1: _("それはわたしの"), serif2: _("それはわたしの"), serif3: _("それはわたしの"), serif4: _("それはわたしの")},
						{"chara": "koishi","exp": "back", "serif": _("わかった")},
					],
					// フランがいないとき
					[
						{"chara": "koishi", serif1: _("おもちゃいーなー"), serif2: _("お姉ちゃんにもらったのかな"), serif3: _("お姉ちゃんにもらったのかな"), serif4: _("お姉ちゃんにもらったのかな")},
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
				{"chara": "koishi", serif1: _("わたしもこうゆうのほしいな..."), serif2: _("私もほしいな"), serif3: _("私もほしいな"), serif4: _("私もほしいな")},
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
						{"chara": "koishi", serif1: _("おっきいなー"), serif2: _("おっきいなー"), serif3: _("おっきいなー"), serif4: _("おっきいなー")},
						{"chara": "fran", "exp": "fran-reaction_03",  serif1: _("えへへ"), serif2: _("えへへ"), serif3: _("えへへ"), serif4: _("えへへ")},
						{"chara": "koishi", "exp": "back",  serif1: _("これなに？"), serif2: _("これなに？"), serif3: _("これなに？"), serif4: _("これなに？")},
						{"chara": "fran", "exp": "fran-wait",  serif1: _("冬飾りよ"), serif2: _("冬飾りよ"), serif3: _("冬飾りよ"), serif4: _("冬飾りよ")},
						{"chara": "fran", "exp": "fran-reaction_03",  serif1: _("毎年雪が積もったら木をきれいにするの"), serif2: _("毎年雪が積もったら木をきれいにするの"), serif3: _("毎年雪が積もったら木をきれいにするの"), serif4: _("毎年雪が積もったら木をきれいにするの")},
						{"chara": "koishi","serif": _("なんで？")},
						{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("そのほうが楽しいから！"), serif2: _("そのほうが楽しいから！"), serif3: _("そのほうが楽しいから！"), serif4: _("そのほうが楽しいから！")},
						{"chara": "fran", "exp": "fran-reaction_01", "serif": _("いっぱい雪が降ったら\nやることなくなっちゃうからね！")},
					],
					// フランがいないとき
					[
						{"chara": "koishi","serif": _("きれい！")},
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
			turn_not_toward_me: true, // こいしの方を向く
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30310"], "serifs": [
					// good root
					[
						{"id": "chapter3_12-play_fran_bgm", "save": true},
						{"id": "chapter3_12-fran-serif-30320", "save": true},
						{"chara": "koishi", serif1: _("また作ってる"), serif2: _("また作ってる"), serif3: _("また作ってる"), serif4: _("また作ってる")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif": _("うん")},
						{"chara": "koishi","serif": _("なんで")},
						{"chara": "fran", "exp": "fran-reaction_03",  serif1: _("つくるの、楽しいから"), serif2: _("つくるの、楽しいから"), serif3: _("つくるの、楽しいから"), serif4: _("つくるの、楽しいから")},
						{"chara": "fran", "exp": "fran-reaction_03",  serif1: _("私上手だし！"), serif2: _("私上手だし！"), serif3: _("私上手だし！"), serif4: _("私上手だし！")},
						{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("達人なんだ！"), serif2: _("達人なんだ！"), serif3: _("達人なんだ！"), serif4: _("達人なんだ！")},
						{"chara": "fran", "exp": "fran-reaction_05",  serif1: _("えへへ"), serif2: _("えへへ"), serif3: _("えへへ"), serif4: _("えへへ")},
						{"chara": "koishi","serif": _("うん")},
						{"chara": "koishi", serif1: _("なんでそんなに上手なの"), serif2: _("なんでそんなに上手なの"), serif3: _("なんでそんなに上手なの"), serif4: _("なんでそんなに上手なの")},
						{"chara": "fran", "exp": "fran-reaction_03",  serif1: _("おねえちゃんに習ったから"), serif2: _("おねえちゃんに習ったから"), serif3: _("おねえちゃんに習ったから"), serif4: _("おねえちゃんに習ったから")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("あなたは？"), serif2: _("あなたは？"), serif3: _("あなたは？"), serif4: _("あなたは？")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("誰に習った？"), serif2: _("誰に習った？"), serif3: _("誰に習った？"), serif4: _("誰に習った？")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("パパ？"), serif2: _("パパ？"), serif3: _("パパ？"), serif4: _("パパ？")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("ママ？"), serif2: _("ママ？"), serif3: _("ママ？"), serif4: _("ママ？")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("おねえちゃん？"), serif2: _("おねえちゃん？"), serif3: _("おねえちゃん？"), serif4: _("おねえちゃん？")},
						{"chara": "koishi", serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
						{"chara": "koishi", serif1: _("あのね"), serif2: _("あのね"), serif3: _("あのね"), serif4: _("あのね")},
						{"chara": "fran", "exp": "fran-reaction_02", "serif": _("なあに")},
						{"chara": "koishi", serif1: _("本当はわからないの"), serif2: _("本当はわからないの"), serif3: _("本当はわからないの"), serif4: _("本当はわからないの")},
						{"chara": "fran", "exp": "fran-wait",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
						{"chara": "koishi", serif1: _("あのこも"), serif2: _("たぶんあの子も同じ"), serif3: _("たぶんあの子も同じ"), serif4: _("たぶんあの子も同じ")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif": _("うん")},
						{"chara": "koishi", serif1: _("手伝ってちょうだい"), serif2: _("いっしょにすごいのを作ってほしいの"), serif3: _("いっしょにすごいのを作ってほしいの"), serif4: _("いっしょにすごいのを作ってほしいの")},
						{"chara": "koishi", serif1: _("すごいのつくろう"), serif2: _("すごいので見返したいでしょ"), serif3: _("すごいので見返したいでしょ"), serif4: _("すごいので見返したいでしょ")},
						{"chara": "fran", "exp": "fran-wait", "serif": _("ふーん")},
						{"chara": "fran", "exp": "fran-reaction_05",  serif1: _("いいわね"), serif2: _("いいわね"), serif3: _("いいわね"), serif4: _("いいわね")},
						{"chara": "koishi", serif1: _("じゃあ丘の上でね"), serif2: _("じゃあ丘の上でね"), serif3: _("じゃあ丘の上でね"), serif4: _("じゃあ丘の上でね")},
						{"chara": "fran", "exp": "fran-reaction_06",  serif1: _("ん"), serif2: _("ん"), serif3: _("ん"), serif4: _("ん")},
						{"chara": "fran", "exp": "fran-reaction_03", "serif": _("わかった")},
					],
					[
						{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("はやく作りましょ！"), serif2: _("はやく作りましょ！"), serif3: _("はやく作りましょ！"), serif4: _("はやく作りましょ！")},
						{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("どこで作る？"), serif2: _("どこで作る？"), serif3: _("どこで作る？"), serif4: _("どこで作る？")},
						{"chara": "koishi", serif1: _("こっちよ"), serif2: _("あっちにもう一人友達いるの"), serif3: _("あっちにもう一人友達いるの"), serif4: _("あっちにもう一人友達いるの")},
						{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("はやくいきましょ！"), serif2: _("わかったわ"), serif3: _("わかったわ"), serif4: _("わかったわ")},
					],
				]},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-fran-_uraFirst"], "serifs": [
					[
						{"chara": "fran", "exp": "fran-ura_reaction_01",  serif1: _("ねえねえおねえちゃん"), serif2: _("ねえねえおねえちゃん"), serif3: _("ねえねえおねえちゃん"), serif4: _("ねえねえおねえちゃん")},
						{"chara": "fran", "exp": "fran-ura_reaction_04",  serif1: _("いまお人形作ってるんだけど"), serif2: _("いまお人形作ってるんだけど"), serif3: _("いまお人形作ってるんだけど"), serif4: _("いまお人形作ってるんだけど")},
						{"chara": "fran", "exp": "fran-ura_reaction_03",  serif1: _("おめめがね？"), serif2: _("おめめがね？"), serif3: _("おめめがね？"), serif4: _("おめめがね？")},
						{"chara": "fran", "exp": "fran-ura_reaction_05",  serif1: _("おめめをどうしたらいいかわからないの"), serif2: _("おめめをどうしたらいいかわからないの"), serif3: _("おめめをどうしたらいいかわからないの"), serif4: _("おめめをどうしたらいいかわからないの")},
						{"chara": "fran", "exp": "fran-ura_reaction_01",  serif1: _("おねえちゃんのもらっていーい？"), serif2: _("おねえちゃんのもらっていーい？"), serif3: _("おねえちゃんのもらっていーい？"), serif4: _("おねえちゃんのもらっていーい？")},
						{"chara": "fran", "exp": "fran-ura_reaction_05",  serif1: _("だめなの？"), serif2: _("だめなの？"), serif3: _("だめなの？"), serif4: _("だめなの？")},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif": _("なんで")},
					],
					[
						{"id": "chapter3_12-fran-_uraFirst", "save": true},
						{"chara": "fran", "exp": "fran-ura_reaction_01",  serif1: _("私のが一番だったの！？"), serif2: _("私のが一番だったの！？"), serif3: _("私のが一番だったの！？"), serif4: _("私のが一番だったの！？")},
						{"chara": "fran", "exp": "fran-ura_reaction_02",  serif1: _("やったあ！"), serif2: _("やったあ！"), serif3: _("やったあ！"), serif4: _("やったあ！")},
						{"chara": "fran", "exp": "fran-ura_reaction_02",  serif1: _("うれしい！"), serif2: _("うれしい！"), serif3: _("うれしい！"), serif4: _("うれしい！")},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif": _("あのね、おねえちゃんが\n教えてくれたから上手にできたの！")},
						{"chara": "fran", "exp": "fran-ura_reaction_02",  serif1: _("おねえちゃん大好き"), serif2: _("おねえちゃん大好き"), serif3: _("おねえちゃん大好き"), serif4: _("おねえちゃん大好き")},
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

