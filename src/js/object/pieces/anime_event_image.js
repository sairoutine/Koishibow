'use strict';
var base_object = require('./anime_image');
var Util = require('../../hakurei').util;

var ObjectAnimeEventImage = function(core) {
	base_object.apply(this, arguments);

	// 裏オブジェクト時にクリックして発生するイベント名
	this._back.click_event   = null;
};
Util.inherit(ObjectAnimeEventImage, base_object);

ObjectAnimeEventImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	// 裏オブジェクト時にクリックして発生するイベント名
	this._back.click_event   = null;
};
ObjectAnimeEventImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	this._back.click_event   = data.action_back_event;
};
/*
ObjectAnimeEventImage.prototype.onCollision = function(obj){
	base_object.prototype.onCollision.apply(this, arguments);

	// サードアイ使用中かつ
	// 移動中でなければ、対象のオブジェクトに近寄ってアクション
	if(this.scene.mainStage().isUsingEye() && this.core.input_manager.isLeftClickPush()) {
		if (!this.scene.mainStage().koishi().isMoving()) {
			this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
			this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalkOnEvent, this));
		}
	}
	else {
	}

	if(!this.scene.mainStage().isUsingEye()) {
		// 3rdeye 使用中なら基底メソッドで touch カーソルにされるので、戻す
		// 通常時はクリックしても何も起こらないので default カーソルのままでないといけないので
		this.core.changeDefaultCursor();
	}
	else {
		this.core.changeTouchCursor();
	}
};
ObjectAnimeEventImage.prototype.onCollisionAfterKoishiWalkOnEvent = function(){
	var self = this;

	// フェードアウト
	this.scene.mainStage().setFadeOut(30, "black");

	// イベント発生
	this.core.changeScene(this._action_back_event);
};
*/
module.exports = ObjectAnimeEventImage;
