'use strict';

var base_scene = require('./stage_base');

var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var SceneSubStagePlay = require('./sub_stage/play');
var SceneSubStageTalk = require('./sub_stage/talk');
var SceneSubStageMenu = require('./sub_stage/menu');

var Koishi = require('../object/koishi');

var Piece = require('../object/piece/1');

var LeftYajirushi = require('../object/left_yajirushi');
var RightYajirushi = require('../object/right_yajirushi');
var ItemButton = require('../object/item_button');

var FieldMap = require('../field');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// 現在のフィールド
	this._current_field_name = null;
	// フィールド一覧
	this._field_map = FieldMap;

	// TODO: この addobject なくせないかな...
	// 自機
	this._koishi = new Koishi(this);
	this.addObject(this._koishi);

	this.left_yajirushi  = new LeftYajirushi(this);
	this.right_yajirushi = new RightYajirushi(this);
	this.addObject(this.left_yajirushi);
	this.addObject(this.right_yajirushi);

	this.item_button = new ItemButton(this);
	this.addObject(this.item_button);

	/* sub scene 一覧
	調べてるオブジェクト(机の上、窓の外) →そこからさらにアイテム調べられるので、サブシーンのサブシーンができるように、各サブシーンを作っておかねば。
	アイテムを読んでいるサブシーン(ページ送り等)
	アニメーションサブシーン(オブジェクトが反応する、その間こいしは動けない)
	*/

	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core, this));
	// 会話中
	this.addSubScene("talk", new SceneSubStageTalk(core, this));
	// メニュー
	this.addSubScene("menu", new SceneSubStageMenu(core, this));
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, is_right){
	base_scene.prototype.init.apply(this, arguments);

	// 現在のフィールド
	this._current_field_name = field_name;

	this.removeAllObject();
	this.setupPiece();
	this.addObject(this._koishi);

	// フィールド移動時にフェードインする
	this.setFadeIn(30, "black");


	// フィールド開始時の初期位置の決定
	// 右から来たか、左から来たかでこいしの初期位置が変わる
	var pos;
	if (is_right) {
		pos = this.field().right_start_position;
		this.koishi().setPosition(pos.x, pos.y);
		this.koishi().setReflect(true);
	}
	else {
		pos = this.field().left_start_position;
		this.koishi().setPosition(pos.x, pos.y);
	}


	if (this.field().left_field) {
		this.addObject(this.left_yajirushi);
	}

	if (this.field().right_field) {
		this.addObject(this.right_yajirushi);
	}

	this.addObject(this.item_button);

	this.changeSubScene("play");
};

SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
};

// 画面更新
SceneStage.prototype.draw = function(){
	var ctx = this.core.ctx;

	// 背景描画
	var title_bg = this.core.image_loader.getImage(this.field().background);
	ctx.save();
	ctx.drawImage(title_bg,
					0,
					0,
					title_bg.width,
					title_bg.height,
					0,
					0,
					this.core.width,
					this.core.height);
	ctx.restore();

	ctx.save();
	// フィールド名 表示
	// TODO: 削除
	ctx.font = "60px 'OradanoGSRR'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 0, 0, 0 )';
	ctx.fillText(this.field().name, this.width - 180, this.height - 20);

	ctx.restore();

	// こいし／サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);
};


SceneStage.prototype.koishi = function(){
	return this._koishi;
};

SceneStage.prototype.mainStage = function(){
	return this;
};

SceneStage.prototype.field = function(){
	return this._field_map[this._current_field_name];
};



SceneStage.prototype.setupPiece = function() {
	this.pieces = [];
	var objects = this.field().objects;

	for (var i = 0, len = objects.length; i < len; i++) {
		var object = objects[i];
		var piece = new Piece(this);
		piece.init();
		piece.setPosition(object.x, object.y);
		piece.addImage(object.image, object.scale);
		this.addObject(piece);

		this.pieces.push(piece);
	}
};



module.exports = SceneStage;
