'use strict';

var base_scene = require('./stage_base');

var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var SceneSubStagePlay = require('./sub_stage/play');
var SceneSubStageTalk = require('./sub_stage/talk');

var Koishi = require('../object/koishi');
var SerifManager = require('../hakurei').serif_manager;
var serif_script = require("../serif/objects/1");

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

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



	// 自機
	this.koishi = new Koishi(this);
	this.addObject(this.koishi);
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(is_left){
	base_scene.prototype.init.apply(this, arguments);

	// フィールド移動時にフェードインする
	this.setFadeIn(30, "black");

	// フィールド開始時の初期位置の決定
	// 右から来たか、左から来たかでこいしの初期位置が変わる
	// TODO: マップデータに持たせた方が良さそうね
	if (is_left) {
		this.koishi.setPosition(this.width - 180, 360);
		this.koishi.setReflect(true);
	}
	else {
		this.koishi.setPosition(180, 360);
	}

	// TODO: talk sub scene へ
	this.serif = null;
	this.is_talking = false;

	this.changeSubScene("play");
};

SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		// 左クリックしたところを取得
		var x = this.core.input_manager.mousePositionX();
		var y = this.core.input_manager.mousePositionY();

		// TODO: サブシーンにまとめたい...

		var collision_size = 1000;

		// 会話するオブジェクト
		// TODO: オブジェクトをクリックし続けないと画面遷移しないのを、画面全体クリックして遷移するようにしないと
		var talk_width  = 100;
		var talk_height = 100;
		if (talk_width - 24 - collision_size/2 < x && x < talk_width - 24 + collision_size/2 &&
				talk_height/2 - collision_size/2 < y && y < talk_height/2 + collision_size) {
			if (!this.is_talking) {
				// セリフ開始
				var serif = new SerifManager();
				serif.init(serif_script);
				this.serif = serif;
				this.is_talking = true;
			}
			else {
				// セリフ中ならセリフ送り
				if(this.serif.is_end()) {
					// セリフ終わり
					this.serif = null;
					this.is_talking = false;
				}
				else {
					// セリフを送る
					this.serif.next();
				}
			}
		}
		// それ以外
		else {
			collision_size = 30;
			// TODO: ちゃんと書く
			if (0+24 - collision_size/2 < x && x < 0+24 + collision_size/2 &&
				this.height/2 - collision_size/2 < y && y < this.height/2 + collision_size) {
				// フィールド遷移
				this.setFadeOut(30, "black");
				this.core.changeScene("stage", true);
			}
			else if (this.width - 24 - collision_size/2 < x && x < this.width - 24 + collision_size/2 &&
				this.height/2 - collision_size/2 < y && y < this.height/2 + collision_size) {
				// フィールド遷移
				this.setFadeOut(30, "black");
				this.core.changeScene("stage");
			}
			else {
				// こいしを移動
				this.koishi.setMoveTarget(x, y);
			}
		}
	}
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

	if (this.is_talking) {
		ctx.save();
		// メッセージウィンドウ表示
		this._showMessageWindow();

		// メッセージ表示
		this._showMessage();
		ctx.restore();
	}

	// こいし表示
	base_scene.prototype.draw.apply(this, arguments);
};


// セリフウィンドウ表示
SceneStage.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var x = this.koishi.x() - 0;
	var y = this.koishi.y() - 330;

	var fukidashi = this.core.image_loader.getImage('fukidashi');
	if(false) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}
	ctx.drawImage(fukidashi,
					x,
					y,
					fukidashi.width * 0.4,
					fukidashi.height * 0.4
	);
	ctx.restore();
};

// セリフ表示
SceneStage.prototype._showMessage = function() {
	var ctx = this.core.ctx;
	ctx.save();

	/*
	// セリフの色
	var font_color = this.serif.font_color();
	if(font_color) {
		font_color = util.hexToRGBString(font_color);
	}
	else {
		font_color = 'rgb(255, 255, 255)';
	}
	*/

	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	var x = this.koishi.x() + 20;
	var y = this.koishi.y() - 300;

	x = x + 60;
	// セリフ表示
	var lines = this.serif.lines();
	if (lines.length) {
		// セリフテキストの y 座標初期位置
		y = y + 40;

		for(var i = 0, len = lines.length; i < len; i++) {
			ctx.fillStyle = "black";
			ctx.fillText(lines[i], x, y); // 1行表示

			y+= 30;
		}
	}

	ctx.restore();
};

module.exports = SceneStage;
