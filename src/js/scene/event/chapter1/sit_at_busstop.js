'use strict';
var _ = require('i18n4v');

// 1-2 バス停で待つ



// 1-8 村紗と遊ぶ

var base_scene = require('../../../hakurei').scene.base;
var ObjectPoint = require('../../../hakurei').object.point;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var CONSTANT_BUTTON = require('../../../hakurei').constant.button;
var ScenarioManager = require('../../../hakurei').manager.scenario;
var BlackMist = require('../../../object/black_mist');
var DrawSerif = require('../../../logic/draw_serif');

var FieldMasterRepository = require('../../../repository/field');
var CONSTANT = require('../../../constant');
var ObjectStaticImage      = require('../../../object/pieces/static_image');
var ObjectAnimeImage       = require('../../../object/pieces/anime_image');
var ObjectJournal          = require('../../../object/pieces/journal_front');
var ObjectAnimeEventImage  = require('../../../object/pieces/anime_event_image');
var ObjectItem             = require('../../../object/pieces/item');
var ObjectFieldChange      = require('../../../object/pieces/field_change');
var ObjectAnimeDeadKoishi  = require('../../../object/pieces/anime_dead_koishi');
var ObjectStaticEventImage = require('../../../object/pieces/static_event_image');
var ObjectFaucet           = require('../../../object/pieces/faucet');



// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示
var STATE_JUNCTION = 3; // 会話の選択肢表示
var STATE_PICTURE  = 4;

var jsonDataOfKoishi1  = require('../../../data/anime/koishi/sit_anime_1');

var SceneEventPlayDoll = function(core) {
	base_scene.apply(this, arguments);
	// シーンの各種キャラ
	this.koishi = new SS(this);


	this._state = STATE_WAITING;
	this._junction_focus_index = 0;
	this._is_gameover = false;

	// ステージ上のオブジェクト一覧
	this.pieces = [];



	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = new ScenarioManager();

	// セリフの位置
	this.serif_position_of_koishi = new ObjectPoint(this);
	this.serif_position_of_koishi.setPosition(this.width/2 - 10, 150);

};
Util.inherit(SceneEventPlayDoll, base_scene);

SceneEventPlayDoll.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// シーンの各種キャラ
	this.koishi = new SS(this);


	this._state = STATE_WAITING;
	this._junction_focus_index = 0;
	this._is_gameover = false;

	// ステージ上のオブジェクト一覧
	this._setupPieces();

	// z軸の降順ソート
	this.pieces.sort(function(a,b){
		if(a.z() < b.z()) return -1;
		if(a.z() > b.z()) return 1;
		return 0;
	});

	// フェードインする
	this.core.scene_manager.setFadeIn(60, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(60, "black");

	// BGM 止めない
	//this.core.audio_loader.stopBGM();

	this.initKoishi();
	this.removeAllObject();
	this.addObjects([this.koishi]);

	this.black_mist.init();

	this._serif.init([
		{"chara": "koishi","serif":_("まっていればいいのかな")},
		{"chara": "koishi","serif":_("まだかなー")},
		{"chara": "koishi","serif":_("こない")},
	]);

	this._serif.start();
	this._state = STATE_TALKING;

	this.frame_count_of_pic = 0;
	this._pos_x = -this.root().width/2;
};

SceneEventPlayDoll.prototype.initKoishi = function(){
	this.koishi.x(this.width/2 - 30);
	this.koishi.y(this.height/2 - 100); // こいしの位置

	var anime_config = {
		default: jsonDataOfKoishi1,
	};
	anime_config[1] = jsonDataOfKoishi1;
	this.koishi.setAnime(anime_config);
	this.koishi.init();

};




SceneEventPlayDoll.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// ステージ上のオブジェクト一覧
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].beforeDraw();
	}


	if(this._state === STATE_TALKING) {
		this._updateInTalking();
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		this._updateInJunction();
	}
	else if(this._state === STATE_PICTURE) {
		this._updateInPicture();
	}
	else {
		throw new Error("illegal talking state: " + this._state);
	}

	this.black_mist.beforeDraw();
};
// Nフレーム後に次のセリフへ
SceneEventPlayDoll.prototype._gotoNextSerif = function(choice){
	var self = this;

	self._state = STATE_WAITING;

	self.core.time_manager.setTimeout(function () {
		self._state = STATE_TALKING;

		// セリフを送る
		self._serif.next(choice);

		if (self._serif.getCurrentOption().setGameover){
			self._is_gameover = true;
		}

		// アニメ進行
		var is_next = self._serif.getCurrentOption().is_next;
		if (is_next) {
			/*
			if (is_next === 3 || is_next === 4 || is_next === 6 || is_next === 8 || is_next === "select_02_1") {
				self.koishi.playAnimationInfinity(is_next);
				self.chr.playAnimationInfinity(is_next);
				self._serif.next(choice);
			}
			else {
			*/
				self.koishi.playAnimationOnce(is_next);
				self.chr.playAnimationOnce(is_next, function () {
					if (!self._serif.isEnd()) {
						self._gotoNextSerif(choice);
					}
				});
			/*
			}
			*/
		}

	}, NEXT_TO_SERIF_WAITING_COUNT);
};

