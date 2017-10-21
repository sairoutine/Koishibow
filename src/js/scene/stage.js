'use strict';

var base_scene = require('./stage_base');

var util = require('../hakurei').util;
var CONSTANT = require('../constant');

var SceneSubStagePlay = require('./sub_stage/play');
var SceneSubStageTalk = require('./sub_stage/talk');
var SceneSubStageMenu = require('./sub_stage/menu');

var Koishi = require('../object/koishi');

var ObjectStaticImage = require('../object/object/static_image');
var ObjectAnimeImage = require('../object/object/anime_image');

var LeftYajirushi = require('../object/left_yajirushi');
var RightYajirushi = require('../object/right_yajirushi');
var ItemButton = require('../object/item_button');
var Eye = require('../object/eye');

var FieldMap = require('../field');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// 現在のフィールド
	this._current_field_name = null;
	// フィールド一覧
	this._field_map = FieldMap;

	// 自機
	this._koishi = new Koishi(this);

	// ステージ上のオブジェクト一覧
	this.pieces = [];

	this.left_yajirushi  = new LeftYajirushi(this);
	this.right_yajirushi = new RightYajirushi(this);
	this.item_button     = new ItemButton(this);
	this.eye             = new Eye(this);

	/* sub scene 一覧
	調べてるオブジェクト(机の上、窓の外) →そこからさらにアイテム調べられるので、サブシーンのサブシーンができるように、各サブシーンを作っておかねば。
	アイテムを読んでいるサブシーン(ページ送り等)
	アニメーションサブシーン(オブジェクトが反応する、その間こいしは動けない)
	*/

	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core));
	// 会話中
	this.addSubScene("talk", new SceneSubStageTalk(core));
	// メニュー
	this.addSubScene("menu", new SceneSubStageMenu(core));
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, is_right){
	base_scene.prototype.init.apply(this, arguments);

	// 現在のフィールド
	this._current_field_name = field_name;

	// フィールド移動時にフェードインする
	this.setFadeIn(30, "black");


	this._koishi.init();
	this._initOfMenuObject();

	this.setupPiece();


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


	this.changeSubScene("play");
};

SceneStage.prototype.beforeDraw = function(){
	this._beforeDrawOfPieces();
	this._koishi.beforeDraw();
	this._beforeDrawOfMenuObject();
	base_scene.prototype.beforeDraw.apply(this, arguments);
};



SceneStage.prototype._beforeDrawOfPieces = function(){
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		var piece = this.pieces[i];
		piece.beforeDraw();
	}
};
SceneStage.prototype._drawOfPieces = function(){
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		var piece = this.pieces[i];
		piece.draw();
	}
};



SceneStage.prototype._initOfMenuObject = function(){
	if (this.field().left_field) {
		this.left_yajirushi.init();
	}

	if (this.field().right_field) {
		this.right_yajirushi.init();
	}

	this.item_button.init();
	this.eye.init();
};

SceneStage.prototype._beforeDrawOfMenuObject = function(){
	if (this.field().left_field) {
		this.left_yajirushi.beforeDraw();
	}

	if (this.field().right_field) {
		this.right_yajirushi.beforeDraw();
	}

	this.item_button.beforeDraw();
	this.eye.beforeDraw();
};
SceneStage.prototype._drawOfMenuObject = function(){
	if (this.field().left_field) {
		this.left_yajirushi.draw();
	}

	if (this.field().right_field) {
		this.right_yajirushi.draw();
	}

	this.item_button.draw();
	this.eye.draw();
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

	// デバッグ用の仮描画する
	if (0) {

		ctx.save();
		// フィールド名 表示
		// TODO: 削除
		ctx.font = "60px 'OradanoGSRR'";
		ctx.textAlign = 'center';
		ctx.textBaseAlign = 'middle';
		ctx.fillStyle = 'rgb( 0, 0, 0 )';
		ctx.fillText(this.field().name, this.width - 180, this.height - 20);
		ctx.restore();
	}

	this._drawOfPieces();
	this._koishi.draw();

	this._drawLight();

	this._drawOfMenuObject();

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);

};
SceneStage.prototype._drawLight = function(){
	var ctx = this.core.ctx;

	// 背景
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.9;
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();

	// 光 描画
	var light = this.core.image_loader.getImage("light");
	ctx.save();
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	if (this.koishi().isReflect()) {
		ctx.translate(this.koishi().x() - 50, this.koishi().y() - 100);
	}
	else {
		ctx.translate(this.koishi().x() + 50, this.koishi().y() - 100);
	}

	var ax = x - this.koishi().x();
	var ay = y - this.koishi().y();
	var rad = Math.atan2(ay, ax) + 150*Math.PI/180;

	ctx.rotate(rad);
	ctx.drawImage(light,
		0, 0,
		light.width/2 - 250, light.height/2 - 150,
		-light.width/2,                           -light.height/2,
		light.width/2, light.height/2
	);

	ctx.restore();
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
	var object_data_list = this.field().objects;

	for (var i = 0, len = object_data_list.length; i < len; i++) {
		var data = object_data_list[i];
		var object;
		if (data.type === CONSTANT.STATIC_IMAGE_TYPE) {
			object = new ObjectStaticImage(this);
			object.init();
			object.addSerif(data.serif);
			object.addImage(data.image, data.scale);
			object.setPosition(data.x, data.y);

			this.pieces.push(object);
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) {
			object = new ObjectAnimeImage(this);
			object.init();
			object.addSerif(data.serif);
			object.addAnime(data.anime1, data.anime2, data.anime3, data.scale);
			object.setPosition(data.x, data.y);

			this.pieces.push(object);
		}

	}
};



module.exports = SceneStage;
