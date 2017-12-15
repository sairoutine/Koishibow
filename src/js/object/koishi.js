'use strict';

// こいしの歩く速度
var SPEED = 2;

var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');


/* 使用用途	リピート	fps	フレーム	時間 */
// 	待機	可	30	45	1.5秒
var jsonDataOfWait = require('../data/anime/koishi/wait_anime_1');
//	歩き	可	30	30	1秒
var jsonDataOfWalk = require('../data/anime/koishi/walk_anime_1');
// 	サードアイ使用	不	30	15	0.5秒
var jsonDataOfReaction3rdeye = require('../data/anime/koishi/reaction_3rdeye_anime_1');
// 	下を見る	不	30	15	0.5秒
var jsonDataOfReactionLookBottom = require('../data/anime/koishi/reaction_look_bottom_anime_1');
// 	前を見る	不	30	15	0.5秒
var jsonDataOfReactionLookFront = require('../data/anime/koishi/reaction_look_front_anime_1');
//	上を見る	不	30	15	0.5秒
var jsonDataOfReactionLookTop = require('../data/anime/koishi/reaction_look_top_anime_1');
//	触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouch = require('../data/anime/koishi/reaction_touch_anime_1');
//	YES、うなずく	不	30	15	0.5秒
var jsonDataOfReactionYes = require('../data/anime/koishi/reaction_yes_anime_1');

var Koishi = function (scene) {
	base_object.apply(this, arguments);

};
Util.inherit(Koishi, base_object);

Koishi.prototype.init = function() {
	base_object.prototype.init.apply(this, arguments);

	// クリックした移動先のオブジェクト
	this._move_target_object = null;
	// 移動後に実行する callback
	this._after_move_callback = null;


	this.setVelocity({magnitude:0, theta:0});
};

// 移動中かどうか
Koishi.prototype.isMoving = function() {
	return this._move_target_object ? true : false;
};

// 移動アニメーションに変更
Koishi.prototype.setWaitAnime = function() {
	this.changeAnimation("default");
};
// 歩きアニメーションに変更
Koishi.prototype.setWalkAnime = function() {
	this.changeAnimation("walk");
};

Koishi.prototype._stopMove = function() {
	// 移動中でなければ何もしない
	if(!this.isMoving()) return;

	this._move_target_object = null;
	this.setVelocity({magnitude:0, theta:0});

	this.setWaitAnime();
};
Koishi.prototype.stopMoveWithoutCallBack = function() {
	this._stopMove();

	// 移動後に実行する callback
	this._after_move_callback = null;
};

Koishi.prototype.stopMove = function() {
	this._stopMove();

	// 歩いたあとのコールバックを実行
	if (this._after_move_callback) {
		var cb = this._after_move_callback;
		this._after_move_callback = null;
		cb();
	}
};







Koishi.prototype.useEye = function(){
	this.stopMoveWithoutCallBack();

	// サードアイ使用モーションをしたあとに停止
	this.playAnimationOnce("use_eye");
};

Koishi.prototype.unUseEye = function(){
	// サードアイ使用モーション中なら静止に戻す
	if (this.current_anime === "use_eye") {
		this.setWaitAnime();
	}
};

// オブジェクトを調べた際のモーションを行う
Koishi.prototype.actionByObject = function(action_name) {
	this.playAnimationOnce(action_name);
};

Koishi.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	// 足音
	this._playWalkSound();

	// 移動先
	if(this.isMoving()) {
		this._checkToStop();
	}
};

Koishi.prototype._playWalkSound = function(){
	// 移動中でなければ再生しない
	if (!this.isMoving()) return;

	var field_data = this.scene.getFieldData();
	// 足音
	var walk_sound = field_data.walk_sound;

	// 屋敷の廊下2は、病院の廊下の床と木の床の境なので、円判定で、音を切り替える
	if (field_data.key === "chapter0_hospital_corridor2") {
		var arc_x = 860;
		var arc_y = 95;
		var r = 600;

		// 円と点の衝突判定
		if (Math.pow(arc_x-this.x(), 2) + Math.pow(arc_y-this.y(), 2) <= Math.pow(r, 2)) {
			walk_sound = "walking_bare_wood";
		}
	}

	// こいしの歩くアニメーションに合わせて音を再生
	if(this.ss.getFrameNo() === 14) {
		this.core.audio_loader.playSound(walk_sound + "_right");
	}
	else if(this.ss.getFrameNo() === 29) {
		this.core.audio_loader.playSound(walk_sound + "_left");
	}
};

Koishi.prototype.setMoveTarget = function(obj, callback) {
	// 移動不可であれば何もしない
	if (!this.scene.isEnableToMove()) return;

	// 移動先のオブジェクト or 座標
	this._move_target_object = obj;

	// 移動後に実行する callback
	this._after_move_callback = callback;



	// 移動ベクトルを設定
	var ax = obj.x() - this.x();
	var ay = obj.y() - this.y();

	var theta = Util.radianToTheta(Math.atan2(ay, ax));

	this.setVelocity({magnitude:SPEED, theta:theta});

	// 歩きモーションに変更
	this.setWalkAnime();

	// 移動方向に合わせて こいしを反転
	if (obj.x() > this.x()) {
		this.setReflect(false);
	}
	else {
		this.setReflect(true);
	}
};

Koishi.prototype.jsonAnimeMap = function() {
	return {
		// 静止
		default:     jsonDataOfWait,
		wait:        jsonDataOfWait,
		// 歩く
		walk:        jsonDataOfWalk,
		// サードアイ使用
		use_eye:     jsonDataOfReaction3rdeye,
		// 下を見る
		look_bottom: jsonDataOfReactionLookBottom,
		// 前を見る
		look_front:  jsonDataOfReactionLookFront,
		// 上を見る
		look_top:    jsonDataOfReactionLookTop,
		// ものを触る
		look_touch:  jsonDataOfReactionTouch,
		// うなづく
		yes:         jsonDataOfReactionYes,
	};
};

Koishi.prototype.scaleWidth = function(){
	return 2/3;
};
Koishi.prototype.scaleHeight = function(){
	return 2/3;
};

// 移動終了判定
Koishi.prototype._checkToStop = function() {
	var target_x = this._move_target_object.x();
	var target_y = this._move_target_object.y();

	if (this.x() + SPEED >= target_x && target_x > this.x() - SPEED) {
		// end move
		this.stopMove();
	}
	else if (this.y() + SPEED >= target_y && target_y > this.y() - SPEED) {
		// end move
		this.stopMove();
	}
	/*
	// オブジェクトとぶつかったら止まる
	else if (this.checkCollisionWithObjects(this.scene.walk_immovable_areas)) {
		this.stopMove();
	}
	*/

	// 一定以上の奥行きには移動できない
	if (this.y() < this.scene.height - CONSTANT.WALK_DEPTH_LIMIT) {
		this.y(this.scene.height - CONSTANT.WALK_DEPTH_LIMIT);
	}
};






module.exports = Koishi;
