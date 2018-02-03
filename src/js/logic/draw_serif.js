'use strict';

/* セリフを描画する */

var Util = require('../hakurei').util;

// 静的クラス
var DrawSerif = function() {};

// @param: {ObjectBase} obj
DrawSerif.drawWindow = function (obj, ctx, fukidashi, lines) {
	// ウィンドウの位置
	var message_window_pos = this._getMessageWindowPos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_reflect = message_window_pos.is_reflect;

	ctx.save();

	if (!x && !y) return;

	// ウィンドウの大きさ
	var scale = this._getMessageWindowScale(lines);

	ctx.translate(x, y);
	if(is_reflect) {
		//x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}
	ctx.drawImage(fukidashi,
		-fukidashi.width * scale.width,
		-fukidashi.height * scale.height,
		fukidashi.width * scale.width,
		fukidashi.height * scale.height
	);
	ctx.restore();

};

DrawSerif.drawText = function (obj, ctx, lines) {
	if (!lines.length) return;

	var message_text_pos = this._getMessageTextPos(obj);
	var x = message_text_pos.x;
	var y = message_text_pos.y;


	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#d4c9aa");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	for(var i = 0, len = lines.length; i < len; i++) {
		y+= 30;
		ctx.fillText(lines[i], x, y); // 1行表示

	}
	ctx.restore();
};

// ウィンドウの大きさ
DrawSerif._getMessageWindowScale = function(lines){
	var scale_width, scale_height;
	if (lines.length === 2) {
		scale_width = 0.4;
		scale_height = 0.5;
	}
	else {
		scale_width = 0.4;
		scale_height = 0.4;
	}

	for (var i = 0, len = lines.length; i < len; i++) {
		var line = lines[i];
		if(line.length > 12) scale_width *= line.length/12;
	}

	return {width: scale_width, height: scale_height};
};

// メッセージウィンドウの位置を取得
DrawSerif._getMessageWindowPos = function(obj){
	var is_reflect = !this._isShowRight(obj);

	var x,y;
	if(is_reflect) {
		x = obj.x() - 550;
		y = obj.y() - 330;
	}
	else {
		x = obj.x() +  50;
		y = obj.y() - 200;
	}

	return {
		is_reflect: is_reflect,
		x: x,
		y: y,
	};
};

// メッセージテキストの開始位置を取得
DrawSerif._getMessageTextPos = function(obj){
	var is_reflect = !this._isShowRight(obj);

	var x,y;

	if(is_reflect) {
		x = obj.x() + 80;
		y = obj.y() - 290;
	}
	else {
		x = obj.x() - 220;
		y = obj.y() - 290;
	}


	return {
		is_reflect: is_reflect,
		x: x,
		y: y,
	};
};

// セリフ表示を右に表示させるかどうか
DrawSerif._isShowRight = function(obj){
	var x = obj.x();

	var scene_center_x = obj.scene.width / 2;

	if (x > scene_center_x) {
		return true;
	}
	else {
		return false;
	}
};



module.exports = DrawSerif;
