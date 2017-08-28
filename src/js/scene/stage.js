'use strict';

var base_scene = require('./stage_base');

var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var SceneSubStagePlay = require('./sub_stage/play');
var SceneSubStageTalk = require('./sub_stage/talk');

var Koishi = require('../object/koishi');

var Piece = require('../object/piece/1');

var LeftYajirushi = require('../object/left_yajirushi');
var RightYajirushi = require('../object/right_yajirushi');
var ItemButton = require('../object/item_button');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

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
	メニュー
	調べてるオブジェクト(机の上、窓の外) →そこからさらにアイテム調べられるので、サブシーンのサブシーンができるように、各サブシーンを作っておかねば。
	アイテムを読んでいるサブシーン(ページ送り等)
	アニメーションサブシーン(オブジェクトが反応する、その間こいしは動けない)
	*/

	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core, this));
	// 会話中
	this.addSubScene("talk", new SceneSubStageTalk(core, this));
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(is_left){
	base_scene.prototype.init.apply(this, arguments);

	this.removeAllObject();
	this.addObject(this._koishi);

	// フィールド移動時にフェードインする
	this.setFadeIn(30, "black");

	// フィールド開始時の初期位置の決定
	// 右から来たか、左から来たかでこいしの初期位置が変わる
	// TODO: マップデータに持たせた方が良さそうね
	if (is_left) {
		this.koishi().setPosition(this.width - 180, 360);
		this.koishi().setReflect(true);
	}
	else {
		this.koishi().setPosition(180, 360);
	}

	this.setupPiece();

	this.addObject(this.left_yajirushi);
	this.addObject(this.right_yajirushi);

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
	var title_bg = this.core.image_loader.getImage('bg');
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

	// こいし／サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);
};


SceneStage.prototype.koishi = function(){
	return this._koishi;
};

SceneStage.prototype.mainStage = function(){
	return this;
};

SceneStage.prototype.setupPiece = function(){
	// TODO:
	var piece = new Piece(this);
	piece.init();
	piece.setPosition(540, 220);
	this.addObject(piece);

	this.pieces = [piece];
};



module.exports = SceneStage;
