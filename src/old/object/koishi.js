'use strict';

// こいしの歩く速度
var SPEED = 2;

var base_object = require('../hakurei').object.base;
var util = require('../hakurei').util;
var CONSTANT = require('../constant');


/* 使用用途	リピート	fps	フレーム	時間 */

// 	待機	可	30	45	1.5秒
var jsonDataOfWait = require('../anime/koishi/wait_anime_1');
//	歩き	可	30	30	1秒
var jsonDataOfWalk = require('../anime/koishi/walk_anime_1');
// 	サードアイ使用	不	30	15	0.5秒
var jsonDataOfReaction3rdeye = require('../anime/koishi/reaction_3rdeye_anime_1');
// 	下を見る	不	30	15	0.5秒
var jsonDataOfReactionLookBottom = require('../anime/koishi/reaction_look_bottom_anime_1');
// 	前を見る	不	30	15	0.5秒
var jsonDataOfReactionLookFront = require('../anime/koishi/reaction_look_front_anime_1');
//	上を見る	不	30	15	0.5秒
var jsonDataOfReactionLookTop = require('../anime/koishi/reaction_look_top_anime_1');
//	触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouch = require('../anime/koishi/reaction_touch_anime_1');
//	YES、うなずく	不	30	15	0.5秒
var jsonDataOfReactionYes = require('../anime/koishi/reaction_yes_anime_1');

var SS = require('../object/sprite_studio');


var Koishi = function (scene) {
	base_object.apply(this, arguments);

	this.sprite = new SS(this.scene);
};
util.inherit(Koishi, base_object);

Koishi.prototype.init = function() {
	base_object.prototype.init.apply(this, arguments);

	this._target_x = 0;
	this._target_y = 0;
	this._target_object = null;
	this._move_callback = null; // 歩いて止まった後の callback

	this.setVelocity({magnitude:0, theta:0});
};

Koishi.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);
	this.sprite.init(x, y, jsonDataOfWait, 0, {scale: 0.6});
};

Koishi.prototype.setWait = function() {
	this.sprite.changeAnimation(jsonDataOfWait);
};
Koishi.prototype.setWalk = function() {
	this.sprite.changeAnimation(jsonDataOfWalk);
};
Koishi.prototype.useEye = function(){
	this.stopMove();
	var self = this;

	var sprite = self.sprite;
	sprite.playAnimationOnce(jsonDataOfReaction3rdeye);
};
Koishi.prototype.unUseEye = function(){
	var self = this;

	if (!this.isMoving()) {
		this.setWait();
	}
};
Koishi.prototype.actionByName = function(action_name) {
	this.stopMove();
	var self = this;

	var sprite = self.sprite;
	sprite.playAnimationOnce(this._getAction(action_name));
};

Koishi.prototype._getAction = function(action_name) {
	// 下を見る
	if (action_name === "look_bottom") {
		return jsonDataOfReactionLookBottom;
	}
	// 前を見る
	else if (action_name === "look_front") {
		return jsonDataOfReactionLookFront;
	}
	// 上を見る
	else if (action_name === "look_top") {
		return jsonDataOfReactionLookTop;
	}
	// 触る
	else if (action_name === "touch") {
		return jsonDataOfReactionTouch;
	}
	else {
		throw new Error("action_name: " + action_name + "does not exists.");
	}
};



Koishi.prototype.setReflect = function(flag) {
	this.sprite.setReflect(flag);
};
Koishi.prototype.isReflect = function() {
	return this.sprite.isReflect();
};


Koishi.prototype.setAfterMoveCallback = function(cb) {
	this._move_callback = cb;
};




