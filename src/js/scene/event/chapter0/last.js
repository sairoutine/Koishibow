'use strict';

// chapter0 最終イベント
// こいしがカーペットから飛び降りる

var base_scene = require('../base');
var Util = require('../../../hakurei').util;

// カーペットから飛び降りるアニメ
var jsonDataOfEvent = require('../../../data/anime/chapter0/event/falldown_koishi/event01_anime_1');

var SceneDefault = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneDefault, base_scene);


var SceneEvent = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneEvent, base_scene);

SceneDefault.prototype.isFadeIn = function(){
	return true;
};
SceneDefault.prototype.isFadeOut = function(){
	return true;
};
SceneDefault.prototype.isStopBGM = function(){
	return true;
};

SceneDefault.prototype.backgroundSsAnime = function(){
	return jsonDataOfEvent;
};

SceneDefault.prototype.afterBackgroundSsAnimeFunction = function(){
	return function (core) {
		// 次のチャプターへ
		core.scene_manager.changeScene("opening_movie_chapter1");

		core.audio_loader.fadeOutBGM(2);
	};
};


SceneDefault.prototype.scriptMap = function(){
	return {
		54: [
			{
				command: "play_sound",
				argument_list: ["chapter0-mansion_corridor3-open_and_falldown"],
			},
		]
	};
};

module.exports = SceneDefault;
