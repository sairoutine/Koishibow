'use strict';
var core = require('./hakurei').core;
var util = require('./hakurei').util;
var CONSTANT = require('./constant');

var SaveManager = require('./save_manager');

var SceneTitle = require('./scene/title');
var SceneStage = require('./scene/stage');
var SceneLoading = require('./scene/loading');

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

	this.changeScene("loading");
};
/*
Game.prototype.playSound = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.playSound.apply(this.audio_loader, arguments);
};
Game.prototype.playBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.playBGM.apply(this.audio_loader, arguments);
};
Game.prototype.changeBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.changeBGM.apply(this.audio_loader, arguments);
};
Game.prototype.stopBGM = function () {
	if (CONSTANT.DEBUG.SOUND_OFF) return;
	return this.audio_loader.stopBGM.apply(this.audio_loader, arguments);
};
*/

module.exports = Game;
