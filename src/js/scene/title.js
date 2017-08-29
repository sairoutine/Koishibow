'use strict';

/* TODO:
 * UIParts Object 生成
 * var ui = new UIParts(x, y, width, height, function draw (core) {});
 * ui.setShowRect();
 * オンカーソルでメニューの文字が少し大きくなる
 * クリックするとゲーム画面へ
 */

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var H_CONSTANT = require('../hakurei').constant;
var CONSTANT = require('../constant');

var SHOW_TRANSITION_COUNT = 100;

var MENU = [
	["New Game", function (core) { return true; }, function (core) {
		core.changeScene("stage");
	}],
	["Continue", function (core) { return true; }, function (core) {
		core.changeScene("stage");
	}],
	["Options", function (core) { return true; }, function (core) {
		core.changeScene("stage");
	}],
];

var SceneTitle = function(core) {
	base_scene.apply(this, arguments);
};
util.inherit(SceneTitle, base_scene);

SceneTitle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	//TODO: this.core.stopBGM();

	// フェードインする
	this.setFadeIn(SHOW_TRANSITION_COUNT);
};


SceneTitle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.frame_count === 60) {
		//TODO: this.core.playBGM();
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

	// メニュー文字 表示
	ctx.font = "60px 'OradanoGSRR'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("Koishibow", this.core.width/2, 80);

	// メニュー一覧表示
	for(var i = 0, len = MENU.length; i < len; i++) {
		var menu = MENU[i];

		ctx.font = "36px 'OradanoGSRR'";
		ctx.fillText(menu[0], 520, 200 + i*50);
	}

	ctx.restore();


};

module.exports = SceneTitle;
