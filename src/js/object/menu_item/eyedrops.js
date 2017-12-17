'use strict';

/* メニューのアイテムの目薬 */

var base_object = require('./base');
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');

var ObjectMenuItemEyeDrops = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemEyeDrops, base_object);

ObjectMenuItemEyeDrops.prototype.item_id = function() {
	return CONSTANT.ITEM.EYEDROP;
};
// アイテムが使用されたとき
ObjectMenuItemEyeDrops.prototype.use = function(){
	base_object.prototype.use.apply(this, arguments);

	// 3rd eye ゲージの回復
	this.core.save_manager.gain3rdeyeGauge(CONSTANT.EYEDROP_RECOVER_3RDEYE_GAUGE);

	// 3rd eye 使用 1枚絵へ
	this.scene.root().changeSubScene("picture_use_eyedrops");
};

module.exports = ObjectMenuItemEyeDrops;
