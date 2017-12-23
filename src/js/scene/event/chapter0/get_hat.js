'use strict';

var base_scene = require('../../stage');
var Util = require('../../../hakurei').util;

var CONSTANT = require('../../../constant');

var SceneSubStagePlay = require('./get_hat/play');
var SceneSubStageGetHat = require('./get_hat/picture_get_hat');
var ObjectChapter0Hat = require('../../../object/pieces/chapter0_hat');

var SceneEventChapter0GetHat = function(core) {
	base_scene.apply(this, arguments);
	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core));
	// 帽子獲得 1枚絵
	this.addSubScene("picture_get_hat", new SceneSubStageGetHat(core));

	// カーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;
};
Util.inherit(SceneEventChapter0GetHat, base_scene);

SceneEventChapter0GetHat.prototype.init = function(){
	base_scene.prototype.init.apply(this, ["chapter0_myroom"]);

	// カーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;
};

SceneEventChapter0GetHat.prototype.beforeDraw = function() {
	base_scene.prototype.beforeDraw.apply(this, arguments);
};

// 画面更新
SceneEventChapter0GetHat.prototype.draw = function(){
	var field_data = this.getFieldData();
	var ctx = this.core.ctx;

	// 背景描画
	var bg = this.core.image_loader.getImage(field_data.background);
	ctx.save();
	ctx.drawImage(bg,
		0,
		0,
		bg.width,
		bg.height,
		0,
		0,
		this.width,
		this.height
	);
	ctx.restore();

	// 帽子オブジェクトの描画
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].draw();
	}

	// カーソルを上下に移動させる
	if (this._cursor_reverse) {
		this._cursor_y-=0.25;
	}
	else {
		this._cursor_y+=0.25;
	}

	if (this._cursor_y > 6) {
		this._cursor_reverse = true;
	}
	else if (this._cursor_y === 0) {
		this._cursor_reverse = false;
	}

	// 黒い矢印
	var cursor = this.core.image_loader.getImage("target_arrow");
	ctx.save();
	ctx.drawImage(cursor,
		747, // 18 -> font size
		479 + this._cursor_y, // TODO: 要調整
		cursor.width*2/3,
		cursor.height*2/3
	);
	ctx.restore();




	// 自機
	this.koishi.draw();

	// 画面の枠
	this.black_mist.draw();

	// scene base 基底クラスの draw 処理
	for(i = 0, len = this.objects.length; i < len; i++) {
		this.objects[i].draw();
	}
	if(this.currentSubScene()) this.currentSubScene().draw();
};

SceneEventChapter0GetHat.prototype._setupPieces = function() {
	base_scene.prototype._setupPieces.apply(this, arguments);

	var object = new ObjectChapter0Hat(this);
	object.init();
	object.setData({
		no: 1,
		image: "chapter0-myroom-obj-07-01",
		name: "帽子",
		x: 767, y: 529,
		scale: 2/3,
	});
	this.pieces.push(object);
};

SceneEventChapter0GetHat.prototype.isNoHat = function() {
	return true;
};

module.exports = SceneEventChapter0GetHat;
