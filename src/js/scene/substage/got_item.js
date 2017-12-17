'use strict';

// アイテム獲得

var base_scene = require('./base');
var Util = require('../../hakurei').util;

// アニメまでの待機時間
var WAIT_COUNT_TO_ANIMATION = 60;

// 元のシーンに戻るまでの待機時間
var WAIT_COUNT_TO_NEXT_SCENE = 60 + WAIT_COUNT_TO_ANIMATION;



var SceneSubStageGotItem = function(core) {
	base_scene.apply(this, arguments);

	// 獲得したアイテムID
	this._item_id = null;
};
Util.inherit(SceneSubStageGotItem, base_scene);

SceneSubStageGotItem.prototype.init = function(item_id){
	base_scene.prototype.init.apply(this, arguments);

	// 獲得したアイテムID
	this._item_id = item_id;
};

SceneSubStageGotItem.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if (this.frame_count > WAIT_COUNT_TO_NEXT_SCENE) {
		this.root().changeSubScene("play");
	}
};

SceneSubStageGotItem.prototype.isAnimationStart = function() {
	return this.frame_count > WAIT_COUNT_TO_ANIMATION;
};
SceneSubStageGotItem.prototype.frameCountFromAnimationStart = function() {
	return this.frame_count - WAIT_COUNT_TO_ANIMATION;
};


SceneSubStageGotItem.prototype.draw = function() {
	base_scene.prototype.draw.apply(this, arguments);

	this._drawDarker();
	this._showItem();

};

// 画面全体を少し暗くする
SceneSubStageGotItem.prototype._drawDarker = function() {
	var ctx = this.core.ctx;

	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.7;
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();
};

SceneSubStageGotItem.prototype._showItem = function() {
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage("item_" + this._item_id);

	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	var x = this.root().width/2;
	var y = this.root().height/2;
	var alpha = 1.0;

	var frame_count = this.frameCountFromAnimationStart();
	if (this.isAnimationStart()) {
		x -= frame_count*5;
		y += frame_count*4;
		alpha -= frame_count/60;

		if (alpha < 0) {
			alpha = 0;
		}
	}

	ctx.globalAlpha = alpha;

	ctx.translate(x, y);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();
};




module.exports = SceneSubStageGotItem;
