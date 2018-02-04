'use strict';

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
//var CONSTANT = require('../../constant');
var JournalConfig = require('../../config/journal');



var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this._setupMenuTitle();
	this.addObjects(this.menu_journal_list);

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
			ctx.fillText("アイテム→",
				this.getCollisionLeftX() + 85,
				this.getCollisionUpY()   + 40
			);

			ctx.restore();
		}
	);
	this.addObject(this.goto_item_button);

};
SceneSubStageJournalMenu.prototype._setupMenuTitle = function() {

	var self = this;
	var journal_list = this.core.save_manager.getJournalList();

	this.menu_journal_list = [];

	var journal_config = JournalConfig;

	var basePosX = 270 + 200;
	var basePosY = 80;
	var margin = 56;
	var buttonWidth = 400;
	var buttonHeight = 30;

	var i = 0;
	for(var id in journal_config) {
		i++;
		var conf = journal_config[id];

		(function(conf) {
			self.menu_journal_list.push(new UIParts(
				self,
				basePosX,
				basePosY + margin * i,
				buttonWidth,
				buttonHeight,
				function() {
					var ctx = this.core.ctx;

					ctx.save();
					ctx.textBaseAlign = 'middle';
					ctx.font = "28px 'OradanoGSRR'";
					ctx.fillStyle = 'rgb( 255, 255, 255 )';
					ctx.fillText(conf.title,
						this.getCollisionLeftX(),
						this.getCollisionUpY() + 28
					);
					ctx.restore();
				}
			));
		})(conf);

	}
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

	// ウィンドウ表示
	this._showWindow();

	//
	this._showText();

	// メニューのテキスト表示
	base_scene.prototype.draw.apply(this, arguments);

	/*
	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();
	*/
	ctx.restore();
};

SceneSubStageJournalMenu.prototype._showWindow = function() {
	var ctx = this.core.ctx;
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.5;
	ctx.fillRect(230, 20, 500, this.height - 20*2);
	ctx.restore();
};

SceneSubStageJournalMenu.prototype._showText = function() {
	var ctx = this.core.ctx;
	ctx.save();

	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.font = "24px 'OradanoGSRR'";
	// TODO:
	ctx.fillText("◀", 300, 50);
	ctx.fillText("▶", 600, 50);
	ctx.fillText("1/5", 450, 50);

	ctx.restore();
};








SceneSubStageJournalMenu.prototype._goToItemMenu = function() {
	this.root().changeSubScene("menu");
};


module.exports = SceneSubStageJournalMenu;
