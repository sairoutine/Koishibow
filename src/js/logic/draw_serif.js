'use strict';

/* セリフを描画する */

var Util = require('../hakurei').util;

// 静的クラス
var DrawSerif = function() {};

// @param: {ObjectBase} obj
DrawSerif.drawWindow = function (obj, ctx, fukidashi, lines, width_num, height_num) {

	// ウィンドウの位置
	var message_window_pos = this._getMessageWindowPos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_show_right = message_window_pos.is_show_right;

	if (!x && !y) return;

	// ウィンドウの大きさ
	var scale = {
		width: 2/4,
		height: 2/4,
	};

	ctx.save();

	ctx.translate(x, y);

	if(is_show_right) {
		ctx.transform(-1, 0, 0, 1, 0, 0);
	}

	// x,y座標は中央が基準位置
	ctx.drawImage(fukidashi,
		-fukidashi.width * scale.width/2,
		-fukidashi.height*scale.height/2,
		fukidashi.width * scale.width,
		fukidashi.height * scale.height
	);
	ctx.restore();

};

var FONT_SIZE = 18;

DrawSerif.drawText = function (obj, ctx, lines, width_num, height_num) {
	// セリフがなければ何も表示しない
	if (lines.length === 0) return;

	var message_text_pos = this._getMessageTextPos(obj);
	var x = message_text_pos.x;
	var y = message_text_pos.y;

	// 基準位置を左上->中央に変更
	x = x - width_num  * FONT_SIZE / 2;
	y = y - height_num * (FONT_SIZE+12) / 2;

	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#d4c9aa");

	ctx.fillStyle = font_color;
	ctx.font = FONT_SIZE.toString() + "px 'OradanoGSRR'";

	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'top';

	for(var i = 0, len = lines.length; i < len; i++) {
		y += FONT_SIZE + 12;
		ctx.fillText(lines[i], x, y); // 1行表示

	}
	ctx.restore();
};

// メッセージウィンドウの位置を取得
DrawSerif._getMessageWindowPos = function(obj){
	var is_show_right = this._isShowRight(obj);
	var x,y;

	if(is_show_right) {
		x = obj.globalRightX();
		y = obj.globalUpY() + 10;
	}
	else {
		x = obj.globalLeftX();
		y = obj.globalUpY() + 10;
	}


	return {
		is_show_right: is_show_right,
		x: x,
		y: y,
	};

};

// メッセージテキストの開始位置を取得
DrawSerif._getMessageTextPos = function(obj){
	var is_show_right = this._isShowRight(obj);
	var x,y;

	if(is_show_right) {
		x = obj.globalRightX();
		y = obj.globalUpY();
	}
	else {
		x = obj.globalLeftX();
		y = obj.globalUpY();
	}


	return {
		is_show_right: is_show_right,
		x: x,
		y: y,
	};
};

// オブジェクトから見て、セリフ表示を右に表示させるかどうか
DrawSerif._isShowRight = function(obj){
	var x = obj.x();

	var scene_center_x = obj.scene.width / 2;

	// 画面左側にオブジェクトが存在するなら、セリフは右側に表示する
	if (x < scene_center_x) {
		return true;
	}
	else {
		return false;
	}
};



module.exports = DrawSerif;
