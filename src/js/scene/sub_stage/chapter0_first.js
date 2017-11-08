'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

// TODO: まずこいしにセリフを喋らせる
// 帽子オブジェクトをサブシーンに持つ
// このシーンのプレイ中は、歩く・待機・触るは、帽子なしで行う
// 帽子オブジェクトがタッチされたら、
// こいしを触るアニメにする
// かつ、音をならす
// そして1枚絵シーンに遷移する
var SceneSubStageChapter0First = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageChapter0First, base_scene);

SceneSubStageChapter0First.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};




SceneSubStageChapter0First.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

SceneSubStageChapter0First.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	//クリックチェック
	this._collisionCheck();
};

SceneSubStageChapter0First.prototype._collisionCheck = function(){
	// マウス位置したところを取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	// クリックしたときに当たり判定するものたち
	if(this.core.input_manager.isLeftClickPush()) {
		// TODO: この関数でやらず、外でやったほうがいい？(この関数は当たり判定したら true or false 返す)
		if (!this.mainStage().koishi().isMoving()) {
			this.koishi().setMoveTarget(x, y);
		}
	}

	return false;
};


module.exports = SceneSubStageChapter0First;
