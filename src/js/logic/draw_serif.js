'use strict';

/* セリフを描画する */

var Util = require('../hakurei').util;

// 文字の表示サイズ
var FONT_SIZE = 18;
// フォント名
var FONT_NAME = "OradanoGSRR";


// セリフ文字の色
var SERIF_FONT_COLOR = Util.hexToRGBString("#d4c9aa");


// 静的クラス
var DrawSerif = function() {};

// @param: {ObjectBase} obj
DrawSerif.drawWindow = function (obj, ctx, fukidashi, lines, width_num, height_num, option) {
	option = option || {};

	// セリフがなければ何も表示しない
	if (lines.length === 0) return;

	// ウィンドウの位置
	var message_window_pos = this._getMessagePos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_show_right = message_window_pos.is_show_right;

	// ウィンドウの大きさ
	var scale = {
		width: 2/4,
		height: 2/4,
	};

	// ウィンドウ画像が中央からちょっとズレてるので位置調整
	x += 10;
	y += 10;

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

DrawSerif.drawText = function (obj, ctx, lines, width_num, height_num, option) {
	// セリフがなければ何も表示しない
	if (lines.length === 0) return;

	option = option || {};
	var font_size = option.fontSize || FONT_SIZE;
	var font_name = option.fontName || FONT_NAME;

	var message_text_pos = this._getMessagePos(obj);
	var x = message_text_pos.x;
	var y = message_text_pos.y;

	// 基準位置を左上->中央に変更
	x = x - width_num  * font_size / 2;
	y = y - height_num * (font_size+12) / 2;

	ctx.save();

	ctx.fillStyle = SERIF_FONT_COLOR;
	ctx.font = font_size.toString() + "px '"+ font_name + "'";

	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'top';

	for(var i = 0, len = lines.length; i < len; i++) {
		y += font_size + 12;
		ctx.fillText(lines[i], x, y); // 1行表示

	}
	ctx.restore();
};

// @param: {ObjectBase} obj
DrawSerif.drawJunction = function (obj, ctx, junction_off, junction_on, junction_list, focus_index) {
	// ウィンドウの位置
	var message_window_pos = this._getJunctionPos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_show_right = message_window_pos.is_show_right;

	// ウィンドウの大きさ
	var scale = {
		width: 2/3,
		height: 2/3,
	};

	// 選択肢間の縦の余白
	var junction_height_margin = 10;

	// 選択肢の傾き
	var junction_slope = 5;

	// 選択されている選択肢は少し前へ出る
	var selected_push_margin = 20;

	for (var i = 0; i < junction_list.length; i++) {
		// 選択肢ふきだし画像
		var image = i === focus_index ? junction_on : junction_off;

		// 選択肢ふきだし画像の描画
		ctx.save();

		// 選択肢 位置
		ctx.translate(x, y + i * (image.height*scale.height + junction_height_margin));

		// 反転
		if(is_show_right) {
			ctx.transform(-1, 0, 0, 1, 0, 0);
		}

		// 選択肢の傾き
		var rotate = Util.thetaToRadian((i - junction_list.length/2) * junction_slope);
		ctx.rotate(-rotate);

		// 選択されている選択肢は ちょっと前へ
		if (i === focus_index) {
			ctx.translate(-selected_push_margin, 0);
		}

		// x,y座標は中央が基準位置
		ctx.drawImage(image,
			-image.width * scale.width/2,
			-image.height*scale.height/2,
			image.width * scale.width,
			image.height * scale.height
		);
		ctx.restore();

		// 選択肢 文字の描画
		ctx.save();

		ctx.translate(x, y + i * (image.height*scale.height + junction_height_margin) + 5); // +5 は文字用のmargin

		// NOTE: 文字は反転させない(文字が読めなくなってしまうため)

		// 選択肢の傾き
		if(is_show_right) {
			ctx.rotate(rotate);
		}
		else {
			ctx.rotate(-rotate);
		}

		// 選択されている選択肢は ちょっと前へ
		if (i === focus_index) {
			if(is_show_right) {
				ctx.translate(selected_push_margin, 0);
			}
			else {
				ctx.translate(-selected_push_margin, 0);
			}
		}


		ctx.fillStyle = SERIF_FONT_COLOR;
		ctx.font = FONT_SIZE.toString() + "px '" + FONT_NAME + "'";

		ctx.textAlign = 'left';
		ctx.textBaseAlign = 'middle';

		ctx.fillText(junction_list[i], -100, 0); // 1行表示

		ctx.restore();

	}
};

// メッセージウィンドウの位置を取得
DrawSerif._getMessagePos = function(obj){
	var is_show_right = this._isShowRight(obj);
	var x,y;

	if(is_show_right) {
		x = obj.globalRightX() - 100;
		y = obj.globalUpY();
	}
	else {
		x = obj.globalLeftX() + 100;
		y = obj.globalUpY();
	}

	// 画面上部のオブジェクトは、シーンからはみ出ちゃうので
	if (y < 100) {
		y += 100;
	}

	return {
		is_show_right: is_show_right,
		x: x,
		y: y,
	};

};

// 選択肢分岐の位置を取得
DrawSerif._getJunctionPos = function(obj){
	var is_show_right = this._isShowRight(obj);
	var x,y;

	if(is_show_right) {
		x = obj.globalRightX() + 50;
		y = obj.y() - 50;
	}
	else {
		x = obj.globalLeftX() - 50;
		y = obj.y() - 50;
	}

	// 画面上部のオブジェクトは、シーンからはみ出ちゃうので
	if (y < 100) {
		y += 100;
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
