'use strict';
var _ = require('i18n4v')

var base_scene = require('./base');

var UIParts = require('../../hakurei').object.ui_parts;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var SelectedCursor = require('../../object/ui/selected_cursor');
var ItemMasterRepository = require("../../repository/item");

var ObjectMenuItemEyeDrops = require('../../object/menu_item/eyedrops');
var ObjectMenuItemNonUsable = require('../../object/menu_item/non_usable');
var ObjectMenuItemJournalBook = require('../../object/menu_item/journal_book');

// メニュー一覧
var MENU_BUTTONS = [
	{
		property: "use_button",
		value: _("使用"),
	},
	{
		property: "examine_button",
		value: _("調べる"),
	},
	{
		property: "combine_button",
		value: _("組み合わせる"),
	}
];

var SceneSubStageMenu = function(core) {
	base_scene.apply(this, arguments);

	// 現在カーソルをあわせているアイテムのアイテムID
	this.focus_item_id = null;

	// 現在カーソルをあわせているアイテムの位置(x, y)
	this._index_item_vertical = 0;
	this._index_item_horizontal = 0;

	// 現在アイテムを選択しているかどうか
	this._is_select_item = false;

	// アイテム一覧
	this.menu_item_list = [];

	// ボタン一覧
	this.menu_ui = [];
	// ボタンのどれを選択中か
	this._index_ui = 0;

	// 使用できないメッセージ表示の setTimeout ID
	this._show_unable_to_use_message = 0;
};

Util.inherit(SceneSubStageMenu, base_scene);

SceneSubStageMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// 現在カーソルをあわせているアイテムのアイテムID
	this.focus_item_id = null;

	// 現在カーソルをあわせているアイテムの位置(x, y)
	this._index_item_vertical = 0;
	this._index_item_horizontal = 0;

	// 現在アイテムを選択しているかどうか
	this._is_select_item = false;

	// アイテム一覧
	this.menu_item_list = [];

	// ボタン一覧
	this.menu_ui = [];
	// ボタンのどれを選択中か
	this._index_ui = 0;

	// 使用できないメッセージ表示の setTimeout ID
	this._show_unable_to_use_message = 0;

	this.removeAllObject();

	// アイテム一覧object
	this._setupMenuItems();
	this.addObjects(flatten(this.menu_item_list));

	// ボタン一覧オブジェクト
	this._setupMenuButtons();
	this.menu_ui = [this.use_button, this.examine_button, this.combine_button];
	this.addObjects(this.menu_ui);

	// 選択中カーソル
	this._cursor_ui = new SelectedCursor(this);
	this._cursor_ui.init();
	this.addObjects(this._cursor_ui);
};

