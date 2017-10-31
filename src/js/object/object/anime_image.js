'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var SS = require('../sprite_studio');
var AnimeMap = require('../../anime');
var WalkImmovableArea = require('../walk_immovable_area');

var ObjectAnimeImage = function(core) {
	base_object.apply(this, arguments);

	// 拡縮
	this.scale = 1;

	this.before_anime = null;
	this.click_anime  = null;
	this.after_anime  = null;
	this.onmouseover_start_anime = null;
	this.onmouseover_anime       = null;
	this.onmouseover_end_anime   = null;


	this.serif = null;

	this._width  = null;
	this._height = null;

	this._action_name = null;

	this._sound_name  = null;

	// アニメ
	this.sprite = new SS(this.scene);

	this._is_touch = false;
	this._is_mouseover = false;
};
Util.inherit(ObjectAnimeImage, base_object);

ObjectAnimeImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.scale = 1;
	this.before_anime = null;
	this.click_anime  = null;
	this.after_anime  = null;
	this.onmouseover_start_anime = null;
	this.onmouseover_anime       = null;
	this.onmouseover_end_anime   = null;

	this.serif = null;

	this._width  = null;
	this._height = null;

	this._action_name = null;

	this._sound_name  = null;

	this._is_touch = false;
	this._is_mouseover = false;
};
ObjectAnimeImage.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);

	this.sprite.init(x, y, this.before_anime, 0, {scale: this.scale});

	// update sprite
	this.sprite.x(this.x());
	this.sprite.y(this.y());
};

ObjectAnimeImage.prototype.addAnime = function(before_anime, click_anime, after_anime, onmouseover_start_anime, onmouseover_anime, onmouseover_end_anime, scale){
	this.scale = scale || 1;
	this.before_anime = AnimeMap[before_anime];
	this.click_anime  = AnimeMap[click_anime];
	this.after_anime  = AnimeMap[after_anime];
	this.onmouseover_start_anime = AnimeMap[onmouseover_start_anime];
	this.onmouseover_anime       = AnimeMap[onmouseover_anime];
	this.onmouseover_end_anime   = AnimeMap[onmouseover_end_anime];
};
ObjectAnimeImage.prototype.addSerif = function(serif) {
	this.serif = serif;
};
ObjectAnimeImage.prototype.addSize = function(width, height){
	this._width  = width;
	this._height = height;
};
ObjectAnimeImage.prototype.addKoishiAction = function(action_name){
	this._action_name  = action_name;
};
ObjectAnimeImage.prototype.addSound = function(sound_name){
	this._sound_name  = sound_name;
};







ObjectAnimeImage.prototype.onCollision = function(obj){
	// クリックした場合
	if(this.core.input_manager.isLeftClickPush()) {
		// サードアイ使用中なら今のところ何もしない
		if (this.scene.mainStage().isUsingEye()) return;

		if (!this.scene.mainStage().koishi().isMoving()) {
			this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
			this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalk, this));
		}
	}
	// マウスオーバーした場合
	else {
		this.onCollisionByMouseOver();
	}
};
ObjectAnimeImage.prototype.onCollisionAfterKoishiWalk = function(){
	var self = this;

	if (this._is_touch) return;
	// オブジェクトのアニメーション
	var sprite = self.sprite;
	var after_anime = self.after_anime;
	var click_anime = self.click_anime;
	sprite.playAnimationOnce(click_anime, function (){
		sprite.changeAnimation(after_anime);
	});

	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk", this.serif);

	// こいしのアクション
	if (this._action_name) {
		this.scene.mainStage().koishi().actionByName(this._action_name);
	}

	// 音
	if (this._sound_name) {
		this.core.playSound(this._sound_name);
	}
	this._is_touch = true;
};


// マウスオーバーした場合
ObjectAnimeImage.prototype.onCollisionByMouseOver = function(){
	// サードアイを使用してなければ何もしない
	if (!this.scene.mainStage().isUsingEye()) return;

	// 既にマウスオーバーアニメ中なら何もしない
	if (this._is_mouseover) return;

	// マウスオーバーアニメが設定されてないオブジェクトなら何もしない
	if (!this.onmouseover_start_anime && !this.onmouseover_anime && !this.onmouseover_end_anime) return;

	// こいしの後ろにマウスカーソルがあるならアニメしない
	var x = this.core.input_manager.mousePositionX();
	if (this.scene.mainStage().koishi().isReflect()) {
		if (this.scene.mainStage().koishi().x() < x) {
			return;
		}
	}
	else {
		if (this.scene.mainStage().koishi().x() > x) {
			return;
		}
	}



	this._is_mouseover = true;

	var sprite = this.sprite;
	var onmouseover_anime = this.onmouseover_anime;
	sprite.playAnimationOnce(this.onmouseover_start_anime, function (){
		sprite.changeAnimation(onmouseover_anime);
	});



};

ObjectAnimeImage.prototype.beforeDraw = function() {
	base_object.prototype.beforeDraw.apply(this, arguments);
	this.sprite.beforeDraw();

	if(this._is_mouseover) {
		// マウス位置したところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// マウスオーバーしてないなら解除
		if(!this.checkCollisionWithPosition(x, y)) {
			var sprite = this.sprite;
			var anime = this._is_touch ? this.after_anime : this.before_anime;
			sprite.playAnimationOnce(this.onmouseover_end_anime, function (){
				sprite.changeAnimation(anime);
			});


			this._is_mouseover = false;
		}
	}
};



ObjectAnimeImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	this.sprite.draw();
};


ObjectAnimeImage.prototype.collisionWidth = function(){
	if(this._width) return this._width;
	// index = 0 のみ有効
	return this.before_anime[0].animation.MarginWidth * this.scale;
};

ObjectAnimeImage.prototype.collisionHeight = function(){
	if(this._height) return this._height;
	// index = 0 のみ有効
	return this.before_anime[0].animation.MarginHeight * this.scale;
};
ObjectAnimeImage.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y() + this.collisionHeight()/4);
	area.setSize(this.collisionWidth(), this.collisionHeight()/2);
	area.setParentID(this.id);

	return area;
};


module.exports = ObjectAnimeImage;
