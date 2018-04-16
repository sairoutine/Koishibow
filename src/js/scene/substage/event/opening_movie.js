'use strict';

var BaseScene = require('../base');
var Util = require('../../../hakurei').util;
var BaseScene = require('../../../hakurei').scene.movie;

var SceneSubStageEventOpeningMovie = function(core) {
	BaseScene.apply(this, arguments);

	this._movie_path = null;
	this._scene_name = null;
	this._field_name = null;
};
Util.inherit(SceneSubStageEventOpeningMovie, BaseScene);

SceneSubStageEventOpeningMovie.prototype.setArgs = function(movie_path, scene_name, field_name){
	this._movie_path = movie_path;
	this._scene_name = scene_name;
	this._field_name = field_name;

	return this;
};

SceneSubStageEventOpeningMovie.prototype.init = function(){
	BaseScene.prototype.init.apply(this, [this._movie_path, this._scene_name, this._field_name]);
};

module.exports = SceneSubStageEventOpeningMovie;
