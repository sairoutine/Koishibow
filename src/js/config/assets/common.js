'use strict';

var AssetsConfig = {};

AssetsConfig.images = {
	// HowTo 画像
	"howto_ja":            "./image/common/howto_ja.png",
	"howto_en":            "./image/common/howto_en.png",
	// タイトル放置案 背景
	"leaving_title":      "./image/common/leaving_title.png",

	// こいし画像
	"koishi": "./image/common/koishi.png",
	"koishi_button": "./image/common/koishi_button.png",
	// こころ画像
	"kokoro": "./image/common/kokoro.png",
	// てゐ
	"tewi":   "./image/common/tewi.png",
	// にとり
	"nitori":   "./image/common/nitori.png",
	// 響子
	"kyoko":   "./image/common/kyoko.png",
	"kyoko_taketonbo":   "./image/common/kyoko_taketonbo.png",
	// 小傘
	"kogasa":   "./image/common/kogasa.png",
	// 村紗
	"murasa":   "./image/common/murasa.png",

	// 3rdeye 使用時のもや
	"black_mist":            "./image/common/black_mist.png",
	// 3rdeye 使用時の光
	"light":  "./image/common/light.png",

	"white_mist":            "./image/common/white-mist.png",

	// 帽子獲得イベント
	"get_hat_bg":  "./image/common/chapter0/event/get_hat/bg.png",

	// こいしが落ちるイベント
	"chapter0-mspassage-event-02-obj-10-01":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02-obj-10-01.png",
	"chapter0-mspassage-event-02_bg01":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_bg01.jpg",
	"chapter0-mspassage-event-02_black_mist":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_black_mist.png",
	"chapter0-mspassage-event-02_door":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_door.png",
	"chapter0-mspassage-event-02_koishi":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_koishi.png",
	"chapter0-mspassage-event-02_shadow":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_shadow.png",

	// さとり邂逅イベント
	"chapter0-mspassage-bg-002_event":  "./image/common/chapter0/event/encounter_satori/chapter0-mspassage-bg-002_event.jpg",
	"eye":  "./image/common/chapter0/event/encounter_satori/eye.png",
	"str":  "./image/common/chapter0/event/encounter_satori/str.png",

	// 1-7 フラッシュバック(モブとの会話)
	"chapter1-07-event-bg-001":  "./image/common/chapter1/event/talk_with_mobu/chapter1-07-event-bg-001.jpg",
	"chapter1_07_event_mobu1":  "./image/common/chapter1/event/talk_with_mobu/chapter1_07_event_mobu1.png",
	"chapter1_07_event_mobu2":  "./image/common/chapter1/event/talk_with_mobu/chapter1_07_event_mobu2.png",
	"chapter1_07_event_mobu3":  "./image/common/chapter1/event/talk_with_mobu/chapter1_07_event_mobu3.png",
	"chapter1_07_event_koishi": "./image/common/chapter1/event/talk_with_mobu/chapter1_07_event_koishi.png",

	// 1-7 遊びを提案する
	"chapter1-07-event-02-chr_obj_01":  "./image/common/chapter1/event/playdoll/chapter1-07-event-02-chr_obj_01.png",
	"chapter1_07_event2_obj_01":  "./image/common/chapter1/event/playdoll/chapter1_07_event2_obj_01.png",
	"chapter1_07_event_02_kogasa":  "./image/common/chapter1/event/playdoll/chapter1_07_event_02_kogasa.png",
	"chapter1_07_event_02_koishi":  "./image/common/chapter1/event/playdoll/chapter1_07_event_02_koishi.png",
	"chapter1_07_event_02_kyoko":  "./image/common/chapter1/event/playdoll/chapter1_07_event_02_kyoko.png",
	"chapter1_07_event_02_murasa":  "./image/common/chapter1/event/playdoll/chapter1_07_event_02_murasa.png",

	// 1-9 村紗と遊ぶ
	"chapter1-09-event-01-chr-murasa":  "./image/common/chapter1/event/play_with_murasa/chapter1-09-event-01-chr-murasa.png",
	"chapter1-09-event-01-obj01":  "./image/common/chapter1/event/play_with_murasa/chapter1-09-event-01-obj01.png",
	"chapter1-09-event-01-koishi":  "./image/common/chapter1/event/play_with_murasa/chapter1-09-event-01-koishi.png",

	// ジャーナル画像(日本語)
	"journal001_ja":  "./image/common/journal/ja/001.png",
	"journal002_ja":  "./image/common/journal/ja/002.png",
	"journal003_ja":  "./image/common/journal/ja/003.png",
	"journal004_ja":  "./image/common/journal/ja/004.png",
	"journal005_ja":  "./image/common/journal/ja/005.png",

	// ジャーナル画像(英語)
	"journal001_en":  "./image/common/journal/en/001.png",
	"journal002_en":  "./image/common/journal/en/002.png",
	"journal003_en":  "./image/common/journal/en/003.png",
	"journal004_en":  "./image/common/journal/en/004.png",
	"journal005_en":  "./image/common/journal/en/005.png",



	//
	// フィールドの画像とオブジェクト
	//

	// chapter0
	"chapter0-myroom-bg-001":    "./image/common/chapter0/myroom/chapter0-myroom-bg-001.jpg",
	"chapter0-myroom-obj-01-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-01-01.png",
	"chapter0-myroom-obj-02-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-02-01.png",
	"chapter0-myroom-obj-03-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-03-01.png",
	"chapter0-myroom-obj-04-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-04-01.png",
	"chapter0-myroom-obj-05-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-05-01.png",
	"chapter0-myroom-obj-07-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-07-01.png",

	"chapter0-hospital_corridor1-bg-001":    "./image/common/chapter0/hospital_corridor1/chapter0-hospital-bg-001.jpg",
	"chapter0-hospital_corridor1-obj-01-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-01-01.png",
	"chapter0-hospital_corridor1-obj-02-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-02-01.png",
	"chapter0-hospital_corridor1-obj-03-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-03-01.png",
	"chapter0-hospital_corridor1-obj-04-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-04-01.png",

	"chapter0-hospital2-bg-001":    "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-bg-001.jpg",
	"chapter0-hospital2-obj-01-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-01-01.png",
	"chapter0-hospital2-obj-02-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-02-01.png",
	"chapter0-hospital2-obj-03-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-03-01.png",

	"chapter0-mansionpas-001":      "./image/common/chapter0/mansion_corridor1/chapter0-mansionpas-001.jpg",
	"chapter0-mspassage-obj-01-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-01-01.png",
	"chapter0-mspassage-obj-02-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-02-01.png",
	"chapter0-mspassage-obj-03-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-03-01.png",

	"chapter0-mansionpas-002":      "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-bg-002.jpg",
	"chapter0-mspassage-obj-04-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-04-01.png",
	"chapter0-mspassage-obj-05-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-05-01.png",
	"chapter0-mspassage-obj-06-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-06-01.png",

	"chapter0-mansionpas-003":      "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-bg-003.jpg",
	"chapter0-mspassage-obj-07-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-07-01.png",
	"chapter0-mspassage-obj-08-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-08-01.png",
	"chapter0-mspassage-obj-09-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-09-01.png",
	"chapter0-mspassage-obj-10-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-10-01.png",
	"chapter0-mspassage-obj-11-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-11-01.png",

	// chapter1
	"chapter1-01-bg-001": "./image/common/chapter1/chapter1-01/chapter1-01-bg-001.jpg",
	"chapter1-01-obj-01": "./image/common/chapter1/chapter1-01/chapter1-01-obj-01.png",
	"chapter1-01-obj-02": "./image/common/chapter1/chapter1-01/chapter1-01-obj-02.png",
	"chapter1-01-obj-03": "./image/common/chapter1/chapter1-01/chapter1-01-obj-03.png",
	"white-mist":         "./image/common/chapter1/chapter1-01/white-mist.png",

	"chapter1-02-bg-001": "./image/common/chapter1/chapter1-02/chapter1-02-bg-001.jpg",
	"chapter1-02-obj-01": "./image/common/chapter1/chapter1-02/chapter1-02-obj-01.png",
	"chapter1-02-obj-02": "./image/common/chapter1/chapter1-02/chapter1-02-obj-02.png",
	"chapter1-02-obj-03": "./image/common/chapter1/chapter1-02/chapter1-02-obj-03.png",
	"chapter1-02-obj-04": "./image/common/chapter1/chapter1-02/chapter1-02-obj-04.png",
	"chapter1-02-obj-05": "./image/common/chapter1/chapter1-02/chapter1-02-obj-05.png",
	"chapter1-02-obj-06": "./image/common/chapter1/chapter1-02/chapter1-02-obj-06.png",

	"chapter1-03-bg-001": "./image/common/chapter1/chapter1-03/chapter1-03-bg-001.jpg",
	"chapter1-03-obj-01": "./image/common/chapter1/chapter1-03/chapter1-03-obj-01.png",
	"chapter1-03-obj-02": "./image/common/chapter1/chapter1-03/chapter1-03-obj-02.png",
	"chapter1-03-obj-03": "./image/common/chapter1/chapter1-03/chapter1-03-obj-03.png",
	"chapter1-03-obj-04": "./image/common/chapter1/chapter1-03/chapter1-03-obj-04.png",
	"chapter1-03-obj-05": "./image/common/chapter1/chapter1-03/chapter1-03-obj-05.png",

	"chapter1-04-bg-001": "./image/common/chapter1/chapter1-04/chapter1-04-bg-001.jpg",
	"chapter1-04-obj-01": "./image/common/chapter1/chapter1-04/chapter1-04-obj-01.png",
	"chapter1-04-obj-02": "./image/common/chapter1/chapter1-04/chapter1-04-obj-02.png",
	"chapter1-04-obj-03": "./image/common/chapter1/chapter1-04/chapter1-04-obj-03.png",
	"chapter1-04-obj-04": "./image/common/chapter1/chapter1-04/chapter1-04-obj-04.png",
	"chapter1-04-obj-05": "./image/common/chapter1/chapter1-04/chapter1-04-obj-05.png",

	"chapter1-05-bg-001": "./image/common/chapter1/chapter1-05/chapter1-05-bg-001.jpg",
	"chapter1-05-obj-01": "./image/common/chapter1/chapter1-05/chapter1-05-obj-01.png",
	"chapter1-05-obj-02": "./image/common/chapter1/chapter1-05/chapter1-05-obj-02.png",

	"chapter1-06-bg-001": "./image/common/chapter1/chapter1-06/chapter1-06-bg-001.jpg",
	"chapter1-06-obj-01": "./image/common/chapter1/chapter1-06/chapter1-06-obj-01.png",
	"chapter1-06-obj-02": "./image/common/chapter1/chapter1-06/chapter1-06-obj-02.png",
	"chapter1-06-obj-03": "./image/common/chapter1/chapter1-06/chapter1-06-obj-03.png",
	"chapter1-06-obj-04": "./image/common/chapter1/chapter1-06/chapter1-06-obj-04.png",

	"chapter1-07-bg-001": "./image/common/chapter1/chapter1-07/chapter1-07-bg-001.jpg",
	"chapter1-07-obj-01": "./image/common/chapter1/chapter1-07/chapter1-07-obj-01.png",
	
	"chapter1-08-bg-001": "./image/common/chapter1/chapter1-08/chapter1-08-bg-001.jpg",
	"chapter1-08-obj-01": "./image/common/chapter1/chapter1-08/chapter1-08-obj-01.png",
	
	"chapter1-09-bg-001": "./image/common/chapter1/chapter1-09/chapter1-09-bg-001.jpg",
	"chapter1-09-obj-01": "./image/common/chapter1/chapter1-09/chapter1-09-obj-01.png",
	"chapter1-09-obj-02": "./image/common/chapter1/chapter1-09/chapter1-09-obj-02.png",
	
	"chapter1-10-bg-001": "./image/common/chapter1/chapter1-10/chapter1-10-bg-001.jpg",
	"chapter1-10-obj-01": "./image/common/chapter1/chapter1-10/chapter1-10-obj-01.png",

	// 選択中のアイテム背景
	"item_selected":      "./image/common/item/icon_item_common_light01.png",

	// アイテム 目薬
	"item_01":            "./image/common/item/icon_item_eyedrops01.png",
	"item_02":            "./image/common/item/icon_item_matches01.png",
	"item_03":            "./image/common/item/icon_item_wcan01.png",
	"item_04":            "./image/common/item/icon_item_wcan02.png",
	"item_05":            "./image/common/item/icon_item_ladders01.png",
	"item_06":            "./image/common/item/icon_item_snake01.png",
	"item_07":            "./image/common/item/icon_item_mic01.png",
	"item_08":            "./image/common/item/icon_item_kumade01.png",
	"item_09":            "./image/common/item/icon_item_taketonbo01.png",
	"item_10":            "./image/common/item/icon_item_scarymask01.png",
	"item_11":            "./image/common/item/icon_item_chocobox01.png",
	"item_12":            "./image/common/item/icon_item_doll01.png",
	"item_21":            "./image/common/item/icon_item_journalbook.png",

	// 体験版時のコンティニュー画像
	"tobecontinued":  "./image/common/tobecontinued.png",

	// フィールド上に落ちているジャーナル オブジェクト
	"paper":              "./image/common/chapterall-obj-02-01.png",
	// フィールド上に落ちている目薬 オブジェクト
	"eyedrops":           "./image/common/chapterall-obj-01-01.png",

	// 画面遷移用やじるし
	"arrow":  "./image/common/ui-common-btn-arrow-wht.png",
	// アイテムボタン
	"tool": "./image/common/ui-common-btn-tool-1.png",
	// 第三の目
	"eye1":  "./image/common/ui-common-btn-eye-1.png",
	"eye2":  "./image/common/ui-common-btn-eye-2.png",
	"eye3":  "./image/common/ui-common-btn-eye-3.png",
	"eye4":  "./image/common/ui-common-btn-eye-4.png",

	// ふきだし
	"fukidashi":  "./image/common/ui-common-frame-talk1-brn.png",
	"fukidashi_gray":  "./image/common/ui-common-frame-talk1-gry.png",
	"fukidashi_dark":  "./image/common/ui-common-frame-talk1-dark.png",
	"fukidashi_arrow":  "./image/common/ui-common-btn-arrow-brn.png",

	// 会話選択肢 ふきだし
	"junction_off":  "./image/common/junction_off.png",
	"junction_on":   "./image/common/junction_on.png",

	// ここを選択せよ、的な矢印
	"target_arrow":  "./image/common/ui-common-btn-arrow-gry.png",

	// メニュー
	"ui-common-bg-toolpu-blk":   "./image/common/menu/ui-common-bg-toolpu-blk.png",
	"ui-common-btn-toolpu-blu1": "./image/common/menu/ui-common-btn-toolpu-blu1.png",
	"ui-common-btn-toolpu-blu2": "./image/common/menu/ui-common-btn-toolpu-blu2.png",
	"ui-common-frame-toolpu":    "./image/common/menu/ui-common-frame-toolpu.png",

	// タイトル画面
	"ui-titlepg-btn-con-off":  "./image/common/title/ui-titlepg-btn-con-off.png",
	"ui-titlepg-btn-con-on":   "./image/common/title/ui-titlepg-btn-con-on.png",
	"ui-titlepg-btn-ng-off":   "./image/common/title/ui-titlepg-btn-ng-off.png",
	"ui-titlepg-btn-ng-on":    "./image/common/title/ui-titlepg-btn-ng-on.png",
	"ui-titlepg-btn-opt-off":  "./image/common/title/ui-titlepg-btn-opt-off.png",
	"ui-titlepg-btn-opt-on":   "./image/common/title/ui-titlepg-btn-opt-on.png",
	"ui-titlepg-img-logo-1":   "./image/common/title/ui-titlepg-img-logo-1.png",

	// タイトル画面アニメ
	"mask":  "./image/common/title/mask.png",
	"noize":  "./image/common/title/noize.jpg",
	"stain":  "./image/common/title/stain.png",
	"title":  "./image/common/title/title.jpg",

	// 1枚絵
	"picture_get_hat":   "./image/common/picture/illust_01.png",
	"picture_use_eyedrops":   "./image/common/picture/illust_02.png",
	"picture_chapter1-08-illust-01":   "./image/common/picture/chapter1-08-illust-01.png",
	"picture_chapter1-09-illust-01":   "./image/common/picture/chapter1-09-illust-01.png",
	"picture_chapter1-10-illust-01":   "./image/common/picture/chapter1-10-illust-01.png",

	// 不要
	//paper_clip:  "./image/common/ui-common-frame-paper_clip.png",
	//paper_close_button: "./image/common/ui-common-btn-close.png",
	//paper_open:         "./image/common/ui-common-frame-paper.png",
};

