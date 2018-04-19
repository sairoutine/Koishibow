'use strict';

var core = require('./hakurei').core;
var util = require('./hakurei').util;
var CONSTANT = require('./constant');

var StorageEvent   = require('./storage/event');
var StorageItem    = require('./storage/item');
var StorageJournal = require('./storage/journal');
var StoragePiece   = require('./storage/piece');
var StoragePlayer  = require('./storage/player');

var SceneTitle = require('./scene/title');
var SceneLeavingTitle = require('./scene/leaving_title');
var SceneHowto = require('./scene/howto');
var SceneGameover = require('./scene/gameover');
var SceneStage = require('./scene/stage');
var SceneLoading = require('./scene/loading');
var SceneEventForChapter0EncounterSatori = require('./scene/event/chapter0/encounter_satori');
var SceneEventForChapter0Last            = require('./scene/event/chapter0/last');
var SceneEventForTrialLast               = require('./scene/event/trial_last');



var Game = function(canvas) {
	core.apply(this, arguments);

	// シーン一覧
	this.scene_manager.addScene("loading", new SceneLoading(this));
	this.scene_manager.addScene("title", new SceneTitle(this));
	this.scene_manager.addScene("leaving_title", new SceneLeavingTitle(this));
	this.scene_manager.addScene("howto", new SceneHowto(this));
	this.scene_manager.addScene("gameover", new SceneGameover(this));
	this.scene_manager.addScene("stage", new SceneStage(this));
	this.scene_manager.addScene("event_for_chapter0_encounter_satori", new SceneEventForChapter0EncounterSatori(this));
	this.scene_manager.addScene("event_for_chapter0_last",             new SceneEventForChapter0Last(this));
	this.scene_manager.addScene("event_for_trial_last",       new SceneEventForTrialLast(this));

	// セーブデータ
	this.save_manager.addClass("event",   StorageEvent);
	this.save_manager.addClass("item",    StorageItem);
	this.save_manager.addClass("journal", StorageJournal);
	this.save_manager.addClass("piece",   StoragePiece);
	this.save_manager.addClass("player",  StoragePlayer);
};
util.inherit(Game, core);


Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	// シーン遷移
	this.scene_manager.changeScene("loading");
};



Game.prototype.setupDebug = function (dom) {
	if (!CONSTANT.DEBUG.ON) return;

	this.debug_manager.setOn(dom);

	// テキスト追加
	this.debug_manager.addMenuText("Zキー：決定、調べる");
	this.debug_manager.addMenuText("Xキー：キャンセル、サードアイ使用／解除、押しっぱなしでライトの移動");
	this.debug_manager.addMenuText("SPACEキー：メニュー開く／閉じる");

	this.debug_manager.addMenuImage("https://api.travis-ci.org/sairoutine/Koishibow.svg?branch=gh-pages");

	this.debug_manager.addGitLatestCommitInfo("sairoutine", "Koishibow", "gh-pages");

	// ゲームスタート ボタン
	this.debug_manager.addMenuButton("Run", function (game) {
		game.startRun();
	});

	// ゲームストップ ボタン
	this.debug_manager.addMenuButton("Stop", function (game) {
		game.stopRun();
	});

	// キャプチャボタン
	this.debug_manager.addCaputureImageButton("画面キャプチャ");

	// フルスクリーン ボタン
	this.debug_manager.addMenuButton("最大化", function (game) {
		game.fullscreen();
	});

	// ゲームデータ消去ボタン
	this.debug_manager.addMenuButton("セーブクリア", function (game) {
		game.save_manager.del();
		game.reload();
	});

	this.debug_manager.addMenuButton("当たり判定表示", function (game) {
		game.debug_manager.setShowingCollisionAreaOn();
	});
	this.debug_manager.addMenuButton("当たり判定非表示", function (game) {
		game.debug_manager.setShowingCollisionAreaOff();
	});

	this.debug_manager.addMenuButton("移動制限範囲表示", function (game) {
		game.debug_manager.set("is_show_immovable_area", true);
	});
	this.debug_manager.addMenuButton("移動制限範囲非表示", function (game) {
		game.debug_manager.set("is_show_immovable_area", false);
	});

	this.debug_manager.addMenuButton("FPS表示", function (game) {
		game.debug_manager.setShowingFpsOn();
	});
	this.debug_manager.addMenuButton("FPS非表示", function (game) {
		game.debug_manager.setShowingFpsOff();
	});


	/*
	this.debug_manager.addMenuSelect("ライトの合成方法", [
		{value: "source-over"},
		{value: "destination-over"},
		{value: "source-in"},
		{value: "destination-in"},
		{value: "source-out"},
		{value: "destination-out"},
		{value: "source-atop"},
		{value: "destination-atop"},
		{value: "lighter"},
		{value: "xor"},
		{value: "copy"},
		{value: "normal"},
		{value: "multiply"},
		{value: "screen"},
		{value: "overlay"},
		{value: "darken"},
		{value: "lighten"},
		{value: "color-dodge"},
		{value: "color-burn"},
		{value: "hard-light"},
		{value: "soft-light"},
		{value: "difference"},
		{value: "exclusion"},
		{value: "hue"},
		{value: "saturation"},
		{value: "color"},
		{value: "luminosity"}
	], function (game, value) {
		game.debug_manager.set("light_global_composite", value);
	});
	*/
	this.debug_manager.addMenuSelect("こいし暗度", [
		{value: "0.0"},
		{value: "0.1"},
		{value: "0.2"},
		{value: "0.3"},
		{value: "0.4"},
		{value: "0.5"},
		{value: "0.6"},
		{value: "0.7"},
		{value: "0.8"},
		{value: "0.9"},
		{value: "1.0"},
	], function (game, value) {
		game.debug_manager.set("koishi_alpha", value);
	});

	this.debug_manager.addNewLine();

	var amount = Math.floor(CONSTANT.MAX_3RDEYE_GAUGE/4);
	this.debug_manager.addMenuButton("SAN値+" + amount, function (game) {
		game.save_manager.player.gain3rdeyeGauge(amount);
	});
	this.debug_manager.addMenuButton("SAN値-" + amount, function (game) {
		game.save_manager.player.reduce3rdeyeGauge(amount);
	});
	this.debug_manager.addMenuButton("SAN値 全回復", function (game) {
		game.save_manager.player.gain3rdeyeGauge(CONSTANT.MAX_3RDEYE_GAUGE);
	});
	this.debug_manager.addMenuButton("SAN値 表示", function (game) {
		game.debug_manager.set("is_show_3rdeye_gauge", true);
	});
	this.debug_manager.addMenuButton("SAN値 非表示", function (game) {
		game.debug_manager.set("is_show_3rdeye_gauge", false);
	});

	this.debug_manager.addNewLine();

	this.debug_manager.addUploadFileButton("SE／BGM 挿入", function (game, type, dataurl) {
		if (!type.match('audio')) return;

		game.audio_loader.playSoundByDataURL(dataurl);
	}, "data_url");





};

module.exports = Game;
