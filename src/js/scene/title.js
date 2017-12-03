'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var H_CONSTANT = require('../hakurei').constant;
var CONSTANT = require('../constant');

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
		return core.save_manager.getCurrentField() ? true : false;
	}, function (core) {
		core.changeScene("stage", core.save_manager.getCurrentField());
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

	var self = this;

	self.menu_ui = this._generateMenuUI();
	self.addObjects(self.menu_ui);
};
util.inherit(SceneTitle, base_scene);

SceneTitle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.core.audio_loader.stopBGM();

	// フェードインする
	this.setFadeIn(100, "black");
	// フェードアウトする
	this.setFadeOut(30, "black");
	// 指定フレーム数からBGM再生
	this.setWaitToStartBGM("title", 60);
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
				ctx.drawImage(logo, this.getCollisionLeftX(), this.getCollisionUpY(), logo.width*2/3, logo.height*2/3);
				ctx.restore();
			}));
		})(menu);
	}

	return menu_ui;
};

SceneTitle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// マウスの位置を取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	for (var i = 0, len = this.menu_ui.length; i < len; i++) {
		var menu = this.menu_ui[i];

		if(menu.checkCollisionWithPosition(x, y) && MENU[i][1](this.core)) {
			// クリックしたら
			if(this.core.input_manager.isLeftClickPush()) {
				this.core.audio_loader.playSound("select_title");
				MENU[i][2](this.core);
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
};

// 画面更新
SceneTitle.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;

	ctx.save();

	// 背景画像表示
	var title_bg = this.core.image_loader.getImage("ui-titlepg-bg-1");
	ctx.drawImage(title_bg,
					0,
					0,
					title_bg.width,
					title_bg.height,
					0,
					0,
					this.core.width,
					this.core.height);

	// ロゴ画像表示
	var logo = this.core.image_loader.getImage("ui-titlepg-img-logo-1");
	ctx.drawImage(logo,
	(this.width - logo.width*2/3)/2,
	455,
	logo.width*2/3, logo.height*2/3);

	ctx.restore();

	// UI パーツ表示
	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneTitle;
