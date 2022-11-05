'use strict';
var _ = require('i18n4v');
var AssetsConfig = {};

AssetsConfig.images = {
	// こいし画像
	"koishi": "./image/common/koishi.png",
	"koishi_button": "./image/common/koishi_button.png",
	// 3rdeye 使用時のもや
	"black_mist":            "./image/common/black_mist.png",
	// 3rdeye 使用時の光
	"light":  "./image/common/light.png",

	"white-mist":            "./image/common/white-mist.png",
	// chapter4 のもや
	"dark-mist": "./image/common/dark-mist.png",
	// chapter3 の雪
	"snow_mist": "./image/common/snow_mist.png",

	// 選択中のアイテム背景
	"item_selected":      "./image/common/item/icon_item_common_light01.png",

	// アイテム
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

	// ふきだし(こいし用)
	"fukidashi_brown_center":     "./image/common/ui-common-frame-talk1-brn.png",
	"fukidashi_brown_left":       "./image/common/ui-common-frame-talk2-brn.png",
	// ふきだし(回想用)
	"fukidashi_black_center":     "./image/common/ui-common-frame-talk1-blk.png",
	"fukidashi_black_left":       "./image/common/ui-common-frame-talk2-blk.png",
	// ふきだし(キャラ用)
	"fukidashi_darkbrown_center": "./image/common/ui-common-frame-talk1-dbrn.png",
	"fukidashi_darkbrown_left":   "./image/common/ui-common-frame-talk2-dbrn.png",

	// chapter1さとりと母の回想シーン 専用
	"fukidashi_gray_left":  "./image/common/ui-common-frame-talk1-gry.png",

	"fukidashi_arrow":  "./image/common/ui-common-btn-arrow-brn.png",

	// 会話選択肢 ふきだし
	"junction_off":  "./image/common/junction_off.png",
	"junction_on":   "./image/common/junction_on.png",

	// ここを選択せよ、的な矢印
	"target_arrow":  "./image/common/ui-common-btn-arrow-gry.png",

	// アイテム一覧メニュー
	"ui-common-bg-toolpu-blk":   "./image/common/menu_item/ui-common-bg-toolpu-blk.png",
	"ui-common-btn-toolpu-blu1": "./image/common/menu_item/ui-common-btn-toolpu-blu1.png",
	"ui-common-btn-toolpu-blu2": "./image/common/menu_item/ui-common-btn-toolpu-blu2.png",
	"ui-common-frame-toolpu":    "./image/common/menu_item/ui-common-frame-toolpu.png",

	// ジャーナル一覧メニュー
	"ui-common-frame-journal":      "./image/common/menu_journal/ui-common-frame-journal.png",
	"ui-common-scrollbar_01_thumb": "./image/common/menu_journal/ui-common-scrollbar_01_thumb.png",
	"ui-common-scrollbar_01_track": "./image/common/menu_journal/ui-common-scrollbar_01_track.png",
	"ui-common-btn-arrow-lbrn":     "./image/common/menu_journal/ui-common-btn-arrow-lbrn.png",


	// タイトル画面
	"ui-titlepg-btn-con-off":  "./image/common/title/ui-titlepg-btn-con-off.png",
	"ui-titlepg-btn-con-on":   "./image/common/title/ui-titlepg-btn-con-on.png",
	"ui-titlepg-btn-ng-off":   "./image/common/title/ui-titlepg-btn-ng-off.png",
	"ui-titlepg-btn-ng-on":    "./image/common/title/ui-titlepg-btn-ng-on.png",
	"ui-titlepg-btn-music-off":   "./image/common/title/ui-titlepg-btn-music-off.png",
	"ui-titlepg-btn-music-on":    "./image/common/title/ui-titlepg-btn-music-on.png",
	"ui-titlepg-btn-opt-off":  "./image/common/title/ui-titlepg-btn-opt-off.png",
	"ui-titlepg-btn-opt-on":   "./image/common/title/ui-titlepg-btn-opt-on.png",
	"ui-titlepg-img-logo-1":   "./image/common/title/ui-titlepg-img-logo-1.png",

	// タイトル画面アニメ
	"mask":  "./image/common/title/mask.png",
	"noize":  "./image/common/title/noize.jpg",
	"stain":  "./image/common/title/stain.png",
	"title":  "./image/common/title/title.jpg",

	// music room
	"ui-common-btn-back-off":       "./image/common/music/ui-common-btn-back-off.png",
	"ui-common-btn-back-on":        "./image/common/music/ui-common-btn-back-on.png",
	"ui-common-btn-back_bg":        "./image/common/music/ui-common-btn-back_bg.png",
	"ui-musicroom-bg-frame":        "./image/common/music/ui-musicroom-bg-frame.png",
	"ui-musicroom-bg":              "./image/common/music/ui-musicroom-bg.jpg",
	"ui-musicroom-btn-play":        "./image/common/music/ui-musicroom-btn-play.png",
	"ui-musicroom-btn-stop":        "./image/common/music/ui-musicroom-btn-stop.png",
	"ui-musicroom-listbox01-off":   "./image/common/music/ui-musicroom-listbox01-off.png",
	"ui-musicroom-listbox01-on":    "./image/common/music/ui-musicroom-listbox01-on.png",
	"ui-musicroom-scrollbar01-bar": "./image/common/music/ui-musicroom-scrollbar01-bar.png",
	"ui-musicroom-scrollbar01-box": "./image/common/music/ui-musicroom-scrollbar01-box.png",

	// 1枚絵
	"picture_get_hat":   "./image/common/picture/illust_01.png",
	"picture_use_eyedrops":   "./image/common/picture/illust_02.png",
	"picture_chapter1-08-illust-01":   "./image/common/picture/chapter1-08-illust-01.png",
	"picture_chapter1-09-illust-01":   "./image/common/picture/chapter1-09-illust-01.png",
	"picture_chapter1-10-illust-01":   "./image/common/picture/chapter1-10-illust-01.png",

	// ジャーナル共通素材
	// 不要
	//paper_clip:  "./image/common/ui-common-frame-paper_clip.png",
	//paper_close_button: "./image/common/ui-common-btn-close.png",
	"paper_frame":         "./image/common/ui-common-frame-paper.png",


	"chapter5-02-obj-02": "./image/common/chapter5/chapter5-02/chapter5-02-obj-02.png",
};