SceneSubStageMenu.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);
	// 選択
	var is_up_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP);
	var is_down_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN);
	var is_left_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_LEFT);
	var is_right_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_RIGHT);

	// アイテムメニューを閉じる(共通)
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_SPACE)) {
		this.root().item_menu_button.onCollision();
		return;
	}


	var ui, item;

	// アイテム未選択時
	if (!this._is_select_item) {
		// アイテムを選択
		if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {

			// 何もアイテムを所持していなければ何もしない
			if(!this.menu_item_list[this._index_item_vertical][this._index_item_horizontal]) return;

			this.core.audio_loader.playSound("select_item");
			this._is_select_item = true;

			// 選択中カーソル表示
			ui = this.menu_ui[this._index_ui];
			this._cursor_ui.setPosition(ui.x(), ui.y() - 50);
			this._cursor_ui.show();

			return;
		}
		// メニューを閉じる
		else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
			this.root().item_menu_button.onCollision();
			return;
		}
		// カーソルをあてているアイテムを移動
		else if (is_left_push || is_right_push || is_up_push || is_down_push) {
			// 上
			if (is_up_push) {
				this._index_item_horizontal--;
				if (this._index_item_horizontal < 0) {
					this._index_item_horizontal = 0;
				}

			}
			// 下
			else if (is_down_push) {
				this._index_item_horizontal++;
				if (this._index_item_horizontal > this.menu_item_list[this._index_item_vertical].length - 1) {
					this._index_item_horizontal = this.menu_item_list[this._index_item_vertical].length - 1;
				}

			}
			// 左
			if (is_left_push) {
				this._index_item_vertical--;
				if (this._index_item_vertical < 0) {
					this._index_item_vertical = 0;
				}
			}
			// 右
			else if (is_right_push) {
				this._index_item_vertical++;
				if (this._index_item_vertical > this.menu_item_list.length - 1) {
					this._index_item_vertical = this.menu_item_list.length - 1;
				}
			}

		}

		// アイテムを何か1つでも所持していれば
		if(this.menu_item_list[this._index_item_vertical][this._index_item_horizontal]) {
			item = this.menu_item_list[this._index_item_vertical][this._index_item_horizontal];

			// カーソルを当てているアイテムに変更があれば
			if(!this.isFocusItem(item.itemId())) {
				// アイテム選択 音
				this.core.audio_loader.playSound("select_item");

				// 選択中カーソル表示
				this._cursor_ui.setPosition(item.x(), item.y() - 50);
				this._cursor_ui.show();

				this.setFocusItem(item.itemId());
			}
		}

	}
	// アイテム選択時
	else {
		// アイテムを使用／調べる／組み合わせる
		if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
			ui = this.menu_ui[this._index_ui];

			if (ui === this.use_button) {
				// アイテム使用
				this._useItem();
			}
			else if (ui === this.examine_button) {
				// アイテム調べる
				this._examineItem();
			}
			else if (ui === this.combine_button) {
				// アイテム組み合わせる
				this._combineItem();
			}
			return;
		}
		// アイテム選択を解除
		else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
			this._is_select_item = false;
			// 各種ボタン マウスオーバー時 解除
			this.use_button.setVariable("onfocus", false);
			this.examine_button.setVariable("onfocus", false);
			this.combine_button.setVariable("onfocus", false);

			// 選択中カーソル表示
			item = this.menu_item_list[this._index_item_vertical][this._index_item_horizontal];
			this._cursor_ui.setPosition(item.x(), item.y() - 50);
			this._cursor_ui.show();
		}
		else if (is_left_push || is_right_push) {
			// 左
			if (is_left_push) {
				this._index_ui--;
				if (this._index_ui < 0) {
					this._index_ui = 0;
				}
				else {
					// 選択中カーソル表示
					ui = this.menu_ui[this._index_ui];
					this._cursor_ui.setPosition(ui.x(), ui.y() - 50);
					this._cursor_ui.show();
				}
			}
			// 右
			else if (is_right_push) {
				this._index_ui++;
				if (this._index_ui > this.menu_ui.length - 1) {
					this._index_ui = this.menu_ui.length - 1;
				}
				else {
					// 選択中カーソル表示
					ui = this.menu_ui[this._index_ui];
					this._cursor_ui.setPosition(ui.x(), ui.y() - 50);
					this._cursor_ui.show();
				}
			}
		}

		if (this._is_select_item) { // Xキーでキャンセルした場合があるので再度チェック
			// カーソルのせたときにボタンを明るくする
			for (var i = 0, len = this.menu_ui.length; i < len; i++) {
				var menu = this.menu_ui[i];
				if (i === this._index_ui) {
					menu.setVariable("onfocus", true);
				}
				else {
					menu.setVariable("onfocus", false);
				}
			}
		}
	}
};

SceneSubStageMenu.prototype.draw = function(){
	// 親の stage scene の後処理(黒いもやもや描画)などより後にメニューUIを表示したいので、
	// afterDraw で描画処理をおこなう。
};
SceneSubStageMenu.prototype.afterDraw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	// 背景をちょっと暗く
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.4;
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();

	// ウィンドウ表示
	this._showWindow();

	// アイテムとメニューボタンを表示
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
	var item_config = ItemMasterRepository.find(this.focus_item_id);

	var description;
	if (this._show_unable_to_use_message) {
		description = _("使用できません");
	}
	else{
		description = item_config.description();
	}

	// メニュー文字 表示
	ctx.font = "24px 'OradanoGSRR'";
	ctx.fillStyle = 'rgb( 255, 255, 255 )';

	ctx.fillText(description,
		235,
		680
	);
};

