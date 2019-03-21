'use strict';

// プレイヤーに何も操作させない

var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;
var SS = require('../object/anime_object');
// ゲームオーバー(しゃがみ込む) 不	80	2.7秒
var jsonDataOfGameover = require('../data/anime/koishi/gameover_anime_1');

var SceneGameover = function(core) {
	base_scene.apply(this, arguments);

	this._state = 0;
	this._alpha = 0.0;
};
Util.inherit(SceneGameover, base_scene);

SceneGameover.prototype.init = function(koishi_x, koishi_y){
	base_scene.prototype.init.apply(this, arguments);

	this._state = 0;
	this._alpha = 0.0;

	// 音を止める
	this.core.audio_loader.stopBGM();

	// こいしが膝をつくアニメ再生
	this.koishi = new SS(this); // TODO: constructor におきたいが、おくと二回目の再生時にplayanimationonce してくれない
	this.koishi.x(koishi_x);
	this.koishi.y(koishi_y);

	this.koishi.setAnime({
		default: jsonDataOfGameover,
	});
	this.koishi.init();

	var self = this;
	this.koishi.playAnimationOnce("default", function () {
		self._state = 1;
	});

	// キュルキュル音
	self.core.audio_loader.playSound("gameover1");
	// 膝をつく音
	this.core.time_manager.setTimeout(function () {
		self.core.audio_loader.playSound("gameover2");
	}, 80);
	// 途切れる音
	this.core.time_manager.setTimeout(function () {
		self.core.audio_loader.playSound("gameover3");
	}, 162); // 2.7秒後(キュルキュル音のあと)
};


SceneGameover.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	this.koishi.update();

	if (this._state === 1) {
		this._alpha += 0.01;

		if (this._alpha >= 1.0) {
			this._alpha = 1.0;
			this._state = 2;
		}
	}
	else if (this._state === 2) {
		// 暗転後 倒れこむ音
		this.core.audio_loader.playSound("gameover4");
		this.core.scene_manager.changeScene("title");
	}
};

SceneGameover.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();
	ctx.fillStyle = 'black';
	//ctx.globalAlpha = 0.5;
	ctx.fillRect(0, 0, this.width, this.height);

	ctx.restore();

	this.koishi.draw();

	if (this._state === 1 || this._state === 2) {
		ctx.save();
		ctx.fillStyle = 'black';
		ctx.globalAlpha = this._alpha;
		ctx.fillRect(0, 0, this.width, this.height);
		ctx.restore();
	}

};

module.exports = SceneGameover;