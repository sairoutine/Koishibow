'use strict';
var _ = require('i18n4v')

var BaseScene = require('../hakurei').Scene.Base;
var Util = require('../hakurei').Util;
var CONSTANT_BUTTON = require('../hakurei').Constant.Button;

var AssetsConfig = require('../config/assets');

// 画面上に表示する曲の数
var SHOW_MUSIC_NUM = 12;
var SHOW_MUSIC_HALF_POINT_NUM = Math.floor(SHOW_MUSIC_NUM/2); // 曲名一覧の中間地点

var SceneMusic = function(core) {
	BaseScene.apply(this, arguments);

	// 全曲名のうちどのジャーナルを選択しているか
	this._idx_by_all = 0;

	// バックボタンにフォーカスがあるか
	this._is_focus_back_button = false;

	// 再生中のBGM(null なら再生停止)
	this._playing_music_idx = null;

	// 聞いたことのある曲(key: music_id, value: boolean)
	this._possess_music_map = {};

	// ゲームで使用するBGM一覧
	this._music_list = [];
	for (var i = 0, len = AssetsConfig.bgms.length; i < len; i++) {
		var conf = AssetsConfig.bgms[i];
		if (conf.isShowMusicRoom) {
			this._music_list.push(conf);
		}
	}
};
Util.inherit(SceneMusic, BaseScene);

SceneMusic.prototype.init = function(){
	BaseScene.prototype.init.apply(this, arguments);

	// 全曲名のうちどのジャーナルを選択しているか
	this._idx_by_all = 0;

	// バックボタンにフォーカスがあるか
	this._is_focus_back_button = false;

	// 再生中のBGM(null なら再生停止)
	this._playing_music_idx = null;

	// 聞いたことのある曲(key: music_id, value: boolean)
	this._possess_music_map = this._generatePossessMusicMap();

	// BGM停止
	this.core.audio_loader.stopBGM();

	// フェードインする
	this.core.scene_manager.setFadeIn(60, "black");

	// フェードアウトする
	this.core.scene_manager.setFadeOut(60, "black");
};

SceneMusic.prototype.beforeDraw = function(){
	BaseScene.prototype.beforeDraw.apply(this, arguments);

	// 選択
	var is_up_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP);
	var is_down_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN);
	var is_left_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_LEFT);
	var is_right_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_RIGHT);


	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
		if(this._isPlaying()) {
			// 曲再生中でなら再生停止
			this._stopBGM();
		}
		else {
			// 曲再生中でなければタイトルへ戻る
			this.core.scene_manager.changeScene("title");
		}
	}
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		if (this._isFocusMusic()) {
			// BGM再生
			this._playFocusBGM();
		}
		else if (this._isFocusBack()) {
			// バックボタンを押したらタイトルへ戻る
			this.core.scene_manager.changeScene("title");
		}
		else {
			throw new Error("illegal status.");
		}
	}
	else if(is_up_push || is_down_push) {
		// 曲名 選択
		if (this._isFocusMusic()) {
			// 上
			if (is_up_push) {
				this._idx_by_all--;
				if (this._idx_by_all < 0) {
					this._idx_by_all = 0;

					// バックボタンへ
					this._is_focus_back_button = true;
				}
			}
			// 下
			else if (is_down_push) {
				this._idx_by_all++;
				if (this._idx_by_all > this._music_list.length - 1) {
					this._idx_by_all = this._music_list.length - 1;

					// バックボタンへ
					this._is_focus_back_button = true;
				}
			}
		}
		// バックボタンからフォーカスを曲名に戻す
		else if (this._isFocusBack()) {
			// 上
			if (is_up_push) {
				if (this._idx_by_all === this._music_list.length - 1) {
					// バックボタンからフォーカスを外す
					this._is_focus_back_button = false;
				}
			}
			// 下
			else if (is_down_push) {
				if (this._idx_by_all === 0) {
					// バックボタンからフォーカスを外す
					this._is_focus_back_button = false;
				}
			}
		}
		else {
			throw new Error("illegal status.");
		}
	}
	else if(is_left_push || is_right_push) {
		// バックボタンにフォーカスを当てる／外す
		this._is_focus_back_button = !this._is_focus_back_button;
	}
};

