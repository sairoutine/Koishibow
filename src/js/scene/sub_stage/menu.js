'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;
var MenuItem = require('../../object/menu_item');
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
	base_scene.prototype.init.apply(this, arguments);
	var self = this;

	this.focus_item_id = null;

	var item_list = this.core.save_manager.getItemList();

	self.removeAllObject();
	for (var i = 0, len = item_list.length; i<len; i++) {
		var item_id = item_list[i];
		var item = new MenuItem(this, item_id);
		item.init();
		item.setPosition(180 + i*120, 160);
		self.addObject(item);
	}

	// 使用ボタン
	// TODO: 調べる・組み合わせるの後に戻す
	//this.use_button = new UIParts(self, 160 + 250/3, self.mainStage().height - 150 + 105/3, 250*2/3, 105*2/3, function draw () {
	this.use_button = new UIParts(self, self.mainStage().width - 200 + 250/3, self.mainStage().height - 150 + 105/3, 250*2/3, 105*2/3, function draw () {
		var ctx = this.core.ctx;

		var button_window;
		if (this.onfocus) {
			button_window = this.core.image_loader.getImage('ui-common-btn-toolpu-blu2');
		}
		else {
			button_window = this.core.image_loader.getImage('ui-common-btn-toolpu-blu1');
		}

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
		ctx.fillText("使用",
			this.getCollisionLeftX() + 80,
			this.getCollisionUpY()   + 40
		);

		ctx.restore();
	});
	self.addObject(this.use_button);

};




SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	if(this.core.input_manager.isLeftClickPush()) {
		// メニュー閉じる
		this.mainStage().item_button.checkCollisionWithPosition(x, y);

		// アイテム選択
		for (var i = 0, len = this.objects.length; i < len; i++) {
			var object = this.objects[i];
			object.checkCollisionWithPosition(x, y);
		}

		// 使用ボタン
		if(this.use_button.checkCollisionWithPosition(x, y)) {
			this._useItem();
		}

	}
	else {
		// マウスカーソルが当たったら
		if(this.use_button.checkCollisionWithPosition(x, y)) {
			this.use_button.setVariable("onfocus", true);
		}
		else {
			this.use_button.setVariable("onfocus", false);
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
	//this._showButtons();

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();

	ctx.restore();
};

SceneSubStageTalk.prototype._showWindow = function(){
	var ctx = this.core.ctx;

	var window_frame = this.core.image_loader.getImage('ui-common-frame-toolpu');

	ctx.drawImage(window_frame,
		0, 0,
		window_frame.width*2/3,
		window_frame.height*2/3
	);

};

SceneSubStageTalk.prototype._showButtons = function(){
	var ctx = this.core.ctx;

	var button_window = this.core.image_loader.getImage('ui-common-btn-toolpu-blu1');
	ctx.save();

	/* combine */
	ctx.drawImage(button_window,
		160*2 + 16*1,
		this.mainStage().height - 150,
		button_window.width*2/3,
		button_window.height*2/3
	);

	// メニュー文字 表示
	ctx.font = "24px 'OradanoGSRR'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("合成",
		160*2 + 16*1 + 80,
		this.mainStage().height - 150 + 40
	);

	/* examine */

	// 四角形
	ctx.drawImage(button_window,
		160*3 + 16*2,
		this.mainStage().height - 150,
		button_window.width*2/3,
		button_window.height*2/3
	);

	// メニュー文字 表示
	ctx.font = "24px 'OradanoGSRR'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("調べる",
		160*3 + 16*2 + 80,
		this.mainStage().height - 150 + 40
	);



	ctx.restore();



};

SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;

	ctx.save();

	var message_window = this.core.image_loader.getImage('ui-common-bg-toolpu-blk');

	ctx.drawImage(message_window,
		150,
		this.mainStage().height - 80,
		message_window.width*2/3,
		message_window.height*2/3
	);
	ctx.restore();

};

SceneSubStageTalk.prototype._showMessage = function(){
	var ctx = this.core.ctx;

	// メニュー文字 表示
	ctx.font = "24px 'OradanoGSRR'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("ITEM1 だ",
		MESSAGE_WINDOW_OUTLINE_MARGIN + 160 + 70,
		this.mainStage().height - 60 + 20
	);

};

SceneSubStageTalk.prototype._useItem = function(){
	// アイテムを選択してなければ何もしない
	if(!this.focus_item_id) return;

	for(var i = 0, len = this.objects.length; i < len; i++) {
		var obj = this.objects[i];
		if(obj.item_id === this.focus_item_id) {
			this.removeObject(obj);
			obj.use();
			break;
		}
	}

	this.focus_item_id = null;
};







module.exports = SceneSubStageTalk;