// アイテムを使用
SceneSubStageMenu.prototype._useItem = function(){
	// アイテムを選択してなければ何もしない
	if(!this.focus_item_id) return;

	var focus_item_id = this.focus_item_id;


	var menu_item_list = flatten(this.menu_item_list);
	for(var i = 0, len = menu_item_list.length; i < len; i++) {
		var menu_item = menu_item_list[i];
		if(menu_item.itemId() === focus_item_id) {
			if (menu_item.isEnableToUse()) {
				// 選択中から解除
				this.focus_item_id = null;

				// アイテム使用
				menu_item.use();

				// メニューの表示から削除
				this.removeObject(menu_item);
				this._setupMenuItems();
			}
			else {
				// TODO: 使用できない音
				this._showUnableToUseMessage();
			}

			break;
		}
	}

};

// 使用できないメッセージを表示
SceneSubStageMenu.prototype._showUnableToUseMessage = function(){
	var self = this;

	// 使用できないメッセージをまだ表示中だったら、それの表示解除はキャンセル
	if(self._show_unable_to_use_message) {
		self.core.time_manager.clearTimeout(self._show_unable_to_use_message);
	}

	// Nフレーム後にメッセージを非表示
	self._show_unable_to_use_message = self.core.time_manager.setTimeout(function () {
		self._show_unable_to_use_message = 0;
	}, 60);
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

var TURN_NUM = 5; // アイテム5つで折り返す。

SceneSubStageMenu.prototype._setupMenuItems = function() {
	var item_list = this.core.save_manager.item.getItemList();

	this.menu_item_list = [];
	for (var i = 0, len = item_list.length; i < len; i++) {
		var item_data = item_list[i];
		var item_id = item_data.item_id;
		var num = item_data.num;

		// item_id => item_type
		var item_config = ItemMasterRepository.find(item_id);
		var type = item_config.type();

		var menu_item;
		if (type === CONSTANT.ITEM.EYEDROPS) { // 目薬
			menu_item = new ObjectMenuItemEyeDrops(this, item_id, num);
		}
		else if (type === CONSTANT.ITEM.NON_USABLE) { // 会話で消費するアイテム
			menu_item = new ObjectMenuItemNonUsable(this, item_id, num);
		}
		else if (type === CONSTANT.ITEM.JOURNAL_BOOK) { // 会話で消費するアイテム
			menu_item = new ObjectMenuItemJournalBook(this, item_id, num);
		}
		else {
			throw new Error ("Unknown item type error: " + type);
		}

		var index_horizontal = i % TURN_NUM;
		var index_vertical = Math.floor(i / TURN_NUM);

		menu_item.init();
		menu_item.setPosition(
			180 + index_horizontal*160,
			180 + 160 * index_vertical
		);

		// 初期化
		if(!this.menu_item_list[index_horizontal]) {
			this.menu_item_list[index_horizontal] = [];
		}

		this.menu_item_list[index_horizontal][index_vertical] = menu_item;
	}

	// 初期化
	// this.menu_item_list.length - 1 を参照することがあるので
	if(!this.menu_item_list[0]) {
		this.menu_item_list[0] = [];
	}


};

// ボタン一覧オブジェクトの生成
SceneSubStageMenu.prototype._setupMenuButtons = function() {
	var basePosX = 300;
	var basePosY = this.root().height - 165 + 105/3;
	var buttonWidth  = 250*2/3;
	var buttonHeight = 105*2/3;
	var buttonMarginWidth  = 15;

	var self = this;
	for (var i = 0, len = MENU_BUTTONS.length; i < len; i++) {
		var conf = MENU_BUTTONS[i];

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
					//ctx.textBaseline = 'middle';
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

function flatten (nested_array) {
	return Array.prototype.concat.apply([], nested_array);
}

module.exports = SceneSubStageMenu;