AssetsConfig.sounds = {
	leaving_title: {
		path: "./sound/common/leaving_title.ogg",
		volume: 1.0,
	},
	show_journal:    {
		path: "./sound/common/show_journal.ogg",
		volume: 1.0,
	},
	got_item_common:    {
		path: "./sound/common/got_item/common.ogg",
		volume: 1.0,
	},
	got_item_boombox:    {
		path: "./sound/common/got_item/boombox.ogg",
		volume: 1.0,
	},
	got_item_radder:    {
		path: "./sound/common/got_item/radder.ogg",
		volume: 1.0,
	},
	open_menu:    {
		path: "./sound/common/open_menu.ogg",
		volume: 1.0,
	},
	select_item:    {
		path: "./sound/common/select_item.ogg",
		volume: 1.0,
	},
	select_title:    {
		path: "./sound/common/select_title.ogg",
		volume: 1.0,
	},
	focuson_title:    {
		path: "./sound/common/focuson_title.ogg",
		volume: 1.0,
	},
	use_3rdeye:    {
		path: "./sound/common/use_3rdeye.ogg",
		volume: 1.0,
	},
	progress_bloodshot:    {
		path: "./sound/common/progress_bloodshot.ogg",
		volume: 1.0,
	},
	use_eyedrops:    {
		path: "./sound/common/use_eyedrops.ogg",
		volume: 1.0,
	},
	fall:    {
		path: "./sound/common/fall.ogg",
		volume: 1.0,
	},
	gameover1:    {
		path: "./sound/common/gameover/go1.ogg",
		volume: 1.0,
	},
	gameover2:    {
		path: "./sound/common/gameover/go2.ogg",
		volume: 1.0,
	},
	gameover3:    {
		path: "./sound/common/gameover/go3.ogg",
		volume: 1.0,
	},
	gameover4:    {
		path: "./sound/common/gameover/go4.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-door_open":    {
		path: "./sound/common/chapter0/myroom/door_open.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-open_book":    {
		path: "./sound/common/chapter0/myroom/open_book.ogg",
		volume: 1.0,
	},
	"chapter0-myroom-move_crayon":    {
		path: "./sound/common/chapter0/myroom/move_crayon.ogg",
		volume: 0.7,
	},
	"chapter0-myroom-sound_window_for_kokoro":    {
		path: "./sound/common/chapter0/myroom/sound_window_for_kokoro.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_aidkit":    {
		path: "./sound/common/chapter0/hospital_corridor1/sound_aidkit.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_strecher":    {
		path: "./sound/common/chapter0/hospital_corridor1/sound_strecher.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor2-move_wheelchair":    {
		path: "./sound/common/chapter0/hospital_corridor2/move_wheelchair.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_back":    {
		path: "./sound/common/chapter0/mansion_corridor1/lamp_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_front":    {
		path: "./sound/common/chapter0/mansion_corridor1/lamp_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-move_tricycle":    {
		path: "./sound/common/chapter0/mansion_corridor1/move_tricycle.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-open_curtain":    {
		path: "./sound/common/chapter0/mansion_corridor1/open_curtain.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_back":    {
		path: "./sound/common/chapter0/mansion_corridor2/flower_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_front":    {
		path: "./sound/common/chapter0/mansion_corridor2/flower_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-open_door":    {
		path: "./sound/common/chapter0/mansion_corridor2/open_door.ogg",
		volume: 1.0,
	},

	"chapter0-mansion_corridor2-event_out":    {
		path: "./sound/common/chapter0/mansion_corridor2/event/event_out.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-event_in":    {
		path: "./sound/common/chapter0/mansion_corridor2/event/event_in.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/ring_clock_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_front":    {
		path: "./sound/common/chapter0/mansion_corridor3/ring_clock_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-sound_vase_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/sound_vase_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-smile_kokoro_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/smile_kokoro_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-open_and_falldown":    {
		path: "./sound/common/chapter0/mansion_corridor3/open_and_falldown.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_out_common":    {
		path: "./sound/common/chapter1/event/play_wipe_out_common.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_kyoko":    {
		path: "./sound/common/chapter1/event/play_wipe_in_kyoko.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_kogasa":    {
		path: "./sound/common/chapter1/event/play_wipe_in_kogasa.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_murasa":    {
		path: "./sound/common/chapter1/event/play_wipe_in_murasa.ogg",
		volume: 1.0,
	},
	"chapter1-01-change":    {
		path: "./sound/common/chapter1/01/change.ogg",
		volume: 1.0,
	},
	"chapter1-01-smile_kokoro":    {
		path: "./sound/common/chapter1/01/smile_kokoro.ogg",
		volume: 1.0,
	},

	"chapter1-04-standup_kosuzu":    {
		path: "./sound/common/chapter1/04/standup_kosuzu.ogg",
		volume: 1.0,
	},
	"chapter1-04-receive_phone":    {
		path: "./sound/common/chapter1/04/receive_phone.ogg",
		volume: 1.0,
	},
	"chapter1-03-sound_bucket":    {
		path: "./sound/common/chapter1/03/sound_bucket.ogg",
		volume: 1.0,
	},
	"chapter1-08-suspended":    {
		path: "./sound/common/chapter1/08/suspended.ogg",
		volume: 1.0,
	},
	"chapter1-09-twist_faucet":    {
		path: "./sound/common/chapter1/09/twist_faucet.ogg",
		volume: 1.0,
	},
	"chapter1-09-growl":    {
		path: "./sound/common/chapter1/09/growl.ogg",
		volume: 1.0,
	},
	"chapter1-10-flow_sand":    {
		path: "./sound/common/chapter1/10/flow_sand.ogg",
		volume: 1.0,
	},
	touch:    {
		path: "./sound/common/touch.ogg",
		volume: 1.0,
	},
	walking_bare_default_left:    {
		path: "./sound/common/walking/bare_default_left.ogg",
		volume: 1.0,
	},
	walking_bare_default_right:    {
		path: "./sound/common/walking/bare_default_right.ogg",
		volume: 1.0,
	},
	walking_bare_wood_left:    {
		path: "./sound/common/walking/bare_wood_left.ogg",
		volume: 1.0,
	},
	walking_bare_wood_right:    {
		path: "./sound/common/walking/bare_wood_right.ogg",
		volume: 1.0,
	},
	walking_bare_outside_left:    {
		path: "./sound/common/walking/bare_outside_left.ogg",
		volume: 1.0,
	},
	walking_bare_outside_right:    {
		path: "./sound/common/walking/bare_outside_right.ogg",
		volume: 1.0,
	},

	walking_bare_snow_right:    {
		path: "./sound/common/walking/walking_bare_snow_right.ogg",
		volume: 1.0,
	},
	walking_bare_snow_left:    {
		path: "./sound/common/walking/walking_bare_snow_left.ogg",
		volume: 1.0,
	},
	noise1:    {
		path: "./sound/common/noise/noise1.ogg",
		volume: 1.0,
	},
	noise2:    {
		path: "./sound/common/noise/noise2.ogg",
		volume: 1.0,
	},
	noise3:    {
		path: "./sound/common/noise/noise3.ogg",
		volume: 1.0,
	},
	noise4:    {
		path: "./sound/common/noise/noise4.ogg",
		volume: 1.0,
	},
	noise5:    {
		path: "./sound/common/noise/noise5.ogg",
		volume: 1.0,
	},
};

AssetsConfig.bgms = {
	"silent": {
		path: "./bgm/common/silent.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	using_3rdeye: {
		path: "./bgm/common/using_3rdeye.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	title: {
		path: "./bgm/common/title1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field1: {
		path: "./bgm/common/field1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field2: {
		path: "./bgm/common/field2.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field3: {
		path: "./bgm/common/field3.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},

	field4: {
		path: "./bgm/common/field4.ogg",
		loopStart: 0*60 + 0 + 0.300,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-event-encounter_satori": {
		path: "./bgm/common/chapter0/event/encounter_satori.ogg",
		volume: 0.6,
	},
	"chapter1-event-talk_with_mobu": {
		path: "./bgm/common/chapter1/event/talk_with_mobu.ogg",
		volume: 0.6,
	},


	"chapter0-mansion_corridor1-tricycle": {
		path: "./bgm/common/chapter0/mansion_corridor1/tricycle.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},

	"chapter0-mansion_corridor1-wind": {
		path: "./bgm/common/chapter0/mansion_corridor1/wind.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-clock": {
		path: "./bgm/common/chapter0/mansion_corridor3/clock.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-03-drop_paint": {
		path: "./bgm/common/chapter1/03/drop_paint.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-04-call_phone": {
		path: "./bgm/common/chapter1/04/call_phone.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-06-flicker_light": {
		path: "./bgm/common/chapter1/06/flicker_light.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-09-flows_water": {
		path: "./bgm/common/chapter1/09/flows_water.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
};

AssetsConfig.fonts = {
	"OradanoGSRR": {
		path: "OradanoGSRR.ttf",
		format: "truetype",
	},
};
module.exports = AssetsConfig;
