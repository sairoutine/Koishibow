'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var H_CONSTANT = require('../hakurei').constant;
var CONSTANT = require('../constant');

var UIParts = require('../hakurei').object.ui_parts;

var SHOW_TRANSITION_COUNT = 100;

var MENU = [
	["New Game", function (core) { return true; }, function (core) {
		core.changeScene("stage", "chapter0_myroom");
	}],
	["Continue", function (core) { return true; }, function (core) {
		core.changeScene("stage", "chapter0_myroom");
	}],
	["Options", function (core) { return true; }, function (core) {
		core.changeScene("stage", "chapter0_myroom");
	}],
];

var SceneTitle = function(core) {
	base_scene.apply(this, arguments);

	var self = this;

	self.menu_ui = [];

	// メニュー一覧表示
	for(var i = 0, len = MENU.length; i < len; i++) {
		var menu = MENU[i];

		(function (menu) {
			self.menu_ui.push(new UIParts(self, 780, 300 + i*75, 240, 60, function draw () {
				var ctx = this.core.ctx;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = 'rgb( 255, 255, 255 )';

				if (this.is_big) {
					ctx.font = "64px 'OradanoGSRR'";
				}
				else {
					ctx.font = "56px 'OradanoGSRR'";
				}

				ctx.fillText(menu[0], this.x(), this.y());
			}));
		})(menu);
	}
	self.addObjects(self.menu_ui);
};
util.inherit(SceneTitle, base_scene);

SceneTitle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	//TODO: this.core.stopBGM();

	// フェードインする
	this.setFadeIn(SHOW_TRANSITION_COUNT);
	this.setFadeOut(30, "black");
};


SceneTitle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.frame_count === 60) {
		//TODO: this.core.playBGM();
	}

	// マウスの位置を取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	var self = this;
	if(this.core.input_manager.isLeftClickPush()) {
		this.menu_ui.forEach(function(menu, i) {
			// クリックしたら
			if(menu.checkCollisionWithPosition(x, y)) {
				MENU[i][2](self.core);
			}
		});
	}
	else {
		this.menu_ui.forEach(function(menu, i) {
			// マウスカーソルが当たったら
			if(menu.checkCollisionWithPosition(x, y)) {
				menu.setVariable("is_big", true);
			}
			else {
				menu.setVariable("is_big", false);
			}
		});
	}
};

// 画面更新
SceneTitle.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;

	ctx.save();

	var title_bg = this.core.image_loader.getImage('title');

	// 背景画像表示
	ctx.drawImage(title_bg,
					0,
					0,
					title_bg.width,
					title_bg.height,
					0,
					0,
					this.core.width,
					this.core.height);

	var logo = this.core.image_loader.getImage('logo_wht');
	// ロゴ画像表示
		ctx.drawImage(logo,
		180,
		-180,
		logo.width*0.3, logo.height*0.3);

	ctx.restore();

	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneTitle;
