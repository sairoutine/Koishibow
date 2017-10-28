'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
	this.mainStage().eye.init();
	this.mainStage().koishi().setWait();
};




SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	this.mainStage().eye.draw();
};

SceneSubStagePlay.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this.mainStage().eye.beforeDraw();

	this._collisionCheck();
};

SceneSubStagePlay.prototype._collisionCheck = function(){
	// マウス位置したところを取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	// クリックしたときに当たり判定するものたち
	if(this.core.input_manager.isLeftClickPush()) {
		// シーン遷移の当たり判定
		if(this.mainStage().field().left_field  && this.mainStage().left_yajirushi.checkCollisionWithPosition(x, y)) {
			return true;
		}

		// シーン遷移の当たり判定
		if(this.mainStage().field().right_field && this.mainStage().right_yajirushi.checkCollisionWithPosition(x, y)) {
			return true;
		}

		// アイテムボタンの当たり判定
		if(this.mainStage().item_button.checkCollisionWithPosition(x, y)) {
			return true;
		}

		// サードアイの当たり判定
		if(this.mainStage().eye.checkCollisionWithPosition(x, y)) {
			return true;
		}
	}


	// クリックする／しない関わらず当たり判定
	// フィールドの各種オブジェクトとの当たり判定
	for (var i = 0, len = this.mainStage().pieces.length; i < len; i++) {
		var piece = this.mainStage().pieces[i];
		if(piece.checkCollisionWithPosition(x, y)) {
			return true;
		}
	}

	// クリックしたときに当たり判定するものたち
	if(this.core.input_manager.isLeftClickPush()) {
		// どことも当たり判定しなかったら
		// こいしを移動
		// TODO: この関数でやらず、外でやったほうがいい？(この関数は当たり判定したら true or false 返す)
		if (!this.mainStage().koishi().isMoving()) {
			this.koishi().setMoveTarget(x, y);
		}
	}

	return false;
};


module.exports = SceneSubStagePlay;
