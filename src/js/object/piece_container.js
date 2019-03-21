'use strict';
// ステージ上のオブジェクト一覧を生成・管理する

var BaseObject = require('../hakurei').Object.Base;
var Util = require('../hakurei').Util;
var CONSTANT = require('../constant');

var ObjectStaticImage = require('../object/pieces/static_image');
var ObjectAnimeImage = require('../object/pieces/anime_image');
var ObjectJournalFront = require('../object/pieces/journal_front');
var ObjectJournalBack = require('../object/pieces/journal_back');
var ObjectArrowBack = require('../object/pieces/arrow_back');
var ObjectAnimeEventImage = require('../object/pieces/anime_event_image');
var ObjectItem = require('../object/pieces/item');
var ObjectFieldChange = require('../object/pieces/field_change');
var ObjectAnimeDeadKoishi = require('../object/pieces/anime_dead_koishi');
var ObjectStaticEventImage = require('../object/pieces/static_event_image');
var ObjectFaucet = require('../object/pieces/faucet');
var ObjectSuspendedTree = require('../object/pieces/suspended_tree');
var ObjectChapter1Hashigo = require('../object/pieces/chapter1_hashigo');
var FieldMasterRepository = require('../repository/field');

var PieceContainer = function(scene) {
	BaseObject.apply(this, arguments);

	this._pieces = [];
	this._koishi_and_pieces = [];
	this._walk_immovable_areas = [];
};
Util.inherit(PieceContainer, BaseObject);

PieceContainer.prototype.init = function(field_name, koishi) {
	BaseObject.prototype.init.apply(this, arguments);

	this._field_master = FieldMasterRepository.find(field_name);

	this._setupPieces();


	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = koishi ? this._pieces.concat(koishi) : this._pieces;

	// z軸の降順ソート
	this._koishi_and_pieces.sort(function(a,b){
		if(a.z() < b.z()) return -1;
		if(a.z() > b.z()) return 1;
		return 0;
	});
};



PieceContainer.prototype.notifyUse3rdEye = function() {
	for (var i = 0, len = this._pieces.length; i < len; i++) {
		this._pieces[i].onUse3rdEye();
	}
};

PieceContainer.prototype.notifyUnUse3rdEye = function() {
	for (var i = 0, len = this._pieces.length; i < len; i++) {
		this._pieces[i].onUnUse3rdEye();
	}
};

PieceContainer.prototype.update = function() {
	BaseObject.prototype.update.apply(this, arguments);
	for (var i = 0, len = this._pieces.length; i < len; i++) {
		this._pieces[i].update();
	}
};

PieceContainer.prototype.draw = function() {
	BaseObject.prototype.draw.apply(this, arguments);
	for (var i = 0, len = this._koishi_and_pieces.length; i < len; i++) {
		this._koishi_and_pieces[i].draw();
	}
};

PieceContainer.prototype.get = function(name) {
	// 自機
	var obj, i, len;
	for (i = 0, len = this._pieces.length; i < len; i++) {
		obj = this._pieces[i];
		// TODO: O(1)
		if(obj.no === name) {
			return obj;
		}
	}

	return null;
};
PieceContainer.prototype.getAll = function() {
	return this._pieces;
};
PieceContainer.prototype.getWalkImmovableAreas = function() {
	return this._walk_immovable_areas;
};

