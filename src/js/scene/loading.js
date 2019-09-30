'use strict';

// ローディングシーン

var base_scene = require('../hakurei').scene.base;
var CONSTANT = require('../constant');
var Util = require('../hakurei').util;

var Assets = {
	"initial": require('../config/assets'),
	"chapter0": require('../config/assets_chapter0'),
	"chapter1": require('../config/assets_chapter1'),
	"chapter2": require('../config/assets_chapter2'),
	"chapter3": require('../config/assets_chapter3'),
	"chapter4": require('../config/assets_chapter4'),
	"chapter5": require('../config/assets_chapter5'),
	"chapter6": require('../config/assets_chapter6'),
};

var SceneLoading = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneLoading, base_scene);

SceneLoading.prototype.init = function(group, next_scene_name, varArgs) {
	base_scene.prototype.init.apply(this, arguments);

	var args = Array.prototype.slice.call(arguments);

	if (args.length > 0) {
		group = args.shift();
	}
	else {
		group = "initial";
	}

	if (args.length > 0) {
		this._next_scene_name_and_arguments = args;
	}
	else {
		if (CONSTANT.DEBUG.START_SCENE) {
			// デバッグ用
			this._next_scene_name_and_arguments = CONSTANT.DEBUG.START_SCENE;
		}
		else {
			// 本番
			this._next_scene_name_and_arguments = ["title"];
		}
	}

	if(this.core.load_assets_group) {
		this._unload(this.core.load_assets_group);
	}

	this._load(group);

	if(group !== "initial") {
		this.core.load_assets_group = group
	}

};

SceneLoading.prototype._load = function(group) {
	var assets = Assets[group];

	if (!assets) return;

	// ゲームで使用する画像一覧
	for (var key in assets.images) {
		var image_conf = assets.images[key];
		this.core.image_loader.loadImage(key, image_conf);
	}

	// ゲームで使用するSE一覧
	for (var key2 in assets.sounds) {
		var conf2 = assets.sounds[key2];

		// デバッグ用ミュート
		var volume2 = CONSTANT.DEBUG.SOUND_OFF ? 0 : conf2.volume;

		this.core.audio_loader.loadSound(key2, conf2.path, volume2);
	}

	// ゲームで使用するBGM一覧
	for (var i = 0, len = assets.bgms.length; i < len; i++) {
		var conf3 = assets.bgms[i];
		// デバッグ用ミュート
		var volume3 = CONSTANT.DEBUG.SOUND_OFF ? 0 : conf3.volume;

		this.core.audio_loader.loadBGM(conf3.key, conf3.path, volume3, conf3.loopStart, conf3.loopEnd);
	}

	// ゲームで使用するフォント
	for (var key4 in assets.fonts) {
		var conf4 = assets.fonts[key4];
		this.core.font_loader.loadFont(key4, conf4.path, conf4.format);
	}
};

SceneLoading.prototype._unload = function(group) {
	var assets = Assets[group];

	if (!assets) return;

	// ゲームで使用する画像一覧
	for (var key in assets.images) {
		this.core.image_loader.unloadImage(key);
	}

	// ゲームで使用するSE一覧
	for (var key2 in assets.sounds) {
		this.core.audio_loader.unloadSound(key2);
	}

	// ゲームで使用するBGM一覧
	for (var i = 0, len = assets.bgms.length; i < len; i++) {
		var conf3 = assets.bgms[i];
		this.core.audio_loader.unloadBGM(conf3.key);
	}

	/* unloadFont が未実装のためコメントにする
	// ゲームで使用するフォント
	for (var key4 in assets.fonts) {
		this.core.font_loader.unloadFont(key4);
	}
	*/
};



SceneLoading.prototype.update = function() {
	base_scene.prototype.update.apply(this, arguments);
	if (this.core.isAllLoaded()) {
		// ロード後のシーンへ遷移
		this.core.scene_manager.changeScene.apply(this.core.scene_manager, this._next_scene_name_and_arguments);
	}
};
SceneLoading.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	// 背景
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, this.core.width, this.core.height);
	ctx.restore();

	// メッセージ
	var per_frame = this.frame_count % 60;
	var DOT_SPAN = 15;

	var dot = "";
	if (DOT_SPAN > per_frame && per_frame >= 0) {
		dot = "";
	}
	else if (DOT_SPAN*2 > per_frame && per_frame >= DOT_SPAN*1) {
		dot = ".";
	}
	else if (DOT_SPAN*3 > per_frame && per_frame >= DOT_SPAN*2) {
		dot = "..";
	}
	else {
		dot = "...";
	}

	ctx.save();
	ctx.fillStyle = "white";
	ctx.textAlign = 'left';
	ctx.font = "30px 'OradanoGSRR'";
	ctx.fillText('Now Loading' + dot, this.core.width - 250, this.core.height - 50);
	ctx.restore();


	// プログレスバー
	ctx.save();
	ctx.fillStyle = "white";
	ctx.fillRect(0, this.core.height - 20, this.core.width * this.progress(), 50);
	ctx.restore();
};


SceneLoading.prototype.progress = function(){
	var progress = (this.core.audio_loader.progress() + this.core.image_loader.progress() + this.core.font_loader.progress()) / 3;
	return progress;
};

module.exports = SceneLoading;
