'use strict';

var BaseScene = require('../hakurei').Scene.Base;

var Util = require('../hakurei').Util;
// var CONSTANT_BUTTON = require('../hakurei').Constant.Button;

var SceneMusic = function(core) {
	BaseScene.apply(this, arguments);

};
Util.inherit(SceneMusic, BaseScene);

SceneMusic.prototype.init = function(){
	BaseScene.prototype.init.apply(this, arguments);

	// フェードインする
	this.core.scene_manager.setFadeIn(60, "black");

	// フェードアウトする
	this.core.scene_manager.setFadeOut(60, "black");
};


SceneMusic.prototype.beforeDraw = function(){
	BaseScene.prototype.beforeDraw.apply(this, arguments);

	/*
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z) || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
		this.core.audio_loader.playSound("show_journal");
		this.core.scene_manager.changeScene(CONSTANT.INITIAL_CHAPTER);
	}
	*/
};
// TODO:
SceneMusic.prototype._isPlaying = function(){
	return true;
};
SceneMusic.prototype._focusMusicName = function(){
	return "あああああいいいいいうううううえええええおおおおおかかかかかききききき";
};
SceneMusic.prototype._focusMusicDescription = function(){
	return "あああああいいいいいうううううえええええおおおおおかかかかかききききき";
};
SceneMusic.prototype._playingScrolledSubstr = function(name){
	if (name.length > 25) {
		name = name.substring(0, 25) + "...";
	}

	return name;
}
SceneMusic.prototype._focusingScrolledSubstr = function(name, len){
	if (name.length > len) {
		name = name.substring(0, len);
	}

	return name;
}
SceneMusic.prototype._focusingScrolledMusicName = function(){
	return this._focusingScrolledSubstr(this._focusMusicName(), 20);
};
SceneMusic.prototype._focusingScrolledMusicDescription = function(name){
	return this._focusingScrolledSubstr(this._focusMusicDescription(), 25);
};
SceneMusic.prototype._isFocusBack = function(){
	return false;
};
SceneMusic.prototype._scrollbarX = function(){
	return 244*2/3;
};
SceneMusic.prototype._drawMusicList = function(){
	var ctx = this.core.ctx;

	var music_bg;
	for (var i = 0, len = 12; i < len; i++) {
		var no = "01"; // TODO:
		var focus = i === 0 ? true : false; // TODO:

		// 曲名 背景
		if (focus) {
			// 再生中
			music_bg = this.core.image_loader.getImage("ui-musicroom-listbox01-on");
		}
		else {
			// 停止中
			music_bg = this.core.image_loader.getImage("ui-musicroom-listbox01-off");
		}
		ctx.save();
		ctx.translate(690*2/3, (225 + i*60)*2/3);
		ctx.drawImage(music_bg,
			-music_bg.width*2/3/2,
			-music_bg.height*2/3/2,
			music_bg.width*2/3,
			music_bg.height*2/3);
		ctx.restore();

		// 曲名
		ctx.save();
		ctx.textAlign = 'left';
		ctx.fillStyle = focus ? Util.hexToRGBString("#e1d7b6") : Util.hexToRGBString("#4c422c");
		ctx.font = "20px 'OradanoGSRR'";
		var name = this._focusMusicName();
		name = this._playingScrolledSubstr(name);
		ctx.fillText(no + "：" + name, 196, (232 + i * 60)*2/3);
		ctx.restore();

	}
};
// 画面更新
SceneMusic.prototype.draw = function(){
	BaseScene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	// 背景
	ctx.save();
	var background = this.core.image_loader.getImage("ui-musicroom-bg");

	ctx.drawImage(background,
		0,
		0,
		background.width*2/3,
		background.height*2/3);
	ctx.restore();

	// フレーム
	ctx.save();
	var frame = this.core.image_loader.getImage("ui-musicroom-bg-frame");
	ctx.translate(720*2/3, 106.5*2/3);
	ctx.drawImage(frame,
		-frame.width*2/3/2,
		-frame.height*2/3/2,
		frame.width*2/3,
		frame.height*2/3);
	ctx.restore();

	// 再生中ステータス アイコン
	ctx.save();
	var status;
	if (this._isPlaying()) {
		// 再生中
		status = this.core.image_loader.getImage("ui-musicroom-btn-stop");
	}
	else {
		// 停止中
		status = this.core.image_loader.getImage("ui-musicroom-btn-play");
	}
	ctx.translate(1118*2/3, 110*2/3);
	ctx.drawImage(status,
		-status.width*2/3/2,
		-status.height*2/3/2,
		status.width*2/3,
		status.height*2/3);
	ctx.restore();

	// バックボタン背景
	ctx.save();
	var back_bg = this.core.image_loader.getImage("ui-common-btn-back_bg");
	ctx.translate(720*2/3, 1006.5*2/3);
	ctx.drawImage(back_bg,
		-back_bg.width*2/3/2,
		-back_bg.height*2/3/2,
		back_bg.width*2/3,
		back_bg.height*2/3);
	ctx.restore();

	// バックボタン
	ctx.save();
	var back_button;
	if (this._isFocusBack()) {
		back_button = this.core.image_loader.getImage("ui-common-btn-back-on");
	}
	else {
		back_button = this.core.image_loader.getImage("ui-common-btn-back-off");
	}
	ctx.translate(718.5*2/3, 1024*2/3);
	ctx.drawImage(back_button,
		-back_button.width*2/3/2,
		-back_button.height*2/3/2,
		back_button.width*2/3,
		back_button.height*2/3);
	ctx.restore();

	this._drawMusicList();

	// スクロールバー背景
	ctx.save();
	var scrollbar_bar = this.core.image_loader.getImage("ui-musicroom-scrollbar01-bar");
	ctx.translate(1144*2/3, 555*2/3);
	ctx.drawImage(scrollbar_bar,
		-scrollbar_bar.width*2/3/2,
		-scrollbar_bar.height*2/3/2,
		scrollbar_bar.width*2/3,
		scrollbar_bar.height*2/3);
	ctx.restore();

	// スクロールバー
	ctx.save();
	var scrollbar_box = this.core.image_loader.getImage("ui-musicroom-scrollbar01-box");
	ctx.translate(1144*2/3, this._scrollbarX());
	ctx.drawImage(scrollbar_box,
		-scrollbar_box.width*2/3/2,
		-scrollbar_box.height*2/3/2,
		scrollbar_box.width*2/3,
		scrollbar_box.height*2/3);
	ctx.restore();

	// フォーカスされている曲名と説明
	if (!this._isFocusBack()) {
		ctx.save();
		ctx.textAlign = 'left';

		// 曲名
		ctx.fillStyle = Util.hexToRGBString("#e1d7b6");
		ctx.font = "24px 'OradanoGSRR'";
		ctx.fillText(this._focusingScrolledMusicName(), 196, 100*2/3);

		// 説明
		ctx.fillStyle = "white";
		ctx.font = "20px 'OradanoGSRR'";
		ctx.fillText(this._focusingScrolledMusicDescription(), 196, 136*2/3);

		ctx.restore();
	}
};
module.exports = SceneMusic;
