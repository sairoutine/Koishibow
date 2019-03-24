'use strict';

// 会話中に暗転する

var base_scene = require('./base');
var Util = require('../../hakurei').util;

// Nフレームでフェードアウト／フェードインする
var BLACKOUT_COUNT = 30;

var SceneSubStageBlackout = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageBlackout, base_scene);

SceneSubStageBlackout.prototype.init = function(return_subscene){
	base_scene.prototype.init.apply(this, arguments);

	this._return_subscene = return_subscene || "play"; // 再生後の戻り先サブシーン
};

SceneSubStageBlackout.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if (this.frame_count > BLACKOUT_COUNT) {
		this.root().returnSubScene(this._return_subscene);
	}
};


SceneSubStageBlackout.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	var alpha;

	if (this.frame_count < BLACKOUT_COUNT/2) {
		alpha = 0.0 + this.frame_count/(BLACKOUT_COUNT/2);
	}
	else if (this.frame_count === BLACKOUT_COUNT/2) {
		alpha = 1.0;
	}
	else if (BLACKOUT_COUNT > this.frame_count && this.frame_count > BLACKOUT_COUNT/2) {
		alpha = 1.0 - (this.frame_count - BLACKOUT_COUNT/2)/(BLACKOUT_COUNT/2);
	}
	else {
		alpha = 0.0;
	}

	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, this.core.width, this.core.height);
	ctx.restore();
};
module.exports = SceneSubStageBlackout;
