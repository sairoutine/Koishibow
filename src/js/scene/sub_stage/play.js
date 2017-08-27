'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
};

SceneSubStagePlay.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// 会話するオブジェクトとの当たり判定
		var is_talk = false;
		this.mainStage().pieces.forEach(function(piece) {
			var is_collision = piece.checkCollisionWithPosition(x, y);

			if (is_collision) is_talk = true;
		});


		// 会話するオブジェクトとの当たり判定にならなかったら
		if (!is_talk) {
			var is_change_scene = false;

			// TODO: refactor

			// シーン遷移
			if(this.mainStage()._left_yajirushi.checkCollisionWithPosition(x, y)) {

			}
			else if (this.mainStage()._right_yajirushi.checkCollisionWithPosition(x, y)) {

			}
			else {
				// こいしを移動
				this.koishi().setMoveTarget(x, y);
			}
		}
	}
};


module.exports = SceneSubStagePlay;
