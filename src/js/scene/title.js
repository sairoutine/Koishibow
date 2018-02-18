'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SS = require('../object/anime_object');
var StartAnimeJson = require('../data/anime/title/title01_anime_1');
var IngAnimeJson = require('../data/anime/title/title02_anime_1');
var EndAnimeJson = require('../data/anime/title/title03_anime_1');

var UIParts = require('../hakurei').object.ui_parts;

var MENU = [
	// game start
	["ui-titlepg-btn-ng", function (core) { return true; }, function (core) {
		// セーブを消去
		core.save_manager.del();

		core.changeScene("howto");
	}],
	// continue
	["ui-titlepg-btn-con", function (core) {
		// セーブデータがあれば
		return core.save_manager.player.getCurrentField() ? true : false;
	}, function (core) {
		core.changeScene("stage", core.save_manager.player.getCurrentField());
	}],
	// config
	/*
	["ui-titlepg-btn-opt", function (core) { return true; }, function (core) {
		core.changeScene("stage", "chapter0_myroom");
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

	// マウスの位置を取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	for (var i = 0, len = this.menu_ui.length; i < len; i++) {
		var menu = this.menu_ui[i];

		if(menu.checkCollisionWithPosition(x, y) && MENU[i][1](this.core)) {
			// クリックしたら
			if(this.core.input_manager.isLeftClickPush()) {

				// SE 再生
				this.core.audio_loader.playSound("select_title");

				var core = this.core;
				var func = MENU[i][2];
				// フェードアウト
				this.ss.playAnimationOnce("end", function () {
					func(core);
				});

				// メニューボタンがクリックされたときのフレーム数
				this._menu_clicked_frame_count = this.frame_count;
			}
			// マウスカーソルを乗せたら
			else {
				// マウスカーソルを乗せた瞬間に音を鳴らす
				if (!menu.is_big) {
					this.core.audio_loader.playSound("focuson_title");
				}
				menu.setVariable("is_big", true);
			}
		}
		else {
			menu.setVariable("is_big", false);
		}
	}

	// タイトル放置演出
	if (this.frame_count === 14400) { // 4分後
		this.core.changeScene("leaving_title");
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
