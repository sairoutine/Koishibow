'use strict';
var base_object = require('./static_image');
var Util = require('../../hakurei').util;

var ObjectStaticEventImage = function(core) {
	base_object.apply(this, arguments);

	// 表オブジェクト時にクリックして発生するイベント名
	this._click_event   = null;

	// 1度触ったら消えるかどうか
	this._is_acquirable   = false;
};
Util.inherit(ObjectStaticEventImage, base_object);

ObjectStaticEventImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	// 表オブジェクト時にクリックして発生するイベント名
	this._click_event   = null;

	// 1度触ったら消えるかどうか
	this._is_acquirable   = false;
};
ObjectStaticEventImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	this._click_event = data.action_event;

	if (data.is_acquirable) {
		this._is_acquirable   = true;
	}
};


// こいしに触られたときの処理
ObjectStaticEventImage.prototype.onTouchByKoishi = function() {
	// フィールドから該当のオブジェクトを削除
	if (this._is_acquirable) {
		this._deleteFromField();
	}

	// イベント発生
	this.core.scene_manager.changeScene(this._click_event);
};

ObjectStaticEventImage.prototype._deleteFromField = function() {
	this.core.save_manager.piece.setPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_delete",
		true
	);
};

ObjectStaticEventImage.prototype._isDeleted = function() {
	return this.core.save_manager.piece.getPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_delete"
	);
};

ObjectStaticEventImage.prototype.isShow = function() {
	return base_object.prototype.isShow.apply(this, arguments) && !this._isDeleted();
};

ObjectStaticEventImage.prototype.isCollision = function(obj) {
	return base_object.prototype.isCollision.apply(this, arguments) && !this._isDeleted();
};



module.exports = ObjectStaticEventImage;
