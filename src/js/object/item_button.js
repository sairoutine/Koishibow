'use strict';
var base_scene = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var ObjectItemButton = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(ObjectItemButton, base_scene);

ObjectItemButton.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
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
	this.x(48);
	this.y(this.scene.mainStage().height - 50);
};

ObjectItemButton.prototype.draw = function(){
	var ctx = this.core.ctx;
	ctx.save();

	// 仮で四角形を描画
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	//ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());

	// メニュー文字 表示
	ctx.font = "12px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillText("メニュー", this.x(), this.y() + 5);

	ctx.restore();
};



ObjectItemButton.prototype.collisionWidth = function(){
	return 64;
};

ObjectItemButton.prototype.collisionHeight = function(){
	return 64;
};

module.exports = ObjectItemButton;
