'use strict';

var base_scene = require('../../../hakurei').scene.base;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var SerifManager = require('../../../hakurei').serif_manager;
var BlackMist = require('../../../object/black_mist');


var jsonDataOfEye1 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj01_anime_1');
var jsonDataOfEye2 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj02_anime_1');
var jsonDataOfEye3 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj03_anime_1');
var jsonDataOfSatori1 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj01_anime_1');
var jsonDataOfSatori2 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj02_anime_1');
var jsonDataOfSatori3 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj03_anime_1');
var jsonDataOfKoishiWait = require('../../../data/anime/koishi/wait_anime_1');




var SceneDefault = function(core) {
	base_scene.apply(this, arguments);

	this.eye = new SS(this);
	this.satori = new SS(this);
	this.koishi = new SS(this);

	this._serif = new SerifManager({auto_start: false});

	this.black_mist = new BlackMist(this);
};
Util.inherit(SceneDefault, base_scene);

SceneDefault.prototype.isUsingEye = function(){
	return false;
};
SceneDefault.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.setFadeOut(120, "black");

	// BGM 止める
	this.core.audio_loader.stopBGM();


	this.initSatori();
	this.initEye();
	this.initKoishi();
	this.addObjects([this.eye, this.satori, this.koishi]);

	this._serif.init([
		{"chara": "satori","serif":"おいで"},
		{"chara": "satori","serif":"あなたはいい子にならなきゃだめよ"},
	]);

	this.black_mist.init();
};

SceneDefault.prototype.initSatori = function(){
	this.satori.x(this.width/2);
	this.satori.y(this.height/2);

	this.satori.setAnime({
		default: jsonDataOfSatori1,
		1: jsonDataOfSatori1,
		2: jsonDataOfSatori2,
		3: jsonDataOfSatori3,
	});
	this.satori.init();
	var ss = this.satori;
	var serif_manager = this._serif;
	this.satori.playAnimationOnce(1, function () {
		serif_manager.next();
		ss.playAnimationInfinity(2);
		/*
		ss.playAnimationOnce(3);
		*/
	});

};
SceneDefault.prototype.initEye = function(){
	this.eye.x(this.width/2);
	this.eye.y(this.height/2);

	this.eye.setAnime({
		default: jsonDataOfEye1,
		1: jsonDataOfEye1,
		2: jsonDataOfEye2,
		3: jsonDataOfEye3,
	});
	this.eye.init();
	var ss = this.eye;
	this.eye.playAnimationOnce(1, function () {
		ss.playAnimationInfinity(2);
	});

};
SceneDefault.prototype.initKoishi = function(){
	this.koishi.x(180);
	this.koishi.y(540);

	this.koishi.setAnime({
		default: jsonDataOfKoishiWait,
	});
	this.koishi.init();
	this.koishi.playAnimationInfinity("default");
};





SceneDefault.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		if (this._serif.isWaitingNext() && this.eye.current_anime === 2 && this.satori.current_anime === 2) {
			var satori = this.satori;
			var serif_manager = this._serif;
			setTimeout(function () {
				serif_manager.next();
			}, 200);
			setTimeout(function () {
				satori.playAnimationOnce(3);
			}, 400);
			this.eye.playAnimationOnce(3, function () {
			});
		}
		else if (this.eye.current_anime === 3 && this.satori.current_anime === 3) {
			this.core.audio_loader.playSound("chapter0-mansion_corridor2-event_out");
			this.core.changeScene("stage", "chapter0_mansion_corridor2");
			this.core.audio_loader.fadeOutBGM(2);
		}
	}

	// BGM 再生
	if(this.frame_count === 1) {
		this.core.audio_loader.changeBGM("chapter0-event-encounter_satori");
	}
	this.black_mist.beforeDraw();
};
SceneDefault.prototype.draw = function(){
	var ctx = this.core.ctx;

	ctx.save();

	var background = this.core.image_loader.getImage("chapter0-mspassage-bg-002_event");

	ctx.drawImage(background,
		0,
		0,
		background.width,
		background.height,
		0,
		0,
		this.width,
		this.height
	);

	ctx.restore();

	base_scene.prototype.draw.apply(this, arguments);

	this._showMessageWindow();
	this._showMessage();
	this.black_mist.draw();
};

// セリフウィンドウ表示
SceneDefault.prototype._showMessageWindow = function(){
	if(!this._serif.getChara()) return;
	var ctx = this.core.ctx;
	ctx.save();

	var fukidashi = this.core.image_loader.getImage('fukidashi_gray');

	// ウィンドウの位置
	var x = 500;
	var y = 80;

	// ウィンドウの大きさ
	var scale = 2/3;

	ctx.drawImage(fukidashi,
		x,
		y,
		fukidashi.width * scale,
		fukidashi.height * scale
	);
	ctx.restore();
};

// セリフ表示
SceneDefault.prototype._showMessage = function() {
	var ctx = this.core.ctx;

	// セリフ表示
	var lines = this._serif.lines();

	if (!lines.length) return;

	ctx.save();

	// セリフの色
	var font_color = "white";
	var fukidashi = this.core.image_loader.getImage('fukidashi_gray');

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";
	var x = 400 + fukidashi.width/4;
	var y = 80 + fukidashi.height/4;


	for(var i = 0, len = lines.length; i < len; i++) {
		y+= 30;
		ctx.fillText(lines[i], x, y); // 1行表示

	}

	ctx.restore();
};



module.exports = SceneDefault;