AssetsConfig.sounds = {
	"chapter1-event-play_wipe_out_common":    {
		path: "./sound/common/chapter1/event/play_wipe_out_common.ogg",
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
	got_item_tapeplayer:    {
		path: "./sound/common/got_item/tapeplayer.ogg",
		volume: 1.0,
	},
	ophelia:    {
		path: "./sound/common/got_item/ophelia.ogg",
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
	"event_in":    {
		path: "./sound/common/event_in.ogg",
		volume: 1.0,
	},
	"event_out":    {
		path: "./sound/common/event_out.ogg",
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
		path: "./sound/common/walking/bare_snow_right.ogg",
		volume: 1.0,
	},
	walking_bare_snow_left:    {
		path: "./sound/common/walking/bare_snow_left.ogg",
		volume: 1.0,
	},
	walking_bare_sand_right:    {
		path: "./sound/common/walking/bare_sand_right.ogg",
		volume: 1.0,
	},
	walking_bare_sand_left:    {
		path: "./sound/common/walking/bare_sand_left.ogg",
		volume: 1.0,
	},
	walking_bare_flesh_right:    {
		path: "./sound/common/walking/bare_flesh_right.ogg",
		volume: 1.0,
	},
	walking_bare_flesh_left:    {
		path: "./sound/common/walking/bare_flesh_left.ogg",
		volume: 1.0,
	},
	walking_bare_wave_right:    {
		path: "./sound/common/walking/bare_wave_right.ogg",
		volume: 1.0,
	},
	walking_bare_wave_left:    {
		path: "./sound/common/walking/bare_wave_left.ogg",
		volume: 1.0,
	},

};

AssetsConfig.bgms = [
	{
		key: "silent",
		path: "./bgm/common/silent.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 0,
	},
	{
		key: "maintheme",
		path: "./bgm/common/maintheme.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「symphony of 3rd eye」 "short ver"'),
		description: _("はじめまして、いとしい子･･･"),
		chapter: 6,
	},
	{
		key: "title",
		path: "./bgm/common/title1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
		isShowMusicRoom: true,
		name: _('「ERRATIC」 東方地霊殿"ラストリモート"'),
		description: _("得体の知れぬ混沌に抱かれて･･･"),
		chapter: 0,
	},
	{
		key: "musicroom",
		path: "./bgm/common/musicroom.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「音楽室の怪談 ～Beethoven Portrait」 "MusicRoom"'),
		description: _("「あの子がね、真夜中の音楽室で見たんだって･･･」"),
		chapter: 0,
	},
	{
		key: "artroom",
		path: "./bgm/common/chapter0/artroom.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「モナリザの微笑 ～La Gioconda」 東方地霊殿"ハートフェルトファンシー"'),
		description: _("「美術室にモナリザの絵があるでしょ、あれってね･･･」"),
		chapter: 0,
	},
	{
		key: "using_3rdeye",
		path: "./bgm/common/using_3rdeye.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「awakening」 "開眼"'),
		description: _("深淵を覗く時、深淵もまたこちらを覗いているのだ。"),
		chapter: 0,
	},
	{
		key: "field1",
		path: "./bgm/common/field1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
		isShowMusicRoom: true,
		name: _('「Animism」 "屋敷1"'),
		description: _("この屋敷は恐ろしいものが彷徨っている"),
		chapter: 0,
	},
	{
		key: "field2",
		path: "./bgm/common/field2.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
		isShowMusicRoom: true,
		name: _('「Picnic In Heaven」 "屋敷2"'),
		description: _("たのしいたのしい天国のピクニック･･･"),
		chapter: 0,
	},
	{
		key: "chapter0-event-encounter_satori",
		path: "./bgm/common/chapter0/event/encounter_satori.ogg",
		volume: 0.6,
		isShowMusicRoom: true,
		name: _('「flashback1」 東方地霊殿"少女さとり"'),
		description: _("回想シーン"),
		chapter: 0,
	},
	{
		key: "field3",
		path: "./bgm/common/field3.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「Yawn」 "夜道"'),
		description: _("夜道を一人で歩いてはいけない。何かが後ろにいるのだから。"),
		chapter: 1,
	},
	{
		key: "field3ura",
		path: "./bgm/common/field3ura.ogg",
		//loopStart: 0*60 + 0 + 0.512,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「sterrennacht」 東方紺珠伝"見た事も無い悪夢の世界"'),
		description: _("夜道を一人で歩いてはいけない。この不思議は私だけのものだから。"),
		chapter: 1,
	},
	{
		key: "chapter1-event-suzunaan_in_flames",
		path: "./bgm/common/chapter1/event/suzunaan_in_flames.ogg",
		volume: 0.6,
		isShowMusicRoom: true,
		name: _('「perilous」 "鈴奈庵"'),
		description: _("「火気厳禁だって言ったのにー！」"),
		chapter: 1,
	},
	{
		key: "field4",
		path: "./bgm/common/field4.ogg",
		loopStart: 0*60 + 0 + 0.300,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: true,
		name: _('「Enfantterrible」 東方星蓮船"幽霊客船の時空を越えた旅"'),
		description: _("賢しいお子さん達にお会いしましたか？"),
		chapter: 1,
	},
	{
		key: "chapter1-event-talk_with_mobu",
		path: "./bgm/common/chapter1/event/talk_with_mobu.ogg",
		volume: 0.6,
		isShowMusicRoom: true,
		name: _('「flashback2」 東方星蓮船"法界の火"'),
		description: _("回想シーン"),
		chapter: 1,
	},
	{
		key: "chapter0-mansion_corridor1-tricycle",
		path: "./bgm/common/chapter0/mansion_corridor1/tricycle.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 0,
	},
	{
		key: "chapter0-mansion_corridor1-wind",
		path: "./bgm/common/chapter0/mansion_corridor1/wind.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 0,
	},
	{
		key: "chapter0-mansion_corridor3-clock",
		path: "./bgm/common/chapter0/mansion_corridor3/clock.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 0,
	},
	{
		key: "chapter1-03-drop_paint",
		path: "./bgm/common/chapter1/03/drop_paint.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 1,
	},
	{
		key: "chapter1-04-call_phone",
		path: "./bgm/common/chapter1/04/call_phone.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 1,
	},
	{
		key: "chapter1-06-flicker_light",
		path: "./bgm/common/chapter1/06/flicker_light.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 1,
	},
	{
		key: "chapter1-09-flows_water",
		path: "./bgm/common/chapter1/09/flows_water.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
		isShowMusicRoom: false,
		name: _(""),
		description: _(""),
		chapter: 1,
	},
];

AssetsConfig.fonts = {};

module.exports = AssetsConfig;
