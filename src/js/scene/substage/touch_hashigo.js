'use strict';

// プレイヤーに何も操作させない

var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStageLock = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageLock, base_scene);

SceneSubStageLock.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// はしごを使用
	this.core.save_manager.item.reduceItem("05");
	// 竹とんぼを追加
	this.core.save_manager.item.addItem("09");

	// イベントが終わったことを保存
	this.core.save_manager.scenario.incrementPlayedCount("chapter1_08-useHashigo");

};



SceneSubStageLock.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if(this.frame_count > 60) {
		this.root().changeSubScene("got_item", "09", "play"); // 竹とんぼ
	}
};

SceneSubStageLock.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	var ctx = this.core.ctx;

	var image = this.core.image_loader.getImage("chapter1-03-obj-03");
	var x = 196;
	var y = 484*2/3;
	var scale = 2/3;

	// 描画
	ctx.save();
	ctx.translate(x, y);
	ctx.drawImage(image,
		-image.width*scale/2,
		-image.height*scale/2,
		image.width * scale,
		image.height * scale);
	ctx.restore();
};

module.exports = SceneSubStageLock;
