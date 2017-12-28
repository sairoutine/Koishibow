'use strict';

// こいしの歩く速度
var SPEED = 2;

var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');
var RouteSearch = require("../vendor/astar");
var Graph = RouteSearch.Graph;
var astar = RouteSearch.astar;



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
//	(帽子なし) 触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouchInNoHat = require('../data/anime/koishi/nohat_reaction_touch_anime_1');
// 	(帽子なし) 待機	可	30	45	1.5秒
var jsonDataOfWaitInNoHat = require('../data/anime/koishi/nohat_wait_anime_1');
//	(帽子なし) 歩き	可	30	30	1秒
var jsonDataOfWalkInNoHat = require('../data/anime/koishi/nohat_walk_anime_1');

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
	this.setWaitAnime();
};

// 移動中かどうか
Koishi.prototype.isMoving = function() {
	return this._move_target_object ? true : false;
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

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c];
    });
  });
}   


Koishi.prototype.setMoveTarget = function(obj, callback) {
	// 移動不可であれば何もしない
	if (!this.scene.isEnableToMove()) return;

	// 移動後に実行する callback
	this._after_last_move_callback = callback;

	// 移動先のオブジェクト or 座標
	this._move_last_target_object = obj;

	var target_x = obj.x();
	var target_y = obj.y();

	var target_pos_x = Math.floor(target_x / (this.scene.width/8));
	var target_pos_y = Math.floor(target_y / (this.scene.height/8));

	var from_pos_x = Math.floor(this.x() / (this.scene.width/8));
	var from_pos_y = Math.floor(this.y() / (this.scene.height/8));


	var field_data = this.scene.getFieldData();
	var graph = new Graph(transpose(field_data.map));

	var start   = graph.grid[from_pos_x][from_pos_y];
	var end     = graph.grid[target_pos_x][target_pos_y];
	var options = {};
	var result  = astar.search(graph, start, end, options);

	console.log(result.join("=>"));

	// 探索ルートが見つからなかった
	// TODO: オブジェクトを直接クリックしたときも探索ルートなしになるのでその場合はそのままアクションしてよさそう
	if (result.length === 0) return;

	this._astar_node_list = result;

	var self = this;
	var _cb = function () {
		if (self._astar_node_list.length > 0) {
			self.setMoveTarget2(self._astar_node_list.shift(), _cb);
		}
		else {
			self.setMoveTarget2(self._move_last_target_object, self._after_last_move_callback);
		}
	};

	_cb();
};

Koishi.prototype.setMoveTarget2 = function(obj, callback) {
	// 移動後に実行する callback
	this._after_move_callback = callback;

	// 移動先のオブジェクト or 座標
	this._move_target_object = obj;

	// 移動先位置を取得
	var move_to_pos = this._getMoveToPos();

	// 移動ベクトルを設定
	var ax = move_to_pos.x - this.x();
	var ay = move_to_pos.y - this.y();

	var theta = Util.radianToTheta(Math.atan2(ay, ax));

	this.setVelocity({magnitude:SPEED, theta:theta});

	// 歩きモーションに変更
	this.setWalkAnime();

	// 移動方向に合わせて こいしを反転
	if (move_to_pos.x > this.x()) {
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

		// 静止(帽子なし)
		wait_nohat:        jsonDataOfWaitInNoHat,
		// 歩く(帽子なし)
		walk_nohat:        jsonDataOfWalkInNoHat,
		// 触る(帽子なし)
		touch_nohat:        jsonDataOfReactionTouchInNoHat,

		// サードアイ使用
		use_eye:     jsonDataOfReaction3rdeye,
		// 触る
		touch:        jsonDataOfReactionTouch,
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
	// 移動先位置を取得
	var move_to_pos = this._getMoveToPos();
	var target_x = move_to_pos.x;
	var target_y = move_to_pos.y;

	// "概ね" の範囲
	var range = SPEED*3;

	// (x,y)座標が概ね target_x と target_y に近づいたら
	if (
		this.x() + range >= target_x &&
		target_x > this.x() - range &&
		this.y() + range >= target_y &&
		target_y > this.y() - range
	) {
		// end move
		this.stopMove();
	}
	/*
	// オブジェクトとぶつかったら止まる
	else if (this.checkCollisionWithObjects(this.scene.walk_immovable_areas)) {
		this.stopMove();
	}
	*/

};


// 移動先を取得
Koishi.prototype._getMoveToPos = function() {
	// 移動先オブジェクト
	var obj = this._move_target_object;

	// このメソッドを呼ぶときは、必ず移動先が設定されていないといけない
	if(!obj) throw new Error("unable to get _move_target_object");

	var target_x, target_y;
	if (obj._target_x || obj._target_y) {
		target_x = obj._target_x;
		target_y = obj._target_y;
	}
	else if (typeof obj.x === "function") {
		target_x = obj.x();
		target_y = obj.y();
	}
	else {
		// graph node
		target_x = obj.x*this.scene.width/8 + this.scene.width/16;
		target_y = obj.y*this.scene.height/8 + this.scene.height/16;
	}


	// 一定以上の奥行きには移動できない
	if (target_y < this.scene.height - CONSTANT.WALK_DEPTH_LIMIT) {
		target_y = this.scene.height - CONSTANT.WALK_DEPTH_LIMIT;
	}

	return {
		x: target_x,
		y: target_y,
	};
};

// サードアイの自然消耗
Koishi.prototype.abrasion3rdeye = function() {
	// 消耗前のレベル
	var before_level = this.get3rdeyeBloodShotLevel();

	this.core.save_manager.reduce3rdeyeGauge(CONSTANT.ABRASION_3RDEYE_GAUGE);

	// 消耗後のレベル
	var after_level = this.get3rdeyeBloodShotLevel();

	// 最後の消耗だけ違う音にする
	if (after_level === 4 && before_level !== after_level) {
		this.core.audio_loader.playSound("progress_bloodshot_last");
	}
	else if (before_level !== after_level) {
		this.core.audio_loader.playSound("progress_bloodshot");
	}
};

Koishi.prototype.get3rdeyeBloodShotLevel = function() {
	return this.core.save_manager.get3rdeyeBloodShotLevel();
};

Koishi.prototype.darker = function() {
	return this.core.debug_manager.get("koishi_alpha");
};

Koishi.prototype.z = function(){
	return 100; //TODO: 固定値やめる
};



module.exports = Koishi;
