'use strict';

var base_scene = require('./base');

//var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
//var CONSTANT = require('../../constant');
//var JournalConfig = require('../../config/item');



var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};

SceneSubStageJournalMenu.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
};

SceneSubStageJournalMenu.prototype.draw = function(){
};
SceneSubStageJournalMenu.prototype.afterDraw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	/*
	// ウィンドウ表示
	this._showWindow();

	// アイテム表示
	base_scene.prototype.draw.apply(this, arguments);

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();
	*/
	ctx.restore();
};

module.exports = SceneSubStageJournalMenu;
