'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;
var SS = require('../sprite_studio');
var AnimeMap = require('../../anime');
var LogicCollideWithLight = require('../../logic/collide_with_light');

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
	this._sound_back_name  = null;
	this._bgm_name  = null;
	this._bgm_back_name  = null;


	// アニメ
	this.sprite = new SS(this.scene);

	this._is_touch = false;
	this._is_mouseover = false;
	this._is_animation_once = false;
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
	this._sound_back_name  = null;
	this._bgm_name  = null;
	this._bgm_back_name  = null;


	this._is_touch = false;
	this._is_mouseover = false;
	this._is_animation_once = false;
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
ObjectAnimeImage.prototype.addSound = function(sound_name, sound_back_name, bgm, bgm_back){
	this._sound_name  = sound_name;
	this._sound_back_name  = sound_back_name;
	this._bgm_name  = bgm;
	this._bgm_back_name  = bgm_back;

};







ObjectAnimeImage.prototype.onCollision = function(obj){
	// サードアイ使用中なら今のところ何もしない
	if (this.scene.mainStage().isUsingEye()) return;

	if(this.core.input_manager.isLeftClickPush()) {
		this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
		this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalk, this));
	}
	else {
		if (!this._is_touch) {
			this.core.changeTouchCursor();
		}
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
	if (this.serif) {
		this.scene.mainStage().changeSubScene("talk", this.serif);
	}

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
ObjectAnimeImage.prototype.onMouseOver = function(){
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

	// 1度でもマウスオーバーアニメーションを再生していたら裏⇛表, 表⇛裏の遷移アニメは非表示
	if (this._is_animation_once) {
		if (this._bgm_back_name) {
			this.core.addBGM(this._bgm_back_name);
		}
		this.sprite.changeAnimation(this.onmouseover_anime);
	}
	else {
		var core = this.core;
		var sprite = this.sprite;
		var onmouseover_anime = this.onmouseover_anime;
		var bgm_back_name = this._bgm_back_name;
		sprite.playAnimationOnce(this.onmouseover_start_anime, function () {
			if (bgm_back_name) {
				core.addBGM(bgm_back_name);
			}
			sprite.changeAnimation(onmouseover_anime);
		});

		// 音
		if (this._sound_back_name) {
			this.core.playSound(this._sound_back_name);
		}

	}
	this._is_mouseover = true;
};

ObjectAnimeImage.prototype.beforeDraw = function() {
	base_object.prototype.beforeDraw.apply(this, arguments);
	this.sprite.beforeDraw();

	if(this._is_mouseover) {
		// マウス位置したところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// マウスオーバーしてないなら解除
		if (!this.scene.mainStage().isUsingEye() || !LogicCollideWithLight.check(this, this.scene.mainStage())) {
			var sprite = this.sprite;
			var anime = this._is_touch ? this.after_anime : this.before_anime;

			// 1度でもマウスオーバーアニメーションを再生していたら裏⇛表, 表⇛裏の遷移アニメは非表示
			if (this._is_animation_once) {

				if (this._bgm_back_name) {
					this.core.stopBGM(this._bgm_back_name);
				}
				this.sprite.changeAnimation(anime);
			}
			else {
				var core = this.core;
				var bgm_back_name = this._bgm_back_name;
				sprite.playAnimationOnce(this.onmouseover_end_anime, function (){
					if (bgm_back_name) {
						core.stopBGM(bgm_back_name);
					}
					sprite.changeAnimation(anime);
				});
			}

			this._is_animation_once = true;
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

module.exports = ObjectAnimeImage;