'use strict';

var base_scene = require('./base');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var SelectedCursor = require('../../object/ui/selected_cursor');
var ObjectFieldChange = require('../../object/pieces/field_change');
var ChapterMap = require('../../config/chapter');

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

			// 最後にゲームオーバーになったフィールドを保存
			var field_data = this.root().getFieldData();
			this.core.save_manager.player.setLastGameoverField(field_data.key);

			// 開始フィールドをchapterの最初に設定する
			var field_name = ChapterMap["chapter" + field_data.chapter].first_field;
			this.core.save_manager.player.setCurrentField(field_name);

			this.core.scene_manager.setFadeOut(0);

			this.root().changeSubScene("gameover");
		}
	}

	// こいしの移動
	this.root().koishi.moveByInput();

	// フィールドの各種オブジェクトとの当たり判定
	var is_collide_with_piece = false;

	// こいしの位置によってどのオブジェクトにフォーカスを当てるか変える
	// 固定すると、場所によってはどうしても触れないオブジェクトが存在するため
	// 21 の数字を大きくすることでフォーカスが変わるタイミングを伸ばすことができる
	var pieces = Math.floor((this.root().koishi.y() + this.root().koishi.x())/21) % 2 ? this.root().pieces : this.root().pieces.slice().reverse();

	for (var i in pieces) {
		var piece = pieces[i];

		// フィールド移動オブジェクトのみ、接触するとフィールド遷移するため、
		// こいしと接触判定を行う
		if (piece instanceof ObjectFieldChange) {
			piece.checkCollisionWithObject(this.root().koishi);
		}

		// こいしとオブジェクトがタッチ可能な範囲にいるかどうか
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
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
		// first count
		this._key_down_count_of_button_x = 1;
	}
	else if(this.core.input_manager.isKeyDown(CONSTANT_BUTTON.BUTTON_X)) {
		// isKeyPush されていた場合は経過秒数をカウント
		//
		// NOTE:
		// menu sceneからX押下でplay sceneに戻ってきた場合に、
		// 指を話そうとしている時間もカウントされて
		// メニューを閉じたらすぐサードアイが発動してしまうから
		if (this._key_down_count_of_button_x) {
			this._key_down_count_of_button_x++;
		}
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
