'use strict';

var base_scene = require('./base');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var SelectedCursor = require('../../object/ui/selected_cursor');

var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core) {
	base_scene.apply(this, arguments);

	this._cursor_ui = new SelectedCursor(this);

	this._key_down_count_of_button_x = 0;
	this._is_player_use_3rdeye = false;
};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this._cursor_ui.init();

	this._key_down_count_of_button_x = 0;
	this._is_player_use_3rdeye = false;
};

SceneSubStagePlay.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this._cursor_ui.beforeDraw();

	if (this.root().isUsingEye()) {
		// サードアイの光の当たり判定
		this.root().light_3rdeye.checkCollisionWithPieces(this.root().pieces);

		// サードアイの消耗
		this.root().koishi.abrasion3rdeye();

		if (this.root().koishi.isDead()) {
			// 最大値まで回復
			this.root().koishi.gain3rdeyeGaugeMax();

			this.root().setFadeOut(0);

			this.core.changeScene("gameover");
		}
	}

	// シーン遷移
	if(this.root().right_next_field_button.checkCollisionWithObject(this.root().koishi)) {
		return true;
	}
	else if(this.root().left_next_field_button.checkCollisionWithObject(this.root().koishi)) {
		return true;
	}

	// こいしの移動
	this.root().koishi.moveByInput();

	// フィールドの各種オブジェクトとの当たり判定
	var is_collide_with_piece = false;
	for (var i = this.root().pieces.length - 1; i >= 0; i--) { // i の大きい方が手前なので
		var piece = this.root().pieces[i];
		if (piece.checkIsInTouchArea(this.root().koishi)) {
			if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
				piece.onTouchByKoishi();
			}
			else {
				// タッチできるオブジェクトであることを示すカーソル表示
				this._showSelectedCursor(piece);
			}

			is_collide_with_piece = true;

			break;
		}
	}

	// どのオブジェクトにも近づいてなければ
	if (!is_collide_with_piece) {
		// タッチできるオブジェクトであることを示すカーソル隠す
		this._hideSelectedCursor();
	}

	this._durationButtonXDownCount();
	// サードアイ使用／使用解除
	if (this._isPlayerUse3rdEye()) {
		this.root().eye_button.onCollision();
	}
	// メニュー開く
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_SPACE)) {
		this.root().item_menu_button.onCollision();
	}

};

// プレイヤーが3rdeye使用を押下したかどうか
SceneSubStagePlay.prototype._isPlayerUse3rdEye = function(){
	return this._is_player_use_3rdeye;
};
// TODO: リファクタ
SceneSubStagePlay.prototype._durationButtonXDownCount = function(){
	this._is_player_use_3rdeye = false;
	if(this.core.input_manager.isKeyDown(CONSTANT_BUTTON.BUTTON_X)) {
		this._key_down_count_of_button_x++;
	}
	else {
		if(0 < this._key_down_count_of_button_x && this._key_down_count_of_button_x < 15) { //15フレーム長押し
			this._is_player_use_3rdeye = true;
		}

		this._key_down_count_of_button_x = 0;
	}
};

SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	this._cursor_ui.draw();
};

SceneSubStagePlay.prototype.afterDraw = function(){
	base_scene.prototype.afterDraw.apply(this, arguments);
};

// タッチできるオブジェクトであることを示すカーソル表示
SceneSubStagePlay.prototype._showSelectedCursor = function(piece) {
	this._cursor_ui.setPosition(piece.x(), piece.y() - 50);
	this._cursor_ui.show();
};

// タッチできるオブジェクトであることを示すカーソル隠す
SceneSubStagePlay.prototype._hideSelectedCursor = function() {
	this._cursor_ui.hide();
};





module.exports = SceneSubStagePlay;
