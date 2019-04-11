'use strict';

var Util = require('../hakurei').util;
var BaseScene = require('../hakurei').scene.movie;
var EventMovieMasterRepository = require('../repository/event_movie');

var SceneEventMovie = function(core) {
	BaseScene.apply(this, arguments);

	this._is_stop_bgm = true;
};
Util.inherit(SceneEventMovie, BaseScene);

SceneEventMovie.prototype.setArgs = function(event_name){

	return this;
};

SceneEventMovie.prototype.init = function(event_name){
	var chapter_data = EventMovieMasterRepository.find(event_name);

	if (!chapter_data) {
		throw new Error("Can't find movie event: " + event_name);
	}

	var path = chapter_data.path();
	var next_field = chapter_data.nextField(); // イベント再生後の遷移先フィールド

	var scene_manager = this.core.scene_manager;
	var callback =  next_field ?
		// 遷移先が設定されていれば遷移先フィールドへ
		function () {
			scene_manager.changeScene("stage", next_field);
		}:
		// 遷移先が設定されてなければ stage へ戻る
		function () {
			scene_manager.returnScene("stage");
		};

	// エンディング用の特別処理
	// TODO: リファクタ
	if (event_name === "chapter6-event-ending01-1") {
		callback = function () {
			scene_manager.changeScene("movie", "./movie/production/chapter6_staffroll.mp4", function (core) {
				core.scene_manager.changeScene("event_talk", "chapter6-event-ending01-2");
			});
		};
	}

	if(chapter_data.isStopBGM() === false) {
		this._is_stop_bgm = false;
	}

	BaseScene.prototype.init.apply(this, [path, callback]);
};

SceneEventMovie.prototype.isStopBGM = function(){
	return this._is_stop_bgm;
};
module.exports = SceneEventMovie;
