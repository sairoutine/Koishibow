'use strict';

// セーブデータ
var base_class = require('../hakurei').storage.base;
var Util = require('../hakurei').util;

var StoragePiece = function() {
	base_class.apply(this, arguments);
};
Util.inherit(StoragePiece, base_class);

// セーブファイル名
StoragePiece.KEY = function() {
	return "3rdeye_piece";
};

StoragePiece.prototype.getPieceDataMap = function() {
	var map = this.get("piece_data_map");

	if(!map) map = {};

	return map;
};

StoragePiece.prototype.getPieceData = function(field_name, piece_no, key) {
	var map = this.getPieceDataMap();

	var data = map[field_name + "_" + piece_no];

	if(!data) data = {};

	return data[key];
};

StoragePiece.prototype.setPieceData = function(field_name, piece_no, key, value) {
	var map = this.getPieceDataMap();

	var data = map[field_name + "_" + piece_no];

	if(!data) data = {};

	data[key] = value;
	map[field_name + "_" + piece_no] = data;

	this.set("piece_data_map", map);
};

module.exports = StoragePiece;
