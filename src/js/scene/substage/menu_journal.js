'use strict';
var _ = require('i18n4v')

var base_scene = require('./base');

var Util = require('../../hakurei').util;
var JournalMasterRepository = require('../../repository/journal');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var CONSTANT = require('../../constant');

// 画面上に表示するジャーナルタイトルの数
var SHOW_JOURNAL_NUM = 12;
var SHOW_JOURNAL_HALF_POINT_NUM = Math.floor(SHOW_JOURNAL_NUM/2); // ジャーナルタイトルの中間地点

var SceneSubStageJournalMenu = function(core) {
	base_scene.apply(this, arguments);

	// 全ジャーナルのうちどのジャーナルを選択しているか
	this._index_by_all = 0;

	// 所持しているジャーナル(key: journal_id, value: boolean)
	this._possess_journal_map = {};
};
Util.inherit(SceneSubStageJournalMenu, base_scene);

SceneSubStageJournalMenu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// 全ジャーナルのうちどのジャーナルを選択しているか
	this._index_by_all = 0;

	// 所持しているジャーナル(key: journal_id, value: boolean)
	this._possess_journal_map = this._generatePossessJournalMap();
};
SceneSubStageJournalMenu.prototype._generatePossessJournalMap = function(){
	var possess_journal_list = this.core.save_manager.journal.getJournalList();

	var map = {};
	for (var i = 0, len = possess_journal_list.length; i < len; i++) {
		map[ possess_journal_list[i] ] = true;
	}

	return map;
};

SceneSubStageJournalMenu.prototype._isPossess = function(journal_id){
	return this._possess_journal_map[journal_id] ? true : false;
};

SceneSubStageJournalMenu.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	// 選択
	var is_up_push  = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.UP);
	var is_down_push = this.core.input_manager.isKeyPush(CONSTANT_BUTTON.DOWN);

	// アイテムメニューを閉じる
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.X)) {
		this.root().changeSubScene("play");
	}
	// アイテムメニューへ戻る
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.B)) {
		this.root().changeSubScene("menu_item");
	}
	// ジャーナルタイトル 選択
	else if(is_up_push || is_down_push) {
		// 上
		if (is_up_push) {
			this._index_by_all--;
			if (this._index_by_all < 0) {
				this._index_by_all = 0;
			}
			else {
				// 移動してれば音を再生
				this.core.audio_loader.playSound("show_journal");
			}
		}
		// 下
		else if (is_down_push) {
			this._index_by_all++;
			var all_journal_list = JournalMasterRepository.all();
			if (this._index_by_all > all_journal_list.length - 1) {
				this._index_by_all = all_journal_list.length - 1;
			}
			else {
				// 移動してれば音を再生
				this.core.audio_loader.playSound("show_journal");
			}
		}
	}
};

SceneSubStageJournalMenu.prototype.draw = function(){
	// 親の stage scene の後処理(黒いもやもや描画)などより後にメニューUIを表示したいので、
	// afterDraw で描画処理をおこなう。
};
SceneSubStageJournalMenu.prototype.afterDraw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	this._drawJournalUI();
	this._drawJournalImage();
	this._drawJournalTitles();
	this._drawJournalScrollBar();
};

SceneSubStageJournalMenu.prototype._drawJournalUI = function(){
	var ctx = this.core.ctx;

	// 左側リスト部分の背景 ※ジャーナル画像の下に表示させる
	var frame_image = this.core.image_loader.getImage("ui-common-frame-journal");
	ctx.save();
	ctx.translate(412*2/3, 538*2/3);
	ctx.drawImage(frame_image,
		-frame_image.width/2*2/3,
		-frame_image.height/2*2/3,
		frame_image.width*2/3,
		frame_image.height*2/3);
	ctx.restore();

	// スクロール部分背景
	var scrollbar_track_image = this.core.image_loader.getImage("ui-common-scrollbar_01_track");
	ctx.save();
	ctx.translate(634*2/3, 543*2/3);
	ctx.drawImage(scrollbar_track_image,
		-scrollbar_track_image.width/2*2/3,
		-scrollbar_track_image.height/2*2/3,
		scrollbar_track_image.width*2/3,
		scrollbar_track_image.height*2/3);
	ctx.restore();
};

