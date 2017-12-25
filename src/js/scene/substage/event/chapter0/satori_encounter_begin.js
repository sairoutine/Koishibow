'use strict';

var base_scene = require('../../talk_with_object');
var SerifManager = require('../../../../hakurei').serif_manager;
var Util = require('../../../../hakurei').util;

var SceneSubStageObjectTalk = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageObjectTalk, base_scene);

SceneSubStageObjectTalk.prototype.init = function(){
	var serif_list = [
		{"chara": "koishi","serif":"あっ"},
	];
	base_scene.prototype.init.apply(this, [serif_list, null, false]);
};

SceneSubStageObjectTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if (this.frame_count === 30) {
		this._serif.next();
		// 前に注目するアクション
		this.root().koishi.playAnimationOnce("look_front");
	}
	else if (this.frame_count === 60) {
		this.core.changeScene("event_for_chapter0_encounter_satori");
	}
};

SceneSubStageObjectTalk.prototype.onSerifEnd = function(){
	this.root().changeSubScene("play");
};
module.exports = SceneSubStageObjectTalk;
