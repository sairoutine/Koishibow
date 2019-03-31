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

	var scene_manager = this.core.scene_manager;
	var callback =  function () {
		scene_manager.returnScene("stage");
	};

	if(chapter_data.isStopBGM() === false) {
		this._is_stop_bgm = false;
	}

	BaseScene.prototype.init.apply(this, [path, callback]);
};

SceneEventMovie.prototype.isStopBGM = function(){
	return this._is_stop_bgm;
};
module.exports = SceneEventMovie;
