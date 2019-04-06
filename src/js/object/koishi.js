'use strict';
var CONSTANT = require('../constant');

var ROOT_OF_TWO = Math.sqrt(2);

var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;
var DrawSerif = require('../logic/draw_serif');
var CONSTANT_BUTTON = require('../hakurei').constant.button;
var KoishiActionMasterRepository = require('../repository/koishi_action');

/* 使用用途	リピート	fps	フレーム	時間 */
// 	待機	可	30	45	1.5秒
var jsonDataOfWait = require('../data/anime/koishi/wait_anime_1');
//	歩き	可	30	30	1秒
var jsonDataOfWalk = require('../data/anime/koishi/walk_anime_1');
// 	サードアイ使用	不	30	15	0.5秒
var jsonDataOfReaction3rdeye = require('../data/anime/koishi/reaction_3rdeye_anime_1');
//	(帽子なし) 触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouchInNoHat = require('../data/anime/koishi/nohat_reaction_touch_anime_1');
// 	(帽子なし) 待機	可	30	45	1.5秒
var jsonDataOfWaitInNoHat = require('../data/anime/koishi/nohat_wait_anime_1');
//	(帽子なし) 歩き	可	30	30	1秒
var jsonDataOfWalkInNoHat = require('../data/anime/koishi/nohat_walk_anime_1');
// ゲームオーバー(しゃがみ込む) 不	80	2.7秒
var jsonDataOfGameover = require('../data/anime/koishi/gameover_anime_1');
var JSON_ANIME_MAP = {
	// 静止
	default:     jsonDataOfWait,
	wait:        jsonDataOfWait,
	// 歩く
	walk:        jsonDataOfWalk,

	// 静止(帽子なし)
	wait_nohat:        jsonDataOfWaitInNoHat,
	// 歩く(帽子なし)
	walk_nohat:        jsonDataOfWalkInNoHat,
	// 触る(帽子なし)
	touch_nohat:        jsonDataOfReactionTouchInNoHat,

	// ゲームオーバー(しゃがみ込む)
	gameover: jsonDataOfGameover,
	// サードアイ使用
	use_eye:     jsonDataOfReaction3rdeye,
};

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

	// 歩きが継続している時間(歩いてなければ0)
	this._walking_count = 0;

	this.setVelocity({magnitude:0, theta:0});
	this.setWaitAnime();
};

// 待機アニメーションに変更
Koishi.prototype.setWaitAnime = function() {
	if (this.scene.isNoHat()) {
		this.playAnimationInfinity("wait_nohat");
	}
	else {
		this.playAnimationInfinity("wait");
	}
};
// 歩きアニメーションに変更
Koishi.prototype.setWalkAnime = function() {
	if (this.scene.isNoHat()) {
		this.playAnimationInfinity("walk_nohat");
	}
	else {
		this.playAnimationInfinity("walk");
	}
};
// 歩き中かどうか
Koishi.prototype.isWalking = function() {
	if (this.isPlaying("walk_nohat") || this.isPlaying("walk")) return true;

	return false;
};

Koishi.prototype.useEye = function(){

	// サードアイ使用モーションをしたあとに停止
	this.playAnimationOnce("use_eye");
};

Koishi.prototype.unUseEye = function(){
	// サードアイ使用モーション中なら静止に戻す
	if (this.isPlaying("use_eye")) {
		this.setWaitAnime();
	}
};

// オブジェクトを調べた際のモーションを行う
Koishi.prototype.actionByObject = function(action_name) {
	var action = KoishiActionMasterRepository.find(action_name);

	// 音を再生
	// KoishiActionMasterRepository にはないが、jsonAnimeMap に定義される action がある前提なので、
	// action が存在しなくても playAnimationOnce させる
	if (action && action.sound()) {
		this.core.audio_loader.playSound(action.sound());
	}

	this.playAnimationOnce(action_name);
};

Koishi.prototype.update = function(){
	base_object.prototype.update.apply(this, arguments);

	// 足音
	this._playWalkSound();
};

