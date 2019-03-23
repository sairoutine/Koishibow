'use strict';

var base_scene = require('./base');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var SelectedCursor = require('../../object/ui/selected_cursor');
var ObjectFieldChange = require('../../object/pieces/field_change');
var ChapterMasterRepository = require('../../repository/chapter');
var Util = require('../../hakurei').util;

var SCALE = 1/3;
var RAD_TO_REG = Math.PI / 180;


var SceneSubStagePlay = function(core) {
	base_scene.apply(this, arguments);

	// タッチできるオブジェクトであることを示すカーソル
	this._cursor_ui = new SelectedCursor(this);

	this._key_down_count_of_button_x = 0;
	this._is_player_use_3rdeye = false;
};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// タッチできるオブジェクトであることを示すカーソル
	this._cursor_ui.init();

	this._key_down_count_of_button_x = 0;
	this._is_player_use_3rdeye = false;
};

SceneSubStagePlay.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	// タッチできるオブジェクトであることを示すカーソル
	this._cursor_ui.update();

	if (this.root().isNoHat()) {
		// こいしが帽子を未獲得のとき
		this._updateWithNoHat();
	}
	else {
		// こいしが帽子を獲得済のとき
		this._updateWithHat();
	}
};

// こいしが帽子を未獲得のときの update
SceneSubStagePlay.prototype._updateWithNoHat = function(){
	// こいし移動
	this.root().koishi.moveByInput();

	// オブジェクトとの当たり判定を行う
	this._checkCollideWithObjects();
};

// こいしが帽子を獲得済のときの update
SceneSubStagePlay.prototype._updateWithHat = function(){
	if (this.root().isUsingEye()) {
		// サードアイの光の当たり判定
		this.root().light_3rdeye.checkCollisionWithPieces(this.root().piece_container.getAll());

		// サードアイの消耗
		this.root().koishi.abrasion3rdeye();

		if (this.root().koishi.isDead()) {
			// 最大値まで回復
			this.root().koishi.gain3rdeyeGaugeMax();

			// 最後にゲームオーバーになったフィールドを保存
			var field_data = this.root().getFieldData();
			this.core.save_manager.player.setLastGameoverField(field_data.key());

			// 開始フィールドをchapterの最初に設定する
			var field_name = ChapterMasterRepository.find("chapter" + field_data.chapter()).firstField();
			this.core.save_manager.player.setCurrentField(field_name);

			this.core.scene_manager.setFadeOut(0);

			this.core.scene_manager.changeScene("gameover", this.root().koishi.x(), this.root().koishi.y());
		}
	}

	// フィールド移動
	if (!this._changeFieldByInput()) {
		// フィールド移動してなければ、こいしを移動
		this.root().koishi.moveByInput();
	}

	// オブジェクトとの当たり判定を行う
	this._checkCollideWithObjects();

	this._durationButtonXDownCount();
	// サードアイ使用／使用解除
	if (this._isPlayerUse3rdEye()) {
		this.root().eye_button.onCollision();
	}
	// メニュー開く
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.X)) {
		this.root().item_menu_button.onCollision();
	}

};

// オブジェクトとの当たり判定を行う
SceneSubStagePlay.prototype._checkCollideWithObjects = function(){
	// フィールドの各種オブジェクトとの当たり判定
	var is_collide_with_piece = false;

	// こいしの位置によってどのオブジェクトにフォーカスを当てるか変える
	// 固定すると、場所によってはどうしても触れないオブジェクトが存在するため
	// 21 の数字を大きくすることでフォーカスが変わるタイミングを伸ばすことができる
	var pieces = Math.floor((this.root().koishi.y() + this.root().koishi.x())/21) % 2 ? this.root().piece_container.getAll() : this.root().piece_container.getAll().slice().reverse();

	for (var i in pieces) {
		var piece = pieces[i];

		// フィールド移動オブジェクトのみ、接触するとフィールド遷移するため、
		// こいしと接触判定を行う
		if (piece instanceof ObjectFieldChange) {
			piece.checkCollisionWithObject(this.root().koishi);
		}

		// こいしとオブジェクトがタッチ可能な範囲にいるかどうか
		if (piece.checkIsInTouchArea(this.root().koishi)) {
			if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
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
};

// プレイヤーが3rdeye使用を押下したかどうか
SceneSubStagePlay.prototype._isPlayerUse3rdEye = function(){
	return this._is_player_use_3rdeye;
};
// TODO: リファクタ
SceneSubStagePlay.prototype._durationButtonXDownCount = function(){
	this._is_player_use_3rdeye = false;
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.B)) {
		// first count
		this._key_down_count_of_button_x = 1;
	}
	else if(this.core.input_manager.isKeyDown(CONSTANT_BUTTON.B)) {
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


// フィールド移動
SceneSubStagePlay.prototype._changeFieldByInput = function(){
	// Y + 方向キーでフィールドをすぐ移動
	if (!this.core.input_manager.isKeyDown(CONSTANT_BUTTON.Y)) return false;

	var piece;
	if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.RIGHT)) {
		piece = this.root().getPiece("rightField")
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.LEFT)) {
		piece = this.root().getPiece("leftField")
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.UP)) {
		piece = this.root().getPiece("upField")
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.DOWN)) {
		piece = this.root().getPiece("downField")
	}
	else {
		piece = null;
	}

	if (piece) {
		// change field オブジェクトを発火させる
		piece.onCollision();

		return true;
	}

	return false;
}


SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// 移動できるフィールドへ矢印を表示
	this._drawArrow();

	// タッチできるオブジェクトであることを示すカーソル描画
	this._cursor_ui.draw();
};

// 移動できるフィールドへ矢印を表示
SceneSubStagePlay.prototype._drawArrow = function(){
	var ctx = this.core.ctx;

	var field_data = this.parent.getFieldData();

	var image = this.core.image_loader.getImage("arrow");

	var width = image.width * SCALE;
	var height = image.height * SCALE;

	if(field_data.rightField()) {
		ctx.save();
		ctx.translate(this.parent.width - 48, this.parent.height/2);
		ctx.rotate(0 * RAD_TO_REG);
		ctx.drawImage(image,
			-width/2,
			-height/2,
			width,
			height
		);
		ctx.restore();
	}
	if(field_data.leftField()) {
		ctx.save();
		ctx.translate(48, this.parent.height/2);
		ctx.rotate(180 * RAD_TO_REG);
		ctx.drawImage(image,
			-width/2,
			-height/2,
			width,
			height
		);
		ctx.restore();
	}
	if(field_data.upField()) {
		ctx.save();
		ctx.translate(this.parent.width/2, 48);
		ctx.rotate(270 * RAD_TO_REG);
		ctx.drawImage(image,
			-width/2,
			-height/2,
			width,
			height
		);
		ctx.restore();
	}
	if(field_data.downField()) {
		ctx.save();
		ctx.translate(this.parent.width/2, this.parent.height - 48);
		ctx.rotate(90 * RAD_TO_REG);
		ctx.drawImage(image,
			-width/2,
			-height/2,
			width,
			height
		);
		ctx.restore();
	}
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
