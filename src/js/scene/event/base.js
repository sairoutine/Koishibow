'use strict';

var base_scene = require('../../hakurei').scene.base;
var SS = require('../../object/anime_object');
var Util = require('../../hakurei').util;

var SceneEventBase = function(core) {
	base_scene.apply(this, arguments);

	this.ss = null;
	if (this.backgroundSsAnime()) {
		this.ss = new SS(this.root());
	}
};
Util.inherit(SceneEventBase, base_scene);

SceneEventBase.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	if (this.isFadeIn()) {
		// フェードインする
		this.core.scene_manager.setFadeIn(120, "black");
	}
	if (this.isFadeOut()) {
		// イベント再生後はフェードアウトする
		this.core.scene_manager.setFadeOut(120, "black");
	}
	if (this.isStopBGM()) {
		this.core.audio_loader.stopBGM();
	}

	if (this.ss) {
		// アニメの位置指定
		this.ss.x(this.width/2);
		this.ss.y(this.height/2);

		this.ss.setAnime({
			default: this.backgroundSsAnime(),
		});
		this.ss.init();
		var afterBackgroundSsAnimeFunction = this.afterBackgroundSsAnimeFunction();
		var core = this.core;
		this.ss.playAnimationOnce("default", function () {
			afterBackgroundSsAnimeFunction(core);
		});
	}

};
SceneEventBase.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if (this.ss) {
		this.ss.beforeDraw();
	}

	// スクリプト実行
	var script_map = this.scriptMap();
	var script_list = script_map[this.frame_count];

	if(script_list) {
		for (var i = 0, len = script_list.length; i < len; i++) {
			var script = script_list[i];
			var command = script.command;
			var argument_list = script.argument_list;

			// 命令実行
			if (command === "change_scene") { // シーン遷移
				this.core.scene_manager.changeScene.apply(this.core.scene_manager, argument_list);
			}
			else if (command === "play_sound") { // SE 再生
				this.core.audio_loader.playSound.apply(this.core.audio_loader, argument_list);
			}
			else {
				throw new Error("Unrecognized command: " + command);
			}
		}
	}
};

// 画面更新
SceneEventBase.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	if (this.ss) {
		this.ss.draw();
	}


	var ctx = this.core.ctx;

	// 背景表示
	if (this.background()) {
		ctx.save();

		var background = this.core.image_loader.getImage(this.background());

		ctx.drawImage(background,
			0,
			0,
			background.width,
			background.height,
			0,
			0,
			this.width,
			this.height
		);

		ctx.restore();
	}

};
SceneEventBase.prototype.afterDraw = function(){
	base_scene.prototype.afterDraw.apply(this, arguments);

	if (this.ss) {
		this.ss.afterDraw();
	}
};



SceneEventBase.prototype.isFadeIn = function(){
	return false;
};
SceneEventBase.prototype.isFadeOut = function(){
	return false;
};
// イベント開始時にBGMを止めるかどうか
SceneEventBase.prototype.isStopBGM = function(){
	return false;
};


// 背景画像名
SceneEventBase.prototype.background = function(){
	return null;
};
// 背景用SSアニメ
SceneEventBase.prototype.backgroundSsAnime = function(){
	return null;
};
// 背景用SSアニメ再生後のcallback
SceneEventBase.prototype.afterBackgroundSsAnimeFunction = function(){
	return function (core) {};
};

// TODO: クリックで進行に備えて以下のフォーマットに変更したい
/*
	[
		{
			frame_count: 240, // 前のコマンド遷移から何フレーム経ったか
			is_click_to_next: false,
			command: "change_scene",
			argument_list: ["title"],
		},
		{
			frame_count: null,
			is_click_to_next: true,
			command: "change_scene",
			argument_list: ["title"],
		},

	]

/*
	// format
	{
		240: [
			{
				command: "change_scene",
				argument_list: ["title"],
			},
		]
	};
*/
SceneEventBase.prototype.scriptMap = function(){
	return {};
};

module.exports = SceneEventBase;
