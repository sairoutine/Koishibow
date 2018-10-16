'use strict';

var Util = require('../hakurei').util;
var BaseScene = require('../hakurei').scene.movie;
var ChapterMasterRepository = require('../repository/chapter');

var SceneOpeningMovie = function(core) {
	BaseScene.apply(this, arguments);

	this._movie_path = null;
	this._field_name = null;
	this._chapter_no = null;
};
Util.inherit(SceneOpeningMovie, BaseScene);

SceneOpeningMovie.prototype.setArgs = function(chapter_name){
	var chapter_data = ChapterMasterRepository.find(chapter_name);

	// movie ファイル
	this._movie_path = chapter_data.openingMovie();
	// chapter開始フィールド名
	this._field_name = chapter_data.firstField();
	// chapter No
	this._chapter_no = chapter_data.no();
	return this;
};

SceneOpeningMovie.prototype.init = function(){
	var self = this;
	var scene_manager = self.core.scene_manager;
	var player = self.core.save_manager.player;
	var field_name = self._field_name;
	var chapter_no = self._chapter_no;
	BaseScene.prototype.init.apply(self, [self._movie_path, function () {
		// 新しいチャプターに遷移したことを保存
		player.setCurrentChapter(chapter_no);

		scene_manager.changeScene("stage", field_name);
	}]);
};

module.exports = SceneOpeningMovie;