SceneMusic.prototype._isPlaying = function(){
	return this._playing_music_idx !== null;
};

SceneMusic.prototype._focusingScrolledMusicName = function(){
	return this._focusingScrolledSubstr(this._music_list[this._idx_by_all].name, 20);
};

SceneMusic.prototype._focusingScrolledMusicDescription = function(){
	return this._focusingScrolledSubstr(this._music_list[this._idx_by_all].description, 25);
};

SceneMusic.prototype._isFocusBack = function(){
	return this._is_focus_back_button;
};

SceneMusic.prototype._isFocusMusic = function(){
	return !this._is_focus_back_button;
};

SceneMusic.prototype._isPossess = function(key){
	return this._possess_music_map[key] ? true : false;
};

SceneMusic.prototype._playFocusBGM = function() {
	var name = this._music_list[this._idx_by_all].key

	if (this._isPossess(name)) {
		this._playing_music_idx = this._idx_by_all;

		this.core.audio_loader.changeBGM(name);
	}
};

SceneMusic.prototype._stopBGM = function() {
	this._playing_music_idx = null;

	this.core.audio_loader.stopBGM();
};



SceneMusic.prototype._scrollbarX = function(){
	var len = this._music_list.length <= 1 ? 1 : this._music_list.length - 1; // 0除算を防ぐ
	var offset = 623*2/3 * this._idx_by_all / len;

	return 244*2/3 + offset;
};

SceneMusic.prototype._drawMusicList = function(){
	var ctx = this.core.ctx;

	var show_music_list;   // 表示する曲一覧
	var cursor_index;      // カーソルの表示位置
	if (this._idx_by_all <= SHOW_MUSIC_HALF_POINT_NUM) {
		show_music_list = this._music_list.slice(0, SHOW_MUSIC_NUM);
		cursor_index = this._idx_by_all;
	}
	else if (this._idx_by_all <= this._music_list.length - SHOW_MUSIC_HALF_POINT_NUM - 1) {
		show_music_list = this._music_list.slice(
			this._idx_by_all - SHOW_MUSIC_HALF_POINT_NUM,
			SHOW_MUSIC_HALF_POINT_NUM + this._idx_by_all
		);
		cursor_index = SHOW_MUSIC_HALF_POINT_NUM;
	}
	else {
		show_music_list = this._music_list.slice(this._music_list.length - SHOW_MUSIC_NUM, this._music_list.length);
		cursor_index = this._idx_by_all - this._music_list.length + SHOW_MUSIC_NUM;
	}

	// 表示する曲一覧を走査
	for(var i = 0, len = show_music_list.length; i < len; i++) {
		var conf = show_music_list[i];

		var color, music_bg;
		if(this._isFocusMusic() && i === cursor_index) {
			// フォーカスがあたってる
			music_bg = this.core.image_loader.getImage("ui-musicroom-listbox01-on");

			// 文字色アクティブ
			color = Util.hexToRGBString("#e1d7b6");
		}
		else {
			// フォーカスがあたってない
			music_bg = this.core.image_loader.getImage("ui-musicroom-listbox01-off");

			// 文字色非アクティブ
			color = Util.hexToRGBString("#4c422c");
		}

		// 曲名 背景
		ctx.save();
		ctx.translate(690*2/3, (225 + i*60)*2/3);
		ctx.drawImage(music_bg,
			-music_bg.width*2/3/2,
			-music_bg.height*2/3/2,
			music_bg.width*2/3,
			music_bg.height*2/3);
		ctx.restore();

		// 曲名
		var text;
		if (this._isPossess(conf.key)) {
			text = this._playingScrolledSubstr(conf.name);
		}
		else {
			text = _("? ? ?");
		}
		ctx.save();
		ctx.fillStyle = color;
		ctx.textAlign = 'left';
		ctx.font = "20px 'OradanoGSRR'";
		ctx.fillText(text, 196, (232 + i * 60)*2/3);
		ctx.restore();
	}
};

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

	// 曲一覧
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
	if (this._isFocusMusic()) {
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
