'use strict';
var core = require('./hakurei').core;
var util = require('./hakurei').util;
var CONSTANT = require('./constant');

var SaveManager = require('./save_manager');

var SceneTitle = require('./scene/title');
var SceneStage = require('./scene/stage');
var SceneLoading = require('./scene/loading');
var SceneMovie = require('./hakurei').scene.movie;
var SceneEvent = require('./scene/event');
var SceneEventForTrialLast = require('./scene/event_for_trial_last');

var Game = function(canvas) {
	core.apply(this, arguments);
};
util.inherit(Game, core);

Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	// セーブデータ
	this.save_manager = SaveManager.load();


	this.addScene("loading", new SceneLoading(this));
	this.addScene("title", new SceneTitle(this));
	this.addScene("stage", new SceneStage(this));
	this.addScene("event", new SceneEvent(this));
	this.addScene("event_for_trial_last", new SceneEventForTrialLast(this));

	var scene_movie = new SceneMovie(this);
	if (CONSTANT.DEBUG.SOUND_OFF) {
		scene_movie.is_mute = true;
	}
	this.addScene("movie", scene_movie);

	this.changeScene("loading");
};
Game.prototype.setupDebug = function (dom) {
	if (!CONSTANT.DEBUG.ON) return;

	this.debug_manager.setOn(dom);

	// テキスト追加
	this.debug_manager.addMenuText("マウスクリックで移動／調べる");

	this.debug_manager.addGitLatestCommitInfo("sairoutine", "Koishibow", "gh-pages");

	// ゲームスタート ボタン
	this.debug_manager.addMenuButton("Run", function (game) {
		game.startRun();
	});

	// ゲームストップ ボタン
	this.debug_manager.addMenuButton("Stop", function (game) {
		game.stopRun();
	});

	// フルスクリーン ボタン
	this.debug_manager.addMenuButton("最大化", function (game) {
		game.fullscreen();
	});

	// ゲームデータ消去ボタン
	this.debug_manager.addMenuButton("セーブクリア", function (game) {
		game.save_manager.del();
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
	this.debug_manager.addMenuButton("トレーラー再生", function (game) {
		game.changeScene("movie", "./movie/trailer.mp4", "title");
	});

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




};




Game.prototype.playSound = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.playSound.apply(this.audio_loader, arguments);
};
Game.prototype.playBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.playBGM.apply(this.audio_loader, arguments);
};
Game.prototype.addBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.addBGM.apply(this.audio_loader, arguments);
};

Game.prototype.changeBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.changeBGM.apply(this.audio_loader, arguments);
};
Game.prototype.stopBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.stopBGM.apply(this.audio_loader, arguments);
};

module.exports = Game;
