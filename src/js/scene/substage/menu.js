'use strict';

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneDefault = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneDefault, base_scene);

SceneDefault.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// マウス座標取得
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	// アイテムメニューを閉じる
	if(this.parent.root().item_menu_button.checkCollisionWithPosition(x, y)) {
		return true;
	}

};




module.exports = SceneDefault;
