'use strict';
var _ = require('i18n4v');
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectChapter1Hashigo = function(core) {
	base_object.apply(this, arguments);

	this._width  = null;
	this._height = null;
};
Util.inherit(ObjectChapter1Hashigo, base_object);

ObjectChapter1Hashigo.prototype.isCollision = function(obj) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	// かつ、はしご使用イベントを未再生なら
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye() && this.core.save_manager.scenario.getPlayedCount("chapter1_08-useHashigo") === 0;
};

ObjectChapter1Hashigo.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._width  = null;
	this._height = null;
};

// パラメータをオブジェクトに設定する
ObjectChapter1Hashigo.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	this.setPosition(data.x, data.y);

	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
};

ObjectChapter1Hashigo.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectChapter1Hashigo.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

// こいしに触られたときの処理
ObjectChapter1Hashigo.prototype.onTouchByKoishi = function() {
	// はしごを持っていれば
	if (this.core.save_manager.item.existsItem("05")) {
		// 竹とんぼで遊ぶシーンへ
		this.scene.root().changeSubScene("touch_hashigo");
	}
	// 持ってなければセリフ再生
	else {
		this.scene.root().changeSubScene("talk_with_object", [
			{"chara": "koishi", "exp": "look_top",  serif1: _("たけとんぼ！"), serif2: _("たけとんぼ！"), serif3: _("たけとんぼ！"), serif4: _("たけとんぼ！")},
			{"chara": "koishi", "exp": null,  serif1: _("あれで遊びたいなー"), serif2: _("あれで遊びたいなー"), serif3: _("あれで遊びたいなー"), serif4: _("あれで遊びたいなー")},
		], this);
	}
};

module.exports = ObjectChapter1Hashigo;
