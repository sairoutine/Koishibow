'use strict';
var base_object = require('./static_image');
var Util = require('../../hakurei').util;

var ObjectStaticImage = function(core) {
	base_object.apply(this, arguments);

	// オブジェクトをクリックして発生するイベント名
	this._click_event   = null;
};
Util.inherit(ObjectStaticImage, base_object);

ObjectStaticImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	// 裏オブジェクト時にクリックして発生するイベント名
	this._click_event   = null;
};
ObjectStaticImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	this._click_event = data.action_event;
};


// こいしに触られたときの処理
ObjectStaticImage.prototype.onTouchByKoishi = function() {
	// フィールドから該当のオブジェクトを削除
	this._deleteFromField();

	// イベント発生
	this.core.scene_manager.changeScene(this._click_event);
};

ObjectStaticImage.prototype._deleteFromField = function() {
	this.core.save_manager.piece.setPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_delete",
		true
	);
};

ObjectStaticImage.prototype._isDeleted = function() {
	return this.core.save_manager.piece.getPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_delete"
	);
};

ObjectStaticImage.prototype.isShow = function() {
	return !this._isDeleted();
};

ObjectStaticImage.prototype.isCollision = function() {
	return !this._isDeleted();
};



module.exports = ObjectStaticImage;
