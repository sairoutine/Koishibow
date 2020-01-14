'use strict';
var _ = require('i18n4v')

var AssetsConfig = {};

AssetsConfig.images = {
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
	"item_37":            "./image/production/item/icon_item_cp4_rikadoll.png",
	"item_38":            "./image/production/item/icon_item_cp4_nail.png",

	// 1枚絵
	"picture_chapter3-08-illust-01":   "./image/production/picture/chapter3-08-illust-01.png",
};

AssetsConfig.sounds = {
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
