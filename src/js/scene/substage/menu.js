'use strict';

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');
var ItemConfig = require('../../config/item');


var ObjectMenuItemEyeDrops = require('../../object/menu_item/eyedrops');

var SceneSubStageMenu = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubStageMenu, base_scene);

SceneSubStageMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// 現在カーソルを合わせているアイテム
	this.focus_item_id = null;

	this._setupMenuItems();
	this.addObjects(this.menu_item_list);

	this._setupMenuButtons();
	this.addObjects([this.use_button, this.examine_button, this.combine_button]);
};

SceneSubStageMenu.prototype._setupMenuButtons = function() {
	var menu_buttons = [
		{
			property: "use_button",
			value: "使用",
		},
		{
			property: "examine_button",
			value: "調べる",
		},
		{
			property: "combine_button",
			value: "組み合わせる",
		}
	];

	var basePosX = 300;
	var basePosY = this.root().height - 165 + 105/3;
	var buttonWidth  = 250*2/3;
	var buttonHeight = 105*2/3;
	var buttonMarginWidth  = 15;

	var self = this;
	for (var i = 0, len = menu_buttons.length; i < len; i++) {
		var conf = menu_buttons[i];

		(function(conf) {
			self[conf.property] = new UIParts(
				self,
				basePosX + (buttonWidth + buttonMarginWidth) * i,
				basePosY,
				buttonWidth,
				buttonHeight,
				function() {
					var ctx = this.core.ctx;

					// フォーカスを当てると明るくなる
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
					ctx.fillText(conf.value,
						this.getCollisionLeftX() + 85,
						this.getCollisionUpY()   + 40
					);

					ctx.restore();
				}
			);
		})(conf);
	}
};

SceneSubStageMenu.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// マウス座標取得
	var mouse_point = this.core.input_manager.mousePositionPoint(this);

	// アイテムメニューを閉じる
	if(this.parent.root().item_menu_button.checkCollisionWithObject(mouse_point)) {
		return true;
	}
	// アイテムとマウスの当たり判定
	else if(mouse_point.checkCollisionWithObjects(this.menu_item_list)) {
		return true;
	}
	// 使用ボタンとマウスの当たり判定
	else if(this.use_button.checkCollisionWithObject(mouse_point)) {
		// 使用ボタン押下時
		if (this.core.input_manager.isLeftClickPush()) {
			// アイテム使用
			this._useItem();
		}
		// 使用ボタン マウスオーバー時
		else {
			// アイテムを選択してないと使用できないので、onfocus 画像は反応させない
			if (this.focus_item_id) {
				this.use_button.setVariable("onfocus", true);
			}
		}
	}
	// 調べるボタンとマウスの当たり判定
	else if(this.examine_button.checkCollisionWithObject(mouse_point)) {
		// 調べるボタン押下時
		if (this.core.input_manager.isLeftClickPush()) {
			// アイテム調べる
			this._examineItem();
		}
		// 調べるボタン マウスオーバー時
		else {
			// アイテムを選択してないと使用できないので、onfocus 画像は反応させない
			if (this.focus_item_id) {
				this.examine_button.setVariable("onfocus", true);
			}
		}
	}
	// 組み合わせるボタンとマウスの当たり判定
	else if(this.combine_button.checkCollisionWithObject(mouse_point)) {
		// 組み合わせるボタン押下時
		if (this.core.input_manager.isLeftClickPush()) {
			// アイテム組み合わせる
			this._combineItem();
		}
		// 組み合わせるボタン マウスオーバー時
		else {
			// アイテムを選択してないと使用できないので、onfocus 画像は反応させない
			if (this.focus_item_id) {
				this.combine_button.setVariable("onfocus", true);
			}
		}
	}
	else {
		// アイテム画像と別の場所をクリックしたら、アイテム選択解除
		if (this.core.input_manager.isLeftClickPush()) {
			this.focus_item_id = null;
		}

		// 各種ボタン マウスオーバー時 解除
		this.use_button.setVariable("onfocus", false);
		this.examine_button.setVariable("onfocus", false);
		this.combine_button.setVariable("onfocus", false);
	}

	return false;
};

SceneSubStageMenu.prototype.draw = function(){

};
SceneSubStageMenu.prototype.afterDraw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	// ウィンドウ表示
	this._showWindow();

	// アイテム表示
	base_scene.prototype.draw.apply(this, arguments);

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();

	ctx.restore();
};

SceneSubStageMenu.prototype._showWindow = function(){
	var ctx = this.core.ctx;

	var window_frame = this.core.image_loader.getImage('ui-common-frame-toolpu');

	ctx.drawImage(window_frame,
		0, 0,
		window_frame.width*2/3,
		window_frame.height*2/3
	);

};
SceneSubStageMenu.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;

	ctx.save();

	var message_window = this.core.image_loader.getImage('ui-common-bg-toolpu-blk');

	ctx.drawImage(message_window,
		130,
		this.root().height - 90,
		message_window.width*2/3,
		message_window.height*2/3
	);
	ctx.restore();

};

SceneSubStageMenu.prototype._showMessage = function(){
	if (!this.focus_item_id) return;

	var ctx = this.core.ctx;
	var item_config = ItemConfig[this.focus_item_id];

	// メニュー文字 表示
	ctx.font = "24px 'OradanoGSRR'";
	ctx.fillStyle = 'rgb( 255, 255, 255 )';

	ctx.fillText(item_config.description,
		235,
		680
	);
};

// アイテムを使用
SceneSubStageMenu.prototype._useItem = function(){
	// アイテムを選択してなければ何もしない
	if(!this.focus_item_id) return;

	var focus_item_id = this.focus_item_id;


	for(var i = 0, len = this.menu_item_list.length; i < len; i++) {
		var menu_item = this.menu_item_list[i];
		if(menu_item.item_id() === focus_item_id) {
			// 選択中から解除
			this.focus_item_id = null;

			// メニューの表示から削除
			this.removeObject(menu_item);
			this.menu_item_list.splice(i, 1);

			// アイテム使用
			menu_item.use();

			break;
		}
	}

};

// アイテムを調べる
SceneSubStageMenu.prototype._examineItem = function(){
	// アイテムを選択してなければ何もしない
	if(!this.focus_item_id) return;

	//var focus_item_id = this.focus_item_id;

	// TODO:
};

// アイテムを組み合わせる
SceneSubStageMenu.prototype._combineItem = function(){
	// アイテムを選択してなければ何もしない
	if(!this.focus_item_id) return;

	//var focus_item_id = this.focus_item_id;

	// TODO:
};






SceneSubStageMenu.prototype.isFocusItem = function(item_id){
	return this.focus_item_id === item_id;
};
SceneSubStageMenu.prototype.setFocusItem = function(item_id){
	this.focus_item_id = item_id;
};


SceneSubStageMenu.prototype._setupMenuItems = function() {
	var item_list = this.core.save_manager.getItemList();

	this.menu_item_list = [];
	for (var i = 0, len = item_list.length; i < len; i++) {
		var item_id = item_list[i];

		var menu_item;
		if (item_id === CONSTANT.ITEM.EYEDROPS) { // 目薬
			menu_item = new ObjectMenuItemEyeDrops(this);
		}
		else {
			throw new Error ("Unknown item_id error: " + item_id);
		}
		menu_item.init();
		menu_item.setPosition(
			180 + (i%5)*160,
			180 + 160*(Math.floor(i/5))
		);
		this.menu_item_list.push(menu_item);
	}
};






module.exports = SceneSubStageMenu;
