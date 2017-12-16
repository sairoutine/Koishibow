'use strict';

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};

SceneSubStagePlay.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// サードアイの光の当たり判定
	if (this.root().isUsingEye()) {
		this.root().light_3rdeye.checkCollisionWithPieces(this.root().pieces);
	}

	// 当たり判定チェック
	this._collisionCheck();

	// マウス右クリックでサードアイ使用
	if(this.core.input_manager.isRightClickPush()) {
		this.root().eye_button.onCollision();
	}
};

// 当たり判定チェック
SceneSubStagePlay.prototype._collisionCheck = function(){
	// マウス座標取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	// シーン遷移
	if(this.root().right_next_field_button.checkCollisionWithPosition(x, y)) {
		return true;
	}
	// シーン遷移
	else if(this.root().left_next_field_button.checkCollisionWithPosition(x, y)) {
		return true;
	}
	// アイテムメニュー
	else if(this.root().item_menu_button.checkCollisionWithPosition(x, y)) {
		return true;
	}
	// サードアイ使用
	else if(this.root().eye_button.checkCollisionWithPosition(x, y)) {
		return true;
	}

	// フィールドの各種オブジェクトとの当たり判定
	for (var i = this.root().pieces.length - 1; i >= 0; i--) { // i の大きい方が手前なので
		var piece = this.root().pieces[i];
		if(piece.checkCollisionWithPosition(x, y)) {
			return true;
		}
	}

	// UI と 画面上のオブジェクトの どれとも当たり判定しなかったら
	if(this.core.input_manager.isLeftClickPush()) {
		var point = this.core.input_manager.mousePositionPoint(this.root());
		// こいしを移動
		this.root().koishi.setMoveTarget(point);
	}
};

SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

SceneSubStagePlay.prototype.afterDraw = function(){
	base_scene.prototype.afterDraw.apply(this, arguments);
};

module.exports = SceneSubStagePlay;
