'use strict';

var base_scene = require('../../base');
var Util = require('../../../../hakurei').util;

var SelectedCursor = require('../../../../object/ui/selected_cursor');
var CONSTANT_BUTTON = require('../../../../hakurei').constant.button;
var ObjectChapter0Hat = require('../../../../object/pieces/chapter0_hat');

var SceneEventChapter0GetHat = function(core) {
	base_scene.apply(this, arguments);

	this._cursor_ui = new SelectedCursor(this);

	// 帽子オブジェクト
	this.hat = new ObjectChapter0Hat(this);
	this.addObject(this.hat);
};
Util.inherit(SceneEventChapter0GetHat, base_scene);

SceneEventChapter0GetHat.prototype.init = function(){
	base_scene.prototype.init.apply(this, ["chapter0_myroom"]);

	this._cursor_ui.init();

	this.hat.setData({
		no: 1,
		image: "chapter0-myroom-obj-07-01",
		name: "帽子",
		x: 767, y: 529,
		scale: 2/3,
	});

	// まだ帽子あり待機になっているので、帽子なし待機にする
	this.root().koishi.setWaitAnime();
};

SceneEventChapter0GetHat.prototype.beforeDraw = function() {
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this._cursor_ui.beforeDraw();
	// こいしの移動
	this.root().koishi.moveByInput();

	// タッチできるオブジェクトであることを示すカーソル表示
	this._showSelectedCursor(this.hat);

	if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		if (this.hat.checkIsInTouchArea(this.root().koishi)) {
			this.hat.onTouchByKoishi();
		}
	}
};

// 画面更新
SceneEventChapter0GetHat.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	this._cursor_ui.draw();
};
// タッチできるオブジェクトであることを示すカーソル表示
SceneEventChapter0GetHat.prototype._showSelectedCursor = function(piece) {
	this._cursor_ui.setPosition(piece.x(), piece.y() - 50);
	this._cursor_ui.show();
};


module.exports = SceneEventChapter0GetHat;
