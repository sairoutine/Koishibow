'use strict';

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
//var CONSTANT = require('../../constant');
var JournalConfig = require('../../config/journal');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;



var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this._setupMenuTitle();
	this.addObjects(this.menu_journal_list);
};
SceneSubStageJournalMenu.prototype._setupMenuTitle = function() {

	var self = this;
	// TODO: 獲得していないジャーナルは未表示
	//var journal_list = this.core.save_manager.journal.getJournalList();

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
			var ui = new UIParts(
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
			)

			// TODO: 戻り先をちゃんとする
			// クリックされたら
			ui.setCollisionCallback(function () {
				this.scene.root().changeSubScene("journal", conf.id);
			});

			self.menu_journal_list.push(ui);
		})(conf);

	}
};

SceneSubStageJournalMenu.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// 選択
	var is_up_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP);
	var is_down_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN);

	// アイテムメニューを閉じる
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_SPACE)) {
		this.root().item_menu_button.onCollision();
	}
	// ジャーナルタイトル 決定
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		this.menu_journal_list[this._index].onCollision();
	}
	// ジャーナルタイトル 選択
	else if(is_up_push || is_down_push) {
		// TODO:
	}
	// アイテムメニューへ
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
		this._goToItemMenu();
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
