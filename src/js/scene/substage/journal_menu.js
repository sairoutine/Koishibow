'use strict';

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
//var CONSTANT = require('../../constant');
//var JournalConfig = require('../../config/item');



var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// アイテムメニューへ
	var basePosX = 300;
	var basePosY = this.root().height - 165 + 105/3;
	var buttonWidth  = 250*2/3;
	var buttonHeight = 105*2/3;
	var buttonMarginWidth  = 15;
	this.goto_item_button = new UIParts(
		this,
		basePosX + (buttonWidth + buttonMarginWidth) * 3,
		basePosY,
		buttonWidth,
		buttonHeight,
		function() {
			var ctx = this.core.ctx;

			// フォーカスを当てると明るくなる
			var button_window = this.core.image_loader.getImage('ui-common-btn-toolpu-blu2');

			ctx.save();
			ctx.drawImage(button_window,
				this.getCollisionLeftX(),
				this.getCollisionUpY(),
				button_window.width*2/3,
				button_window.height*2/3
			);

			// メニュー文字 表示
			ctx.font = "24px 'OradanoGSRR'";
			ctx.textAlign = 'center';
			ctx.textBaseAlign = 'middle';
			ctx.fillStyle = 'rgb( 255, 255, 255 )';
			ctx.fillText("アイテム",
				this.getCollisionLeftX() + 85,
				this.getCollisionUpY()   + 40
			);

			ctx.restore();
		}
	);
	this.addObject(this.goto_item_button);

};

SceneSubStageJournalMenu.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// マウス座標取得
	var mouse_point = this.core.input_manager.mousePositionPoint(this);

	// アイテムメニューを閉じる
	if(this.root().item_menu_button.checkCollisionWithObject(mouse_point)) {
		return true;
	}
	// アイテムメニューへ
	else if(this.goto_item_button.checkCollisionWithObject(mouse_point)) {
		if (this.core.input_manager.isLeftClickPush()) {
			this._goToItemMenu();
		}
	}


};

SceneSubStageJournalMenu.prototype.draw = function(){
};
SceneSubStageJournalMenu.prototype.afterDraw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	/*
	// ウィンドウ表示
	this._showWindow();
	*/

	// アイテム表示
	base_scene.prototype.draw.apply(this, arguments);

	/*
	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();
	*/
	ctx.restore();
};
SceneSubStageJournalMenu.prototype._goToItemMenu = function() {
	this.root().changeSubScene("menu");
};


module.exports = SceneSubStageJournalMenu;
