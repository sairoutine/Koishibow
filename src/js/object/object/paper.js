'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');

var ObjectPaper = function(core) {
	base_object.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._picture = null;
	this._text    = null;

};
Util.inherit(ObjectPaper, base_object);

ObjectPaper.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._picture = null;
	this._text    = null;
};
ObjectPaper.prototype.addData = function(data) {
	this._image = this.core.image_loader.getImage(data.image);
	this._scale = data.scale;
	this._width  = data.width;
	this._height = data.height;


	this._picture = data.picture;
	this._text = data.text;

	this.setPosition(data.x, data.y);
};

ObjectPaper.prototype.onCollision = function(obj){
	if (!this.scene.mainStage().koishi().isMoving()) {
		this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
		this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalk, this));
	}
};

ObjectPaper.prototype.onCollisionAfterKoishiWalk = function(){
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("paper", this._text, this._picture);

	/*
	// こいしのアクション
	if (this._action_name) {
		this.scene.mainStage().koishi().actionByName(this._action_name);
	}
	*/

	// 音を再生
	this.core.playSound("show_journal");
};

ObjectPaper.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if (!this._image) return;
	var ctx = this.core.ctx;
	var image = this._image;

	// 背景描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
					-image.width*this._scale/2,
					-image.height*this._scale/2,
					image.width * this._scale,
					image.height * this._scale);
	ctx.restore();
};



ObjectPaper.prototype.collisionWidth = function(){
	if(this._width) return this._width;
	return this._image.width * this._scale;
};

ObjectPaper.prototype.collisionHeight = function(){
	if(this._height) return this._height;
	return this._image.height * this._scale;
};
ObjectPaper.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y() + this.collisionHeight()/4);
	area.setSize(this.collisionWidth(), this.collisionHeight()/2);
	area.setParentID(this.id);

	return area;
};





module.exports = ObjectPaper;
