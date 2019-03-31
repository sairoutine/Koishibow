'use strict';
var _ = require('i18n4v')
// 地上1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_07",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 700, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter5_08",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-07-show_animal_komodo"], "process": [
			// コモドがいる
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_07_10530"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_komodo","exp": "animal_komodo-wait",  serif1: _("ぶぅおー"), serif2: _("ぶぅおー"), serif3: _("ぶぅおー"), serif4: _("ぶぅおー")},
								{"chara": "animal_komodo","exp": "animal_komodo-wait",  serif1: _("ぐもー"), serif2: _("ぐもー"), serif3: _("ぐもー"), serif4: _("ぐもー")},
								{"chara": "koishi","exp": "look_front",  serif1: _("怪獣がいるわ"), serif2: _("怪獣がいるわ"), serif3: _("怪獣がいるわ"), serif4: _("怪獣がいるわ"), "option": {"getJournal": "journal031"}},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_07_10530"]}
					],
				]},
			],
			// コモドがいない
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_07_10340"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_shiba","exp": "animal_shiba-wait",  serif1: _("ぅぅぅ"), serif2: _("ぅぅぅ"), serif3: _("ぅぅぅ"), serif4: _("ぅぅぅ")},
								{"chara": "animal_shiba","exp": "animal_shiba-wait",  serif1: _("わん"), serif2: _("わん"), serif3: _("わん"), serif4: _("わん")},
								{"chara": "koishi","exp": "look_front",  serif1: _("......こわくないけどね"), serif2: _("......こわくないけどね"), serif3: _("かわいー"), serif4: _("かわいー"), "option": {"getJournal": "journal027"}},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_07_10340"]}
					],
				]},
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter5-07-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: "animal_shiba",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "イヌ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["35"], "serifs": [
					// ハシゴを持ってる
					[
						{"chara": "koishi","exp": "look_front",  serif1: _("犬ちゃん"), serif2: _("犬ちゃん"), serif3: _("犬ちゃん"), serif4: _("犬ちゃん")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait",  serif1: _("犬って何よ"), serif2: _("犬って何よ"), serif3: _("犬って何よ"), serif4: _("犬って何よ")},
						{"chara": "koishi","exp": "yes", "serif": _("はしご！")},
						{"chara": "animal_shiba","exp": null,  serif1: _("ほんと？"), serif2: _("ほんと？"), serif3: _("ほんと？"), serif4: _("ほんと？"), "option": {"useItem": "35"}},
						{"chara": "koishi","exp": null,  serif1: _("ほんとだ！"), serif2: _("ほんとだ！"), serif3: _("ほんとだ！"), serif4: _("ほんとだ！"), "option": {"blackout": true}},
						{"chara": "animal_shiba","exp": null,  serif1: _("これでよし！"), serif2: _("これでよし！"), serif3: _("これでよし！"), serif4: _("これでよし！")},
						{"chara": "animal_shiba","exp": null,  serif1: _("助かったわ"), serif2: _("助かったわ"), serif3: _("助かったわ"), serif4: _("助かったわ")},
						{"chara": "animal_shiba","exp": null,  serif1: _("ありがとう、こいしちゃん"), serif2: _("ありがとう、こいしちゃん"), serif3: _("ありがとう、こいしちゃん"), serif4: _("ありがとう、こいしちゃん")},
						{"chara": "koishi","exp": "look_front",  serif1: _("あれー"), serif2: _("あれー"), serif3: _("あら"), serif4: _("あら")},
						{"chara": "koishi","exp": "look_front",  serif1: _("名前知ってるの"), serif2: _("名前知ってるの"), serif3: _("名前知ってるの"), serif4: _("名前知ってるの")},
						{"id": "chapter5-07-animal_shiba_ura_talk2", "save": true},
					],
					// ハシゴを持ってない
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk2"], "serifs": [
							// ハシゴ使用後
							[
								{"chara": "koishi","exp": "look_front",  serif1: _("だれ"), serif2: _("だれ"), serif3: _("あなた名前なんていうの"), serif4: _("あなた名前なんていうの")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01",  serif1: _("ジョン"), serif2: _("ジョン"), serif3: _("ジョン"), serif4: _("ジョン")},
								{"chara": "koishi","exp": "look_front",  serif1: _("！"), serif2: _("！"), serif3: _("！"), serif4: _("！")},
							],
							// ハシゴ使用前
							[
								{"chara": "animal_shiba","exp": "animal_shiba-ura_wait",  serif1: _("こまったわ"), serif2: _("こまったわ"), serif3: _("こまったわ"), serif4: _("こまったわ")},
								{"chara": "koishi","exp": "look_front",  serif1: _("なにがこまったの"), serif2: _("なにがこまったの"), serif3: _("どうしたの"), serif4: _("どうしたの")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_wait",  serif1: _("はしごが無いのよ"), serif2: _("はしごが無いのよ"), serif3: _("はしごが無いのよ"), serif4: _("はしごが無いのよ")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01",  serif1: _("ほんとうはここにかけてあるのに"), serif2: _("ほんとうはここにかけてあるのに"), serif3: _("ほんとうはここにかけてあるのに"), serif4: _("ほんとうはここにかけてあるのに")},
								{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
								{"chara": "koishi","exp": null, "serif": _("なんで？")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01",  serif1: _("上に行かなきゃいけないのよー"), serif2: _("上に行かなきゃいけないのよー"), serif3: _("上に行かなきゃいけないのよー"), serif4: _("上に行かなきゃいけないのよー")},
								{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
								{"id": "chapter5-07-animal_shiba_ura_talk1", "save": true},

							],
						]},
					],
				]},
			],
			serif: [
				{"chara": "animal_shiba","exp": "animal_shiba-wait",  serif1: _("ぅわん"), serif2: _("ぅわん"), serif3: _("ぅわん"), serif4: _("ぅわん")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait",  serif1: _("はフはフ"), serif2: _("はフはフ"), serif3: _("はフはフ"), serif4: _("はフはフ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("かわいー"), serif2: _("かわいー"), serif3: _("かわいー"), serif4: _("かわいー")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_shiba-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_shiba-reverse_ura",
			anime5: "animal_shiba-ura_wait",
			anime6: "animal_shiba-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter5-12-orin_talk1", // お燐との1度目の会話が終わったら登場
		},
		{
			no: "animal_komodo",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "コモドオオトカゲ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"chara": "koishi","exp": "look_front",  serif1: _("へんなかおー"), serif2: _("へんなかおー"), serif3: _("へんなかおー"), serif4: _("へんなかおー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("なんだよー"), serif2: _("なんだよー"), serif3: _("なんだよー"), serif4: _("なんだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("なんなんだよー"), serif2: _("なんなんだよー"), serif3: _("なんなんだよー"), serif4: _("なんなんだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("なにしてんだよー"), serif2: _("なにしてんだよー"), serif3: _("なにしてんだよー"), serif4: _("なにしてんだよー")},
				{"chara": "koishi","exp": "look_top",  serif1: _("なにしてんだっけ"), serif2: _("なにしてんだっけ"), serif3: _("なにしてんだっけ"), serif4: _("なにしてんだっけ")},
				{"chara": "koishi","exp": "yes",  serif1: _("ああそうだ"), serif2: _("ああそうだ"), serif3: _("ああそうだ"), serif4: _("ああそうだ")},
				{"chara": "koishi","exp": null,  serif1: _("鍵探してるの"), serif2: _("鍵探してるの"), serif3: _("鍵探してるの"), serif4: _("鍵探してるの")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("何の鍵なんですか？"), serif2: _("何の鍵なんですか？"), serif3: _("何の鍵なんですか？"), serif4: _("何の鍵なんですか？")},
				{"chara": "koishi","exp": "yes",  serif1: _("鳥ちゃんの"), serif2: _("鳥ちゃんの"), serif3: _("鳥ちゃんの"), serif4: _("鳥ちゃんの")},
				{"chara": "koishi","exp": null,  serif1: _("鳥ちゃん"), serif2: _("鳥ちゃん"), serif3: _("鳥ちゃん"), serif4: _("鳥ちゃん")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01",  serif1: _("鳥ちゃん......"), serif2: _("鳥ちゃん......"), serif3: _("鳥ちゃん......"), serif4: _("鳥ちゃん......")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("烏ちゃんのこと？"), serif2: _("烏ちゃんのこと？"), serif3: _("烏ちゃんのこと？"), serif4: _("烏ちゃんのこと？")},
				{"chara": "koishi","exp": "yes",  serif1: _("たぶん"), serif2: _("たぶん"), serif3: _("たぶん"), serif4: _("たぶん")},
				{"chara": "koishi","exp": null,  serif1: _("それでね"), serif2: _("それでね"), serif3: _("それがね"), serif4: _("それがね")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("うん")},
				{"chara": "koishi","exp": "look_front",  serif1: _("そのカギがいるんだけど"), serif2: _("そのカギがいるんだけど"), serif3: _("そのカギがいるんだけど"), serif4: _("そのカギがいるんだけど")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("えっ")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("あの子を出すの？"), serif2: _("あの子を出すの？"), serif3: _("あの子を出すの？"), serif4: _("あの子を出すの？")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("それはだめだよー"), serif2: _("それはだめだよー"), serif3: _("それはだめだよー"), serif4: _("それはだめだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01",  serif1: _("まだ危ないよ"), serif2: _("まだ危ないよ"), serif3: _("まだ危ないよ"), serif4: _("まだ危ないよ")},
				{"chara": "koishi","exp": "look_top", "serif": _("なんで")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("なんでって"), serif2: _("なんでって"), serif3: _("なんでって"), serif4: _("なんでって")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01",  serif1: _("怪我しちゃうよ"), serif2: _("怪我しちゃうよ"), serif3: _("怪我しちゃうよ"), serif4: _("怪我しちゃうよ")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("やだ！")},
				{"chara": "koishi","exp": null,  serif1: _("1人ぼっちで"), serif2: _("1人ぼっちで"), serif3: _("1人ぼっちで"), serif4: _("1人ぼっちで")},
				{"chara": "koishi","exp": null,  serif1: _("閉じ込められて"), serif2: _("閉じ込められて"), serif3: _("閉じ込められて"), serif4: _("閉じ込められて")},
				{"chara": "koishi","exp": "look_front",  serif1: _("かわいそうじゃないの"), serif2: _("かわいそうじゃないの"), serif3: _("かわいそうじゃないの"), serif4: _("かわいそうじゃないの")},
				{"chara": "koishi","exp": "look_front",  serif1: _("そうでしょ"), serif2: _("そうでしょ"), serif3: _("そうでしょ"), serif4: _("そうでしょ")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait",  serif1: _("そうだけど"), serif2: _("そうだけど"), serif3: _("そうだけど"), serif4: _("そうだけど")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01",  serif1: _("そうだけど......"), serif2: _("そうだけど......"), serif3: _("そうだけど......"), serif4: _("そうだけど......")},
				{"chara": "koishi","exp": "look_front",  serif1: _("言って！"), serif2: _("言って！"), serif3: _("言いなさい！"), serif4: _("言いなさい！")},
				{"chara": "koishi","exp": "look_front",  serif1: _("鍵はどこなの"), serif2: _("鍵はどこなの"), serif3: _("鍵はどこなの"), serif4: _("鍵はどこなの")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01",  serif1: _("でも......"), serif2: _("でも......"), serif3: _("でも......"), serif4: _("でも......")},
				{"chara": "animal_komodo","exp": null,  serif1: _("だめって言ってたから"), serif2: _("だめって言ってたから"), serif3: _("だめって言ってたから"), serif4: _("だめって言ってたから")},
				{"chara": "koishi","exp": "ax",  serif1: _("分からない子ね！"), serif2: _("分からない子ね！"), serif3: _("分からない子ね！"), serif4: _("分からない子ね！")},
				{"chara": "koishi","exp": null,  serif1: _("おしおきよ！"), serif2: _("おしおきよ！"), serif3: _("おしおきよ！"), serif4: _("おしおきよ！")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02",  serif1: _("ぶぅお！"), serif2: _("ぶぅお！"), serif3: _("ぶぅお！"), serif4: _("ぶぅお！")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02",  serif1: _("わかった！わかりました！"), serif2: _("わかった！わかりました！"), serif3: _("わかった！わかりました！"), serif4: _("わかった！わかりました！")},
				{"chara": "animal_komodo","exp": null,  serif1: _("鍵は犬が持ってた！"), serif2: _("鍵は犬が持ってた！"), serif3: _("鍵は犬が持ってた！"), serif4: _("鍵は犬が持ってた！")},
				{"chara": "koishi","exp": null,  serif1: _("犬ちゃんが？"), serif2: _("犬ちゃんが？"), serif3: _("犬ちゃんが？"), serif4: _("犬ちゃんが？")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02",  serif1: _("そう"), serif2: _("そう"), serif3: _("そう"), serif4: _("そう")},
				{"chara": "koishi","exp": null, "serif": _("わかった")},
				{"chara": "koishi","exp": null, "serif": _("ありがとう")},
				{"chara": "koishi","exp": null, "serif": _("行かなきゃ")},
				{"chara": "koishi","exp": null,  serif1: _("武器ってすごいわ！"), serif2: _("武器ってすごいわ！"), serif3: _("武器ってすごいわ！"), serif4: _("武器ってすごいわ！")},
				{"id": "chapter5-07-animal_komodo_talk1", "save": true}, // コモドとの会話
			],
			serif: [
				{"chara": "animal_komodo","exp": "animal_komodo-wait",  serif1: _("ぶおっぶおっ"), serif2: _("ぶおっぶおっ"), serif3: _("ぶおっぶおっ"), serif4: _("ぶおっぶおっ")},
				{"chara": "animal_komodo","exp": "animal_komodo-wait",  serif1: _("ごぉー"), serif2: _("ごぉー"), serif3: _("ごぉー"), serif4: _("ごぉー")},
				{"chara": "koishi","exp": "look_front", "serif": _("あはは")},
				{"chara": "koishi","exp": null,  serif1: _("へんなかおー"), serif2: _("へんなかおー"), serif3: _("へんなかおー"), serif4: _("へんなかおー")},
			],
			x: 430, y: 500,
			scale: 2/3,
			anime1: "animal_komodo-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_komodo-reverse_ura",
			anime5: "animal_komodo-ura_wait",
			anime6: "animal_komodo-reverse_omote",
			width:  150,
			height: 20,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter5-07-show_animal_komodo",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 910,
			y: 530,
			width: 250,
			height: 550,
			next_field_name: "chapter5_03",
		},
		// はしごを使って 5-11へ
		{
			no: ++I,
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "はしご",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk2"], "serifs": [
					// ハシゴ使用後
					[
						{"chara": "animal_kawa","exp": "animal_kawa-wait",  serif1: _("じゃあわたし上に行くわね！"), serif2: _("じゃあわたし上に行くわね！"), serif3: _("じゃあわたし上に行くわね！"), serif4: _("じゃあわたし上に行くわね！")},
						{"chara": "animal_shiba","exp": "animal_shiba-wait",  serif1: _("ついてこないでね！"), serif2: _("ついてこないでね！"), serif3: _("ついてこないでね！"), serif4: _("ついてこないでね！")},
						{"chara": "koishi","exp": "look_front", "serif": _("なんで")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait", "serif": _("......")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait",  serif1: _("故あって......"), serif2: _("故あって......"), serif3: _("故あって......"), serif4: _("故あって......")},
						{"chara": "koishi","exp": "look_front", "serif": _("なにそれ")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait",  serif1: _("ごめんね"), serif2: _("ごめんね"), serif3: _("ごめんね"), serif4: _("ごめんね")},
					],
					// ハシゴ使用前
					[
					],
				]},
			],
			x:40, y:240,
			//width: 200,
			//height: 200,
			scale: 2/3,
			action_name: "chapter5-07-hashigo",
			sound_name: null
		},
		// はしご当たり判定
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "はしご",
			x:40, y:240,
			width: 130,
			height: 361,
			next_field_name: "chapter5_11",
		},
	],
};

