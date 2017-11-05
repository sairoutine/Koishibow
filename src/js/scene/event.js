'use strict';

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;
var CONSTANT = require('../constant');
var SS = require('../object/sprite_studio');
var jsonDataOfEvent = require('../anime/chapter0/event/encounter_satori/event_01_anime_1');

var SceneEvent = function(core) {
	base_scene.apply(this, arguments);

	this._event_anime = new SS(this);
};
Util.inherit(SceneEvent, base_scene);

SceneEvent.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.setFadeIn(30, "black");

	// イベント再生後はフェードアウトする
	this.setFadeOut(90, "black");

	// BGM 止める
	this.core.stopBGM();

	// アニメ
	this._event_anime.init(this.width/2, this.height/2, jsonDataOfEvent, 0, {scale: 2/3, loop: 1});

	var self = this;
	this._event_anime.sprite.setEndCallBack(function () {
		self.core.changeScene("stage", "chapter0_mansion_corridor2");

		self.core.save_manager.setPlayedEvent("chapter0-event-encounter_satori");
	});
};


SceneEvent.prototype.beforeDraw = function(){
	this._event_anime.beforeDraw();

	// BGM 再生
	if(this.frame_count === 0) {
		this.core.changeBGM("chapter0-event-encounter_satori");
	}

	base_scene.prototype.beforeDraw.apply(this, arguments);
};

// 画面更新
SceneEvent.prototype.draw = function(){
	this._event_anime.draw();

	base_scene.prototype.draw.apply(this, arguments);

};
module.exports = SceneEvent;
