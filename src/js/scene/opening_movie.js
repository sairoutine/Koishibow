'use strict';

var Util = require('../hakurei').util;
var BaseScene = require('../hakurei').scene.movie;
var ChapterMap = require('../config/chapter');

var SceneOpeningMovie = function(core) {
	BaseScene.apply(this, arguments);

	this._movie_path = null;
	this._scene_name = null;
	this._field_name = null;
};
Util.inherit(SceneOpeningMovie, BaseScene);

SceneOpeningMovie.prototype.setArgs = function(chapter_name){
	var chapter_data = ChapterMap[chapter_name];

	// movie ファイル
	this._movie_path = chapter_data.opening_movie;
	// chapter開始フィールド名
	this._field_name = chapter_data.first_field;

	return this;
};

SceneOpeningMovie.prototype.init = function(){
	var scene_name = "stage";
	BaseScene.prototype.init.apply(this, [this._movie_path, scene_name, this._field_name]);
};

module.exports = SceneOpeningMovie;