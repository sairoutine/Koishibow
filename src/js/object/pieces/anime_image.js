'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;
var SS = require('../anime_object');
var AnimeMap = require('../../config/object_anime');

var ObjectAnimeImage = function(core) {
	base_object.apply(this, arguments);

	// 拡縮
	this._scale = 1;

	// 表オブジェクトのパラメータ
	this._front = {
		// クリック時のセリフ
		serif: null,
		// クリック時のこいしのアクション
		action_name: null,
		// クリック時のSE
		sound_name: null,
	};

	// 裏オブジェクトのパラメータ
	this._back = {
		// BGM
		bgm_name: null,

		// 裏オブジェクト サードアイに照らされた際のSE
		lighted_sound_name: null,
	};

	// サイズ
	this._width  = null;
	this._height = null;

	// アニメ
	this.ss = new SS(this.scene);

	// 表オブジェクトで既にクリック済かどうか
	this._is_clicked_in_front = false;

	// 裏オブジェクト中かどうか
	this._is_in_back = false;
};
Util.inherit(ObjectAnimeImage, base_object);

ObjectAnimeImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	// 拡縮
	this._scale = 1;

	// 表オブジェクトのパラメータ
	this._front = {
		// クリック時のセリフ
		serif: null,
		// クリック時のこいしのアクション
		action_name: null,
		// クリック時のSE
		sound_name: null,
	};

	// 裏オブジェクトのパラメータ
	this._back = {
		// BGM
		bgm_name: null,

		// 裏オブジェクト サードアイに照らされた際のSE
		lighted_sound_name: null,
	};

	// サイズ
	this._width  = null;
	this._height = null;

	// 表オブジェクトで既にクリック済かどうか
	this._is_clicked_in_front = false;

	// 裏オブジェクト中かどうか
	this._is_in_back = false;
};
ObjectAnimeImage.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);

	// update sprite
	this.ss.x(this.x());
	this.ss.y(this.y());
};

ObjectAnimeImage.prototype.setData = function(data) {
	// 位置
	this.setPosition(data.x, data.y);

	this.ss.setAnime({
		// 表

		// クリック前のアニメ
		front_before_click_anime: AnimeMap[data.anime1],
		default:                  AnimeMap[data.anime1],
		// クリック中のアニメーション
		front_clicking_anime: AnimeMap[data.anime2],
		// クリック後のアニメーション
		front_after_click_anime: AnimeMap[data.anime3],

		// 裏

		// サードアイで照らした際の開始アニメ
		lighted_start_anime: AnimeMap[data.anime4],
		// サードアイで照らした最中のアニメ
		lighting_anime: AnimeMap[data.anime5],
		// サードアイで照らした際の終了アニメ
		lighted_end_anime: AnimeMap[data.anime6],
	});
	this.ss.init();

	// 表オブジェクト クリック時のセリフ
	this._front.serif = data.serif;

	// 表オブジェクト クリック時のこいしのアクション
	this._front.action_name  = data.action_name;

	// 表オブジェクト クリック時のSE
	this._front.sound_name  = data.sound_name;

	// 裏オブジェクト中のBGM
	this._back.bgm_name  = data.bgm_back;

	// 裏オブジェクト サードアイに照らされた際のSE
	if (data.sound_back_name) {
		this._back.lighted_sound_name  = data.sound_back_name;
	}

	// サイズ
	if (data.scale) {
		this._scale = data.scale;
	}
	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
};


