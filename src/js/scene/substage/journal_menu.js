'use strict';

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
var JournalMasterRepository = require('../../repository/journal');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var CONSTANT = require('../../constant');



var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

	// どのジャーナルを選択しているか
	this._index = 0;
};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this._setupMenuTitle();
	this.addObjects(this.menu_journal_list);

	// どのジャーナルを選択しているか
	this._index = 0;
};
SceneSubStageJournalMenu.prototype._setupMenuTitle = function() {

	var self = this;
	// TODO: 獲得していないジャーナルは未表示
	//var journal_list = this.core.save_manager.journal.getJournalList();

	this.menu_journal_list = [];

	var journal_list = JournalMasterRepository.all();

	var basePosX = 270 + 200;
	var basePosY = 80;
	var margin = 56;
	var buttonWidth = 400;
	var buttonHeight = 30;

	for(var i = 0, len = journal_list.length; i < len; i++) {
		var conf = journal_list[i];

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
					//ctx.textBaseline = 'middle';
					ctx.font = "28px 'OradanoGSRR'";
					ctx.fillStyle = 'rgb( 255, 255, 255 )';

					var prefix = this.no === self._index ? "▶" : "";
					ctx.fillText(prefix + conf.title(),
						this.getCollisionLeftX(),
						this.getCollisionUpY() + 28
					);
					ctx.restore();
				}
			)
			ui.setVariable("no", i-1);

			// TODO: 戻り先をちゃんとする
			// クリックされたら
			ui.setCollisionCallback(function () {
				this.scene.root().changeSubScene("journal", conf.id());
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
		// 上
		if (is_up_push) {
			this._index--;
			if (this._index < 0) {
				this._index = 0;
			}
		}
		// 下
		else if (is_down_push) {
			this._index++;
			if (this._index > this.menu_journal_list.length - 1) {
				this._index = this.menu_journal_list.length - 1;
			}
		}
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

	ctx.restore();

	// メニューのテキスト表示
	base_scene.prototype.draw.apply(this, arguments);

	var journal_id = this.core.save_manager.journal.getJournalList()[0];

	var journal_image_name;

	// 英語版
	if (CONSTANT.LANGUAGE === 'en') {
		journal_image_name = JournalMasterRepository.find(journal_id).imageEn();
	}
	// 日本語版
	else {
		journal_image_name = JournalMasterRepository.find(journal_id).imageJa();
	}
	var journal_image = this.core.image_loader.getImage(journal_image_name);

	// 左側リスト部分の背景 ※ジャーナル画像の下に表示させる
	var frame_image = this.core.image_loader.getImage("ui-common-frame-journal");
	ctx.save();
	ctx.translate(412*2/3, 538*2/3);
	ctx.drawImage(frame_image,
		-frame_image.width/2*2/3,
		-frame_image.height/2*2/3,
		frame_image.width*2/3,
		frame_image.height*2/3);
	ctx.restore();

	// ジャーナル画像描画
	ctx.save();
	ctx.translate(992*2/3, 530*2/3);
	ctx.drawImage(journal_image,
		-journal_image.width/2*2/3,
		-journal_image.height/2*2/3,
		journal_image.width*2/3,
		journal_image.height*2/3);
	ctx.restore();

	// スクロール部分背景
	var scrollbar_track_image = this.core.image_loader.getImage("ui-common-scrollbar_01_track");
	ctx.save();
	ctx.translate(634*2/3, 543*2/3);
	ctx.drawImage(scrollbar_track_image,
		-scrollbar_track_image.width/2*2/3,
		-scrollbar_track_image.height/2*2/3,
		scrollbar_track_image.width*2/3,
		scrollbar_track_image.height*2/3);
	ctx.restore();

	// スクロール部分ボタン
	var scrollbar_thumb_image = this.core.image_loader.getImage("ui-common-scrollbar_01_thumb");
	ctx.save();
	ctx.translate(634*2/3, 234*2/3);
	ctx.drawImage(scrollbar_thumb_image,
		-scrollbar_thumb_image.width/2*2/3,
		-scrollbar_thumb_image.height/2*2/3,
		scrollbar_thumb_image.width*2/3,
		scrollbar_thumb_image.height*2/3);
	ctx.restore();

	// 左側リスト部分の→アイコン
	var arrow_image = this.core.image_loader.getImage("ui-common-btn-arrow-lbrn");
	ctx.save();
	ctx.translate(127, 144);
	ctx.drawImage(arrow_image,
		-arrow_image.width/2*2/3,
		-arrow_image.height/2*2/3,
		arrow_image.width*2/3,
		arrow_image.height*2/3);
	ctx.restore();






	/*
	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();
	*/
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

	/*
・文字色アクティブ
e1d7b6 RGB(225,215,182)

・文字色非アクティブ
4c422c RGB(76,66,44)
ーーーーーーーーーーーーーーーーーーーーーーー
	*/

	ctx.fillStyle = 'rgb( 225, 215, 182 )';
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
