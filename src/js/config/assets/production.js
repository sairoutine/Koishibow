'use strict';
var _ = require('i18n4v')

var AssetsConfig = {};

AssetsConfig.images = {
	// チルノ
	"cirno":   "./image/production/cirno.png",
	// フラン
	"fran":   "./image/production/fran.png",
	// メリー
	"merry":   "./image/production/merry.png",
	// 蓮子
	"renko":   "./image/production/renko.png",
	// 優曇華院
	"reisen":   "./image/production/reisen.png",
	// てゐリアル
	"tewireal":   "./image/production/tewireal.png",
	// お燐
	"orin":   "./image/production/orin.png",
	// お空
	"oku":   "./image/production/oku.png",
	// アライグマ
	"animal_araiguma":   "./image/production/animal_araiguma.png",
	// ハリネズミ
	"animal_hari":   "./image/production/animal_hari.png",
	// ハシビロコウ
	"animal_hashi":   "./image/production/animal_hashi.png",
	// カワウソ
	"animal_kawa":   "./image/production/animal_kawa.png",
	// コモドオオトカゲ
	"animal_komodo":   "./image/production/animal_komodo.png",
	// クロヒョウ または パンサー
	"animal_kuro":   "./image/production/animal_kuro.png",
	// モグラ
	"animal_mogura":   "./image/production/animal_mogura.png",
	// シバイヌ
	"animal_shiba":   "./image/production/animal_shiba.png",
	// ウマ
	"animal_uma":   "./image/production/animal_uma.png",
	// BM
	"bm":   "./image/production/bm.png",

	// 3-1 こいしが起きる
	"chapter3-01-event-01-koishi":  "./image/production/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-koishi.png",
	"chapter3-01-event-01-bg-001":  "./image/production/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-bg-001.jpg",	
	
	// 3-8-1 さとりとのフラッシュバック
	"chapter3-08-event-01-koishi":  "./image/production/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-koishi.png",
	"chapter3-08-event-01-satori":  "./image/production/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-satori.png",
	"chapter3-08-event-01-obj-01":  "./image/production/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-obj-01.png",
	"chapter3-08-event-01-obj-02":  "./image/production/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-obj-02.png",
	"chapter3-08-event-01-bg-001":  "./image/production/chapter3/event/chapter3-08-event-01/chapter3-08-event-01-bg-001.jpg",
	
	// 3-8-2 チルノを引っ張り出す
	"chapter3-08-event-02-koishi":  "./image/production/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-koishi.png",
	"chapter3-08-event-02-cirno":  "./image/production/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-cirno.png",
	"chapter3-08-event-02-snow":  "./image/production/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-snow.png",
	"chapter3-08-event-02-tree":  "./image/production/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-tree.png",
	"chapter3-08-event-02-bg-001":  "./image/production/chapter3/event/chapter3-08-event-02/chapter3-08-event-02-bg-001.jpg",
	
	// 3-8-3 チルノが雪を集め始める
	"chapter3-08-event-03-koishi":  "./image/production/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-koishi.png",
	"chapter3-08-event-03-cirno":  "./image/production/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-cirno.png",
	"chapter3-08-event-03-snow":  "./image/production/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-snow.png",
	"chapter3-08-event-03-tree":  "./image/production/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-tree.png",
	"chapter3-08-event-03-bg-001":  "./image/production/chapter3/event/chapter3-08-event-03/chapter3-08-event-03-bg-001.jpg",
    
	// 3-8-4 【BADEND】
	"chapter3-08-event-04-koishi":  "./image/production/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-koishi.png",
	"chapter3-08-event-04-cirno":  "./image/production/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-cirno.png",
	"chapter3-08-event-04-bg-001":  "./image/production/chapter3/event/chapter3-08-event-04/chapter3-08-event-04-bg-001.jpg",
    
	// 3-9 フランがダイナマイトで爆破
	"chapter3-09-event-01-koishi":  "./image/production/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-koishi.png",
	"chapter3-09-event-01-fran":  "./image/production/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-fran.png",
	"chapter3-09-event-01-obj-01":  "./image/production/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-01.jpg",
	"chapter3-09-event-01-obj-02":  "./image/production/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-02.png",
	"chapter3-09-event-01-obj-03":  "./image/production/chapter3/event/chapter3-09-event-01/chapter3-09-event-01-obj-03.png",
	
	// 3-10 チルノとフランが橋をはさんで言い争う
	"chapter3-10-event-01-koishi":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-koishi.png",
	"chapter3-10-event-01-cirno":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-cirno.png",
	"chapter3-10-event-01-fran":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-fran.png",
	"chapter3-10-event-01-bg-001":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-bg-001.jpg",
	"chapter3-10-event-01-obj-01":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-obj-01.png",
	"chapter3-10-event-01-obj-02":  "./image/production/chapter3/event/chapter3-10-event-01/chapter3-10-event-01-obj-02.png",
	
	// 3-11 となりのフィールドで爆発、雪崩
	"chapter3-11-event-01-koishi":  "./image/production/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-koishi.png",
	"chapter3-11-event-01-obj-01":  "./image/production/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-obj-01.jpg",
	"chapter3-11-event-01-obj-02":  "./image/production/chapter3/event/chapter3-11-event-01/chapter3-11-event-01-obj-02.png",
	
	// 3-12 フランあいさつ
	"chapter3-12-event-01-koishi":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-koishi.png",
	"chapter3-12-event-01-fran":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-fran.png",
	"chapter3-12-event-01-obj-01":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-01.png",
	"chapter3-12-event-01-obj-02":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-02.png",
	"chapter3-12-event-01-obj-03":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-obj-03.png",
	"chapter3-12-event-01-bg-001":  "./image/production/chapter3/event/chapter3-12-event-01/chapter3-12-event-01-bg-001.jpg",
    
	// 3-13-1 これがいいアイデアなの？
	"chapter3-13-event-01-koishi":  "./image/production/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-koishi.png",
	"chapter3-13-event-01-fran":  "./image/production/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-fran.png",
	"chapter3-13-event-01-cirno":  "./image/production/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-cirno.png",
	"chapter3-13-event-01-bg-001":  "./image/production/chapter3/event/chapter3-13-event-01/chapter3-13-event-01-bg-001.jpg",
    
	// 3-13-3 チルノの首がはねられている？
	"chapter3-13-event-03-koishi":  "./image/production/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-koishi.png",
	"chapter3-13-event-03-cirno":  "./image/production/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-cirno.png",
	"chapter3-13-event-03-fran":  "./image/production/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-fran.png",
	"chapter3-13-event-03-obj-01":  "./image/production/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-obj-01.png",
	"chapter3-13-event-03-bg-001":  "./image/production/chapter3/event/chapter3-13-event-03/chapter3-13-event-03-bg-001.jpg",

	// 3-13-4 チルノの首がはねられている？
	"chapter3-13-event-04-koishi":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-koishi.png",
	"chapter3-13-event-04-cirno":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-cirno.png",
	"chapter3-13-event-04-fran":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-fran.png",
	"chapter3-13-event-04-obj-01":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-obj-01.png",
	"chapter3-13-event-04-obj-02":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-obj-02.png",
	"chapter3-13-event-04-bg-001":  "./image/production/chapter3/event/chapter3-13-event-04/chapter3-13-event-04-bg-001.jpg",

	// 4-00-1 こいしが目を覚ます。
	"chapter4-00-event-01-koishi":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-koishi.png",
	"chapter4-00-event-01-satori":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-satori.png",
	"chapter4-00-event-01-obj-01":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-obj-01.png",
	"chapter4-00-event-01-bg-001":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-001.jpg",
	"chapter4-00-event-01-bg-002":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-002.png",
	"chapter4-00-event-01-bg-003":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-003.png",
	"chapter4-00-event-01-bg-004":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-004.png",
	"chapter4-00-event-01-bg-005":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-005.png",
	"chapter4-00-event-01-bg-006":  "./image/production/chapter4/event/chapter4-00-event-01/chapter4-00-event-01-bg-006.png",

	// 4-02-1 こいしが目を覚ます。
	"chapter4-02-event-01-merry":  "./image/production/chapter4/event/chapter4-02-event-01/chapter4-02-event-01-merry.png",
	"chapter4-02-event-01-bg-001":  "./image/production/chapter4/event/chapter4-02-event-01/chapter4-02-event-01-bg-001.jpg",
    
	// 4-07-1 テープ「チャルメラ」再生
	"chapter4-07-event-01-koishi":  "./image/production/chapter4/event/chapter4-07-event-01/chapter4-07-event-01-koishi.png",
	"chapter4-07-event-01-merry":  "./image/production/chapter4/event/chapter4-07-event-01/chapter4-07-event-01-merry.png",
	"chapter4-07-event-01-renko":  "./image/production/chapter4/event/chapter4-07-event-01/chapter4-07-event-01-renko.png",
	"chapter4-07-event-01-cassette-player":  "./image/production/chapter4/event/chapter4-07-event-01/chapter4-07-event-01-cassette-player.png",
	"chapter4-07-event-01-bg-001":  "./image/production/chapter4/event/chapter4-07-event-01/chapter4-07-event-01-bg-001.jpg",
    
	// 4-19-1 
	"chapter4-19-event-01-bg-001":  "./image/production/chapter4/event/chapter4-19-event-01/chapter4-19-event-01-bg-001.jpg",
	"chapter4-19-event-01-obj-01":  "./image/production/chapter4/event/chapter4-19-event-01/chapter4-19-event-01-obj-01.png",
	"chapter4-19-event-01-koishi":  "./image/production/chapter4/event/chapter4-19-event-01/chapter4-19-event-01-koishi.png",
	"chapter4-19-event-01-reisen":  "./image/production/chapter4/event/chapter4-19-event-01/chapter4-19-event-01-reisen.png",
	"chapter4-19-event-01-reisen2":  "./image/production/chapter4/event/chapter4-19-event-01/chapter4-19-event-01-reisen2.png",
    
	// 4-20-1 わたしわかったのよ！。
	"chapter4-20-event-01-bg-001":  "./image/production/chapter4/event/chapter4-20-event-01/chapter4-20-event-01-bg-001.jpg",
	"chapter4-20-event-01-koishi":  "./image/production/chapter4/event/chapter4-20-event-01/chapter4-20-event-01-koishi.png",
	"chapter4-20-event-01-merry":  "./image/production/chapter4/event/chapter4-20-event-01/chapter4-20-event-01-merry.png",
	"chapter4-20-event-01-renko":  "./image/production/chapter4/event/chapter4-20-event-01/chapter4-20-event-01-renko.png",
    
	// 4-24-1 
	"chapter4-24-event-01-bg-001":  "./image/production/chapter4/event/chapter4-24-event-01/chapter4-24-event-01-bg-001.jpg",
	"chapter4-24-event-01-cassette-player":  "./image/production/chapter4/event/chapter4-24-event-01/chapter4-24-event-01-cassette-player.png",
	"chapter4-24-event-01-koishi":  "./image/production/chapter4/event/chapter4-24-event-01/chapter4-24-event-01-koishi.png",
	"chapter4-24-event-01-merry":  "./image/production/chapter4/event/chapter4-24-event-01/chapter4-24-event-01-merry.png",
	"chapter4-24-event-01-renko":  "./image/production/chapter4/event/chapter4-24-event-01/chapter4-24-event-01-renko.png",
    
	// 4-29-1 
	"chapter4-29-event-01-bg-001":  "./image/production/chapter4/event/chapter4-29-event-01/chapter4-29-event-01-bg-001.png",
	"chapter4-29-event-01-koishi":  "./image/production/chapter4/event/chapter4-29-event-01/chapter4-29-event-01-koishi.png",
	"chapter4-29-event-01-merry":  "./image/production/chapter4/event/chapter4-29-event-01/chapter4-29-event-01-merry.png",
	"chapter4-29-event-01-renko":  "./image/production/chapter4/event/chapter4-29-event-01/chapter4-29-event-01-renko.png",
    
	// 4-29-2 
	"chapter4-29-event-02-bg-001":  "./image/production/chapter4/event/chapter4-29-event-02/chapter4-29-event-02-bg-001.png",
	"chapter4-29-event-02-koishi":  "./image/production/chapter4/event/chapter4-29-event-02/chapter4-29-event-02-koishi.png",
	"chapter4-29-event-02-merry":  "./image/production/chapter4/event/chapter4-29-event-02/chapter4-29-event-02-merry.png",
	"chapter4-29-event-02-renko":  "./image/production/chapter4/event/chapter4-29-event-02/chapter4-29-event-02-renko.png",
    
	// 4-39-1 
	"chapter4-39-event-01-bg-001":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-bg-001.jpg",
	"chapter4-39-event-01-bg-002":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-bg-002.jpg",
	"chapter4-39-event-01-bg-003":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-bg-003.jpg",
	"chapter4-39-event-01-bg-004":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-bg-004.jpg",
	"chapter4-39-event-01-koishi":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-koishi.png",
	"chapter4-39-event-01-obj1":  "./image/production/chapter4/event/chapter4-39-event-01/chapter4-39-event-01-obj1.png",
    
	// chapter4-switch スイッチハズレ※背景無し
	"chapter4-switch-event-01-koishi":  "./image/production/chapter4/event/chapter4-switch-event-01/chapter4-switch-event-01-koishi.png",
	"chapter4-switch-event-01-merry":  "./image/production/chapter4/event/chapter4-switch-event-01/chapter4-switch-event-01-merry.png",
	"chapter4-switch-event-01-renko":  "./image/production/chapter4/event/chapter4-switch-event-01/chapter4-switch-event-01-renko.png",

	// 5-1-1
	"chapter5-01-event-01-bg-001":  "./image/production/chapter5/event/chapter5-01-event-01/chapter5-01-event-01-bg-001.jpg",
	"chapter5-01-event-01-koishi":  "./image/production/chapter5/event/chapter5-01-event-01/chapter5-01-event-01-koishi.png",
	"chapter5-01-event-01-satori":  "./image/production/chapter5/event/chapter5-01-event-01/chapter5-01-event-01-satori.png",
	"chapter5-01-event-01-obj-01":  "./image/production/chapter5/event/chapter5-01-event-01/chapter5-01-event-01-obj-01.png",
    
	// 5-3-1
	"chapter5-03-event-01-koishi":  "./image/production/chapter5/event/chapter5-03-event-01/chapter5-03-event-01-koishi.png",
	"chapter5-03-event-01-animal-shiba":  "./image/production/chapter5/event/chapter5-03-event-01/chapter5-03-event-01-koishi.png",
    
	// 5-7-1
	"chapter5-07-event-01-koishi":  "./image/production/chapter5/event/chapter5-07-event-01/chapter5-07-event-01-koishi.png",
    
	// 5-9-1
	"chapter5-09-event-01-bg-001":  "./image/production/chapter5/event/chapter5-09-event-01/chapter5-09-event-01-bg-001.jpg",
	"chapter5-09-event-01-koishi":  "./image/production/chapter5/event/chapter5-09-event-01/chapter5-09-event-01-koishi.png",
	"chapter5-09-event-01-orin":  "./image/production/chapter5/event/chapter5-09-event-01/chapter5-09-event-01-orin.png",
	"chapter5-09-event-01-oku1":  "./image/production/chapter5/event/chapter5-09-event-01/chapter5-09-event-01-oku1.png",
    
	// 5-9-2
	"chapter5-09-event-02-bg-001":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-bg-001.jpg",
	"chapter5-09-event-02-bg-002":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-bg-002.jpg",
	"chapter5-09-event-02-koishi":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-koishi.png",
	"chapter5-09-event-02-orin":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-orin.png",
	"chapter5-09-event-02-oku1":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-oku1.png",
	"chapter5-09-event-02-oku2":  "./image/production/chapter5/event/chapter5-09-event-02/chapter5-09-event-02-oku2.png",
    
	// 5-9-3
	"chapter5-09-event-03-bg-001":  "./image/production/chapter5/event/chapter5-09-event-03/chapter5-09-event-03-bg-001.jpg",
	"chapter5-09-event-03-koishi":  "./image/production/chapter5/event/chapter5-09-event-03/chapter5-09-event-03-koishi.png",
	"chapter5-09-event-03-tree":  "./image/production/chapter5/event/chapter5-09-event-03/chapter5-09-event-03-tree.png",
    
	// 6-4-1
	"chapter6-04-event-01-bg-001":  "./image/production/chapter6/event/chapter6-04-event-01/chapter6-04-event-01-bg-001.jpg",
	"chapter6-04-event-01-bm":  "./image/production/chapter6/event/chapter6-04-event-01/chapter6-04-event-01-bm.png",
	"chapter6-04-event-01-koishi":  "./image/production/chapter6/event/chapter6-04-event-01/chapter6-04-event-01-koishi.png",
    
	// 6-12-1
	"chapter6-12-event-01-bg-001":  "./image/production/chapter6/event/chapter6-12-event-01/chapter6-12-event-01-bg-001.jpg",
	"chapter6-12-event-01":  "./image/production/chapter6/event/chapter6-12-event-01/chapter6-12-event-01.png",
	"chapter6-12-event-01-bm":  "./image/production/chapter6/event/chapter6-12-event-01/chapter6-12-event-01-bm.png",
	"chapter6-12-event-01-koishi":  "./image/production/chapter6/event/chapter6-12-event-01/chapter6-12-event-01-koishi.png",
 
	// 6 共通 黒子
	"chapter6-common-event-01":  "./image/production/chapter6/event/chapter6-common-event-01/chapter6-common-event-01.jpg",

	// chapter6-event-ending01-2
	"chapter6-event-ending01-2-obj-01":  "./image/production/chapter6/event/chapter6-event-ending01-2/chapter6-event-ending01-2-obj-01.png",
	"chapter6-event-ending01-2-koishi":  "./image/production/chapter6/event/chapter6-event-ending01-2/chapter6-event-ending01-2-koishi.png",
	"chapter6-event-ending01-2-satori":  "./image/production/chapter6/event/chapter6-event-ending01-2/chapter6-event-ending01-2-satori.png",
    
	// chapter6-event-ending02-1
	"chapter6-event-ending02-1-obj-01":  "./image/production/chapter6/event/chapter6-event-ending02-1/chapter6-event-ending02-1-obj-01.png",
	"chapter6-event-ending02-1-obj-02":  "./image/production/chapter6/event/chapter6-event-ending02-1/chapter6-event-ending02-1-obj-02.png",
	"chapter6-event-ending02-1-koishi":  "./image/production/chapter6/event/chapter6-event-ending02-1/chapter6-event-ending02-1-koishi.png",
    
	// chapter6-event-ending02-2
	"chapter6-event-ending02-2-bg-001":  "./image/production/chapter6/event/chapter6-event-ending02-2/chapter6-event-ending02-2-bg-001.jpg",
	"chapter6-event-ending02-2-obj-01":  "./image/production/chapter6/event/chapter6-event-ending02-2/chapter6-event-ending02-2-obj-01.png",
	"chapter6-event-ending02-2-koishi":  "./image/production/chapter6/event/chapter6-event-ending02-2/chapter6-event-ending02-2-koishi.png",
	"chapter6-event-ending02-2-satori":  "./image/production/chapter6/event/chapter6-event-ending02-2/chapter6-event-ending02-2-satori.png",
    
	// chapter6-event-ending03-1
	"chapter6-event-ending03-1-obj-01":  "./image/production/chapter6/event/chapter6-event-ending03-1/chapter6-event-ending03-1-obj-01.png",
	"chapter6-event-ending03-1-obj-02":  "./image/production/chapter6/event/chapter6-event-ending03-1/chapter6-event-ending03-1-obj-02.png",
	"chapter6-event-ending03-1-koishi":  "./image/production/chapter6/event/chapter6-event-ending03-1/chapter6-event-ending03-1-koishi.png",
    
	// chapter6-event-ending03-2
	"chapter6-event-ending03-2-bg-001":  "./image/production/chapter6/event/chapter6-event-ending03-2/chapter6-event-ending03-2-bg-001.jpg",
	"chapter6-event-ending03-2-koishi":  "./image/production/chapter6/event/chapter6-event-ending03-2/chapter6-event-ending03-2-koishi.png",
    
    
	// ジャーナル画像(日本語)
	"journal016_ja":  "./image/production/journal/ja/016.png",
	"journal017_ja":  "./image/production/journal/ja/017.png",
	"journal018_ja":  "./image/production/journal/ja/018.png",
	"journal019_ja":  "./image/production/journal/ja/019.png",
	"journal020_ja":  "./image/production/journal/ja/020.png",
	"journal021_ja":  "./image/production/journal/ja/021.png",
	"journal022_ja":  "./image/production/journal/ja/022.png",
	"journal023_ja":  "./image/production/journal/ja/023.png",
	"journal024_ja":  "./image/production/journal/ja/024.png",
	"journal025_ja":  "./image/production/journal/ja/025.png",
	"journal026_ja":  "./image/production/journal/ja/026.png",
	"journal027_ja":  "./image/production/journal/ja/027.png",
	"journal028_ja":  "./image/production/journal/ja/028.png",
	"journal029_ja":  "./image/production/journal/ja/029.png",
	"journal030_ja":  "./image/production/journal/ja/030.png",
	"journal031_ja":  "./image/production/journal/ja/031.png",
	"journal032_ja":  "./image/production/journal/ja/032.png",
	"journal033_ja":  "./image/production/journal/ja/033.png",
	"journal034_ja":  "./image/production/journal/ja/034.png",
	"journal035_ja":  "./image/production/journal/ja/035.png",
	"journal036_ja":  "./image/production/journal/ja/036.png",
	"journal037_ja":  "./image/production/journal/ja/037.png",
	"journal038_ja":  "./image/production/journal/ja/038.png",
	"journal039_ja":  "./image/production/journal/ja/039.png",
	"journal040_ja":  "./image/production/journal/ja/040.png",
	"journal041_ja":  "./image/production/journal/ja/041.png",

	// ジャーナル画像(英語)
	"journal016_en":  "./image/production/journal/en/016.png",
	"journal017_en":  "./image/production/journal/en/017.png",
	"journal018_en":  "./image/production/journal/en/018.png",
	"journal019_en":  "./image/production/journal/en/019.png",
	"journal020_en":  "./image/production/journal/en/020.png",
	"journal021_en":  "./image/production/journal/en/021.png",
	"journal022_en":  "./image/production/journal/en/022.png",
	"journal023_en":  "./image/production/journal/en/023.png",
	"journal024_en":  "./image/production/journal/en/024.png",
	"journal025_en":  "./image/production/journal/en/025.png",
	"journal026_en":  "./image/production/journal/en/026.png",
	"journal027_en":  "./image/production/journal/en/027.png",
	"journal028_en":  "./image/production/journal/en/028.png",
	"journal029_en":  "./image/production/journal/en/029.png",
	"journal030_en":  "./image/production/journal/en/030.png",
	"journal031_en":  "./image/production/journal/en/031.png",
	"journal032_en":  "./image/production/journal/en/032.png",
	"journal033_en":  "./image/production/journal/en/033.png",
	"journal034_en":  "./image/production/journal/en/034.png",
	"journal035_en":  "./image/production/journal/en/035.png",
	"journal036_en":  "./image/production/journal/en/036.png",
	"journal037_en":  "./image/production/journal/en/037.png",
	"journal038_en":  "./image/production/journal/en/038.png",
	"journal039_en":  "./image/production/journal/en/039.png",
	"journal040_en":  "./image/production/journal/en/040.png",
	"journal041_en":  "./image/production/journal/en/041.png",

	// ジャーナル画像(簡体字)
	"journal016_ch":  "./image/production/journal/ch/016.png",
	"journal017_ch":  "./image/production/journal/ch/017.png",
	"journal018_ch":  "./image/production/journal/ch/018.png",
	"journal019_ch":  "./image/production/journal/ch/019.png",
	"journal020_ch":  "./image/production/journal/ch/020.png",
	"journal021_ch":  "./image/production/journal/ch/021.png",
	"journal022_ch":  "./image/production/journal/ch/022.png",
	"journal023_ch":  "./image/production/journal/ch/023.png",
	"journal024_ch":  "./image/production/journal/ch/024.png",
	"journal025_ch":  "./image/production/journal/ch/025.png",
	"journal026_ch":  "./image/production/journal/ch/026.png",
	"journal027_ch":  "./image/production/journal/ch/027.png",
	"journal028_ch":  "./image/production/journal/ch/028.png",
	"journal029_ch":  "./image/production/journal/ch/029.png",
	"journal030_ch":  "./image/production/journal/ch/030.png",
	"journal031_ch":  "./image/production/journal/ch/031.png",
	"journal032_ch":  "./image/production/journal/ch/032.png",
	"journal033_ch":  "./image/production/journal/ch/033.png",
	"journal034_ch":  "./image/production/journal/ch/034.png",
	"journal035_ch":  "./image/production/journal/ch/035.png",
	"journal036_ch":  "./image/production/journal/ch/036.png",
	"journal037_ch":  "./image/production/journal/ch/037.png",
	"journal038_ch":  "./image/production/journal/ch/038.png",
	"journal039_ch":  "./image/production/journal/ch/039.png",
	"journal040_ch":  "./image/production/journal/ch/040.png",
	"journal041_ch":  "./image/production/journal/ch/041.png",

	// ジャーナル画像(繁体字)
	"journal016_tw":  "./image/production/journal/tw/016.png",
	"journal017_tw":  "./image/production/journal/tw/017.png",
	"journal018_tw":  "./image/production/journal/tw/018.png",
	"journal019_tw":  "./image/production/journal/tw/019.png",
	"journal020_tw":  "./image/production/journal/tw/020.png",
	"journal021_tw":  "./image/production/journal/tw/021.png",
	"journal022_tw":  "./image/production/journal/tw/022.png",
	"journal023_tw":  "./image/production/journal/tw/023.png",
	"journal024_tw":  "./image/production/journal/tw/024.png",
	"journal025_tw":  "./image/production/journal/tw/025.png",
	"journal026_tw":  "./image/production/journal/tw/026.png",
	"journal027_tw":  "./image/production/journal/tw/027.png",
	"journal028_tw":  "./image/production/journal/tw/028.png",
	"journal029_tw":  "./image/production/journal/tw/029.png",
	"journal030_tw":  "./image/production/journal/tw/030.png",
	"journal031_tw":  "./image/production/journal/tw/031.png",
	"journal032_tw":  "./image/production/journal/tw/032.png",
	"journal033_tw":  "./image/production/journal/tw/033.png",
	"journal034_tw":  "./image/production/journal/tw/034.png",
	"journal035_tw":  "./image/production/journal/tw/035.png",
	"journal036_tw":  "./image/production/journal/tw/036.png",
	"journal037_tw":  "./image/production/journal/tw/037.png",
	"journal038_tw":  "./image/production/journal/tw/038.png",
	"journal039_tw":  "./image/production/journal/tw/039.png",
	"journal040_tw":  "./image/production/journal/tw/040.png",
	"journal041_tw":  "./image/production/journal/tw/041.png",

	//
	// フィールドの画像とオブジェクト
	//

	// chapter3

	"chapter3-myroom-obj-05-01": "./image/production/chapter3/myroom/chapter3-myroom-obj-05-01.png",
	"chapter3-06-bg-001": "./image/production/chapter3/chapter3-06/chapter3-06-bg-001.jpg",
	"chapter3-mspassage-obj-01": "./image/production/chapter3/chapter3-06/chapter3-mspassage-obj-01.png",
	
	"chapter3-07-bg-001": "./image/production/chapter3/chapter3-07/chapter3-07-bg-001.jpg",
	"chapter3-07-obj-01": "./image/production/chapter3/chapter3-07/chapter3-07-obj-01.png",
	"chapter3-07-obj-02": "./image/production/chapter3/chapter3-07/chapter3-07-obj-02.png",
	"chapter3-07-obj-03": "./image/production/chapter3/chapter3-07/chapter3-07-obj-03.png",
	"chapter3-07-obj-04": "./image/production/chapter3/chapter3-07/chapter3-07-obj-04.png",
	"chapter3-07-obj-05": "./image/production/chapter3/chapter3-07/chapter3-07-obj-05.png",
	
	"chapter3-08-bg-001": "./image/production/chapter3/chapter3-08/chapter3-08-bg-001.jpg",
	"chapter3-08-obj-01": "./image/production/chapter3/chapter3-08/chapter3-08-obj-01.png",
	"chapter3-08-obj-02": "./image/production/chapter3/chapter3-08/chapter3-08-obj-02.png",
	"chapter3-08-obj-03": "./image/production/chapter3/chapter3-08/chapter3-08-obj-03.png",
	
	"chapter3-09-bg-001": "./image/production/chapter3/chapter3-09/chapter3-09-bg-001.jpg",
	"chapter3-09-obj-01": "./image/production/chapter3/chapter3-09/chapter3-09-obj-01.png",
	"chapter3-09-obj-01-1": "./image/production/chapter3/chapter3-09/chapter3-09-obj-01-1.png",
	"chapter3-09-obj-02": "./image/production/chapter3/chapter3-09/chapter3-09-obj-02.png",
	"chapter3-09-obj-03": "./image/production/chapter3/chapter3-09/chapter3-09-obj-03.png",
	"chapter3-09-obj-04": "./image/production/chapter3/chapter3-09/chapter3-09-obj-04.png",
	"chapter3-09-obj-05": "./image/production/chapter3/chapter3-09/chapter3-09-obj-05.png",
	"chapter3-09-obj-06": "./image/production/chapter3/chapter3-09/chapter3-09-obj-06.png",
	
	"chapter3-10-bg-001": "./image/production/chapter3/chapter3-10/chapter3-10-bg-001.jpg",
	"chapter3-10-obj-01": "./image/production/chapter3/chapter3-10/chapter3-10-obj-01.png",
	"chapter3-10-obj-02-back": "./image/production/chapter3/chapter3-10/chapter3-10-obj-02-back.png",
	"chapter3-10-obj-02-front": "./image/production/chapter3/chapter3-10/chapter3-10-obj-02-front.png",
	
	"chapter3-11-bg-001": "./image/production/chapter3/chapter3-11/chapter3-11-bg-001.jpg",
	"chapter3-11-obj-01": "./image/production/chapter3/chapter3-11/chapter3-11-obj-01.png",
	"chapter3-11-obj-02": "./image/production/chapter3/chapter3-11/chapter3-11-obj-02.png",
	"chapter3-11-obj-03": "./image/production/chapter3/chapter3-11/chapter3-11-obj-03.png",
	"chapter3-11-obj-04": "./image/production/chapter3/chapter3-11/chapter3-11-obj-04.png",
	"chapter3-11-obj-05": "./image/production/chapter3/chapter3-11/chapter3-11-obj-05.png",
	"chapter3-11-obj-06": "./image/production/chapter3/chapter3-11/chapter3-11-obj-06.png",
	
	"chapter3-12-bg-001": "./image/production/chapter3/chapter3-12/chapter3-12-bg-001.jpg",
	"chapter3-12-obj-01": "./image/production/chapter3/chapter3-12/chapter3-12-obj-01.png",
	"chapter3-12-obj-02": "./image/production/chapter3/chapter3-12/chapter3-12-obj-02.png",
	"chapter3-12-obj-03": "./image/production/chapter3/chapter3-12/chapter3-12-obj-03.png",
	"chapter3-12-obj-04": "./image/production/chapter3/chapter3-12/chapter3-12-obj-04.png",
	
	"chapter3-13-bg-001": "./image/production/chapter3/chapter3-13/chapter3-13-bg-001.jpg",
	"chapter3-13-obj-01": "./image/production/chapter3/chapter3-13/chapter3-13-obj-01.png",
	"chapter3-13-obj-02": "./image/production/chapter3/chapter3-13/chapter3-13-obj-02.png",
	"chapter3-13-obj-03": "./image/production/chapter3/chapter3-13/chapter3-13-obj-03.png",
	"chapter3-13-obj-04": "./image/production/chapter3/chapter3-13/chapter3-13-obj-04.png",
	"chapter3-13-obj-05": "./image/production/chapter3/chapter3-13/chapter3-13-obj-05.png",
    
	// chapter4
	"chapter4-01-bg-001": "./image/production/chapter4/chapter4-01/chapter4-01-bg-001.png",
	"chapter4-02-bg-001": "./image/production/chapter4/chapter4-02/chapter4-02-bg-001.png",
	"chapter4-03-bg-001": "./image/production/chapter4/chapter4-03/chapter4-03-bg-001.png",
	"chapter4-04-bg-001": "./image/production/chapter4/chapter4-04/chapter4-04-bg-001.png",
	"chapter4-05-bg-001": "./image/production/chapter4/chapter4-05/chapter4-05-bg-001.png",
	"chapter4-06-bg-001": "./image/production/chapter4/chapter4-06/chapter4-06-bg-001.png",
	"chapter4-07-bg-001": "./image/production/chapter4/chapter4-07/chapter4-07-bg-001.png",
	"chapter4-08-bg-001": "./image/production/chapter4/chapter4-08/chapter4-08-bg-001.png",
	"chapter4-09-bg-001": "./image/production/chapter4/chapter4-09/chapter4-09-bg-001.png",
	"chapter4-19-bg-001": "./image/production/chapter4/chapter4-19/chapter4-19-bg-001.png",
	"chapter4-20-bg-001": "./image/production/chapter4/chapter4-20/chapter4-20-bg-001.png",
	"chapter4-21-bg-001": "./image/production/chapter4/chapter4-21/chapter4-21-bg-001.png",
	"chapter4-22-bg-001": "./image/production/chapter4/chapter4-22/chapter4-22-bg-001.png",
	"chapter4-23-bg-001": "./image/production/chapter4/chapter4-23/chapter4-23-bg-001.png",
	"chapter4-24-bg-001": "./image/production/chapter4/chapter4-24/chapter4-24-bg-001.png",
	"chapter4-25-bg-001": "./image/production/chapter4/chapter4-25/chapter4-25-bg-001.png",
	"chapter4-26-bg-001": "./image/production/chapter4/chapter4-26/chapter4-26-bg-001.png",
	"chapter4-27-bg-001": "./image/production/chapter4/chapter4-27/chapter4-27-bg-001.png",
	"chapter4-28-bg-001": "./image/production/chapter4/chapter4-28/chapter4-28-bg-001.png",
	"chapter4-29-bg-001": "./image/production/chapter4/chapter4-29/chapter4-29-bg-001.png",
	"chapter4-30-bg-001": "./image/production/chapter4/chapter4-30/chapter4-30-bg-001.png",
	"chapter4-31-bg-001": "./image/production/chapter4/chapter4-31/chapter4-31-bg-001.png",
	"chapter4-32-bg-001": "./image/production/chapter4/chapter4-32/chapter4-32-bg-001.png",
	"chapter4-33-bg-001": "./image/production/chapter4/chapter4-33/chapter4-33-bg-001.png",
	"chapter4-34-bg-001": "./image/production/chapter4/chapter4-34/chapter4-34-bg-001.png",
	"chapter4-35-bg-001": "./image/production/chapter4/chapter4-35/chapter4-35-bg-001.png",
	"chapter4-36-bg-001": "./image/production/chapter4/chapter4-36/chapter4-36-bg-001.png",
	"chapter4-37-bg-001": "./image/production/chapter4/chapter4-37/chapter4-37-bg-001.png",
	"chapter4-38-bg-001": "./image/production/chapter4/chapter4-38/chapter4-38-bg-001.png",
	"chapter4-39-bg-001": "./image/production/chapter4/chapter4-39/chapter4-39-bg-001.png",
	"chapter4-40-bg-001": "./image/production/chapter4/chapter4-40/chapter4-40-bg-001.png",
	"chapter4-41-bg-001": "./image/production/chapter4/chapter4-41/chapter4-41-bg-001.png",
	"chapter4-42-bg-001": "./image/production/chapter4/chapter4-42/chapter4-42-bg-001.png",
	"chapter4-43-bg-001": "./image/production/chapter4/chapter4-43/chapter4-43-bg-001.png",

	"chapter4-20-obj-01": "./image/production/chapter4/chapter4-20/chapter4-20-obj-01.png",
	"chapter4-25-obj-01": "./image/production/chapter4/chapter4-25/chapter4-25-obj-01.png",

	// chapter5
	"chapter5-02-bg-001": "./image/production/chapter5/chapter5-02/chapter5-02-bg-001.jpg",
	"chapter5-03-bg-001": "./image/production/chapter5/chapter5-03/chapter5-03-bg-001.png",
	"chapter5-04-bg-001": "./image/production/chapter5/chapter5-04/chapter5-04-bg-001.png",
	"chapter5-05-bg-001": "./image/production/chapter5/chapter5-05/chapter5-05-bg-001.png",
	"chapter5-06-bg-001": "./image/production/chapter5/chapter5-06/chapter5-06-bg-001.png",
	"chapter5-07-bg-001": "./image/production/chapter5/chapter5-07/chapter5-07-bg-001.png",
	"chapter5-08-bg-001": "./image/production/chapter5/chapter5-08/chapter5-08-bg-001.png",
	"chapter5-09-bg-001": "./image/production/chapter5/chapter5-09/chapter5-09-bg-001.jpg",
	"chapter5-10-bg-001": "./image/production/chapter5/chapter5-10/chapter5-10-bg-001.png",
	"chapter5-11-bg-001": "./image/production/chapter5/chapter5-11/chapter5-11-bg-001.png",
	"chapter5-12-bg-001": "./image/production/chapter5/chapter5-12/chapter5-12-bg-001.jpg",
	"chapter5-12-obj-01": "./image/production/chapter5/chapter5-12/chapter5-12-obj-01.png",
	"chapter5-13-bg-001": "./image/production/chapter5/chapter5-13/chapter5-13-bg-001.png",

	"chapter5-02-obj-01": "./image/production/chapter5/chapter5-02/chapter5-02-obj-01.png",
	"chapter5-02-obj-02": "./image/production/chapter5/chapter5-02/chapter5-02-obj-02.png",
	"chapter5-03-obj-01": "./image/production/chapter5/chapter5-03/chapter5-03-obj-01.png",
	"chapter5-05-obj-01": "./image/production/chapter5/chapter5-05/chapter5-05-obj-01.png",
	"chapter5-07-obj-01": "./image/production/chapter5/chapter5-07/chapter5-07-obj-01.png",
	"chapter5-14-obj-01": "./image/production/chapter5/chapter5-14/chapter5-14-obj-01.png",

	"chapter6-01-obj-01": "./image/production/chapter6/chapter6-01/chapter6-01-obj-01.png",
	"chapter6-01-obj-bm": "./image/production/chapter6/chapter6-01/chapter6-01-obj-bm.png",
	"chapter6-04-bg-001": "./image/production/chapter6/chapter6-04/chapter6-04-bg-001.jpg",
	"chapter6-06-bg-001": "./image/production/chapter6/chapter6-06/chapter6-06-bg-001.png",
	"chapter6-06-bg-002": "./image/production/chapter6/chapter6-06/chapter6-06-bg-002.png",
	"chapter6-06-obj-01": "./image/production/chapter6/chapter6-06/chapter6-06-obj-01.png",
	"chapter6-07-bg-001": "./image/production/chapter6/chapter6-07/chapter6-07-bg-001.jpg",
	"chapter6-07-obj01": "./image/production/chapter6/chapter6-07/chapter6-07-obj01.png",
	"chapter6-10-bg-001": "./image/production/chapter6/chapter6-10/chapter6-10-bg-001.jpg",
	"chapter6-10-obj01": "./image/production/chapter6/chapter6-10/chapter6-10-obj01.png",
	"chapter6-10-obj02": "./image/production/chapter6/chapter6-10/chapter6-10-obj02.png",
	"chapter6-10-obj03": "./image/production/chapter6/chapter6-10/chapter6-10-obj03.png",
	"chapter6-12-bg-001": "./image/production/chapter6/chapter6-12/chapter6-12-bg-001.jpg",
	"chapter6-12-obj-01": "./image/production/chapter6/chapter6-12/chapter6-12-obj-01.png",
	"chapter6-12-obj-02": "./image/production/chapter6/chapter6-12/chapter6-12-obj-02.png",
	"chapter6-12-obj-03": "./image/production/chapter6/chapter6-12/chapter6-12-obj-03.png",

	// アイテム 目薬
	"item_13":            "./image/production/item/icon_item_cp3_sho.png",
	"item_14":            "./image/production/item/icon_item_cp3_jyo.png",
	"item_15":            "./image/production/item/icon_item_cp3_zen.png",
	"item_16":            "./image/production/item/icon_item_cp3_sap.png",
	"item_17":            "./image/production/item/icon_item_cp3_rub.png",
	"item_18":            "./image/production/item/icon_item_cp3_ax.png",
	"item_19":            "./image/production/item/icon_item_cp3_orn.png",
	"item_20":            "./image/production/item/icon_item_cp3_cir.png",
	"item_22":            "./image/production/item/icon_item_cp4_player.png",
	"item_23":            "./image/production/item/icon_item_cp4_tape.png",
	"item_32":            "./image/production/item/icon_item_cp5_eye.png",
	"item_33":            "./image/production/item/icon_item_cp5_key.png",
	"item_36":            "./image/production/item/icon_item_cp6_scissors.png",

	// 1枚絵
	"picture_chapter3-08-illust-01":   "./image/production/picture/chapter3-08-illust-01.png",
};

