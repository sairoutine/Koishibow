'use strict';
var base_object = require('../../hakurei').object.sprite;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');




var ObjectNextFieldButtonBase = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectNextFieldButtonBase, base_object);

ObjectNextFieldButtonBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectNextFieldButtonBase.prototype.onCollision = function(obj){
	var field_data = this.scene.getFieldData();
	var current_field_name = field_data.key;
	var next_field_name = this.nextFieldName();

	// chapter 0 の自室であれば遷移前／遷移先の際に、ドアを開ける音を鳴らす
	if (current_field_name === "chapter0_myroom" || next_field_name === "chapter0_myroom") {
		this.core.audio_loader.playSound("chapter0-myroom-door_open");
	}

	/*
	 * TODO:
	// 屋敷の廊下2はイベント再生する
	if (this.scene.mainStage().field().left_field === "chapter0_mansion_corridor2" &&
		!this.core.save_manager.isPlayedEvent("chapter0-event-encounter_satori")) {
		this.core.changeScene("event_for_encounter_satori");
	}
	// 通常の遷移
	else {
		this.core.changeScene("stage", this.scene.mainStage().field().left_field, true);
	}
	*/
	this.core.changeScene("stage", next_field_name, current_field_name);
};

ObjectNextFieldButtonBase.prototype.isShow = function() {
	return this.nextFieldName() ? true : false;
};


ObjectNextFieldButtonBase.prototype.setPosition = function(){
	throw new Error("setPosition method must be implemented");
};

ObjectNextFieldButtonBase.prototype.nextFieldName = function(){
	throw new Error("nextFieldName method must be implemented");
};

ObjectNextFieldButtonBase.prototype.collisionWidth = function(){
	return 128;
};

ObjectNextFieldButtonBase.prototype.collisionHeight = function(){
	return 128;
};

ObjectNextFieldButtonBase.prototype.spriteName = function(){
	return "arrow";
};
ObjectNextFieldButtonBase.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectNextFieldButtonBase.prototype.spriteWidth = function(){
	return 136;
};
ObjectNextFieldButtonBase.prototype.spriteHeight = function(){
	return 124;
};
ObjectNextFieldButtonBase.prototype.scaleHeight = function(){
	return 2/3;
};
ObjectNextFieldButtonBase.prototype.scaleWidth = function(){
	return 2/3;
};

module.exports = ObjectNextFieldButtonBase;