ObjectAnimeImage.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return !this.scene.root().isUsingEye();
};
// サードアイに照らされたとき(サードアイ使用時)
ObjectAnimeImage.prototype.onCollideWithLightIn3rdEye = function(){
	// 既に裏オブジェクトになっているなら何もしない
	if (this._is_in_back) return;

	// 照らされたときのアニメが設定されてないオブジェクトなら何もしない
	if (!this.ss.hasBackOnLightedAnime()) return;

	// 裏オブジェクトになった
	this._is_in_back = true;

	// 裏オブジェクトになったときの SE 再生
	if (this.back.lighted_sound_name) {
		this.core.playSound(this.back._sound_back_name);
	}

	var ss = this.ss;
	var audio_loader = this.core.audio_loader;
	var back_bgm_name = this._back.bgm_name; // 裏オブジェクト中のBGM

	// 照らされた際の開始アニメーション 再生
	this.ss.playAnimationOnce("lighted_start_anime", function () {
		// 裏オブジェクト中のBGM 再生
		if (back_bgm_name) {
			audio_loader.addBGM(back_bgm_name);
		}
		// 照らしてる最中のアニメーション再生
		ss.playAnimationInfinity("lighting_anime");
	});

};

// サードアイに照らされてないとき(サードアイ使用時)
ObjectAnimeImage.prototype.onNotCollideWithLightIn3rdEye = function(){
	// 裏オブジェクトになってないなら何もしない
	if (!this._is_in_back) return;

	// 照らされたときのアニメが設定されてないオブジェクトなら何もしない
	if (!this.ss.hasBackOnLightedAnime()) return;

	// 表オブジェクトになった
	this._is_in_back = false;

	// 表がクリック済ならクリック済アニメに戻る
	// 表がクリック前ならクリック前アニメに戻る
	var front_anime_name = this._is_clicked_in_front ? "front_after_click_anime" : "front_before_click_anime";

	var ss = this.ss;
	var audio_loader = this.core.audio_loader;
	var back_bgm_name = this._back.bgm_name; // 裏オブジェクト中のBGM

	// 表オブジェクトに戻る際のアニメ再生
	this.ss.playAnimationOnce("lighted_end_anime", function (){
		// 裏オブジェクト中のBGM 止める
		if (back_bgm_name) {
			audio_loader.stopBGM(back_bgm_name);
		}

		// 表オブジェクトのアニメに戻る
		ss.playAnimationInfinity(front_anime_name);
	});
};

ObjectAnimeImage.prototype.beforeDraw = function() {
	base_object.prototype.beforeDraw.apply(this, arguments);

	this.ss.beforeDraw();
};



ObjectAnimeImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	this.ss.draw();
};

ObjectAnimeImage.prototype.afterDraw = function(){
	base_object.prototype.afterDraw.apply(this, arguments);

	this.ss.afterDraw();
};



ObjectAnimeImage.prototype.collisionWidth = function(){
	if(this._width) return this._width;
	return this.ss.MarginWidth() * this._scale;
};

ObjectAnimeImage.prototype.collisionHeight = function(){
	if(this._height) return this._height;
	return this.ss.MarginHeight() * this._scale;
};

ObjectAnimeImage.prototype.isCollision = function(){
	// 一度既にクリックしていれば、二度目はクリックできない
	// マウスオーバーしてもカーソルも変わらない
	return this._is_clicked_in_front ? false : true;
};

// こいし移動後の処理
ObjectAnimeImage.prototype.onAfterWalkToHere = function() {
	// こいしのアクション
	if (this._action_name) {
		this.scene.root().koishi.actionByObject(this._action_name);
	}

	// 音を再生
	if (this._sound_name) {
		this.core.audio_loader.playSound(this._sound_name);
	}

	// 会話するオブジェクトなので、クリックしたら会話する
	if (this._front.serif) {
		this.scene.root().changeSubScene("talk_with_object", this._front.serif, this);
	}

	if (this.ss.hasFrontClickedAnime()) {
		// クリック中アニメに変更
		var ss = this.ss;
		ss.playAnimationOnce("front_clicking_anime", function (){
			// クリック後アニメに変更
			ss.playAnimationInfinity("front_after_click_anime");
		});
	}

	// クリック済に状態変更
	this._is_clicked_in_front = true;
};

module.exports = ObjectAnimeImage;