SceneSubStageJournalMenu.prototype._drawJournalImage = function(){
	var ctx = this.core.ctx;
	var all_journal_list = JournalMasterRepository.all();
	var journal_master = all_journal_list[this._index_by_all];
	var journal_id = journal_master.id();

	var journal_image_name;
	// ジャーナルを持っていれば
	if (this._isPossess(journal_id)) {
		// 英語版
		if (CONSTANT.LANGUAGE === 'en') {
			journal_image_name = JournalMasterRepository.find(journal_id).imageEn();
		}
		// 英語版
		else if (CONSTANT.LANGUAGE === 'ch') {
			journal_image_name = JournalMasterRepository.find(journal_id).imageCh();
		}
		// 日本語版
		else {
			journal_image_name = JournalMasterRepository.find(journal_id).imageJa();
		}
	}
	// ジャーナルを持っていなければ
	else {
		journal_image_name = "paper_frame";
	}
	var journal_image = this.core.image_loader.getImage(journal_image_name);

	// ジャーナル画像描画
	ctx.save();
	ctx.translate(992*2/3, 530*2/3);
	ctx.drawImage(journal_image,
		-journal_image.width/2*2/3,
		-journal_image.height/2*2/3,
		journal_image.width*2/3,
		journal_image.height*2/3);
	ctx.restore();
};





SceneSubStageJournalMenu.prototype._drawJournalTitles = function(){
	var ctx = this.core.ctx;
	var all_journal_list = JournalMasterRepository.all();

	var show_journal_list; // 表示するジャーナルタイトル一覧
	var cursor_index;      // カーソルの表示位置
	if (this._index_by_all <= SHOW_JOURNAL_HALF_POINT_NUM) {
		show_journal_list = all_journal_list.slice(0, SHOW_JOURNAL_NUM);
		cursor_index = this._index_by_all;
	}
	else if (this._index_by_all <= all_journal_list.length - SHOW_JOURNAL_HALF_POINT_NUM - 1) {
		show_journal_list = all_journal_list.slice(
			this._index_by_all - SHOW_JOURNAL_HALF_POINT_NUM,
			SHOW_JOURNAL_HALF_POINT_NUM + this._index_by_all
		);
		cursor_index = SHOW_JOURNAL_HALF_POINT_NUM;
	}
	else {
		show_journal_list = all_journal_list.slice(all_journal_list.length - SHOW_JOURNAL_NUM, all_journal_list.length);
		cursor_index = this._index_by_all - all_journal_list.length + SHOW_JOURNAL_NUM;
	}


	var cursor_x = 120;
	var text_x = 145;
	var y = 130;
	var size = 21;

	for(var i = 0, len = show_journal_list.length; i < len; i++) {
		var master = show_journal_list[i];
		var color;
		if(i === cursor_index) {
			// 左側リスト部分の→アイコン
			var arrow_image = this.core.image_loader.getImage("ui-common-btn-arrow-lbrn");
			ctx.save();
			ctx.translate(cursor_x, y + size * 2 * i);
			ctx.drawImage(arrow_image,
				-arrow_image.width/2*2/3,
				-arrow_image.height/2*2/3,
				arrow_image.width*2/3,
				arrow_image.height*2/3);
			ctx.restore();

			// 文字色アクティブ
			color = 'rgb(225,215,182)';
		}
		else {
			// 文字色非アクティブ
			color = 'rgb(76,66,44)';
		}

		var text;
		if (this._isPossess(master.id())) {
			text = master.title();
		}
		else {
			text = _("? ? ?");
		}
		ctx.save();
		ctx.fillStyle = color;
		ctx.textAlign = 'left';
		ctx.textBaseline = 'middle';

		// 文字表示
		ctx.font = size.toString() + "px 'OradanoGSRR'";
		ctx.fillText(master.no() + " : " + text, text_x, y + size *2 * i);

		ctx.restore();
	}

};


SceneSubStageJournalMenu.prototype._drawJournalScrollBar = function(){
	var all_journal_list = JournalMasterRepository.all();
	var len = all_journal_list.length <= 1 ? 1 : all_journal_list.length - 1; // 0除算を防ぐ
	var offset = 620 * this._index_by_all / len;

	var ctx = this.core.ctx;
	// スクロール部分ボタン
	var scrollbar_thumb_image = this.core.image_loader.getImage("ui-common-scrollbar_01_thumb");
	ctx.save();
	ctx.translate(634*2/3, (offset + 234)*2/3);
	ctx.drawImage(scrollbar_thumb_image,
		-scrollbar_thumb_image.width/2*2/3,
		-scrollbar_thumb_image.height/2*2/3,
		scrollbar_thumb_image.width*2/3,
		scrollbar_thumb_image.height*2/3);
	ctx.restore();
};

module.exports = SceneSubStageJournalMenu;