Koishi.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	// 足音
	if (this.isMoving()) {
		var walk_sound = this.scene.field().walk_sound;

		// 屋敷の廊下2は、病院の廊下の床と木の床の境なので、円判定で、音を切り替える
		if (this.scene.field().key === "chapter0_hospital_corridor2") {
			var arc_x = 860;
			var arc_y = 95;
			var r = 600;

			// 円と点の衝突判定
			if (Math.pow(arc_x-this.x(), 2) + Math.pow(arc_y-this.y(), 2) <= Math.pow(r, 2)) {
				walk_sound = "walking_bare_wood";
			}
		}

		if(this.sprite.sprite.getFrameNo() === 14) {
			this.core.playSound(walk_sound + "_right");
		}
		else if(this.sprite.sprite.getFrameNo() === 29) {
			this.core.playSound(walk_sound + "_left");
		}

	}

	// update sprite
	this.sprite.x(this.x());
	this.sprite.y(this.y());
	this.sprite.beforeDraw();

	// move
	if (this._target_x) {
		if (this.x() + SPEED >= this._target_x && this._target_x > this.x() - SPEED) {
			// end move
			this.stopMove();
		}
	}
	if (this._target_y) {
		if (this.y() + SPEED >= this._target_y && this._target_y > this.y() - SPEED) {
			// end move
			this.stopMove();
		}
	}
	// オブジェクトとぶつかったら止まる
	if (this.isMoving() && this.checkCollisionWithObjects(this.scene.walk_immovable_areas)) {
		this.stopMove();
	}

	// 一定以上の奥行きには移動できない
	if (this.y() < this.scene.height - CONSTANT.WALK_DEPTH_LIMIT) {
		this.y(this.scene.height - CONSTANT.WALK_DEPTH_LIMIT);
	}
};


Koishi.prototype.onCollision = function(obj) {
	/*
	// オブジェクトの下にこいし
	if(obj.y() < this.y() && obj.getCollisionDownY() > this.y()) {
		this.y(obj.getCollisionDownY());
	}
	// オブジェクトの上にこいし
	else if(obj.y() > this.y() && obj.getCollisionUpY() < this.y()) {
		this.y(obj.getCollisionDownY());
	}
	// オブジェクトの右にこいし
	if(obj.x() > this.x() && obj.getCollisionRightX() < this.x()) {
		this.x(obj.getCollisionRightX());
	}
	// オブジェクトの左にこいし
	else if(obj.x() < this.x() && obj.getCollisionLeftX() > this.x()) {
		this.x(obj.getCollisionLeftX());
	}
	*/
	this.moveBack();

	if (this._target_object && this._target_object.id !== obj.__id) {
		this._move_callback = null;
	}
};

Koishi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);


	// こいしの暗度レイヤー
	var alpha = this.core.debug_manager.get("koishi_alpha");
	if (alpha) {
		this.sprite.draw(alpha);
	}
	else {
		this.sprite.draw();
	}
};





Koishi.prototype.setMoveTargetObject = function(point, obj) {
	this._target_object = obj;

	var x = point.x();
	var y = point.y();

	if(obj._target_pos_x) {
		x = obj._target_pos_x;
	}
	if(obj._target_pos_y) {
		y = obj._target_pos_y;
	}


	return this.setMoveTarget(x,y);
};
Koishi.prototype.setMoveTarget = function(x, y) {
	base_object.prototype.beforeDraw.apply(this, arguments);
	var ax = x - this.x();
	var ay = y - this.y();

	var theta = util.radianToTheta(Math.atan2(ay, ax));

	this.setVelocity({magnitude:SPEED, theta:theta});

	this._target_x = x;
	this._target_y = y;

	this.setWalk();
	if (this._target_x > this.x()) {
		this.sprite.setReflect(false);
	}
	else {
		this.sprite.setReflect(true);
	}
};

Koishi.prototype.isMoving = function() {
	return this._target_x !== 0 && this._target_y !== 0;
};
Koishi.prototype.stopMoveWithoutCallBack = function() {
	if(!this.isMoving()) return;

	this._target_x = 0;
	this._target_y = 0;
	this._target_object = null;
	this.setVelocity({magnitude:0, theta:0});

	this.setWait();
};
Koishi.prototype.stopMove = function() {
	this.stopMoveWithoutCallBack();
	// 歩いたあとのコールバック
	if (this._move_callback) {
		var cb = this._move_callback;
		this._move_callback = null;
		cb();
	}
};

Koishi.prototype.collisionWidth = function(){
	return 1;
};

Koishi.prototype.collisionHeight = function(){
	return 1;
};

Koishi.prototype.z = function(){
	return 100;
};




module.exports = Koishi;
