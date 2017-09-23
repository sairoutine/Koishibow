'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;
var UIParts = require('../../hakurei').object.ui_parts;

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
	var self = this;
	base_scene.prototype.init.apply(this, arguments);

	var item_list = this.core.save_manager.getItemList();

	self.removeAllObject();
	for (var i = 0, len = item_list.length; i<len; i++) {
		self.addObject(new UIParts(self, 20 + i*100, 20, 96, 96, function() {
			var ctx = this.core.ctx;

			ctx.save();

			// 仮で四角形を描画
			ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
			//ctx.globalAlpha = 0.4;
			ctx.fillRect(this.x(), this.y(), 96, 96);

			// メニュー文字 表示
			ctx.font = "24px 'Migu'";
			ctx.textAlign = 'center';
			ctx.textBaseAlign = 'middle';
			ctx.fillStyle = 'rgb( 0, 0, 0 )';
			ctx.fillText("ITEM1", this.x() + 45, this.y() + 45);

			ctx.restore();
		}));
	}
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// メニュー閉じる
		if (this.mainStage().item_button.checkCollisionWithPosition(x, y)) {

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