PieceContainer.prototype._setupPieces = function() {
	// 画面上のオブジェクト一覧
	this._pieces = [];
	// こいしが歩けない範囲
	this._walk_immovable_areas = [];

	var object_data_list = this._getObjectDataByFieldData();
	for (var i = 0, len = object_data_list.length; i < len; i++) {
		var data = object_data_list[i];
		var object;
		if (data.type === CONSTANT.STATIC_IMAGE_TYPE) { // 静止オブジェクト
			object = new ObjectStaticImage(this.scene);
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) { // サードアイを当てると動くオブジェクト
			object = new ObjectAnimeImage(this.scene);
		}
		else if (data.type === CONSTANT.JOURNAL_FRONT_TYPE) { // ジャーナル(表)
			object = new ObjectJournalFront(this.scene);
		}
		else if (data.type === CONSTANT.JOURNAL_BACK_TYPE) { // ジャーナル(裏)
			object = new ObjectJournalBack(this.scene);
		}
		else if (data.type === CONSTANT.ARROW_BACK_TYPE) { // サードアイを当てると見える矢印
			object = new ObjectArrowBack(this.scene);
		}
		else if (data.type === CONSTANT.ANIME_EVENT_IMAGE_TYPE) { // イベント発生オブジェクト
			object = new ObjectAnimeEventImage(this.scene);
		}
		else if (data.type === CONSTANT.ITEM_TYPE) { // アイテム
			object = new ObjectItem(this.scene);
		}
		else if (data.type === CONSTANT.FIELD_CHANGE_TYPE) { // フィールド遷移
			object = new ObjectFieldChange(this.scene);
		}
		else if (data.type === CONSTANT.BUTTON_KOISHI_TYPE) {
			object = new ObjectAnimeDeadKoishi(this.scene);
		}
		else if (data.type === CONSTANT.STATIC_EVENT_IMAGE_TYPE) {
			object = new ObjectStaticEventImage(this.scene);
		}
		else if (data.type === CONSTANT.FAUCET_TYPE) {
			object = new ObjectFaucet(this.scene);
		}
		else if (data.type === CONSTANT.SUSPENDED_TREE_TYPE) {
			object = new ObjectSuspendedTree(this.scene);
		}
		else if (data.type === CONSTANT.HASHIGO_TYPE) {
			object = new ObjectChapter1Hashigo(this.scene);
		}

		else {
			throw new Error ("Unknown object type error: " + data.type);
		}
		object.init();
		object.setData(data);
		this._pieces.push(object);

		this._walk_immovable_areas.push(object.getImmovableArea());
	}
};

PieceContainer.prototype._getObjectDataByFieldData = function() {
	var field_data = this._field_master;
	var object_data_list = Array.prototype.concat.apply([], field_data.objects()); // shallow copy

	if(field_data.rightField()) {
		object_data_list.push({
			no: "rightField",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "右へのフィールド移動",
			x: this.scene.width - 48,
			y: this.scene.height/2,
			width: 64,
			height: this.scene.height,
			next_field_name: field_data.rightField(),
		});
	}
	if(field_data.leftField()) {
		object_data_list.push({
			no: "leftField",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "左へのフィールド移動",
			x: 48,
			y: this.scene.height/2,
			width: 64,
			height: this.scene.height,
			next_field_name: field_data.leftField(),
		});
	}
	if(field_data.upField()) {
		object_data_list.push({
			no: "upField",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上へのフィールド移動",
			x: this.scene.width/2,
			y: this.scene.height - CONSTANT.WALK_DEPTH_LIMIT,
			width: this.scene.width,
			height: 10,
			next_field_name: field_data.upField(),
		});
	}
	if(field_data.downField()) {
		object_data_list.push({
			no: "downField",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: this.scene.width/2,
			y: this.scene.height - 10,
			width: this.scene.width,
			height: 10,
			next_field_name: field_data.downField(),
		});
	}

	// ゲームオーバー用ボタンの目こいし
	if (this.core.save_manager.player.getLastGameoverField() === field_data.key()) {
		object_data_list.push({
			no: "button_koishi",
			type: CONSTANT.BUTTON_KOISHI_TYPE,
			name: "ボタンの目のこいし",
			x: this.scene.width/2,
			y: this.scene.height/2,
		});

		// 一度表示したあとは削除
		this.core.save_manager.player.deleteLastGameoverField();
	}

	return object_data_list;
};



module.exports = PieceContainer;
