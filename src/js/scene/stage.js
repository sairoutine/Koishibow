'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;
var Koishi = require('../object/koishi');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(is_left){
	base_scene.prototype.init.apply(this, arguments);

	this.setFadeIn(30, "black");

	this.koishi = new Koishi(this);
	if (is_left) {
		this.koishi.init(this.width - 180, 360);
		this.koishi.sprite.setReflect(true);
	}
	else {
		this.koishi.init(180, 360);
	}
};

SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		var collision_size = 30;
		// TODO: ちゃんと書く
		if (0+24 - collision_size/2 < x && x < 0+24 + collision_size/2 &&
			this.height/2 - collision_size/2 < y && y < this.height/2 + collision_size) {
			// フィールド遷移
			this.setFadeOut(30, "black");
			this.core.changeScene("stage", true);
		}
		else if (this.width - 24 - collision_size/2 < x && x < this.width - 24 + collision_size/2 &&
			this.height/2 - collision_size/2 < y && y < this.height/2 + collision_size) {
			// フィールド遷移
			this.setFadeOut(30, "black");
			this.core.changeScene("stage");
		}
		else {
			// こいしを移動
			this.koishi.setMoveTarget(x, y);
		}
	}

	this.koishi.beforeDraw();
};

// 画面更新
SceneStage.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;

	// 背景描画
	var title_bg = this.core.image_loader.getImage('bg');
	ctx.save();
	ctx.drawImage(title_bg,
					0,
					0,
					title_bg.width,
					title_bg.height,
					0,
					0,
					this.core.width,
					this.core.height);
	ctx.restore();

	// フィールド遷移矢印
	ctx.font = "48px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("◀", 0 + 24, this.height/2);
	ctx.fillText("▶", this.width - 24, this.height/2);






	// こいし表示
	this.koishi.draw();
};

module.exports = SceneStage;
