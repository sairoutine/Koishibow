'use strict';
var _ = require('i18n4v')
// 小鈴ショップ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_04",
	chapter: 1,
	bgm: "field3",
	rightStartPosition:   {x: 690, y: 430},
	leftStartPosition:    {x: 180, y: 430},
	defaultStartPosition: {x: 180, y: 430, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_05",
	leftField: "chapter1_03",
	upField: null,
	downField: null,
	background: "chapter1-04-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-04-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-04-obj-01-obj02",
			anime5: "chapter1-04-obj-01-obj03",
			anime6: "chapter1-04-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "電話ボックス赤",
			loop: true, // 何回でもタッチできる
			serif: [
				{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter1_04-" + I + "circulate", 19], "serifs": [
					[
						{"chara": I, serif1: _("ぷーーーー"), serif2: _("ぷーーーー"), serif3: _("ぷーーーー"), serif4: _("ぷーーーー")},
					],
					[
						{"chara": I, serif1: _("ぷーっぷーっぷーっ"), serif2: _("ぷーっぷーっぷーっ"), serif3: _("ぷーっぷーっぷーっ"), serif4: _("ぷーっぷーっぷーっ")},
					],
					[
						{"chara": I,"serif": _("泣いてる子だあれ？\n泣いてる子は迎えに行くよ")},
					],
					[
						{"chara": I,"serif": _("らりるれろ！らりるれろ！らりるれろ！")},
					],
					[
						{"chara": I, serif1: _("そこで見てるのだれ？"), serif2: _("そこで見てるのだれ？"), serif3: _("そこで見てるのだれ？"), serif4: _("そこで見てるのだれ？")},
					],
					[
						{"chara": I, serif1: _("もしもし、どなた？"), serif2: _("もしもし、どなた？"), serif3: _("もしもし、どなた？"), serif4: _("もしもし、どなた？")},
					],
					[
						{"chara": I, serif1: _("もしもし？"), serif2: _("もしもし？"), serif3: _("もしもし？"), serif4: _("もしもし？")},
					],
					[
						{"chara": I, serif1: _("あなたなの？"), serif2: _("あなたなの？"), serif3: _("あなたなの？"), serif4: _("あなたなの？")},
					],
					[
						{"chara": I, serif1: _("はい わたしです"), serif2: _("はい わたしです"), serif3: _("はい わたしです"), serif4: _("はい わたしです")},
						{"chara": I,"serif": _("CHAPTER1_FIELD_04_SERIF0001")},
						{"chara": I, serif1: _("問題なく"), serif2: _("問題なく"), serif3: _("問題なく"), serif4: _("問題なく")},
						{"chara": I,"serif": _("CHAPTER1_FIELD_04_SERIF0002")},
						{"chara": I, serif1: _("すべてをやり直せます"), serif2: _("すべてをやり直せます"), serif3: _("すべてをやり直せます"), serif4: _("すべてをやり直せます")},
						{"chara": I, serif1: _("彼女はいまも眠っています"), serif2: _("彼女はいまも眠っています"), serif3: _("彼女はいまも眠っています"), serif4: _("彼女はいまも眠っています")},
						{"chara": I, serif1: _("心的外傷を癒す時が来たのです"), serif2: _("心的外傷を癒す時が来たのです"), serif3: _("心的外傷を癒す時が来たのです"), serif4: _("心的外傷を癒す時が来たのです")},
						{"chara": I, serif1: _("彼女こそあなたの”ソフィー”です"), serif2: _("彼女こそあなたの”ソフィー”です"), serif3: _("彼女こそあなたの”ソフィー”です"), serif4: _("彼女こそあなたの”ソフィー”です")},
					],
					[
						{"chara": I, serif1: _("もしもし？"), serif2: _("もしもし？"), serif3: _("もしもし？"), serif4: _("もしもし？")},
					],
					[
						{"chara": I, serif1: _("迷惑なんですけど！"), serif2: _("迷惑なんですけど！"), serif3: _("迷惑なんですけど！"), serif4: _("迷惑なんですけど！")},
					],
					[
						{"chara": I, serif1: _("ひょっとしてメリーさん？"), serif2: _("ひょっとしてメリーさん？"), serif3: _("ひょっとしてメリーさん？"), serif4: _("ひょっとしてメリーさん？")},
					],
					[
						{"chara": I, serif1: _("やめなさいよ！"), serif2: _("やめなさいよ！"), serif3: _("やめなさいよ！"), serif4: _("やめなさいよ！")},
					],
					[
						{"chara": I, serif1: _("もうかけてこないで！"), serif2: _("もうかけてこないで！"), serif3: _("もうかけてこないで！"), serif4: _("もうかけてこないで！")},
					],
					[
						{"chara": I, serif1: _("ごめんなさい！"), serif2: _("ごめんなさい！"), serif3: _("ごめんなさい！"), serif4: _("ごめんなさい！")},
					],
					[
						{"chara": I, serif1: _("おねがいします！"), serif2: _("おねがいします！"), serif3: _("おねがいします！"), serif4: _("おねがいします！")},
					],
					[
						{"chara": I,"serif": _("おかけになった電話番号は\n現在使われておりません")},
					],
					[
						{"chara": I, serif1: _("天気予告をお知らせいたします。"), serif2: _("天気予告をお知らせいたします。"), serif3: _("天気予告をお知らせいたします。"), serif4: _("天気予告をお知らせいたします。")},
						{"chara": I, serif1: _("明日の天気はハレ、明日の天気はハレ"), serif2: _("明日の天気はハレ、明日の天気はハレ"), serif3: _("明日の天気はハレ、明日の天気はハレ"), serif4: _("明日の天気はハレ、明日の天気はハレ")},
					],
					[
						{"chara": I, serif1: _("こんにちは"), serif2: _("こんにちは"), serif3: _("こんにちは"), serif4: _("こんにちは")},
						{"chara": I, serif1: _("おでんわありがとう！"), serif2: _("おでんわありがとう！"), serif3: _("おでんわありがとう！"), serif4: _("おでんわありがとう！")},
						{"chara": I, serif1: _("おはなししましょ！"), serif2: _("おはなししましょ！"), serif3: _("おはなししましょ！"), serif4: _("おはなししましょ！")},
						{"chara": I, serif1: _("ばいばーい！"), serif2: _("ばいばーい！"), serif3: _("ばいばーい！"), serif4: _("ばいばーい！")},
					],
					[
						{"chara": I, serif1: _("火事ですか救急ですか？"), serif2: _("火事ですか救急ですか？"), serif3: _("火事ですか救急ですか？"), serif4: _("火事ですか救急ですか？")},
						{"chara": "koishi", serif1: _("あのね、何でもないです"), serif2: _("あのね、何でもないです"), serif3: _("あのね、何でもないです"), serif4: _("あのね、何でもないです")},
					],
					[
						{"chara": I, serif1: _("火事ですか救急ですか？"), serif2: _("火事ですか救急ですか？"), serif3: _("火事ですか救急ですか？"), serif4: _("火事ですか救急ですか？")},
						{"chara": I, serif1: _("あのね、何でもないです"), serif2: _("あのね、何でもないです"), serif3: _("あのね、何でもないです"), serif4: _("あのね、何でもないです")},
					],
					[
						{"chara": I, serif1: _("申します申します、どちらへお繋しますか？"), serif2: _("申します申します、どちらへお繋しますか？"), serif3: _("申します申します、どちらへお繋しますか？"), serif4: _("申します申します、どちらへお繋しますか？")},
					],
					[
						{"chara": I, serif1: _("おかあさん"), serif2: _("おかあさん"), serif3: _("おかあさん"), serif4: _("おかあさん")},
						{"chara": I, serif1: _("おかあさん"), serif2: _("おかあさん"), serif3: _("おかあさん"), serif4: _("おかあさん")},
						{"chara": I, serif1: _("どうして？"), serif2: _("どうして？"), serif3: _("どうして？"), serif4: _("どうして？")},
					],
				]}
			],
			x:805, y:308,
			scale: 2/3,
			width: 230,
			anime1: "chapter1-04-obj-02-obj01",
			anime2: "chapter1-04-obj-02-obj02",
			anime3: "chapter1-04-obj-02-obj03",
			anime4: "chapter1-04-obj-02-obj04",
			anime5: "chapter1-04-obj-02-obj05",
			anime6: "chapter1-04-obj-02-obj06",
			action_name: "look_front",
			sound_name: "chapter1-04-receive_phone",
			bgm_back: "chapter1-04-call_phone",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雑貨屋＆小鈴",
			loop: true,
			serif: [

				// 蛇口に喋りかけたあと
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_09-faucet-talk-1"], "serifs": [
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_04-" + I + "-_getItem-08"], "serifs": [
							[
								{"chara": I,  serif1: _("熊手は役に立ったかい？"), serif2: _("熊手は役に立ったかい？"), serif3: _("熊手は役に立ったかい？"), serif4: _("熊手は役に立ったかい？")},
								{"chara": I,  serif1: _("今度はちゃんとお金をもらってくるんだぞ！"), serif2: _("今度はちゃんとお金をもらってくるんだぞ！"), serif3: _("今度はちゃんとお金をもらってくるんだぞ！"), serif4: _("今度はちゃんとお金をもらってくるんだぞ！")},
							],
							[
								{"id": "chapter1_04-" + I + "-_getItem-08", "save": true},
								{"chara": "koishi", serif1: _("熊手ある？"), serif2: _("熊手ある？"), serif3: _("熊手ある？"), serif4: _("熊手ある？")},
								{"chara": I,  serif1: _("オッ熊手が欲しいのかい！"), serif2: _("オッ熊手が欲しいのかい！"), serif3: _("オッ熊手が欲しいのかい！"), serif4: _("オッ熊手が欲しいのかい！")},
								{"chara": I,  serif1: _("それなら、えー"), serif2: _("それなら、えー"), serif3: _("それなら、えー"), serif4: _("それなら、えー")},
								{"chara": I,  serif1: _("500だ！"), serif2: _("500だ！"), serif3: _("500だ！"), serif4: _("500だ！")},
								{"chara": "koishi", serif1: _("500って、お金のこと？"), serif2: _("500って、お金のこと？"), serif3: _("500って、お金のこと？"), serif4: _("500って、お金のこと？")},
								{"chara": I,  serif1: _("さ、お財布見せてごらん！"), serif2: _("さ、お財布見せてごらん！"), serif3: _("さ、お財布見せてごらん！"), serif4: _("さ、お財布見せてごらん！")},
								{"chara": "koishi", serif1: _("お財布もってないの"), serif2: _("お財布もってないの"), serif3: _("お財布もってないの"), serif4: _("お財布もってないの")},
								{"chara": "koishi", serif1: _("でも水道さんが困ってるから......"), serif2: _("でも水道さんが困ってるから......"), serif3: _("でも水道さんが困ってるから......"), serif4: _("でも水道さんが困ってるから......")},
								{"chara": I, "serif": _("......")},
								{"chara": I,  serif1: _("わかった、貸すだけだぞ！"), serif2: _("わかった、貸すだけだぞ！"), serif3: _("わかった、貸すだけだぞ！"), serif4: _("わかった、貸すだけだぞ！"), "option": {
									getItem: "08", // 熊手
								}},
							],
						]}
					],
					[
						// 1-7
						{"chara": I, serif1: _("いらっしゃい！"), serif2: _("いらっしゃい！"), serif3: _("いらっしゃい！"), serif4: _("いらっしゃい！")},
						{"chara": "koishi", serif1: _("ここなにやさんなの？"), serif2: _("ここなにやさんなの？"), serif3: _("ここなにやさんなの？"), serif4: _("ここなにやさんなの？")},
						{"chara": I, serif1: _("何でも売ってるよ！"), serif2: _("何でも売ってるよ！"), serif3: _("何でも売ってるよ！"), serif4: _("何でも売ってるよ！")},
						{"chara": "koishi", serif1: _("全部屋さん......？"), serif2: _("全部屋さん......？"), serif3: _("全部屋さん......？"), serif4: _("全部屋さん......？")},
						{"chara": I, serif1: _("そうよ！なにが欲しいのかしら？"), serif2: _("そうよ！なにが欲しいのかしら？"), serif3: _("そうよ！なにが欲しいのかしら？"), serif4: _("そうよ！なにが欲しいのかしら？")},
						{"chara": "koishi", serif1: _("なにがほしいんだろう……"), serif2: _("なにがほしいんだろう……"), serif3: _("なにがほしいんだろう……"), serif4: _("なにがほしいんだろう……")},
					],

				]}
			],
			x:293, y:260,
			scale: 2/3,
			anime1: "chapter1-04-obj-03-obj01",
			anime2: "chapter1-04-obj-03-obj02",
			anime3: "chapter1-04-obj-03-obj03",
			anime4: "chapter1-04-obj-03-obj04",
			anime5: "chapter1-04-obj-03-obj05",
			anime6: "chapter1-04-obj-03-obj06",
			action_name: null,
			sound_name: "chapter1-04-standup_kosuzu",
		},
		{
			no: ++I,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "マイク",
			image: "chapter1-04-obj-04",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1-08-kyoko-_uraFirst"], "serifs": [
					[
						// 非表示
						{"id": "chapter1-04-not_show_item07", "save": true},
						// 獲得
						{"chara": "koishi","serif":"", "option": {"getItem": "07"}},
					],
					[
						{"chara": "koishi", "exp": "touch", "serif": _("？")},
					],
				]},
			],
			x: 970.50*2/3, y: 767.50*2/3,
			height: 200,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter1-04-not_show_item07",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 500, y: 515,
			journal_id: "journal008",
		},


	],
};

