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

	// フィールド遷移矢印 表示
	ctx.font = "48px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("◀", 0 + 24, this.height/2);
	ctx.fillText("▶", this.width - 24, this.height/2);
};

SceneSubStagePlay.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		var collision_size = 1000;

		// 会話するオブジェクト
		var talk_width  = 100;
		var talk_height = 100;
		if (talk_width - 24 - collision_size/2 < x && x < talk_width - 24 + collision_size/2 &&
				talk_height/2 - collision_size/2 < y && y < talk_height/2 + collision_size) {
			this.mainStage().changeSubScene("talk");
		}
		// それ以外
		else {
			collision_size = 30;
			// TODO: ちゃんと書く
			if (0+24 - collision_size/2 < x && x < 0+24 + collision_size/2 &&
				this.mainStage().height/2 - collision_size/2 < y && y < this.mainStage().height/2 + collision_size) {
				// フィールド遷移
				this.mainStage().setFadeOut(30, "black");
				this.core.changeScene("stage", true);
			}
			else if (this.mainStage().width - 24 - collision_size/2 < x && x < this.mainStage().width - 24 + collision_size/2 &&
				this.mainStage().height/2 - collision_size/2 < y && y < this.mainStage().height/2 + collision_size) {
				// フィールド遷移
				this.mainStage().setFadeOut(30, "black");
				this.core.changeScene("stage");
			}
			else {
				// こいしを移動
				this.koishi().setMoveTarget(x, y);
			}
		}
	}
};


module.exports = SceneSubStagePlay;
