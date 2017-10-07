'use strict';
var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectItemButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectItemButton, base_object);

ObjectItemButton.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};


ObjectItemButton.prototype.onCollision = function(obj){
	var scene_name = this.scene.mainStage().current_scene;
	if (scene_name === "play") {
		// メニューを開く
		this.scene.mainStage().changeSubScene("menu");
	}
	else if (scene_name === "menu") {
		// メニューを閉じる
		this.scene.mainStage().changeSubScene("play");
	}
};

ObjectItemButton.prototype.setPosition = function(){
	this.x(48 + 24);
	this.y(this.scene.mainStage().height - 75);
};

ObjectItemButton.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	// デバッグ用の仮描画する
	if (!CONSTANT.DEBUG.ON) return;

	var ctx = this.core.ctx;
	ctx.save();

	// 仮で四角形を描画
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	//ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());

	// メニュー文字 表示
	ctx.font = "24px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillText("メニュー", this.x() + 5, this.y() + 5);

	ctx.restore();
};



ObjectItemButton.prototype.collisionWidth = function(){
	return 128;
};

ObjectItemButton.prototype.collisionHeight = function(){
	return 128;
};

module.exports = ObjectItemButton;