Koishi.prototype._playWalkSound = function(){
	// 移動中でなければ再生しない
	if (!this.isWalking()) return;

	var field_data = this.scene.getFieldData();
	// 足音
	var walkSound = field_data.walkSound();

	// 屋敷の廊下2は、病院の廊下の床と木の床の境なので、円判定で、音を切り替える
	if (field_data.key() === "chapter0_hospital_corridor2") {
		var arc_x = 860;
		var arc_y = 95;
		var r = 600;

		// 円と点の衝突判定
		if (Math.pow(arc_x-this.x(), 2) + Math.pow(arc_y-this.y(), 2) <= Math.pow(r, 2)) {
			walkSound = "walking_bare_wood";
		}
	}

	// こいしの歩くアニメーションに合わせて音を再生
	if(this.getFrameNo() === 14) {
		this.core.audio_loader.playSound(walkSound + "_right");
	}
	else if(this.getFrameNo() === 29) {
		this.core.audio_loader.playSound(walkSound + "_left");
	}
};

Koishi.prototype.moveByInput = function() {
	var move, add_x, add_y;

	if(this.core.input_manager.isGamepadConnected(0)) {
		// 1P がコントローラ接続されていればそちらの入力を取得する
		move = this._calcMoveByGamepad();
		add_x = move.x;
		add_y = move.y;
	}
	else {
		// 1P がコントローラ接続されていなければキーボードの入力取得
		move = this._calcMoveByKeyboard();
		add_x = move.x;
		add_y = move.y;
	}

	/* こいし反転 */
	if (add_x < 0) {
		this.setReflect(true);
	}
	else if (add_x > 0) {
		this.setReflect(false);
	}

	var before_x = this.x();
	var before_y = this.y();

	/* x: 移動 */
	if (add_x !== 0) {
		this.x(this.x() + add_x);

		/* x: オブジェクトとの衝突したら戻す */
		if (this.checkCollisionWithObjects(this.scene.walk_immovable_areas)) {
			this.x(before_x);
		}
		/* x: フィールド外に移動したら戻す */
		else if (this.x() < 0 || this.x() > this.scene.width) {
			this.x(before_x);
		}
	}

	/* y: 移動 */
	if (add_y !== 0) {
		this.y(this.y() + add_y);

		/* y: オブジェクトとの衝突したら戻す */
		if (this.checkCollisionWithObjects(this.scene.walk_immovable_areas)) {
			this.y(before_y);
		}
		/* y: フィールド外に移動したら戻す */
		else if (this.y() < CONSTANT.WALK_DEPTH_LIMIT || this.y() > this.scene.height - 160) {
			this.y(before_y);
		}
	}

	/* モーション変更 */
	if (this.x() !== before_x || this.y() !== before_y) {
		this._walking_count++;

		// 歩きモーションに変更
		this.setWalkAnime();
	}
	else {
		this._walking_count = 0;

		// 歩いてないので待機モーションに変更
		if (this.isWalking()) { // サードアイ使用中モーションになってる場合もあるので
			this.setWaitAnime();
		}
	}
};

Koishi.prototype._calcMoveByKeyboard = function() {
	var add_x = 0;
	var add_y = 0;

	/* 移動量計算1 */
	var speed = CONSTANT.KOISHI_INITIAL_SPEED + CONSTANT.KOISHI_ACCEL_SPEED * this._walking_count;
	speed = Util.clamp(speed, CONSTANT.KOISHI_MIN_SPEED, CONSTANT.KOISHI_MAX_SPEED);

	// デバッグ用
	if(CONSTANT.DEBUG.KOISHI_SPEED) {
		speed = CONSTANT.DEBUG.KOISHI_SPEED;
	}

	/* 移動量計算2 */

	var naname_speed;
	if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.LEFT) &&
		this.core.input_manager.isKeyDown(CONSTANT_BUTTON.UP)
	) {
		naname_speed = speed / ROOT_OF_TWO;
		add_x = -naname_speed;
		add_y = -naname_speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.LEFT) &&
		this.core.input_manager.isKeyDown(CONSTANT_BUTTON.DOWN)
	) {
		naname_speed = speed / ROOT_OF_TWO;
		add_x = -naname_speed;
		add_y = +naname_speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.RIGHT) &&
		this.core.input_manager.isKeyDown(CONSTANT_BUTTON.UP)
	) {
		naname_speed = speed / ROOT_OF_TWO;
		add_x = +naname_speed;
		add_y = -naname_speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.RIGHT) &&
		this.core.input_manager.isKeyDown(CONSTANT_BUTTON.DOWN)
	) {
		naname_speed = speed / ROOT_OF_TWO;
		add_x = +naname_speed;
		add_y = +naname_speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.LEFT)) {
		add_x = -speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.RIGHT)) {
		add_x = +speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.UP)) {
		add_y = -speed;
	}
	else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.DOWN)) {
		add_y = +speed;
	}

	return {x: add_x, y: add_y};
};


