'use strict';

// アイテム使用 演出

var base_scene = require('./base');
var Util = require('../../hakurei').util;
var ItemMasterRepository = require("../../repository/item");

// アニメまでの待機時間
var WAIT_COUNT_TO_ANIMATION = 60;

// 元のシーンに戻るまでの待機時間
var WAIT_COUNT_TO_NEXT_SCENE = 60 + WAIT_COUNT_TO_ANIMATION;



var SceneSubStageGotItem = function(core) {
	base_scene.apply(this, arguments);

	// 使用したアイテム ID
	this._item_id = null;

	// 演出後に戻るサブシーン
	this._sub_scene_name = null;
};
Util.inherit(SceneSubStageGotItem, base_scene);

SceneSubStageGotItem.prototype.init = function(item_id, sub_scene_name){
	base_scene.prototype.init.apply(this, arguments);

	// 使用したアイテム ID
	this._item_id = item_id;

	// 演出後に戻るサブシーン
	this._sub_scene_name = sub_scene_name || "play";

	var sound_name = ItemMasterRepository.find(this._item_id).soundName();
	this.core.audio_loader.playSound(sound_name);
};

SceneSubStageGotItem.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if (this.frame_count > WAIT_COUNT_TO_NEXT_SCENE) {
		this.root().returnSubScene(this._sub_scene_name);
	}
};

SceneSubStageGotItem.prototype.isAnimationStart = function() {
	return this.frame_count > WAIT_COUNT_TO_ANIMATION;
};
SceneSubStageGotItem.prototype.frameCountFromAnimationStart = function() {
	return this.frame_count - WAIT_COUNT_TO_ANIMATION;
};


SceneSubStageGotItem.prototype.afterDraw = function() {
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

	var image_name = ItemMasterRepository.find(this._item_id).imageName();
	var picture = this.core.image_loader.getImage(image_name);

	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	var x = 175;
	var y = 604;
	var alpha = 0.0;

	var frame_count = this.frame_count;
	if (!this.isAnimationStart()) {
		x += frame_count*5;
		y -= frame_count*4;
		alpha += frame_count/60;

		if (alpha > 1.0) {
			alpha = 1.0;
		}
	}
	else {
		x = this.root().width/2;
		y = this.root().height/2;
		alpha = 1.0;
	}

	ctx.translate(x, y);
	ctx.globalAlpha = alpha;

	// 背景の光表示
	var selected = this.core.image_loader.getImage("item_selected");
	var selected_width = selected.width * 2/3;
	var selected_height = selected.height * 2/3;

	ctx.drawImage(selected,
		-selected_width/2,
		-selected_height/2,
		selected_width,
		selected_height
	);

	// アイテム画像表示
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();
};




module.exports = SceneSubStageGotItem;
