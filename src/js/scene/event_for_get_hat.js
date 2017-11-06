'use strict';

// こいしが帽子を手に入れる

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var SceneEvent = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneEvent, base_scene);

SceneEvent.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.setFadeIn(30, "black");

	// イベント再生後はフェードアウトする
	this.setFadeOut(30, "black");
};


SceneEvent.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	// N秒後に次のシーンへ
	if(this.frame_count === 60*3) {
		this.core.changeScene("stage", "chapter0_myroom");
	}

	// N秒後に帽子を被る音を鳴らす
	if (this.frame_count === 60) {
		this.core.playSound("chapter0_myroom-get_hat");
	}
};

// 画面更新
SceneEvent.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var get_hat_image = this.core.image_loader.getImage("get_hat");

	ctx.drawImage(get_hat_image,
					0,
					0,
					get_hat_image.width,
					get_hat_image.height,
					0,
					0,
					this.width,
					this.height);

	ctx.restore();
};
module.exports = SceneEvent;
