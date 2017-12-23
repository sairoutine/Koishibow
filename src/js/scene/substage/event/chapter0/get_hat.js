'use strict';

var base_scene = require('../../base');
var Util = require('../../../../hakurei').util;

var CONSTANT = require('../../../../constant');

var ObjectChapter0Hat = require('../../../../object/pieces/chapter0_hat');

var SceneEventChapter0GetHat = function(core) {
	base_scene.apply(this, arguments);

	// カーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	// 帽子オブジェクト
	this.hat = new ObjectChapter0Hat(this);
	this.addObject(this.hat);
};
Util.inherit(SceneEventChapter0GetHat, base_scene);

SceneEventChapter0GetHat.prototype.init = function(){
	base_scene.prototype.init.apply(this, ["chapter0_myroom"]);

	// カーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	this.hat.setData({
		no: 1,
		image: "chapter0-myroom-obj-07-01",
		name: "帽子",
		x: 767, y: 529,
		scale: 2/3,
	});
};

SceneEventChapter0GetHat.prototype.beforeDraw = function() {
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// 当たり判定チェック
	this._collisionCheck();
};

// 当たり判定チェック
SceneEventChapter0GetHat.prototype._collisionCheck = function(){
	// マウス座標取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	// フィールドの各種オブジェクトとの当たり判定
	if(this.hat.checkCollisionWithPosition(x, y)) {
		return true;
	}

	// UI と 画面上のオブジェクトの どれとも当たり判定しなかったら
	if(this.core.input_manager.isLeftClickPush()) {
		var point = this.core.input_manager.mousePositionPoint(this.root());
		// こいしを移動
		this.root().koishi.setMoveTarget(point);
	}
};




// 画面更新
SceneEventChapter0GetHat.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// 帽子オブジェクトの描画

	// カーソルを上下に移動させる
	if (this._cursor_reverse) {
		this._cursor_y-=0.25;
	}
	else {
		this._cursor_y+=0.25;
	}

	if (this._cursor_y > 6) {
		this._cursor_reverse = true;
	}
	else if (this._cursor_y === 0) {
		this._cursor_reverse = false;
	}

	// 黒い矢印
	var cursor = this.core.image_loader.getImage("target_arrow");
	var ctx = this.core.ctx;
	ctx.save();
	ctx.drawImage(cursor,
		747, // 18 -> font size
		479 + this._cursor_y, // TODO: 要調整
		cursor.width*2/3,
		cursor.height*2/3
	);
	ctx.restore();
};

module.exports = SceneEventChapter0GetHat;
