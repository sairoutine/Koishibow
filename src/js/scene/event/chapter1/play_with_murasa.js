'use strict';
var _ = require('i18n4v');

// 1-8 村紗と遊ぶ

var base_scene = require('../../../hakurei').scene.base;
var ObjectPoint = require('../../../hakurei').object.point;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var CONSTANT_BUTTON = require('../../../hakurei').constant.button;
var TalkScenario = require('../../../logic/talk_scenario');
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



var jsonDataOfChr1  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj01_anime_1');
var jsonDataOfChr2  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj02_anime_1');
var jsonDataOfChr3  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj03_anime_1');
var jsonDataOfChr4  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj04_anime_1');
var jsonDataOfChr5  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj05_anime_1');
var jsonDataOfChr6  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj06_anime_1');
var jsonDataOfChr7  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj07_anime_1');
var jsonDataOfChr8  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj08_anime_1');
var jsonDataOfChr9  = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj09_anime_1');
var jsonDataOfChr10 = require('../../../data/anime/chapter1/event/play_with_murasa/chr/obj10_anime_1');

var jsonDataOfKoishi1  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj01_anime_1');
var jsonDataOfKoishi2  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj02_anime_1');
var jsonDataOfKoishi3  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj03_anime_1');
var jsonDataOfKoishi4  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj04_anime_1');
var jsonDataOfKoishi5  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj05_anime_1');
var jsonDataOfKoishi6  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj06_anime_1');
var jsonDataOfKoishi7  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj07_anime_1');
var jsonDataOfKoishi8  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj08_anime_1');
var jsonDataOfKoishi9  = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj09_anime_1');
var jsonDataOfKoishi10 = require('../../../data/anime/chapter1/event/play_with_murasa/koishi/obj10_anime_1');

var SceneEventPlayDoll = function(core) {
	base_scene.apply(this, arguments);
	// シーンの各種キャラ
	this.chr = new SS(this);
	this.koishi = new SS(this);


	this._state = STATE_WAITING;
	this._junction_focus_index = 0;
	this._is_gameover = false;

	// ステージ上のオブジェクト一覧
	this.pieces = [];



	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = TalkScenario.generateScenario(core);


	// セリフの位置
	this.serif_position_of_murasa = new ObjectPoint(this);
	this.serif_position_of_murasa.setPosition(this.width - 200, 200);
	this.serif_position_of_koishi = new ObjectPoint(this);
	this.serif_position_of_koishi.setPosition(500, 200);
	this.serif_position_of_other = new ObjectPoint(this);
	this.serif_position_of_other.setPosition(200, 200);

};
Util.inherit(SceneEventPlayDoll, base_scene);

SceneEventPlayDoll.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// シーンの各種キャラ
	this.chr = new SS(this);
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
	this.core.scene_manager.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM 止める
	this.core.audio_loader.stopBGM();


	this.initChr();
	this.initKoishi();
	this.removeAllObject();
	this.addObjects([this.chr, this.koishi]);

	this.black_mist.init();

	this._serif.init([
		{"chara": null,"serif":"", "option": {"is_next": 1}},
		{"chara": "murasa","serif":_("あ！")},
		{"chara": null,"serif":"", "option": {"is_next": 2}},
		{"chara": "murasa","serif":_("そのお人形！")},
		{"chara": null,"serif":"", "option": {"is_next": 3}},
		{"chara": "murasa","serif":_("それ私のよ！")},
		{"chara": null,"serif":"", "option": {"is_next": 4}},
		{"chara": "koishi","serif":_("うん")},
		{"chara": null,"serif":"", "option": {"is_next": 5}},
		{"chara": "murasa","serif":_("へへっ")},
		{"chara": null,"serif":"", "option": {"is_next": 6}},
		{"chara": "koishi","serif":_("これでいい？")},
		{"chara": null,"serif":"", "option": {"is_next": 7}},
		{"chara": "koishi","serif":_("うん？")},
		{"chara": null,"serif":"", "option": {"is_next": 8}},
		{"chara": "koishi","serif":_("ああ")},
		{"chara": null,"serif":"", "option": {"is_next": 9}},
		{"chara": "koishi","serif":_("CHAPTER1_EVENT_PLAY_WITH_MURASA_SERIF0001"), "option": {"show_picture": true}},
		{"chara": "other","serif":_("おーい！")},
		{"chara": null,"serif":"", "option": {"is_next": 10}},
	]);

	this._serif.start();
	this._state = STATE_TALKING;


	this.frame_count_of_pic = 0;
	this._pos_x = -this.root().width/2;
};