SceneEventPlayDoll.prototype._updateInPicture = function(){
	this.frame_count_of_pic++;

	if(this.frame_count_of_pic <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count_of_pic === 30) {
		this.core.audio_loader.playSound("touch");
	}
	else if(this.frame_count_of_pic <= 90) {
		// 何もしない
	}
	else if(this.frame_count_of_pic <= 105) {
		this._pos_x += this.root().width/15;
	}
	// プレイに戻る
	else if(this.frame_count_of_pic > 120) {
		this._state = STATE_TALKING;

		this._gotoNextSerif();
	}
};
// 会話 選択肢の処理
SceneEventPlayDoll.prototype._updateInJunction = function(){
	// Zボタン 選択肢の決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// Nフレーム後に次のセリフへ
		this._gotoNextSerif(this._junction_focus_index);

		// 選んでる選択肢のリセット
		this._junction_focus_index = 0;
	}
	// ↑ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP)) {
		this._junction_focus_index--;
	}
	// ↓ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN)) {
		this._junction_focus_index++;
	}

	// 選択肢が上下はみ出ないように
	var junction_list = this._serif.getCurrentJunctionList();
	this._junction_focus_index = Util.clamp(this._junction_focus_index, 0, junction_list.length - 1);
};




SceneEventPlayDoll.prototype.draw = function(){

	this._showBackground();
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].draw();
	}

	// キャラのアニメの表示
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(this._state === STATE_TALKING) {
		// セリフ表示
		this._showMessage();
	}
	else if(this._state === STATE_WAITING) {
		// 何も表示しない
	}
	else if(this._state === STATE_JUNCTION) {
		// 会話 選択肢 表示
		this._showJunction();
	}
	else if(this._state === STATE_PICTURE) {
		this._showPicture();
	}

	this.black_mist.draw();
};
// 会話中の処理
SceneEventPlayDoll.prototype._updateInTalking = function(){
	// Z ボタンが押されたら
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			if (this._is_gameover) {
				// 間違い
				this.core.save_manager.reload();
				this.core.scene_manager.changeScene("title");
			}
			else {
				// 正解
				this.core.scene_manager.returnScene("stage");
			}
		}
		// 会話 継続中
		else {
			// 会話への回答の選択肢があるなら、次のセリフには進めずに
			// 選択肢を表示する
			if(this._serif.isCurrentSerifExistsJunction()) {
				this._state = STATE_JUNCTION;
			}
			else if (this._serif.getCurrentOption().show_picture) {
				this._state = STATE_PICTURE;
			}
			// 次のセリフへ
			else {
				// Nフレーム後に次のセリフへ
				this._gotoNextSerif();
			}
		}
	}
};

SceneEventPlayDoll.prototype._showMessage = function(){
	// 現在喋っているオブジェクト名(こいしの場合は koishi)
	var chara_name = this._serif.getCurrentCharaNameByPosition();
	// オブジェクトを取得
	var obj;
	if (chara_name === "koishi") {
		obj = this.serif_position_of_koishi;
	}
	else {
		return;
	}

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	var width = this._serif.getCurrentMaxLengthLetters();
	var height = this._serif.getCurrentSentenceNum();

	if (!lines.length) return;

	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi');
	DrawSerif.drawWindow(obj, ctx, fukidashi, lines, width, height);
	DrawSerif.drawText(obj, ctx, lines, width, height);
};

// 会話 選択肢 表示
SceneEventPlayDoll.prototype._showJunction = function() {
	if(!this._serif.isStart()) return;

	// こいしを取得
	var obj = this.serif_position_of_koishi_junction;
	// 表示
	var ctx = this.core.ctx;
	var junction_off = this.core.image_loader.getImage('junction_off');
	var junction_on  = this.core.image_loader.getImage('junction_on');

	var junction_list = this._serif.getCurrentJunctionList();
	DrawSerif.drawJunction(obj, ctx, junction_off, junction_on, junction_list, this._junction_focus_index);
};

SceneEventPlayDoll.prototype._showPicture = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage("picture_chapter1-09-illust-01");
	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this._pos_x, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();

};


SceneEventPlayDoll.prototype._showBackground = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var background = this.core.image_loader.getImage("chapter1-02-bg-001");

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
};
// black_mist が参照する
SceneEventPlayDoll.prototype.isUsingEye = function(){
	return false;
};

SceneEventPlayDoll.prototype._setupPieces = function() {
	// 画面上のオブジェクト一覧
	this.pieces = [];

	var object_data_list = this.getFieldData().objects();
	for (var i = 0, len = object_data_list.length; i < len; i++) {

		var data = object_data_list[i];

		var object;
		if (data.type === CONSTANT.STATIC_IMAGE_TYPE) { // 静止オブジェクト
			object = new ObjectStaticImage(this);
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) { // サードアイを当てると動くオブジェクト
			object = new ObjectAnimeImage(this);
		}
		else if (data.type === CONSTANT.JOURNAL_FRONT_TYPE) { // ジャーナル
			object = new ObjectJournal(this);
		}
		else if (data.type === CONSTANT.ANIME_EVENT_IMAGE_TYPE) { // イベント発生オブジェクト
			object = new ObjectAnimeEventImage(this);
		}
		else if (data.type === CONSTANT.ITEM_TYPE) { // アイテム
			object = new ObjectItem(this);
		}
		else if (data.type === CONSTANT.FIELD_CHANGE_TYPE) { // フィールド遷移
			object = new ObjectFieldChange(this);
		}
		else if (data.type === CONSTANT.BUTTON_KOISHI_TYPE) {
			object = new ObjectAnimeDeadKoishi(this);
		}
		else if (data.type === CONSTANT.STATIC_EVENT_IMAGE_TYPE) {
			object = new ObjectStaticEventImage(this);
		}
		else if (data.type === CONSTANT.FAUCET_TYPE) {
			object = new ObjectFaucet(this);
		}

		else {
			throw new Error ("Unknown object type error: " + data.type);
		}
		object.init();
		object.setData(data);
		this.pieces.push(object);

	}
};

SceneEventPlayDoll.prototype.getFieldData = function(){
	return FieldMasterRepository.find("chapter1_02");
};



module.exports = SceneEventPlayDoll;
