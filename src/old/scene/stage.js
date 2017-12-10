'use strict';

var base_scene = require('./stage_base');

var util = require('../hakurei').util;
var CONSTANT = require('../constant');

var SceneSubStagePlay = require('./sub_stage/play');
var SceneSubStageTalk = require('./sub_stage/talk');
var SceneSubStageMenu = require('./sub_stage/menu');
var SceneSubStagePaper = require('./sub_stage/paper');

var Koishi = require('../object/koishi');

var ObjectStaticImage = require('../object/object/static_image');
var ObjectAnimeImage = require('../object/object/anime_image');
var ObjectPaper = require('../object/object/paper');
var ObjectAnimeEventImage = require('../object/object/anime_event_image');

var LeftYajirushi = require('../object/left_yajirushi');
var RightYajirushi = require('../object/right_yajirushi');
var ItemButton = require('../object/item_button');
var Eye = require('../object/eye');

var jsonDataOfBlackMist = require('../anime/black_mist/eff01_anime_1');
var jsonDataOfRedMist = require('../anime/black_mist/eff02_anime_1');
var SS = require('../object/sprite_studio');

var FieldMap = require('../field');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// 移動制限範囲
	this.walk_immovable_areas = [];

	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = [];

};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, is_right){
	base_scene.prototype.init.apply(this, arguments);

	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = this.pieces.concat(this._koishi);

	this.black_mist.init(this.width/2, this.height/2, jsonDataOfBlackMist, 0, {scale: 2/3});
};


SceneStage.prototype.unUseEye = function() {
	this.black_mist.changeAnimation(jsonDataOfBlackMist);
};
SceneStage.prototype.useEye = function() {
	this.black_mist.changeAnimation(jsonDataOfRedMist);
};

SceneStage.prototype.playBGM = function(){
	// メインBGM 再生
	this.core.changeBGM(this.field().bgm);

	// 既に再生していたサブBGMを止める
	this.core.audio_loader.stopBGMWithout(this.field().bgm);

	// サブBGM再生
	if (this.field().sub_bgms) {
		for (var i = 0, len = this.field().sub_bgms.length; i < len; i++) {
			this.core.addBGM(this.field().sub_bgms[i]);
		}
	}
};

SceneStage.prototype.beforeDraw = function(){
	// BGM 再生
	if(this.frame_count === 60) {
		if (!this.isUsingEye()) {
			this.playBGM();
		}
	}

	// z軸の降順ソート
	this._koishi_and_pieces.sort(function(a,b){
		if(a.z() < b.z()) return -1;
		if(a.z() > b.z()) return 1;
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
		// 3rd eye のライト使用
		this._drawLight();

		// デバッグモードだとライトの当たり判定を表示する
		if (this.core.debug_manager.isShowingCollisionArea()) {
			this._drawLightCollision();
		}
	}

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);
};
SceneStage.prototype.calcLightCollisionPosition = function(pos){
	var mouse_x = this.core.input_manager.mousePositionX();
	var mouse_y = this.core.input_manager.mousePositionY();

	var ax = mouse_x - this.koishi().x();
	var ay = mouse_y - this.koishi().y();
	var rad = Math.atan2(ay, ax);

	var x,y;
	if (this.koishi().isReflect()) {
		// ライトの稼働角度には制限がある
		if (-Math.PI*5/6 < rad && rad < 0) { rad = -Math.PI*5/6; }
		else if(0 <= rad && rad < Math.PI*4/6) { rad = Math.PI*4/6; }

		x = this.koishi().x() - 60;
		y = this.koishi().y() - 100;
	}
	else {
		// ライトの稼働角度には制限がある
		if (rad < -Math.PI*2/6) rad = -Math.PI*2/6;
		else if (Math.PI*1/6 < rad) rad = Math.PI*1/6;

		x = this.koishi().x() + 60;
		y = this.koishi().y() - 100;
	}

	x += pos*Math.cos(rad);
	y += pos*Math.sin(rad);
	return {x: x, y: y};
};

SceneStage.prototype._drawLightCollision = function(){
	var R1 = 180;
	var R2 = 60;
	var map1 = this.calcLightCollisionPosition(336);
	var map2 = this.calcLightCollisionPosition(100);


	var ctx = this.core.ctx;
	ctx.save();

	ctx.globalCompositeOperation = "overlay";

	ctx.beginPath();
	ctx.arc(map1.x, map1.y,R1,0,2*Math.PI);
	ctx.arc(map2.x, map2.y,R2,0,2*Math.PI);
	ctx.fill();

	ctx.restore();
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
			object.addSound(data.sound);
			object.addKoishiAction(data.action);
			object.addImage(data.image, data.scale);
			object.setPosition(data.x, data.y);
			object.setZ(i);
			object.addPositionType(data.position_type);
			object.addTarget(data.target_x, data.target_y);
			this.pieces.push(object);

			this.walk_immovable_areas.push(object.getImmovableArea());
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) {
			object = new ObjectAnimeImage(this);
			object.init();
			object.addSize(data.width, data.height);
			object.addSerif(data.serif);
			object.addSound(data.sound, data.sound_back, data.bgm, data.bgm_back);
			object.addKoishiAction(data.action);
			object.addAnime(data.anime1, data.anime2, data.anime3, data.anime4, data.anime5, data.anime6, data.scale);
			object.setPosition(data.x, data.y);
			object.addTarget(data.target_x, data.target_y);
			object.setZ(i);
			object.addPositionType(data.position_type);

			this.pieces.push(object);

			this.walk_immovable_areas.push(object.getImmovableArea());
		}
		else if (data.type === CONSTANT.PAPER_TYPE) {
			object = new ObjectPaper(this);
			object.init();
			object.addData(data);
			object.setZ(i);
			object.addPositionType(data.position_type);
			object.addTarget(data.target_x, data.target_y);

			this.pieces.push(object);

			this.walk_immovable_areas.push(object.getImmovableArea());
		}
		else if (data.type === CONSTANT.ANIME_EVENT_IMAGE_TYPE) {
			object = new ObjectAnimeEventImage(this);
			object.init();
			object.addSize(data.width, data.height);
			object.addSerif(data.serif);
			object.addSound(data.sound, data.sound_back, data.bgm, data.bgm_back);
			object.addKoishiAction(data.action);
			object.addActionBackEvent(data.action_back_event);
			object.addAnime(data.anime1, data.anime2, data.anime3, data.anime4, data.anime5, data.anime6, data.scale);
			object.setPosition(data.x, data.y);
			object.setZ(i);
			object.addTarget(data.target_x, data.target_y);
			object.addPositionType(data.position_type);
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