SceneEventPlayDoll.prototype.initChr = function(){
	this.chr.x(this.width/2);
	this.chr.y(this.height/2);

	var anime_config = {
		default: jsonDataOfChr1,
	};
	anime_config[1] = jsonDataOfChr1;
	anime_config[2] = jsonDataOfChr2;
	anime_config[3] = jsonDataOfChr3;
	anime_config[4] = jsonDataOfChr4;
	anime_config[5] = jsonDataOfChr5;
	anime_config[6] = jsonDataOfChr6;
	anime_config[7] = jsonDataOfChr7;
	anime_config[8] = jsonDataOfChr8;
	anime_config[9] = jsonDataOfChr9;
	anime_config[10] = jsonDataOfChr10;

	this.chr.setAnime(anime_config);
	this.chr.init();
	this.chr.playAnimationOnce(1);

};
SceneEventPlayDoll.prototype.initKoishi = function(){
	this.koishi.x(this.width/2);
	this.koishi.y(this.height/2);

	var anime_config = {
		default: jsonDataOfKoishi1,
	};
	anime_config[1] = jsonDataOfKoishi1;
	anime_config[2] = jsonDataOfKoishi2;
	anime_config[3] = jsonDataOfKoishi3;
	anime_config[4] = jsonDataOfKoishi4;
	anime_config[5] = jsonDataOfKoishi5;
	anime_config[6] = jsonDataOfKoishi6;
	anime_config[7] = jsonDataOfKoishi7;
	anime_config[8] = jsonDataOfKoishi8;
	anime_config[9] = jsonDataOfKoishi9;
	anime_config[10] = jsonDataOfKoishi10;

	this.koishi.setAnime(anime_config);
	this.koishi.init();

};




SceneEventPlayDoll.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	// ステージ上のオブジェクト一覧
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].update();
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

	this.black_mist.update();
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

	if(this.frame_count_of_pic === 1) {
		this.core.audio_loader.playSound("chapter1-event-play_wipe_in_murasa");
	}


	if(this.frame_count_of_pic <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count_of_pic === 30) {
		this.core.audio_loader.playSound("touch");
	}
	else if(this.frame_count_of_pic < 150) {
		// 何もしない
	}
	else if(this.frame_count === 150) {
		this.core.audio_loader.playSound("chapter1-event-play_wipe_out_common");
	}
	else if(this.frame_count_of_pic <= 165) {
		this._pos_x += this.root().width/15;
	}
	// プレイに戻る
	else if(this.frame_count_of_pic > 180) {
		this._state = STATE_TALKING;

		this._gotoNextSerif();
	}
};
// 会話 選択肢の処理
SceneEventPlayDoll.prototype._updateInJunction = function(){
	// Zボタン 選択肢の決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
		// Nフレーム後に次のセリフへ
		this._gotoNextSerif(this._junction_focus_index);

		// 選んでる選択肢のリセット
		this._junction_focus_index = 0;
	}
	// ↑ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.UP)) {
		this._junction_focus_index--;
	}
	// ↓ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.DOWN)) {
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
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			var scene_manager = this.core.scene_manager;
			if (this._is_gameover) {
				// 間違い
				this.core.scene_manager.changeScene("movie", "./movie/common/chapter1ed.mp4", function (core) {
					if (CONSTANT.TRIAL) {
						// 体験版ならば chapter1 で終了
						scene_manager.changeScene("event_for_trial_last");
					}
					else {
						// 次のチャプターへ
						scene_manager.changeScene("opening_movie_chapter3");
					}
				});
			}
			else {
				// 正解

				// 発達度 +1
				this.core.save_manager.player.growUp();

				this.core.scene_manager.changeScene("movie", "./movie/common/chapter1ed.mp4", function (core) {
					if (CONSTANT.TRIAL) {
						// 体験版ならば chapter1 で終了
						scene_manager.changeScene("event_for_trial_last");
					}
					else {
						// 次のチャプターへ
						scene_manager.changeScene("opening_movie_chapter3");
					}
				});
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
	else if (chara_name === "murasa") {
		obj = this.serif_position_of_murasa;
	}
	else if (chara_name === "other") {
		obj = this.serif_position_of_other;
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

	var background = this.core.image_loader.getImage("chapter1-09-bg-001");

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

		// 村紗をスキップ
		if (data.name === "村紗") continue;


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
	return FieldMasterRepository.find("chapter1_09");
};



module.exports = SceneEventPlayDoll;