AssetsConfig.sounds = {
	"chapter3-myroom-getup_koishi01":    {
		path: "./sound/production/chapter3/event/getup_koishi/01.ogg",
		volume: 1.0,
	},
	"chapter3-myroom-getup_koishi02": {
		path: "./sound/production/chapter3/event/getup_koishi/02.ogg",
		volume: 1.0,
	},
	"chapter3-myroom-getup_koishi03": {
		path: "./sound/production/chapter3/event/getup_koishi/03.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-01":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-02/01.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-02":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-02/02.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-03":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-02/03.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-02-04":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-02/04.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-03-01":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-03/01.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-04-01":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-04/01.ogg",
		volume: 1.0,
	},
	"chapter3-08-event-04-02":    {
		path: "./sound/production/chapter3/event/chapter3-08-event-04/02.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-01":    {
		path: "./sound/production/chapter3/event/chapter3-09-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-02":    {
		path: "./sound/production/chapter3/event/chapter3-09-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-03":    {
		path: "./sound/production/chapter3/event/chapter3-09-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-04":    {
		path: "./sound/production/chapter3/event/chapter3-09-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter3-09-event-01-05":    {
		path: "./sound/production/chapter3/event/chapter3-09-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter3-11-event-01-01":    {
		path: "./sound/production/chapter3/event/chapter3-11-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter3-11-event-01-02":    {
		path: "./sound/production/chapter3/event/chapter3-11-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-03-01":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-03/01.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-03-02":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-03/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-01":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/01.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-02":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/02.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-03":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/03.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-04":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/04.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-05":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/05.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-06":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/06.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-07":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/07.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-08":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/08.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-09":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/09.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-10":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/10.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-11":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/11.ogg",
		volume: 1.0,
	},
	"chapter3-13-event-04-12":    {
		path: "./sound/production/chapter3/event/chapter3-13-event-04/12.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-01":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-02":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-03":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-04":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-05":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-06":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/06.ogg",
		volume: 1.0,
	},
	"chapter4-00-event-01-07":    {
		path: "./sound/production/chapter4/event/chapter4-00-event-01/07.ogg",
		volume: 1.0,
	},
	"chapter4-02-event-01-01":    {
		path: "./sound/production/chapter4/event/chapter4-02-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter4-02-event-01-02":    {
		path: "./sound/production/chapter4/event/chapter4-02-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter4-02-event-01-03":    {
		path: "./sound/production/chapter4/event/chapter4-02-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter4-02-event-01-04":    {
		path: "./sound/production/chapter4/event/chapter4-02-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter4-02-event-01-05":    {
		path: "./sound/production/chapter4/event/chapter4-02-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter4-19-event-01-01":    {
		path: "./sound/production/chapter4/event/chapter4-19-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter4-19-event-01-02":    {
		path: "./sound/production/chapter4/event/chapter4-19-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter4-19-event-01-03":    {
		path: "./sound/production/chapter4/event/chapter4-19-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter4-19-event-01-04":    {
		path: "./sound/production/chapter4/event/chapter4-19-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter4-19-event-01-05":    {
		path: "./sound/production/chapter4/event/chapter4-19-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-01":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-02":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-03":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-04":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-05":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-06":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/06.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-07":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/07.ogg",
		volume: 1.0,
	},
	"chapter4-24-event-01-08":    {
		path: "./sound/production/chapter4/event/chapter4-24-event-01/08.ogg",
		volume: 1.0,
	},
	"chapter4-39-event-01-01":    {
		path: "./sound/production/chapter4/event/chapter4-39-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter4-39-event-01-02":    {
		path: "./sound/production/chapter4/event/chapter4-39-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter5-03-event-01-01":    {
		path: "./sound/production/chapter5/event/chapter5-03-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-01":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-02":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-03":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-04":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-05":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-06":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/06.ogg",
		volume: 1.0,
	},
	"chapter5-09-event-01-07":    {
		path: "./sound/production/chapter5/event/chapter5-09-event-01/07.ogg",
		volume: 1.0,
	},
	"chapter6-04-event-01-01":    {
		path: "./sound/production/chapter6/event/chapter6-04-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter6-04-event-common-noise":    {
		path: "./sound/production/chapter6/event/noise.ogg",
		volume: 1.0,
	},
	"chapter6-12-event-01-01":    {
		path: "./sound/production/chapter6/event/chapter6-12-event-01/01.ogg",
		volume: 1.0,
	},
	"chapter6-12-event-01-02":    {
		path: "./sound/production/chapter6/event/chapter6-12-event-01/02.ogg",
		volume: 1.0,
	},
	"chapter6-12-event-01-03":    {
		path: "./sound/production/chapter6/event/chapter6-12-event-01/03.ogg",
		volume: 1.0,
	},
	"chapter6-12-event-01-04":    {
		path: "./sound/production/chapter6/event/chapter6-12-event-01/04.ogg",
		volume: 1.0,
	},
	"chapter6-12-event-01-05":    {
		path: "./sound/production/chapter6/event/chapter6-12-event-01/05.ogg",
		volume: 1.0,
	},
	"chapter3-mansion_corridor3-breaked_clock":    {
		path: "./sound/production/chapter3/mansion_corridor3/breaked_clock.ogg",
		volume: 1.0,
	},
	"chapter3-08-crows_cat":    {
		path: "./sound/production/chapter3/08/crows_cat.ogg",
		volume: 1.0,
	},
	"chapter3-11-drop_skull":    {
		path: "./sound/production/chapter3/11/drop_skull.ogg",
		volume: 1.0,
	},
	"chapter3-12-touch_toybox":    {
		path: "./sound/production/chapter3/12/touch_toybox.ogg",
		volume: 1.0,
	},
	"chapter4-04-penki":    {
		path: "./sound/production/chapter4/04/penki.ogg",
		volume: 1.0,
	},
	"chapter4-20-fall_jizo":    {
		path: "./sound/production/chapter4/20/fall_jizo.ogg",
		volume: 1.0,
	},
	"chapter5-07-hashigo":    {
		path: "./sound/production/chapter5/07/hashigo.ogg",
		volume: 1.0,
	},
	"chapter6-01-knock_window":    {
		path: "./sound/production/chapter6/01/knock_window.ogg",
		volume: 1.0,
	},
	"chapter6-01-bark_bm":    {
		path: "./sound/production/chapter6/01/bark_bm.ogg",
		volume: 1.0,
	},
	"chapter6-02-bark_bm":    {
		path: "./sound/production/chapter6/02/bark_bm.ogg",
		volume: 1.0,
	},
	"chapter6-07-laugh_baby":    {
		path: "./sound/production/chapter6/07/laugh_baby.ogg",
		volume: 1.0,
	},
	"chapter6-13-touch_chocolatebox":    {
		path: "./sound/production/chapter6/13/touch_chocolatebox.ogg",
		volume: 1.0,
	},
	"chapter6-06-look_window":    {
		path: "./sound/production/chapter6/06/look_window.ogg",
		volume: 1.0,
	},



	// カセットテープ
	"chapter4-tape_23":    {
		path: "./sound/production/chapter4/tape/23.ogg",
		volume: 1.0,
	},
	"chapter4-tape_24":    {
		path: "./sound/production/chapter4/tape/24.ogg",
		volume: 1.0,
	},
	"chapter4-tape_25":    {
		path: "./sound/production/chapter4/tape/25.ogg",
		volume: 1.0,
	},
	"chapter4-tape_26":    {
		path: "./sound/production/chapter4/tape/26.ogg",
		volume: 1.0,
	},
	"chapter4-tape_27":    {
		path: "./sound/production/chapter4/tape/27.ogg",
		volume: 1.0,
	},
	"chapter4-tape_28":    {
		path: "./sound/production/chapter4/tape/28.ogg",
		volume: 1.0,
	},
	"chapter4-tape_29":    {
		path: "./sound/production/chapter4/tape/29.ogg",
		volume: 1.0,
	},
	"chapter4-tape_30":    {
		path: "./sound/production/chapter4/tape/30.ogg",
		volume: 1.0,
	},
	"chapter4-tape_31":    {
		path: "./sound/production/chapter4/tape/31.ogg",
		volume: 1.0,
	},
};

AssetsConfig.bgms = [
	{
		key: "field5",
		path: "./bgm/production/field5.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(''),
		description: _(""),
		chapter: 3,
	},
	{
		key: "field6",
		path: "./bgm/production/field6.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「puzzle」 "屋敷3"'),
		description: _("それはきっと、てんしさまのおくりもの"),
		chapter: 3,
	},
	{
		key: "field7",
		path: "./bgm/production/field7.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「鰍沢 ～Kajikazawa」 東方紅魔郷"おてんば恋娘"'),
		description: _("南無妙法蓮華経･･･　南無妙法蓮華経･･･"),
		chapter: 3,
	},
	{
		key: "field8",
		path: "./bgm/production/field8.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「And Then There Were None」 東方紅魔郷"U.N.オーエンは彼女なのか？"'),
		description: _("小さな兵隊さん達の行進曲。"),
		chapter: 3,
	},
	{
		key: "field9",
		path: "./bgm/production/field9.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 4,
	},
	{
		key: "field10",
		path: "./bgm/production/field10.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「抜け雀」東方永夜抄"シンデレラケージ"'),
		description: _("私は親不孝ものだ。親をカゴかきにしてしまった。"),
		chapter: 4,
	},

	{
		key: "field11",
		path: "./bgm/production/field11.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「累ヶ淵」東方地霊殿”廃獄ララバイ”'),
		description: _("この子はきっと呪われているのです。"),
		chapter: 5,
	},
	{
		key: "field12",
		path: "./bgm/production/field12.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 5,
	},
	{
		key: "field13",
		path: "./bgm/production/field13.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 6,
	},
	{
		key: "field14",
		path: "./bgm/production/field14.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 6,
	},


	{
		key: "chapter3-12-wood",
		path: "./bgm/production/chapter3/12/wood.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 3,
	},
	{
		key: "chapter5-event-oku",
		path: "./bgm/production/chapter5/event/oku.ogg",
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「flashback3」 東方地霊殿"業火マントル"'),
		description: _("回想シーン"),
		chapter: 5,
	},
];

module.exports = AssetsConfig;
