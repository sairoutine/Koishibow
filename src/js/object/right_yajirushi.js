'use strict';
var base_object = require('../hakurei').object.sprite;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectRightYajirushi = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectRightYajirushi, base_object);

ObjectRightYajirushi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectRightYajirushi.prototype.setPosition = function(){
	this.x(this.scene.mainStage().width - 48);
	this.y(this.scene.mainStage().height/2);
};

ObjectRightYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");

	// chapter 0 の自室であれば遷移前／遷移先の際に、ドアを開けるおとを鳴らす
	if (this.scene.mainStage().field().key === "chapter0_myroom" || this.scene.mainStage().field().right_field === "chapter0_myroom") {
		this.core.playSound("chapter0-myroom-door_open");
	}

	var stage = this.scene.mainStage();

	// サードアイ使用中であれば off にする
	if (stage.isUsingEye()) {
		stage.unUseEye();
	}

	// 屋敷の廊下2はイベント再生する
	if (this.scene.mainStage().field().right_field === "chapter0_mansion_corridor2" &&
		!this.core.save_manager.isPlayedEvent("chapter0-event-encounter_satori")) {

		this.core.changeScene("event_for_encounter_satori");
	}
	// 通常の遷移
	else {
		this.core.changeScene("stage", this.scene.mainStage().field().right_field, false);
	}
};

ObjectRightYajirushi.prototype.collisionWidth = function(){
	return 128;
};

ObjectRightYajirushi.prototype.collisionHeight = function(){
	return 128;
};

ObjectRightYajirushi.prototype.spriteName = function(){
	return "arrow";
};
ObjectRightYajirushi.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectRightYajirushi.prototype.spriteWidth = function(){
	return 136;
};
ObjectRightYajirushi.prototype.spriteHeight = function(){
	return 124;
};

ObjectRightYajirushi.prototype.scaleHeight = function(){
	return 0.6;
};
ObjectRightYajirushi.prototype.scaleWidth = function(){
	return 0.6;
};

module.exports = ObjectRightYajirushi;
