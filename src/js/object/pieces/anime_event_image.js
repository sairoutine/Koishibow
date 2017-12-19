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

	this._back.click_event = data.action_back_event;
};


// 3rd eye 使用時のみ当たり判定を行う
ObjectAnimeEventImage.prototype.isCollision = function(point) {
	return this.scene.root().isUsingEye();
};

// こいし移動後の処理
ObjectAnimeEventImage.prototype.onAfterWalkToHere = function() {
	// イベント発生
	this.core.changeScene(this._back.click_event);
};

module.exports = ObjectAnimeEventImage;