Koishi.prototype._calcMoveByGamepad = function() {
	var add_x = 0;
	var add_y = 0;

	// 1Pコン
	var pad = this.core.input_manager.getGamepad(0);

	var rad_x  = pad.getAxisX();
	var rad_y = pad.getAxisY();

	if (-0.1 < rad_x && rad_x < 0.1 && -0.1 < rad_y && rad_y < 0.1) {
		return {x: add_x, y: add_y};
	}

	/* 移動量計算1 */
	var speed = CONSTANT.KOISHI_INITIAL_SPEED + CONSTANT.KOISHI_ACCEL_SPEED * this._walking_count;
	speed = Util.clamp(speed, CONSTANT.KOISHI_MIN_SPEED, CONSTANT.KOISHI_MAX_SPEED);

	// デバッグ用
	if(CONSTANT.DEBUG.KOISHI_SPEED) {
		speed = CONSTANT.DEBUG.KOISHI_SPEED;
	}

	/* 移動量計算2 */

	add_x = speed * rad_x;
	add_y = speed * rad_y;

	return {x: add_x, y: add_y};
};



// KoishiActionMasterRepository の内容も追加
var koishi_action_list = KoishiActionMasterRepository.all();
for (var i = 0, len = koishi_action_list.length; i < len; i++) {
	var action = koishi_action_list[i];
	JSON_ANIME_MAP[action.name()] = action.anime();
}


Koishi.prototype.jsonAnimeMap = function() {
	return JSON_ANIME_MAP;
};

Koishi.prototype.scaleWidth = function(){
	return 2/3;
};
Koishi.prototype.scaleHeight = function(){
	return 2/3;
};

// サードアイの自然消耗
Koishi.prototype.abrasion3rdeye = function() {
	this.core.save_manager.player.reduce3rdeyeGauge(CONSTANT.ABRASION_3RDEYE_GAUGE);

	this.core.audio_loader.playSound("progress_bloodshot");
};

Koishi.prototype.get3rdeyeBloodShotLevel = function() {
	return this.core.save_manager.player.get3rdeyeBloodShotLevel();
};
Koishi.prototype.get3rdeyeGauge = function() {
	return this.core.save_manager.player.get3rdeyeGauge();
};
Koishi.prototype.isDead = function() {
	return this.core.save_manager.player.get3rdeyeGauge() === 0;
};
// 最大値まで回復
Koishi.prototype.gain3rdeyeGaugeMax = function() {
	return this.core.save_manager.player.gain3rdeyeGauge(CONSTANT.MAX_3RDEYE_GAUGE);
};


Koishi.prototype.z = function(){
	return 100; //TODO: 固定値やめる
};

Koishi.prototype.showMessage = function(text_lines, width_num, height_num, option){
	// メッセージウィンドウ表示
	this._showMessageWindow(text_lines, width_num, height_num, option);

	// メッセージ表示
	this._showText(text_lines, width_num, height_num, option);
};

// セリフウィンドウ表示
Koishi.prototype._showMessageWindow = function(lines, width_num, height_num, option){
	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi');

	DrawSerif.drawWindow(this, ctx, fukidashi, lines, width_num, height_num, option);
};
// セリフテキスト表示
Koishi.prototype._showText = function(lines, width_num, height_num, option) {
	var ctx = this.core.ctx;
	DrawSerif.drawText(this, ctx, lines, width_num, height_num, option);
};



Koishi.prototype.collisionY = function(){
	return this.y() + 170;
};


Koishi.prototype.collisionWidth = function(){
	return 100;
};

Koishi.prototype.collisionHeight = function(){
	return 1;
};



module.exports = Koishi;
