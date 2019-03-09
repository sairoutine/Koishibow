'use strict';
var _ = require('i18n4v')
// 地上1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_07",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 700, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_08",
	background: null,
	walkSound: "walking_bare_default",
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
								{"chara": "animal_komodo","exp": "animal_komodo-wait", "serif": _("ぶぅおー")},
								{"chara": "animal_komodo","exp": "animal_komodo-wait", "serif": _("ぐもー")},
								{"chara": "koishi","exp": "look_front", "serif": _("怪獣がいるわ")},
								{"id": "chapter5-07-show_journal", "save": true},
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
								{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("ぅぅぅ")},
								{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わん")},
								{"chara": "koishi","exp": "look_front", "serif": _("......こわくないけどね")},
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
			serif_back: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["34"], "serifs": [
					// ハシゴを持ってる
					[
						{"chara": "koishi","exp": "look_front", "serif": _("犬ちゃん")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("犬って何よ")},
						{"chara": "koishi","exp": "yes", "serif": _("はしご！")},
						{"chara": "animal_shiba","exp": null, "serif": _("ほんと？"), "option": {"useItem": "34"}},
						// TODO: 暗転する {"chara": "chapter5-07-event-01","exp": "chapter5-07-event-01-obj01", "serif": _("ほんとだ！")},
						{"chara": "animal_shiba","exp": null, "serif": _("これでよし！")},
						{"chara": "animal_shiba","exp": null, "serif": _("助かったわ")},
						{"chara": "animal_shiba","exp": null, "serif": _("ありがとう、こいしちゃん")},
						{"chara": "koishi","exp": "look_front", "serif": _("あれー")},
						{"chara": "koishi","exp": "look_front", "serif": _("名前知ってるの")},
						{"id": "chapter5-07-animal_shiba_ura_talk2", "save": true},
					],
					// ハシゴを持ってない
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk2"], "serifs": [
							// ハシゴ使用後
							[
								{"chara": "koishi","exp": "look_front", "serif": _("だれ")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01", "serif": _("ジョン")},
								{"chara": "koishi","exp": "look_front", "serif": _("！")},
							],
							// ハシゴ使用前
							[
								{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("こまったわ")},
								{"chara": "koishi","exp": "look_front", "serif": _("なにがこまったの")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("はしごが無いのよ")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01", "serif": _("ほんとうはここにかけてあるのに")},
								{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
								{"chara": "koishi","exp": null, "serif": _("なんで？")},
								{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01", "serif": _("上に行かなきゃいけないのよー")},
								{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
								{"id": "chapter5-07-animal_shiba_ura_talk1", "save": true},

							],
						]},
					],
				]},
			],
			serif: [
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("ぅわん")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("はフはフ")},
				{"chara": "koishi","exp": "look_front", "serif": _("かわいー")},
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
			serif_back: [
				{"chara": "koishi","exp": "look_front", "serif": _("へんなかおー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("なんだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("なんなんだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("なにしてんだよー")},
				{"chara": "koishi","exp": "look_top", "serif": _("なにしてんだっけ")},
				{"chara": "koishi","exp": "yes", "serif": _("ああそうだ")},
				{"chara": "koishi","exp": null, "serif": _("鍵探してるの")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("何の鍵なんですか？")},
				{"chara": "koishi","exp": "yes", "serif": _("鳥ちゃんの")},
				{"chara": "koishi","exp": null, "serif": _("鳥ちゃん")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01", "serif": _("鳥ちゃん......")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("烏ちゃんのこと？")},
				{"chara": "koishi","exp": "yes", "serif": _("たぶん")},
				{"chara": "koishi","exp": null, "serif": _("それでね")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("うん")},
				{"chara": "koishi","exp": "look_front", "serif": _("そのカギがいるんだけど")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("えっ")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("あの子を出すの？")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("それはだめだよー")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01", "serif": _("まだ危ないよ")},
				{"chara": "koishi","exp": "look_top", "serif": _("なんで")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("なんでって")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01", "serif": _("怪我しちゃうよ")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("やだ！")},
				{"chara": "koishi","exp": null, "serif": _("1人ぼっちで")},
				{"chara": "koishi","exp": null, "serif": _("閉じ込められて")},
				{"chara": "koishi","exp": "look_front", "serif": _("かわいそうじゃないの")},
				{"chara": "koishi","exp": "look_front", "serif": _("そうでしょ")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_wait", "serif": _("そうだけど")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01", "serif": _("そうだけど......")},
				{"chara": "koishi","exp": "look_front", "serif": _("言って！")},
				{"chara": "koishi","exp": "look_front", "serif": _("鍵はどこなの")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_01", "serif": _("でも......")},
				{"chara": "animal_komodo","exp": null, "serif": _("だめって言ってたから")},
				{"chara": "koishi","exp": "ax", "serif": _("分からない子ね！")},
				{"chara": "koishi","exp": null, "serif": _("おしおきよ！")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02", "serif": _("ぶぅお！")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02", "serif": _("わかった！わかりました！")},
				{"chara": "animal_komodo","exp": null, "serif": _("鍵は犬が持ってた！")},
				{"chara": "koishi","exp": null, "serif": _("犬ちゃんが？")},
				{"chara": "animal_komodo","exp": "animal_komodo-ura_reaction_02", "serif": _("そう")},
				{"chara": "koishi","exp": null, "serif": _("わかった")},
				{"chara": "koishi","exp": null, "serif": _("ありがとう")},
				{"chara": "koishi","exp": null, "serif": _("行かなきゃ")},
				{"chara": "koishi","exp": null, "serif": _("武器ってすごいわ！")},
				{"id": "chapter5-07-animal_komodo_talk1", "save": true}, // コモドとの会話
			],
			serif: [
				{"chara": "animal_komodo","exp": "animal_komodo-wait", "serif": _("ぶおっぶおっ")},
				{"chara": "animal_komodo","exp": "animal_komodo-wait", "serif": _("ごぉー")},
				{"chara": "koishi","exp": "look_front", "serif": _("あはは")},
				{"chara": "koishi","exp": null, "serif": _("へんなかおー")},
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
						{"chara": "animal_kawa","exp": "animal_kawa-wait", "serif": _("じゃあわたし上に行くわね！")},
						{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("ついてこないでね！")},
						{"chara": "koishi","exp": "look_front", "serif": _("なんで")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait", "serif": _("......")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait", "serif": _("故あって......")},
						{"chara": "koishi","exp": "look_front", "serif": _("なにそれ")},
						{"chara": "animal_shiba","exp": "animal_kawa-wait", "serif": _("ごめんね")},
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
			action_name: null,
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

		{
			no: ++I,
			image: "paper",
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			scale: 2/3,
			journal_id: "journal0XX", // TODO: ジャーナルを設定
			show_if_event_true: "chapter5-07-show_journal",
		},
	],
};

