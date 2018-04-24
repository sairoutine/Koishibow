'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');

var ObjectFieldChange = function(core) {
	base_object.apply(this, arguments);

	this._next_field_name = null;
	this._width  = null;
	this._height = null;

};
Util.inherit(ObjectFieldChange, base_object);

ObjectFieldChange.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._next_field_name = null;
	this._width  = null;
	this._height = null;

};

// パラメータをオブジェクトに設定する
ObjectFieldChange.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	this.setPosition(data.x, data.y);

	this._next_field_name = data.next_field_name;
	this._width  = data.width;
	this._height = data.height;
};

ObjectFieldChange.prototype.collisionWidth = function(){
	return this._width;
};

ObjectFieldChange.prototype.collisionHeight = function(){
	return this._height;
};
ObjectFieldChange.prototype.isCheckInTouchArea = function(){
	return false;
};

ObjectFieldChange.prototype.onCollision = function(obj){
	var field_data = this.scene.getFieldData();
	var current_field_name = field_data.key;

	// 3rd eye 使用中であれば解除
	if (this.scene.isUsingEye()) {
		this.scene.switchEyeOff();
	}

	// 歩きモーション解除
	this.scene.koishi.setWaitAnime();


	// chapter 0 の自室であれば遷移前／遷移先の際に、ドアを開ける音を鳴らす
	if (current_field_name === "chapter0_myroom" || this._next_field_name === "chapter0_myroom") {
		this.core.audio_loader.playSound("chapter0-myroom-door_open");
	}
	/*
	 * TODO:
	// 屋敷の廊下2はイベント再生する
	if (this.scene.mainStage().field().left_field === "chapter0_mansion_corridor2" &&
		!this.core.save_manager.event.isPlayedEvent("chapter0-event-encounter_satori")) {
		this.core.scene_manager.changeScene("event_for_encounter_satori");
	}
	// 通常の遷移
	else {
		this.core.scene_manager.changeScene("stage", this.scene.mainStage().field().left_field, true);
	}
	*/
	// フィールド遷移中はプレイヤーに操作させない
	this.scene.changeSubScene("lock");
	// フィールド遷移
	this.core.scene_manager.changeScene("stage", this._next_field_name, current_field_name);
};

ObjectFieldChange.prototype.isShow = function() {
	return false;
};

ObjectFieldChange.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y());
	area.setSize(0, 0);
	area.setParentID(this.id);
	return area;
};




module.exports = ObjectFieldChange;

