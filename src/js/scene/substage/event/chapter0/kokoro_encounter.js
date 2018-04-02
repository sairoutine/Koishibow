'use strict';

var SPEED = 4;

var base_scene = require('../../base');

var Util = require('../../../../hakurei').util;
var SS = require('../../../../object/anime_object');

var jsonDataOfWait = require('../../../../data/anime/kokoro/wait_anime_1');
var jsonDataOfRun = require('../../../../data/anime/kokoro/run_anime_1');

var SceneSubStageJournal = function(core) {
	base_scene.apply(this, arguments);

	this.ss = new SS(this.root());

	// こころが走っているかどうか
	this.is_running = false;
};
Util.inherit(SceneSubStageJournal, base_scene);

SceneSubStageJournal.prototype.init = function(picture_name){
	base_scene.prototype.init.apply(this, arguments);
	var self = this;

	// こころが走っているかどうか
	self.is_running = false;

	// アニメの位置指定
	self.ss.x(780);
	self.ss.y(340);

	self.ss.setAnime({
		default: jsonDataOfWait,
		wait: jsonDataOfWait,
		run: jsonDataOfRun,
	});
	self.ss.init();
	self.ss.setReflect(true);
	self.ss.playAnimationOnce("wait", function () {
		self.is_running = true;
		self.ss.setReflect(false);
		self.ss.playAnimationInfinity("run");
	});

};
SceneSubStageJournal.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this.ss.beforeDraw();

	if(this.frame_count > 180) {
		this.root().changeSubScene("play");
	}

	// こころが走る
	if (this.is_running) {
		this.ss.x(this.ss.x() + SPEED);
		this._playWalkSound();
	}
};

SceneSubStageJournal.prototype._playWalkSound = function(){
	// 足音
	var walk_sound = "walking_bare_default";
	// 走るアニメーションに合わせて音を再生
	if(this.ss.getFrameNo()%10 === 2) {
		this.core.audio_loader.playSound(walk_sound + "_right");
	}
	else if(this.ss.getFrameNo()%10 === 4) {
		this.core.audio_loader.playSound(walk_sound + "_left");
	}
};








SceneSubStageJournal.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	this.ss.draw();

};

SceneSubStageJournal.prototype.afterDraw = function(){
	base_scene.prototype.afterDraw.apply(this, arguments);

	this.ss.afterDraw();
};



module.exports = SceneSubStageJournal;
