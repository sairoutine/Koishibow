'use strict';
var _ = require('i18n4v')

var BaseScene = require('../hakurei').Scene.Base;
var Util = require('../hakurei').Util;
var CONSTANT_BUTTON = require('../hakurei').Constant.Button;
var AssetsConfig = require('../config/assets');

// 画面上に表示する曲の数
var SHOW_MUSIC_NUM = 12;
var SHOW_MUSIC_HALF_POINT_NUM = Math.floor(SHOW_MUSIC_NUM/2); // 曲名一覧の中間地点

// ボックス内の曲名の最大長
var MAX_MUSIC_NAME_LENGTH = 20;
// ボックス内の説明文の最大長
var MAX_DESCRIPTION_LENGTH = 25;
// リストの曲名の最大長
var MAX_MUSIC_LIST_NAME_LENGTH = 25;

var SceneMusic = function(core) {
	BaseScene.apply(this, arguments);

	// 全曲名のうちどのジャーナルを選択しているか
	this._idx_by_all = 0;

	// バックボタンにフォーカスがあるか
	this._is_focus_back_button = false;

	// BGMを再生開始した時刻(null なら再生停止)
	this._playing_music_frame_count = null;
	// 再生中のBGM(null なら再生停止)
	this._playing_music_idx = null;

	// フォーカスを当てた時刻
	this._focus_frame_count = 0;

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

	// BGMを再生開始した時刻(null なら再生停止)
	this._playing_music_frame_count = null;
	// 再生中のBGM(null なら再生停止)
	this._playing_music_idx = null;

	// フォーカスを当てた時刻
	this._focus_frame_count = 0;

	// 聞いたことのある曲(key: music_id, value: boolean)
	this._possess_music_map = this._generatePossessMusicMap();

	// BGM停止
	this.core.audio_loader.stopBGM();

	// フェードインする
	this.core.scene_manager.setFadeIn(60, "black");

	// フェードアウトする
	this.core.scene_manager.setFadeOut(60, "black");
};

SceneMusic.prototype.update = function(){
	BaseScene.prototype.update.apply(this, arguments);

	// 選択
	var is_up_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.UP);
	var is_down_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.DOWN);
	var is_left_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.LEFT);
	var is_right_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.RIGHT);


	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.B)) {
		if(this._isPlaying()) {
			// 曲再生中でなら再生停止
			this._stopBGM();
		}
		else {
			// バックボタンへ
			this._is_focus_back_button = true;
		}
	}
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
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

				// フォーカスを当てた時刻
				this._focus_frame_count = this.frame_count;

				if (this._idx_by_all < 0) {
					this._idx_by_all = 0;

					// バックボタンへ
					this._is_focus_back_button = true;
				}
			}
			// 下
			else if (is_down_push) {
				this._idx_by_all++;

				// フォーカスを当てた時刻
				this._focus_frame_count = this.frame_count;

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

		// フォーカスを当てた時刻
		this._focus_frame_count = this.frame_count;
	}
};

SceneMusic.prototype._isPlaying = function(){
	return this._playing_music_idx !== null;
};

SceneMusic.prototype._focusingScrolledMusicName = function(){
	var conf = this._music_list[this._idx_by_all];
	return this._focusingScrolledSubstr(conf.name, MAX_MUSIC_NAME_LENGTH);
};

SceneMusic.prototype._focusingScrolledMusicDescription = function(){
	var conf = this._music_list[this._idx_by_all];
	return this._focusingScrolledSubstr(conf.description, MAX_DESCRIPTION_LENGTH);
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
		this._playing_music_frame_count = this.frame_count;
		this._playing_music_idx = this._idx_by_all;

		this.core.audio_loader.changeBGM(name);
	}
};

SceneMusic.prototype._stopBGM = function() {
	this._playing_music_frame_count = null;
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
			text = this._playingScrolledSubstr(conf.key, conf.name);
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

SceneMusic.prototype._playingScrolledSubstr = function(key, name){
	// 曲名が長すぎる場合は
	if (name.length > MAX_MUSIC_LIST_NAME_LENGTH) {
		var start, end;
		// 現在再生中の曲ならば
		if(this._isPlaying() && this._music_list[this._playing_music_idx].key === key) {
			// 曲名の文字列をスクロールさせる
			name = this._scrolledSubstr(name, MAX_MUSIC_LIST_NAME_LENGTH, this._playing_music_frame_count);
		}
		else {
			// 末尾を切り取る
			start = 0;
			end = MAX_MUSIC_LIST_NAME_LENGTH;
			name = name.substring(start, end);
		}

		name = name + "...";
	}

	return name;
};

SceneMusic.prototype._scrolledSubstr = function(str, len, start_frame_count){

	var offset = Math.floor((this.frame_count - start_frame_count) / 30) % str.length;

	var start = offset;
	var end   = offset + len;

	str = str + str

	return str.substring(start, end);
};

SceneMusic.prototype._focusingScrolledSubstr = function(name, len){
	// 文字が長すぎる場合は
	if (name.length > len) {
		// 曲名の文字列をスクロールさせる
		name = this._scrolledSubstr(name, len, this._focus_frame_count);
		name = name + "...";
	}

	return name;
}

SceneMusic.prototype._generatePossessMusicMap = function(){
	var current_chapter = this.core.save_manager.player.getCurrentChapter();
	var map = {};
	for (var i = 0, len = this._music_list.length; i < len; i++) {
		var conf = this._music_list[i];
		// 曲が出現するチャプターをクリアしていたら
		if (current_chapter > conf.chapter) {
			map[ conf.key ] = true;
		}
	}

	return map;
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
	if (this._isPlaying() && this._idx_by_all === this._playing_music_idx) { // 再生中の曲にフォーカスがあれば
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

	// フォーカスされていて、かつ開放されている曲名と説明
	if (this._isFocusMusic() && this._isPossess(this._music_list[this._idx_by_all].key)) {
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
