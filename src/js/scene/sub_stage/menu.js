'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;
var MenuItem = require('../../object/menu_item');

var MESSAGE_WINDOW_OUTLINE_MARGIN = 10;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);

	// テスト用アイテム
	// TODO: 削除
	this.core.save_manager.addItem(1);
	this.core.save_manager.addItem(2);
};
Util.inherit(SceneSubStageTalk, base_scene);

SceneSubStageTalk.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
	var self = this;

	this.focus_item_id = null;

	var item_list = this.core.save_manager.getItemList();

	self.removeAllObject();
	for (var i = 0, len = item_list.length; i<len; i++) {
		var item_id = item_list[i];
		var item = new MenuItem(this, item_id);
		item.init();
		item.setPosition(68 + i*100, 68);
		self.addObject(item);
	}
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// メニュー閉じる
		this.mainStage().item_button.checkCollisionWithPosition(x, y);

		// アイテム選択
		for (var i = 0, len = this.objects.length; i < len; i++) {
			var object = this.objects[i];
			object.checkCollisionWithPosition(x, y);
		}

	}


/*
	if(this.core.input_manager.isLeftClickPush()) {
		if(this.serif.is_end()) {
			// セリフ終わり
			this.mainStage().changeSubScene("play");
		}
		else {
			// セリフを送る
			this.serif.next();
		}
	}
*/
};

SceneSubStageTalk.prototype.draw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	// ウィンドウ表示
	this._showWindow();

	// アイテム表示
	base_scene.prototype.draw.apply(this, arguments);

	// ボタン表示
	this._showButtons();

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();

	ctx.restore();
};

SceneSubStageTalk.prototype._showWindow = function(){
	var ctx = this.core.ctx;

	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillRect(
		MESSAGE_WINDOW_OUTLINE_MARGIN,
		MESSAGE_WINDOW_OUTLINE_MARGIN,
		this.mainStage().width - MESSAGE_WINDOW_OUTLINE_MARGIN * 2,
		this.mainStage().height - 150 - MESSAGE_WINDOW_OUTLINE_MARGIN * 2
	);

};

SceneSubStageTalk.prototype._showButtons = function(){
	var ctx = this.core.ctx;

	ctx.save();

	/* use */

	// 四角形
	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillRect(
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150,
		this.mainStage().height - 150,
		160,
		60
	);

	// メニュー文字 表示
	ctx.font = "32px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("使用",
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150 + 60,
		this.mainStage().height - 150 + 40
	);


	/* combine */

	// 四角形
	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillRect(
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150 + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN,
		this.mainStage().height - 150,
		160,
		60
	);

	// メニュー文字 表示
	ctx.font = "32px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("合成",
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150 + 60 + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN,
		this.mainStage().height - 150 + 40
	);

	/* examine */

	// 四角形
	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillRect(
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150 + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN,
		this.mainStage().height - 150,
		160,
		60
	);

	// メニュー文字 表示
	ctx.font = "32px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("調べる",
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150 + 60 + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN + 160 + MESSAGE_WINDOW_OUTLINE_MARGIN,
		this.mainStage().height - 150 + 40
	);



	ctx.restore();



};

SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;

	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillRect(
		MESSAGE_WINDOW_OUTLINE_MARGIN + 150,
		this.mainStage().height - 80,
		this.mainStage().width  - 180 - MESSAGE_WINDOW_OUTLINE_MARGIN * 2,
		70
	);

};

SceneSubStageTalk.prototype._showMessage = function(){
	var ctx = this.core.ctx;

	// メニュー文字 表示
	ctx.font = "27px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("ITEM1 だ",
		MESSAGE_WINDOW_OUTLINE_MARGIN + 160 + 70,
		this.mainStage().height - 60 + 20
	);

};







module.exports = SceneSubStageTalk;
