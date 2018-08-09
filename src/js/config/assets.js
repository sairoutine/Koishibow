'use strict';

var AssetsConfig = {};

AssetsConfig.images = {
	// HowTo 画像
	"howto":            "./image/howto.png",
	// タイトル放置案 背景
	"leaving_title":      "./image/leaving_title.png",


	// マウスカーソル
	"ui_icon_pointer_01":            {
		image: "./image/ui_icon_pointer_01.png",
		scale_width: 2/3,
		scale_height: 2/3,
	},
	"ui_icon_pointer_02":            {
		image: "./image/ui_icon_pointer_02.png",
		scale_width: 2/3,
		scale_height: 2/3,
	},

	// こいし画像
	"koishi": "./image/koishi.png",
	"koishi_button": "./image/koishi_button.png",
	// こころ画像
	"kokoro": "./image/kokoro.png",
	// てゐ
	"tewi":   "./image/tewi.png",
	// にとり
	"nitori":   "./image/nitori.png",
	// 響子
	"kyoko":   "./image/kyoko.png",
	"kyoko_taketonbo":   "./image/kyoko_taketonbo.png",
	// 小傘
	"kogasa":   "./image/kogasa.png",
	// 村紗
	"murasa":   "./image/murasa.png",
	// チルノ
	"cirno":   "./image/cirno.png",
	// フラン
	"fran":   "./image/fran.png",

	// 3rdeye 使用時のもや
	"black_mist":            "./image/black_mist.png",
	// 3rdeye 使用時の光
	"light":  "./image/light.png",

	"white_mist":            "./image/white-mist.png",

	// 帽子獲得イベント
	"get_hat_bg":  "./image/chapter0/event/get_hat/bg.png",

	// こいしが落ちるイベント
	"chapter0-mspassage-event-02-obj-10-01":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02-obj-10-01.png",
	"chapter0-mspassage-event-02_bg01":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_bg01.jpg",
	"chapter0-mspassage-event-02_black_mist":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_black_mist.png",
	"chapter0-mspassage-event-02_door":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_door.png",
	"chapter0-mspassage-event-02_koishi":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_koishi.png",
	"chapter0-mspassage-event-02_shadow":  "./image/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_shadow.png",

	// さとり邂逅イベント
	"chapter0-mspassage-bg-002_event":  "./image/chapter0/event/encounter_satori/chapter0-mspassage-bg-002_event.jpg",
	"eye":  "./image/chapter0/event/encounter_satori/eye.png",
	"str":  "./image/chapter0/event/encounter_satori/str.png",

	// 1-7 フラッシュバック(モブとの会話)
	"chapter1-07-event-bg-001":  "./image/chapter1/event/talk_with_mobu/chapter1-07-event-bg-001.jpg",
	"chapter1_07_event_mobu1":  "./image/chapter1/event/talk_with_mobu/chapter1_07_event_mobu1.png",
	"chapter1_07_event_mobu2":  "./image/chapter1/event/talk_with_mobu/chapter1_07_event_mobu2.png",
	"chapter1_07_event_mobu3":  "./image/chapter1/event/talk_with_mobu/chapter1_07_event_mobu3.png",
	"chapter1_07_event_koishi": "./image/chapter1/event/talk_with_mobu/chapter1_07_event_koishi.png",

	// 1-7 遊びを提案する
	"chapter1-07-event-02-chr_obj_01":  "./image/chapter1/event/playdoll/chapter1-07-event-02-chr_obj_01.png",
	"chapter1_07_event2_obj_01":  "./image/chapter1/event/playdoll/chapter1_07_event2_obj_01.png",
	"chapter1_07_event_02_kogasa":  "./image/chapter1/event/playdoll/chapter1_07_event_02_kogasa.png",
	"chapter1_07_event_02_koishi":  "./image/chapter1/event/playdoll/chapter1_07_event_02_koishi.png",
	"chapter1_07_event_02_kyoko":  "./image/chapter1/event/playdoll/chapter1_07_event_02_kyoko.png",
	"chapter1_07_event_02_murasa":  "./image/chapter1/event/playdoll/chapter1_07_event_02_murasa.png",

	// 1-9 村紗と遊ぶ
	"chapter1-09-event-01-chr-murasa":  "./image/chapter1/event/play_with_murasa/chapter1-09-event-01-chr-murasa.png",
	"chapter1-09-event-01-obj01":  "./image/chapter1/event/play_with_murasa/chapter1-09-event-01-obj01.png",
	"chapter1-09-event-01-koishi":  "./image/chapter1/event/play_with_murasa/chapter1-09-event-01-koishi.png",
	
	// 3-1 こいしが起きる
	"chapter3-01-event-01-koishi":  "./image/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-koishi.png",
	"chapter3-01-event-01-bg-001":  "./image/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-bg-001.jpg",	
	
	// 3-8-1 さとりとのフラッシュバック
	"chapter3-08-event-01-koishi":  "./image/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-koishi.png",
	"chapter3-08-event-01-satori":  "./image/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-satori.png",
	"chapter3-08-event-01-obj-01":  "./image/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-obj-01.png",
	"chapter3-08-event-01-obj-02":  "./image/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-obj-02.png",
	"chapter3-08-event-01-bg-001":  "./image/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-bg-001.jpg",
	
	// 3-8-2 チルノを引っ張り出す
	"chapter3-08-event-02-koishi":  "./image/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-koishi.png",
	"chapter3-08-event-02-cirno":  "./image/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-cirno.png",
	"chapter3-08-event-02-snow":  "./image/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-snow.png",
	"chapter3-08-event-02-tree":  "./image/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-tree.png",
	"chapter3-08-event-02-bg-001":  "./image/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-bg-001.jpg",
	
	// 3-8-3 チルノが雪を集め始める
	"chapter3-08-event-03-koishi":  "./image/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-koishi.png",
	"chapter3-08-event-03-cirno":  "./image/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-cirno.png",
	"chapter3-08-event-03-snow":  "./image/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-snow.png",
	"chapter3-08-event-03-tree":  "./image/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-tree.png",
	"chapter3-08-event-03-bg-001":  "./image/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-bg-001.jpg",
    
    // 3-8-4 【BADEND】
	"chapter3-08-event-04-koishi":  "./image/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-koishi.png",
    "chapter3-08-event-04-cirno":  "./image/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-cirno.png",
    "chapter3-08-event-04-bg-001":  "./image/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-bg-001.jpg",
    
    // 3-9 フランがダイナマイトで爆破
	"chapter3-09-event-01-koishi":  "./image/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-koishi.png",
    "chapter3-09-event-01-fran":  "./image/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-fran.png",
    "chapter3-09-event-01-obj-01":  "./image/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-01.jpg",
    "chapter3-09-event-01-obj-02":  "./image/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-02.png",
    "chapter3-09-event-01-obj-03":  "./image/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-03.png",
	
	// 3-10 チルノとフランが橋をはさんで言い争う
	"chapter3-10-event-01-koishi":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-koishi.png",
	"chapter3-10-event-01-cirno":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-cirno.png",
	"chapter3-10-event-01-fran":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-fran.png",
	"chapter3-10-event-01-bg-001":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-bg-001.jpg",
	"chapter3-10-event-01-obj-01":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-obj-01.png",
    "chapter3-10-event-01-obj-02":  "./image/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-obj-02.png",
	
	// 3-11 となりのフィールドで爆発、雪崩
	"chapter3-11-event-01-koishi":  "./image/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-koishi.png",
	"chapter3-11-event-01-obj-01":  "./image/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-obj-01.jpg",
	"chapter3-11-event-01-obj-02":  "./image/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-obj-02.png",
	
	// 3-12 フランあいさつ
	"chapter3-12-event-01-koishi":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-koishi.png",
	"chapter3-12-event-01-fran":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-fran.png",
	"chapter3-12-event-01-obj-01":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-01.png",
	"chapter3-12-event-01-obj-02":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-02.png",
	"chapter3-12-event-01-obj-03":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-03.png",
	"chapter3-12-event-01-bg-001":  "./image/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-bg-001.jpg",
    
    // 3-13-1 これがいいアイデアなの？
    "chapter3-13-event-01-koishi":  "./image/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-koishi.png",
    "chapter3-13-event-01-fran":  "./image/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-fran.png",
    "chapter3-13-event-01-cirno":  "./image/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-cirno.png",
    "chapter3-13-event-01-bg-001":  "./image/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-bg-001.jpg",
    
    // 3-13-3 チルノの首がはねられている？
    "chapter3-13-event-03-koishi":  "./image/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-koishi.png",
    "chapter3-13-event-03-cirno":  "./image/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-cirno.png",
    "chapter3-13-event-03-fran":  "./image/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-fran.png",
    "chapter3-13-event-03-obj-01":  "./image/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-obj-01.png",
    "chapter3-13-event-03-bg-001":  "./image/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-bg-001.jpg",

    // 3-13-4 チルノの首がはねられている？
    "chapter3-13-event-04-koishi":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-koishi.png",
    "chapter3-13-event-04-cirno":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-cirno.png",
    "chapter3-13-event-04-fran":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-fran.png",
    "chapter3-13-event-04-obj-01":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-obj-01.png",
    "chapter3-13-event-04-obj-02":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-obj-02.png",
    "chapter3-13-event-04-bg-001":  "./image/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-bg-001.jpg",

	// ジャーナル画像
	"journal001":  "./image/journal/001.png",
	"journal002":  "./image/journal/002.png",
	"journal003":  "./image/journal/003.png",
	"journal004":  "./image/journal/004.png",
	"journal005":  "./image/journal/005.png",

	//
	// フィールドの画像とオブジェクト
	//

	// chapter0
	"chapter0-myroom-bg-001":    "./image/chapter0/myroom/chapter0-myroom-bg-001.jpg",
	"chapter0-myroom-obj-01-01": "./image/chapter0/myroom/chapter0-myroom-obj-01-01.png",
	"chapter0-myroom-obj-02-01": "./image/chapter0/myroom/chapter0-myroom-obj-02-01.png",
	"chapter0-myroom-obj-03-01": "./image/chapter0/myroom/chapter0-myroom-obj-03-01.png",
	"chapter0-myroom-obj-04-01": "./image/chapter0/myroom/chapter0-myroom-obj-04-01.png",
	"chapter0-myroom-obj-05-01": "./image/chapter0/myroom/chapter0-myroom-obj-05-01.png",
	"chapter0-myroom-obj-07-01": "./image/chapter0/myroom/chapter0-myroom-obj-07-01.png",

	"chapter0-hospital_corridor1-bg-001":    "./image/chapter0/hospital_corridor1/chapter0-hospital-bg-001.jpg",
	"chapter0-hospital_corridor1-obj-01-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-01-01.png",
	"chapter0-hospital_corridor1-obj-02-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-02-01.png",
	"chapter0-hospital_corridor1-obj-03-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-03-01.png",
	"chapter0-hospital_corridor1-obj-04-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-04-01.png",

	"chapter0-hospital2-bg-001":    "./image/chapter0/hospital_corridor2/chapter0-hospital2-bg-001.jpg",
	"chapter0-hospital2-obj-01-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-01-01.png",
	"chapter0-hospital2-obj-02-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-02-01.png",
	"chapter0-hospital2-obj-03-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-03-01.png",

	"chapter0-mansionpas-001":      "./image/chapter0/mansion_corridor1/chapter0-mansionpas-001.jpg",
	"chapter0-mspassage-obj-01-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-01-01.png",
	"chapter0-mspassage-obj-02-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-02-01.png",
	"chapter0-mspassage-obj-03-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-03-01.png",

	"chapter0-mansionpas-002":      "./image/chapter0/mansion_corridor2/chapter0-mspassage-bg-002.jpg",
	"chapter0-mspassage-obj-04-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-04-01.png",
	"chapter0-mspassage-obj-05-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-05-01.png",
	"chapter0-mspassage-obj-06-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-06-01.png",

	"chapter0-mansionpas-003":      "./image/chapter0/mansion_corridor3/chapter0-mspassage-bg-003.jpg",
	"chapter0-mspassage-obj-07-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-07-01.png",
	"chapter0-mspassage-obj-08-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-08-01.png",
	"chapter0-mspassage-obj-09-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-09-01.png",
	"chapter0-mspassage-obj-10-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-10-01.png",
	"chapter0-mspassage-obj-11-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-11-01.png",

	// chapter1
	"chapter1-01-bg-001": "./image/chapter1/chapter1-01/chapter1-01-bg-001.jpg",
	"chapter1-01-obj-01": "./image/chapter1/chapter1-01/chapter1-01-obj-01.png",
	"chapter1-01-obj-02": "./image/chapter1/chapter1-01/chapter1-01-obj-02.png",
	"chapter1-01-obj-03": "./image/chapter1/chapter1-01/chapter1-01-obj-03.png",
	"white-mist":         "./image/chapter1/chapter1-01/white-mist.png",

	"chapter1-02-bg-001": "./image/chapter1/chapter1-02/chapter1-02-bg-001.jpg",
	"chapter1-02-obj-01": "./image/chapter1/chapter1-02/chapter1-02-obj-01.png",
	"chapter1-02-obj-02": "./image/chapter1/chapter1-02/chapter1-02-obj-02.png",
	"chapter1-02-obj-03": "./image/chapter1/chapter1-02/chapter1-02-obj-03.png",
	"chapter1-02-obj-04": "./image/chapter1/chapter1-02/chapter1-02-obj-04.png",
	"chapter1-02-obj-05": "./image/chapter1/chapter1-02/chapter1-02-obj-05.png",
	"chapter1-02-obj-06": "./image/chapter1/chapter1-02/chapter1-02-obj-06.png",

	"chapter1-03-bg-001": "./image/chapter1/chapter1-03/chapter1-03-bg-001.jpg",
	"chapter1-03-obj-01": "./image/chapter1/chapter1-03/chapter1-03-obj-01.png",
	"chapter1-03-obj-02": "./image/chapter1/chapter1-03/chapter1-03-obj-02.png",
	"chapter1-03-obj-03": "./image/chapter1/chapter1-03/chapter1-03-obj-03.png",
	"chapter1-03-obj-04": "./image/chapter1/chapter1-03/chapter1-03-obj-04.png",
	"chapter1-03-obj-05": "./image/chapter1/chapter1-03/chapter1-03-obj-05.png",

	"chapter1-04-bg-001": "./image/chapter1/chapter1-04/chapter1-04-bg-001.jpg",
	"chapter1-04-obj-01": "./image/chapter1/chapter1-04/chapter1-04-obj-01.png",
	"chapter1-04-obj-02": "./image/chapter1/chapter1-04/chapter1-04-obj-02.png",
	"chapter1-04-obj-03": "./image/chapter1/chapter1-04/chapter1-04-obj-03.png",
	"chapter1-04-obj-04": "./image/chapter1/chapter1-04/chapter1-04-obj-04.png",
	"chapter1-04-obj-05": "./image/chapter1/chapter1-04/chapter1-04-obj-05.png",

	"chapter1-05-bg-001": "./image/chapter1/chapter1-05/chapter1-05-bg-001.jpg",
	"chapter1-05-obj-01": "./image/chapter1/chapter1-05/chapter1-05-obj-01.png",
	"chapter1-05-obj-02": "./image/chapter1/chapter1-05/chapter1-05-obj-02.png",

	"chapter1-06-bg-001": "./image/chapter1/chapter1-06/chapter1-06-bg-001.jpg",
	"chapter1-06-obj-01": "./image/chapter1/chapter1-06/chapter1-06-obj-01.png",
	"chapter1-06-obj-02": "./image/chapter1/chapter1-06/chapter1-06-obj-02.png",
	"chapter1-06-obj-03": "./image/chapter1/chapter1-06/chapter1-06-obj-03.png",
	"chapter1-06-obj-04": "./image/chapter1/chapter1-06/chapter1-06-obj-04.png",

	"chapter1-07-bg-001": "./image/chapter1/chapter1-07/chapter1-07-bg-001.jpg",
	"chapter1-07-obj-01": "./image/chapter1/chapter1-07/chapter1-07-obj-01.png",
	
	"chapter1-08-bg-001": "./image/chapter1/chapter1-08/chapter1-08-bg-001.jpg",
	"chapter1-08-obj-01": "./image/chapter1/chapter1-08/chapter1-08-obj-01.png",
	
	"chapter1-09-bg-001": "./image/chapter1/chapter1-09/chapter1-09-bg-001.jpg",
	"chapter1-09-obj-01": "./image/chapter1/chapter1-09/chapter1-09-obj-01.png",
	"chapter1-09-obj-02": "./image/chapter1/chapter1-09/chapter1-09-obj-02.png",
	
	"chapter1-10-bg-001": "./image/chapter1/chapter1-10/chapter1-10-bg-001.jpg",
	"chapter1-10-obj-01": "./image/chapter1/chapter1-10/chapter1-10-obj-01.png",

	// chapter3
	"chapter3-06-bg-001": "./image/chapter3/chapter3-06/chapter3-06-bg-001.jpg",
	"chapter3-mspassage-obj-01": "./image/chapter3/chapter3-06/chapter3-mspassage-obj-01.png",
	
	"chapter3-07-bg-001": "./image/chapter3/chapter3-07/chapter3-07-bg-001.jpg",
	"chapter3-07-obj-01": "./image/chapter3/chapter3-07/chapter3-07-obj-01.png",
	"chapter3-07-obj-02": "./image/chapter3/chapter3-07/chapter3-07-obj-02.png",
	"chapter3-07-obj-03": "./image/chapter3/chapter3-07/chapter3-07-obj-03.png",
	"chapter3-07-obj-04": "./image/chapter3/chapter3-07/chapter3-07-obj-04.png",
	"chapter3-07-obj-05": "./image/chapter3/chapter3-07/chapter3-07-obj-05.png",
	
	"chapter3-08-bg-001": "./image/chapter3/chapter3-08/chapter3-08-bg-001.jpg",
	"chapter3-08-obj-01": "./image/chapter3/chapter3-08/chapter3-08-obj-01.png",
	"chapter3-08-obj-02": "./image/chapter3/chapter3-08/chapter3-08-obj-02.png",
	"chapter3-08-obj-03": "./image/chapter3/chapter3-08/chapter3-08-obj-03.png",
	
	"chapter3-09-bg-001": "./image/chapter3/chapter3-09/chapter3-09-bg-001.jpg",
	"chapter3-09-obj-01": "./image/chapter3/chapter3-09/chapter3-09-obj-01.png",
	"chapter3-09-obj-01-1": "./image/chapter3/chapter3-09/chapter3-09-obj-01-1.png",
	"chapter3-09-obj-02": "./image/chapter3/chapter3-09/chapter3-09-obj-02.png",
	"chapter3-09-obj-03": "./image/chapter3/chapter3-09/chapter3-09-obj-03.png",
	"chapter3-09-obj-04": "./image/chapter3/chapter3-09/chapter3-09-obj-04.png",
	"chapter3-09-obj-05": "./image/chapter3/chapter3-09/chapter3-09-obj-05.png",
	
	"chapter3-10-bg-001": "./image/chapter3/chapter3-10/chapter3-10-bg-001.jpg",
	"chapter3-10-obj-01": "./image/chapter3/chapter3-10/chapter3-10-obj-01.png",
	"chapter3-10-obj-02-back": "./image/chapter3/chapter3-10/chapter3-10-obj-02-back.png",
	"chapter3-10-obj-02-front": "./image/chapter3/chapter3-10/chapter3-10-obj-02-front.png",
	
	"chapter3-11-bg-001": "./image/chapter3/chapter3-11/chapter3-11-bg-001.jpg",
	"chapter3-11-obj-01": "./image/chapter3/chapter3-11/chapter3-11-obj-01.png",
	"chapter3-11-obj-02": "./image/chapter3/chapter3-11/chapter3-11-obj-02.png",
	"chapter3-11-obj-03": "./image/chapter3/chapter3-11/chapter3-11-obj-03.png",
	"chapter3-11-obj-04": "./image/chapter3/chapter3-11/chapter3-11-obj-04.png",
	"chapter3-11-obj-05": "./image/chapter3/chapter3-11/chapter3-11-obj-05.png",
	"chapter3-11-obj-06": "./image/chapter3/chapter3-11/chapter3-11-obj-06.png",
	
	"chapter3-12-bg-001": "./image/chapter3/chapter3-12/chapter3-12-bg-001.jpg",
	"chapter3-12-obj-01": "./image/chapter3/chapter3-12/chapter3-12-obj-01.png",
	"chapter3-12-obj-02": "./image/chapter3/chapter3-12/chapter3-12-obj-02.png",
	"chapter3-12-obj-03": "./image/chapter3/chapter3-12/chapter3-12-obj-03.png",
	"chapter3-12-obj-04": "./image/chapter3/chapter3-12/chapter3-12-obj-04.png",
	
	"chapter3-13-bg-001": "./image/chapter3/chapter3-13/chapter3-13-bg-001.jpg",
	"chapter3-13-obj-01": "./image/chapter3/chapter3-13/chapter3-13-obj-01.png",
    "chapter3-13-obj-02": "./image/chapter3/chapter3-13/chapter3-13-obj-02.png",
    "chapter3-13-obj-03": "./image/chapter3/chapter3-13/chapter3-13-obj-03.png",
    "chapter3-13-obj-04": "./image/chapter3/chapter3-13/chapter3-13-obj-04.png",
    "chapter3-13-obj-05": "./image/chapter3/chapter3-13/chapter3-13-obj-05.png",
	
	// 選択中のアイテム背景
	"item_selected":      "./image/item/icon_item_common_light01.png",

	// アイテム 目薬
	"item_01":            "./image/item/icon_item_eyedrops01.png",
	"item_02":            "./image/item/icon_item_matches01.png",
	"item_03":            "./image/item/icon_item_wcan01.png",
	"item_04":            "./image/item/icon_item_wcan02.png",
	"item_05":            "./image/item/icon_item_ladders01.png",
	"item_06":            "./image/item/icon_item_snake01.png",
	"item_07":            "./image/item/icon_item_mic01.png",
	"item_08":            "./image/item/icon_item_kumade01.png",
	"item_09":            "./image/item/icon_item_taketonbo01.png",
	"item_10":            "./image/item/icon_item_scarymask01.png",
	"item_11":            "./image/item/icon_item_chocobox01.png",
	"item_12":            "./image/item/icon_item_doll01.png",
	"item_13":            "./image/item/icon_item_cp3_sho.png",
	"item_14":            "./image/item/icon_item_cp3_jyo.png",
	"item_15":            "./image/item/icon_item_cp3_zen.png",
	"item_16":            "./image/item/icon_item_cp3_sap.png",
	"item_17":            "./image/item/icon_item_cp3_rub.png",
	"item_18":            "./image/item/icon_item_cp3_ax.png",
	"item_19":            "./image/item/icon_item_cp3_orn.png",
	"item_20":            "./image/item/icon_item_cp3_cir.png",

	// 体験版時のコンティニュー画像
	"tobecontinued":  "./image/tobecontinued.png",

	// フィールド上に落ちているジャーナル オブジェクト
	"paper":              "./image/chapterall-obj-02-01.png",
	// フィールド上に落ちている目薬 オブジェクト
	"eyedrops":           "./image/chapterall-obj-01-01.png",

	// 画面遷移用やじるし
	"arrow":  "./image/ui-common-btn-arrow-wht.png",
	// アイテムボタン
	"tool": "./image/ui-common-btn-tool-1.png",
	// 第三の目
	"eye1":  "./image/ui-common-btn-eye-1.png",
	"eye2":  "./image/ui-common-btn-eye-2.png",
	"eye3":  "./image/ui-common-btn-eye-3.png",
	"eye4":  "./image/ui-common-btn-eye-4.png",

	// ふきだし
	"fukidashi":  "./image/ui-common-frame-talk1-brn.png",
	"fukidashi_gray":  "./image/ui-common-frame-talk1-gry.png",
	"fukidashi_dark":  "./image/ui-common-frame-talk1-dark.png",
	"fukidashi_arrow":  "./image/ui-common-btn-arrow-brn.png",

	// 会話選択肢 ふきだし
	"junction_off":  "./image/junction_off.png",
	"junction_on":   "./image/junction_on.png",

	// ここを選択せよ、的な矢印
	"target_arrow":  "./image/ui-common-btn-arrow-gry.png",

	// メニュー
	"ui-common-bg-toolpu-blk":   "./image/menu/ui-common-bg-toolpu-blk.png",
	"ui-common-btn-toolpu-blu1": "./image/menu/ui-common-btn-toolpu-blu1.png",
	"ui-common-btn-toolpu-blu2": "./image/menu/ui-common-btn-toolpu-blu2.png",
	"ui-common-frame-toolpu":    "./image/menu/ui-common-frame-toolpu.png",

	// タイトル画面
	"ui-titlepg-btn-con-off":  "./image/title/ui-titlepg-btn-con-off.png",
	"ui-titlepg-btn-con-on":   "./image/title/ui-titlepg-btn-con-on.png",
	"ui-titlepg-btn-ng-off":   "./image/title/ui-titlepg-btn-ng-off.png",
	"ui-titlepg-btn-ng-on":    "./image/title/ui-titlepg-btn-ng-on.png",
	"ui-titlepg-btn-opt-off":  "./image/title/ui-titlepg-btn-opt-off.png",
	"ui-titlepg-btn-opt-on":   "./image/title/ui-titlepg-btn-opt-on.png",
	"ui-titlepg-img-logo-1":   "./image/title/ui-titlepg-img-logo-1.png",

	// タイトル画面アニメ
	"mask":  "./image/title/mask.png",
	"noize":  "./image/title/noize.jpg",
	"stain":  "./image/title/stain.png",
	"title":  "./image/title/title.jpg",

	// 1枚絵
	"picture_get_hat":   "./image/picture/illust_01.png",
	"picture_use_eyedrops":   "./image/picture/illust_02.png",
	"picture_chapter1-08-illust-01":   "./image/picture/chapter1-08-illust-01.png",
	"picture_chapter1-09-illust-01":   "./image/picture/chapter1-09-illust-01.png",
	"picture_chapter1-10-illust-01":   "./image/picture/chapter1-10-illust-01.png",
	"picture_chapter3-08-illust-01":   "./image/picture/chapter3-08-illust-01.png",

	// 不要
	//paper_clip:  "./image/ui-common-frame-paper_clip.png",
	//paper_close_button: "./image/ui-common-btn-close.png",
	//paper_open:         "./image/ui-common-frame-paper.png",
};

