'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectJournal = function(core) {
	base_object.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._picture_name = null;

};
Util.inherit(ObjectJournal, base_object);

ObjectJournal.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._picture_name = null;
};
ObjectJournal.prototype.setData = function(data) {
	// 画像
	this._image = this.core.image_loader.getImage(data.image);

	// 表示するジャーナル画像
	this._picture_name = data.picture;

	// 位置
	this.setPosition(data.x, data.y);

	// サイズ
	if (data.scale) {
		this._scale = data.scale;
	}
	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
};

// マウスクリック時のイベント
ObjectJournal.prototype.onCollisionWithClick = function(point) {
	var self = this;
	// こいしを移動
	self.scene.root().koishi.setMoveTarget(self, function () {
		// 移動後
		self.onAfterWalkToHere();
	});
};

// マウスオーバー時のイベント
ObjectJournal.prototype.onCollisionWithMouseOver = function(obj) {
	// マウスカーソルを変更
	this.core.changeCursorImage("ui_icon_pointer_02");
};

// 移動後の処理
ObjectJournal.prototype.onAfterWalkToHere = function(){
	// ジャーナル画像表示シーンへ遷移
	this.scene.root().changeSubScene("journal", this._picture_name);

	// 音を再生
	this.core.audio_loader.playSound("show_journal");
};

ObjectJournal.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	var ctx = this.core.ctx;
	var image = this._image;

	var width = image.width * this._scale;
	var height = image.height * this._scale;

	// 背景描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);
	ctx.restore();
};



ObjectJournal.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectJournal.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};
module.exports = ObjectJournal;
