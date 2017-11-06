'use strict';
var base_object = require('./anime_image');
var Util = require('../../hakurei').util;

var ObjectAnimeEventImage = function(core) {
	base_object.apply(this, arguments);

	this._action_back_event   = null;
};
Util.inherit(ObjectAnimeEventImage, base_object);

ObjectAnimeEventImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this._action_back_event   = null;
};
ObjectAnimeEventImage.prototype.addActionBackEvent = function(event_name) {
	this._action_back_event   = event_name;
};
ObjectAnimeEventImage.prototype.onCollision = function(obj){
	base_object.prototype.onCollision.apply(this, arguments);

	// サードアイ使用中でないなら何もしない
	if (!this.scene.mainStage().isUsingEye()) return;

	// 移動中でなければ、対象のオブジェクトに近寄ってアクション
	if (!this.scene.mainStage().koishi().isMoving()) {
		this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
		this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalkOnEvent, this));
	}

};
ObjectAnimeEventImage.prototype.onCollisionAfterKoishiWalkOnEvent = function(){
	var self = this;

	// フェードアウト
	this.scene.mainStage().setFadeOut(30, "black");

	// イベント発生
	this.core.changeScene(this._action_back_event);
};





module.exports = ObjectAnimeEventImage;
