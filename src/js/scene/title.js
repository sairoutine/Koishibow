'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SS = require('../object/anime_object');
var StartAnimeJson = require('../data/anime/title/title01_anime_1');
var IngAnimeJson = require('../data/anime/title/title02_anime_1');
var EndAnimeJson = require('../data/anime/title/title03_anime_1');

var CONSTANT_BUTTON = require('../hakurei').constant.button;
var UIParts = require('../hakurei').object.ui_parts;

var MENU = [
	// game start
	["ui-titlepg-btn-ng", function (core) { return true; }, function (core) {
		// セーブを消去
		core.save_manager.del();

		core.scene_manager.changeScene("howto");
	}],
	// continue
	["ui-titlepg-btn-con", function (core) {
		// セーブデータがあれば
		return core.save_manager.player.getCurrentField() ? true : false;
	}, function (core) {
		core.scene_manager.changeScene("stage", core.save_manager.player.getCurrentField());
	}],
	// config
	/*
	["ui-titlepg-btn-opt", function (core) { return true; }, function (core) {
		// TODO:
	}],
	*/
];

var SceneTitle = function(core) {
	base_scene.apply(this, arguments);

	// 背景アニメ
	this.ss = new SS(this);
	this.ss.x(this.width/2);
	this.ss.y(this.height/2);

	// UI
	this.menu_ui = this._generateMenuUI();
	this.addObjects(this.menu_ui);

	// メニューボタンがクリックされたときのフレーム数
	this._menu_clicked_frame_count = null;

	// 現在どのUIを選択しているか
	this._index = 0;
};
util.inherit(SceneTitle, base_scene);

SceneTitle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.core.audio_loader.stopBGM();

	// 指定フレーム数からBGM再生
	this.setWaitToStartBGM("title", 60);

	// 背景アニメ
	var ss = this.ss;
	ss.setAnime({
		default: StartAnimeJson,
		ing: IngAnimeJson,
		end: EndAnimeJson,
	});
	ss.init();
	// フェードインアニメ再生
	ss.playAnimationOnce("default", function () {
		ss.playAnimationInfinity("ing");
	});

	// メニューボタンがクリックされたときのフレーム数
	this._menu_clicked_frame_count = null;

	// セーブデータがあれば、コンティニューがデフォルト位置
	if(this.core.save_manager.player.getCurrentField()) {
		this._index = 1;
	}
	else {
		this._index = 0;
	}
};

// メニューUI一覧
SceneTitle.prototype._generateMenuUI = function(){
	var self = this;
	var menu_ui = [];
	for(var i = 0, len = MENU.length; i < len; i++) {
		var menu = MENU[i];

		(function (menu) {
			menu_ui.push(new UIParts(self, 380 + i*200, 670, 190, 63, function() {
				var ctx = this.core.ctx;
				ctx.save();
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = 'rgb( 255, 255, 255 )';

				var logo;
				if (this.is_big) {
					logo = this.core.image_loader.getImage(menu[0] + "-on");
				}
				else {
					logo = this.core.image_loader.getImage(menu[0] + "-off");
				}
				ctx.globalAlpha = this.scene.getAlpha();
				ctx.drawImage(logo, this.getCollisionLeftX(), this.getCollisionUpY(), logo.width*2/3, logo.height*2/3);
				ctx.restore();
			}));
		})(menu);
	}

	return menu_ui;
};

SceneTitle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	this.ss.beforeDraw();

	// 選択
	var is_left_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_LEFT);
	var is_right_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_RIGHT);
	if (is_left_push || is_right_push) {
		var before_index = this._index;
		// 左
		if (is_left_push) {
			this._index--;
			// 選択不能な選択肢はスキップ
			while (MENU[this._index] && !MENU[this._index][1](this.core)) {
				this._index--;
			}
			// 行き過ぎた場合戻す
			if (!MENU[this._index]) {
				this._index = before_index;
			}
		}
		// 右
		else if (is_right_push) {
			this._index++;
			// 選択不能な選択肢はスキップ
			while (MENU[this._index] && !MENU[this._index][1](this.core)) {
				this._index++;
			}
			// 行き過ぎた場合戻す
			if (!MENU[this._index]) {
				this._index = before_index;
			}
		}
	}

	for (var i = 0, len = this.menu_ui.length; i < len; i++) {
		var menu = this.menu_ui[i];
		if (i === this._index) {
			// マウスカーソルを乗せた瞬間に音を鳴らす
			if (!menu.is_big) {
				this.core.audio_loader.playSound("focuson_title");
				menu.setVariable("is_big", true);
			}
		}
		else {
			menu.setVariable("is_big", false);
		}
	}

	// 決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// SE 再生
		this.core.audio_loader.playSound("select_title");

		var core = this.core;
		var func = MENU[this._index][2];

		// フェードアウト
		this.ss.playAnimationOnce("end", function () {
			// フェードアウト後に実行
			func(core);
		});

		// メニューボタンがクリックされたときのフレーム数
		this._menu_clicked_frame_count = this.frame_count;
	}

	// タイトル放置演出
	if (this.frame_count === 14400) { // 4分後
		this.core.scene_manager.changeScene("leaving_title");
	}
};

// 画面更新
SceneTitle.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;

	ctx.save();

	// 背景画像表示
	this.ss.draw();

	// ロゴ画像表示
	var logo = this.core.image_loader.getImage("ui-titlepg-img-logo-1");
	ctx.globalAlpha = this.getAlpha();
	ctx.drawImage(logo,
	(this.width - logo.width*2/3)/2,
	455,
	logo.width*2/3, logo.height*2/3);

	ctx.restore();

	// UI パーツ表示
	base_scene.prototype.draw.apply(this, arguments);
};
SceneTitle.prototype.getAlpha = function(){

	// フェードアウト時
	if(this._menu_clicked_frame_count) {
		var count = (60 - (this.frame_count - this._menu_clicked_frame_count));
		if (count < 0) count = 0;

		return count/60;
	}
	// フェードイン時
	else {
		if(this.frame_count > 60) return 1.0; // フェードイン終了したらずっと 1.0
		return this.frame_count/60;
	}
};
module.exports = SceneTitle;
