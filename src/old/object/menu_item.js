'use strict';

/* メニューのアイテム */

var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectMenuItem = function(scene, item_id) {
	base_object.apply(this, arguments);

	this.item_id = item_id;
};
Util.inherit(ObjectMenuItem, base_object);

ObjectMenuItem.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};


ObjectMenuItem.prototype.onCollision = function(obj){
	this.core.playSound("select_item");
	this.scene.focus_item_id = this.item_id;
};

ObjectMenuItem.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	ctx.save();

	// デバッグ用の仮描画する
	if (!CONSTANT.DEBUG.ON) return;


	// 仮で四角形を描画
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	//ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());

	// 選択しているアイテムなら
	if (this.scene.focus_item_id === this.item_id) {
		ctx.strokeStyle = "rgb(200, 0, 0)";
		ctx.lineWidth = 10;
		ctx.strokeRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	}

	// メニュー文字 表示
	ctx.font = "24px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	//ctx.fillText("ITEM1", this.x() + 5, this.y() + 5);

	ctx.restore();
};



ObjectMenuItem.prototype.collisionWidth = function(){
	return 128;
};

ObjectMenuItem.prototype.collisionHeight = function(){
	return 128;
};


// アイテムが使用されたとき
ObjectMenuItem.prototype.use = function(){
	this.core.playSound("use_eyedrops");
	this.core.save_manager.increase3rdeyeGauge(100); // TODO:
};








module.exports = ObjectMenuItem;
