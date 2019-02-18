'use strict';

// 会話中に1枚絵を表示する

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubStageGetHat = function(core) {
	base_scene.apply(this, arguments);

	this._picture_name = null;
};
Util.inherit(SceneSubStageGetHat, base_scene);

SceneSubStageGetHat.prototype.init = function(picture_name, return_subscene){
	base_scene.prototype.init.apply(this, arguments);

	this._pos_x = -this.root().width/2;
	this._picture_name = picture_name;
	this._return_subscene = return_subscene || "play"; // 再生後の戻り先サブシーン
};

SceneSubStageGetHat.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if(this.frame_count === 1) {
		// 小傘
		if (this._picture_name === "picture_chapter1-10-illust-01") {
			this.core.audio_loader.playSound("chapter1-event-play_wipe_in_kogasa");
		}
		// 響子
		else if (this._picture_name === "picture_chapter1-08-illust-01") {
			this.core.audio_loader.playSound("chapter1-event-play_wipe_in_kyoko");
		}
		else {
			// 何もしない
		}
	}

	if(this.frame_count <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count < 90) {
		// 何もしない
	}
	else if(this.frame_count === 90) {
		this.core.audio_loader.playSound("chapter1-event-play_wipe_out_common");
	}
	else if(this.frame_count <= 105) {
		this._pos_x += this.root().width/15;
	}
	// 前のサブシーンに戻る
	else if(this.frame_count > 120) {
		this.root().returnSubScene(this._return_subscene);
	}
};

SceneSubStageGetHat.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage(this._picture_name);
	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this._pos_x, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();

};
module.exports = SceneSubStageGetHat;