AssetsConfig.sounds = {
	leaving_title: {
		path: "./sound/leaving_title.ogg",
		volume: 1.0,
	},
	show_journal:    {
		path: "./sound/show_journal.ogg",
		volume: 1.0,
	},
	got_item_common:    {
		path: "./sound/got_item/common.ogg",
		volume: 1.0,
	},
	got_item_boombox:    {
		path: "./sound/got_item/boombox.ogg",
		volume: 1.0,
	},
	got_item_radder:    {
		path: "./sound/got_item/radder.ogg",
		volume: 1.0,
	},
	open_menu:    {
		path: "./sound/open_menu.ogg",
		volume: 1.0,
	},
	select_item:    {
		path: "./sound/select_item.ogg",
		volume: 1.0,
	},
	select_title:    {
		path: "./sound/select_title.ogg",
		volume: 1.0,
	},
	focuson_title:    {
		path: "./sound/focuson_title.ogg",
		volume: 1.0,
	},
	use_3rdeye:    {
		path: "./sound/use_3rdeye.ogg",
		volume: 1.0,
	},
	progress_bloodshot:    {
		path: "./sound/progress_bloodshot.ogg",
		volume: 1.0,
	},
	use_eyedrops:    {
		path: "./sound/use_eyedrops.ogg",
		volume: 1.0,
	},
	fall:    {
		path: "./sound/fall.ogg",
		volume: 1.0,
	},
	gameover1:    {
		path: "./sound/gameover/go1.ogg",
		volume: 1.0,
	},
	gameover2:    {
		path: "./sound/gameover/go2.ogg",
		volume: 1.0,
	},
	gameover3:    {
		path: "./sound/gameover/go3.ogg",
		volume: 1.0,
	},
	gameover4:    {
		path: "./sound/gameover/go4.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-door_open":    {
		path: "./sound/chapter0/myroom/door_open.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-open_book":    {
		path: "./sound/chapter0/myroom/open_book.ogg",
		volume: 1.0,
	},
	"chapter0-myroom-move_crayon":    {
		path: "./sound/chapter0/myroom/move_crayon.ogg",
		volume: 0.7,
	},
	"chapter0-myroom-sound_window_for_kokoro":    {
		path: "./sound/chapter0/myroom/sound_window_for_kokoro.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_aidkit":    {
		path: "./sound/chapter0/hospital_corridor1/sound_aidkit.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_strecher":    {
		path: "./sound/chapter0/hospital_corridor1/sound_strecher.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor2-move_wheelchair":    {
		path: "./sound/chapter0/hospital_corridor2/move_wheelchair.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_back":    {
		path: "./sound/chapter0/mansion_corridor1/lamp_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_front":    {
		path: "./sound/chapter0/mansion_corridor1/lamp_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-move_tricycle":    {
		path: "./sound/chapter0/mansion_corridor1/move_tricycle.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-open_curtain":    {
		path: "./sound/chapter0/mansion_corridor1/open_curtain.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_back":    {
		path: "./sound/chapter0/mansion_corridor2/flower_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_front":    {
		path: "./sound/chapter0/mansion_corridor2/flower_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-open_door":    {
		path: "./sound/chapter0/mansion_corridor2/open_door.ogg",
		volume: 1.0,
	},

	"chapter0-mansion_corridor2-event_out":    {
		path: "./sound/chapter0/mansion_corridor2/event/event_out.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-event_in":    {
		path: "./sound/chapter0/mansion_corridor2/event/event_in.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_back":    {
		path: "./sound/chapter0/mansion_corridor3/ring_clock_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_front":    {
		path: "./sound/chapter0/mansion_corridor3/ring_clock_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-sound_vase_back":    {
		path: "./sound/chapter0/mansion_corridor3/sound_vase_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-smile_kokoro_back":    {
		path: "./sound/chapter0/mansion_corridor3/smile_kokoro_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-open_and_falldown":    {
		path: "./sound/chapter0/mansion_corridor3/open_and_falldown.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_out_common":    {
		path: "./sound/chapter1/event/play_wipe_out_common.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_kyoko":    {
		path: "./sound/chapter1/event/play_wipe_in_kyoko.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_kogasa":    {
		path: "./sound/chapter1/event/play_wipe_in_kogasa.ogg",
		volume: 1.0,
	},
	"chapter1-event-play_wipe_in_murasa":    {
		path: "./sound/chapter1/event/play_wipe_in_murasa.ogg",
		volume: 1.0,
	},
	"chapter3-myroom-getup_koishi01":    {
		path: "./sound/chapter3/event/getup_koishi/01.ogg",
		volume: 1.0,
	},
	"chapter3-myroom-getup_koishi02": {
		path: "./sound/chapter3/event/getup_koishi/02.ogg",
		volume: 1.0,
	},
	"chapter3-myroom-getup_koishi03": {
		path: "./sound/chapter3/event/getup_koishi/03.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-01":    {
		path: "./sound/chapter3/event/chapter3-08-event-02/01.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-02":    {
		path: "./sound/chapter3/event/chapter3-08-event-02/02.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-03":    {
		path: "./sound/chapter3/event/chapter3-08-event-02/03.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-04":    {
		path: "./sound/chapter3/event/chapter3-08-event-02/04.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-03-01":    {
		path: "./sound/chapter3/event/chapter3-08-event-03/01.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-03-02":    {
		path: "./sound/chapter3/event/chapter3-08-event-03/02.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-03-03":    {
		path: "./sound/chapter3/event/chapter3-08-event-03/03.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-01":    {
		path: "./sound/chapter3/event/chapter3-09-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-02":    {
		path: "./sound/chapter3/event/chapter3-09-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-03":    {
		path: "./sound/chapter3/event/chapter3-09-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-04":    {
		path: "./sound/chapter3/event/chapter3-09-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-05":    {
		path: "./sound/chapter3/event/chapter3-09-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter3-11-event-01-01":    {
		path: "./sound/chapter3/event/chapter3-11-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter3-11-event-01-02":    {
		path: "./sound/chapter3/event/chapter3-11-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-03-01":    {
		path: "./sound/chapter3/event/chapter3-13-event-03/01.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-03-02":    {
		path: "./sound/chapter3/event/chapter3-13-event-03/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-01":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/01.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-02":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-03":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/03.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-04":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/04.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-05":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/05.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-06":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/06.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-07":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/07.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-08":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/08.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-09":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/09.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-10":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/10.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-11":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/11.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-12":    {
		path: "./sound/chapter3/event/chapter3-13-event-04/12.ogg",
		volume: 1.0,
	},
	"chapter1-01-change":    {
		path: "./sound/chapter1/01/change.ogg",
		volume: 1.0,
	},
	"chapter1-01-smile_kokoro":    {
		path: "./sound/chapter1/01/smile_kokoro.ogg",
		volume: 1.0,
	},

	"chapter1-04-standup_kosuzu":    {
		path: "./sound/chapter1/04/standup_kosuzu.ogg",
		volume: 1.0,
	},
	"chapter1-04-receive_phone":    {
		path: "./sound/chapter1/04/receive_phone.ogg",
		volume: 1.0,
	},
	"chapter1-03-sound_bucket":    {
		path: "./sound/chapter1/03/sound_bucket.ogg",
		volume: 1.0,
	},
	"chapter1-08-suspended":    {
		path: "./sound/chapter1/08/suspended.ogg",
		volume: 1.0,
	},
	"chapter1-09-twist_faucet":    {
		path: "./sound/chapter1/09/twist_faucet.ogg",
		volume: 1.0,
	},
	"chapter1-09-growl":    {
		path: "./sound/chapter1/09/growl.ogg",
		volume: 1.0,
	},
	"chapter1-10-flow_sand":    {
		path: "./sound/chapter1/10/flow_sand.ogg",
		volume: 1.0,
	},
	"chapter3-mansion_corridor3-breaked_clock":    {
		path: "./sound/chapter3/mansion_corridor3/breaked_clock.ogg",
		volume: 1.0,
	},
	"chapter3-08-crows_cat":    {
		path: "./sound/chapter3/08/crows_cat.ogg",
		volume: 1.0,
	},
	"chapter3-11-drop_skull":    {
		path: "./sound/chapter3/11/drop_skull.ogg",
		volume: 1.0,
	},
	"chapter3-12-touch_toybox":    {
		path: "./sound/chapter3/12/touch_toybox.ogg",
		volume: 1.0,
	},
	touch:    {
		path: "./sound/touch.ogg",
		volume: 1.0,
	},
	walking_bare_default_left:    {
		path: "./sound/walking/bare_default_left.ogg",
		volume: 1.0,
	},
	walking_bare_default_right:    {
		path: "./sound/walking/bare_default_right.ogg",
		volume: 1.0,
	},
	walking_bare_wood_left:    {
		path: "./sound/walking/bare_wood_left.ogg",
		volume: 1.0,
	},
	walking_bare_wood_right:    {
		path: "./sound/walking/bare_wood_right.ogg",
		volume: 1.0,
	},
	walking_bare_outside_left:    {
		path: "./sound/walking/bare_outside_left.ogg",
		volume: 1.0,
	},
	walking_bare_outside_right:    {
		path: "./sound/walking/bare_outside_right.ogg",
		volume: 1.0,
	},

	walking_bare_snow_right:    {
		path: "./sound/walking/walking_bare_snow_right.ogg",
		volume: 1.0,
	},
	walking_bare_snow_left:    {
		path: "./sound/walking/walking_bare_snow_left.ogg",
		volume: 1.0,
	},
	noise1:    {
		path: "./sound/noise/noise1.ogg",
		volume: 1.0,
	},
	noise2:    {
		path: "./sound/noise/noise2.ogg",
		volume: 1.0,
	},
	noise3:    {
		path: "./sound/noise/noise3.ogg",
		volume: 1.0,
	},
	noise4:    {
		path: "./sound/noise/noise4.ogg",
		volume: 1.0,
	},
	noise5:    {
		path: "./sound/noise/noise5.ogg",
		volume: 1.0,
	},
};

AssetsConfig.bgms = {
	"silent": {
		path: "./bgm/silent.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	using_3rdeye: {
		path: "./bgm/using_3rdeye.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	title: {
		path: "./bgm/title1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field1: {
		path: "./bgm/field1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field2: {
		path: "./bgm/field2.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field3: {
		path: "./bgm/field3.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},

	field4: {
		path: "./bgm/field4.ogg",
		loopStart: 0*60 + 0 + 0.300,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	field5: {
		path: "./bgm/field5.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	field6: {
		path: "./bgm/field6.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	field7: {
		path: "./bgm/field7.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	field8: {
		path: "./bgm/field8.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-event-encounter_satori": {
		path: "./bgm/chapter0/event/encounter_satori.ogg",
		volume: 0.6,
	},
	"chapter1-event-talk_with_mobu": {
		path: "./bgm/chapter1/event/talk_with_mobu.ogg",
		volume: 0.6,
	},


	"chapter0-mansion_corridor1-tricycle": {
		path: "./bgm/chapter0/mansion_corridor1/tricycle.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},

	"chapter0-mansion_corridor1-wind": {
		path: "./bgm/chapter0/mansion_corridor1/wind.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-clock": {
		path: "./bgm/chapter0/mansion_corridor3/clock.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-03-drop_paint": {
		path: "./bgm/chapter1/03/drop_paint.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-04-call_phone": {
		path: "./bgm/chapter1/04/call_phone.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-06-flicker_light": {
		path: "./bgm/chapter1/06/flicker_light.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter1-09-flows_water": {
		path: "./bgm/chapter1/09/flows_water.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter3-12-wood": {
		path: "./bgm/chapter3/12/wood.ogg",
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
