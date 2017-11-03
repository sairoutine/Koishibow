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

	// フィールド一覧
	this._field_map = FieldMap;

	// 自機
	this._koishi = new Koishi(this);

	// ステージ上のオブジェクト一覧
	this.pieces = [];

	// 移動制限範囲
	this.walk_immovable_areas = [];

	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = [];

	this.left_yajirushi  = new LeftYajirushi(this);
	this.right_yajirushi = new RightYajirushi(this);
	this.item_button     = new ItemButton(this);
	this.eye             = new Eye(this);

	this.is_use_eye = false;
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
	this.core.save_manager.setCurrentField(field_name);
	this.core.save_manager.save();

	this.is_use_eye = false;

	// フィールド移動時にフェードインする
	this.setFadeIn(30, "black");


	this._koishi.init();
	this.setupPiece();
	this._initOfMenuObject();


	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = this.pieces.concat(this._koishi);

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

	// BGM 止める
	if(this.core.audio_loader.currentPlayingBGM() !== this.field().bgm) {
		this.core.stopBGM();
	}

	this.changeSubScene("play");
};


SceneStage.prototype.isUsingEye = function() {
	return this.is_use_eye;
};
SceneStage.prototype.unUseEye = function() {
	this.koishi().unUseEye();
	this.is_use_eye = false;
};
SceneStage.prototype.useEye = function() {
	this.koishi().useEye();
	this.is_use_eye = true;
};

SceneStage.prototype.beforeDraw = function(){
	if(this.frame_count === 60) {
		this.core.changeBGM(this.field().bgm);
	}

	// y 軸(y が大きい方が z軸が大きい)の降順ソート
	this._koishi_and_pieces.sort(function(a,b){
		if(a.y() < b.y()) return -1;
		if(a.y() > b.y()) return 1;
		return 0;
	});
	var obj, i, len;
	for (i = 0, len = this._koishi_and_pieces.length; i < len; i++) {
		obj = this._koishi_and_pieces[i];
		obj.beforeDraw();
	}
	for (i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		obj = this.walk_immovable_areas[i];
		obj.beforeDraw();
	}




	this._beforeDrawOfMenuObject();

	base_scene.prototype.beforeDraw.apply(this, arguments);


	// クリック位置を出力
	if (CONSTANT.DEBUG.ON) {
		if(this.core.input_manager.isRightClickPush()) {
			var x = this.core.input_manager.mousePositionX();
			var y = this.core.input_manager.mousePositionY();

			console.log("x: " + x + ", y: " + y);
		}
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
};

SceneStage.prototype._beforeDrawOfMenuObject = function(){
	if (this.field().left_field) {
		this.left_yajirushi.beforeDraw();
	}

	if (this.field().right_field) {
		this.right_yajirushi.beforeDraw();
	}

	this.item_button.beforeDraw();
};
SceneStage.prototype._drawOfMenuObject = function(){
	if (this.field().left_field) {
		this.left_yajirushi.draw();
	}

	if (this.field().right_field) {
		this.right_yajirushi.draw();
	}

	this.item_button.draw();
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

	// 移動不可能範囲のデバッグ表示
	if (this.core.debug_manager.get("is_show_immovable_area")) {
		this._drawImmovableArea();
	}

	// こいしとオブジェクトの描画
	var obj, i, len;
	for (i = 0, len = this._koishi_and_pieces.length; i < len; i++) {
		obj = this._koishi_and_pieces[i];
		obj.draw();
	}
	for (i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		obj = this.walk_immovable_areas[i];
		obj.draw();
	}


	if (this.isUsingEye()) {
		this._drawLight();
	}

	this._drawOfMenuObject();

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);

};
SceneStage.prototype._drawLight = function(){
	var ctx = this.core.ctx;

	// 背景
	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.3;
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();

	// 光 描画
	var light = this.core.image_loader.getImage("light");
	ctx.save();
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	var ax = x - this.koishi().x();
	var ay = y - this.koishi().y();
	var rad = Math.atan2(ay, ax);

	if (this.koishi().isReflect()) {
		// ライトの稼働角度には制限がある
		if (-Math.PI*5/6 < rad && rad < 0) { rad = -Math.PI*5/6; }
		else if(0 <= rad && rad < Math.PI*4/6) { rad = Math.PI*4/6; }

		ctx.translate(this.koishi().x() - 60, this.koishi().y() - 100);
	}
	else {
		// ライトの稼働角度には制限がある
		if (rad < -Math.PI*2/6) rad = -Math.PI*2/6;
		else if (Math.PI*1/6 < rad) rad = Math.PI*1/6;

		ctx.translate(this.koishi().x() + 60, this.koishi().y() - 100);
	}

	// ライトの角度分
	//rad += 150*Math.PI/180;

	ctx.rotate(rad);

	if (this.core.debug_manager.get('light_global_composite')) {
		ctx.globalCompositeOperation = this.core.debug_manager.get('light_global_composite');
	}
	else {
		ctx.globalCompositeOperation = "overlay";
	}
	ctx.drawImage(light, -13, -336);

	ctx.restore();
};


SceneStage.prototype.koishi = function(){
	return this._koishi;
};

SceneStage.prototype.mainStage = function(){
	return this;
};

SceneStage.prototype.field = function(){
	return this._field_map[this.core.save_manager.getCurrentField()];
};



SceneStage.prototype.setupPiece = function() {
	this.pieces = [];
	this.walk_immovable_areas = [];
	var object_data_list = this.field().objects;

	for (var i = 0, len = object_data_list.length; i < len; i++) {
		var data = object_data_list[i];
		var object;
		if (data.type === CONSTANT.STATIC_IMAGE_TYPE) {
			object = new ObjectStaticImage(this);
			object.init();
			object.addSize(data.width, data.height);
			object.addSerif(data.serif);
			object.addKoishiAction(data.action);
			object.addImage(data.image, data.scale);
			object.setPosition(data.x, data.y);

			this.pieces.push(object);

			this.walk_immovable_areas.push(object.getImmovableArea());
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) {
			object = new ObjectAnimeImage(this);
			object.init();
			object.addSize(data.width, data.height);
			object.addSerif(data.serif);
			object.addSound(data.sound);
			object.addKoishiAction(data.action);
			object.addAnime(data.anime1, data.anime2, data.anime3, data.anime4, data.anime5, data.anime6, data.scale);
			object.setPosition(data.x, data.y);

			this.pieces.push(object);

			this.walk_immovable_areas.push(object.getImmovableArea());
		}

	}
};


SceneStage.prototype._drawImmovableArea = function() {
	var ctx = this.core.ctx;
	ctx.save();
	ctx.fillStyle = 'rgb( 255, 0, 0 )' ;
	ctx.globalAlpha = 0.4;

	// 奥行きの移動範囲制限
	ctx.fillRect(
		0,0, this.width, this.height - CONSTANT.WALK_DEPTH_LIMIT
	);
	ctx.restore();
};

module.exports = SceneStage;
