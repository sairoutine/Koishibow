'use strict';

/* セリフを描画する */

var FONT_SIZE = 18;

var Util = require('../hakurei').util;

// 静的クラス
var DrawSerif = function() {};

// @param: {ObjectBase} obj
DrawSerif.drawWindow = function (obj, ctx, fukidashi, lines, width_num, height_num) {

	// ウィンドウの位置
	var message_window_pos = this._getMessagePos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_show_right = message_window_pos.is_show_right;

	if (!x && !y) return;

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

DrawSerif.drawText = function (obj, ctx, lines, width_num, height_num) {
	// セリフがなければ何も表示しない
	if (lines.length === 0) return;

	var message_text_pos = this._getMessagePos(obj);
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

// @param: {ObjectBase} obj
DrawSerif.drawJunction = function (obj, ctx, junction_off, junction_on, junction_list, focus_index) {
	// ウィンドウの位置
	var message_window_pos = this._getJunctionPos(obj);
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_show_right = message_window_pos.is_show_right;

	if (!x && !y) return;

	// ウィンドウの大きさ
	var scale = {
		width: 2/3,
		height: 2/3,
	};



	// ウィンドウ画像が中央からちょっとズレてるので位置調整
	//x += 10;
	//y += 10;
	// セリフの色
	var font_color = Util.hexToRGBString("#000000");


	var rotate;
	for (var i = 0; i < junction_list.length; i++) {
		if (i === focus_index) continue;

		ctx.save();

		ctx.translate(x, y + i*(junction_off.height*scale.height+10));

		rotate = Util.thetaToRadian((i-junction_list.length/2)*5);

		if(is_show_right) {
			ctx.rotate(rotate);
			ctx.transform(-1, 0, 0, 1, 0, 0);
		}
		else {
			ctx.rotate(-rotate);
		}

		// x,y座標は中央が基準位置
		ctx.drawImage(junction_off,
			-junction_off.width * scale.width/2,
			-junction_off.height*scale.height/2,
			junction_off.width * scale.width,
			junction_off.height * scale.height
		);
		ctx.restore();

		ctx.save();

		ctx.translate(x, y + i*(junction_off.height*scale.height+10) + 5);
		if(is_show_right) {
			ctx.rotate(rotate);
		}
		else {
			ctx.rotate(-rotate);
		}


		ctx.translate(-100, 0);


		ctx.fillStyle = font_color;
		ctx.font = FONT_SIZE.toString() + "px 'OradanoGSRR'";

		ctx.textAlign = 'left';
		ctx.textBaseAlign = 'middle';

		ctx.fillText(junction_list[i], 0, 0); // 1行表示

		ctx.restore();

	}

	if (1) {
		ctx.save();

		ctx.translate(x, y + focus_index*(junction_on.height*scale.height+10));

		rotate = Util.thetaToRadian((focus_index-junction_list.length/2)*5);
		if(is_show_right) {
			ctx.rotate(rotate);
			ctx.translate(20, 0);
			ctx.transform(-1, 0, 0, 1, 0, 0);
		}
		else {
			ctx.rotate(-rotate);
			ctx.translate(-20, 0);
		}


		// x,y座標は中央が基準位置
		ctx.drawImage(junction_on,
			-junction_on.width * scale.width/2,
			-junction_on.height*scale.height/2,
			junction_on.width * scale.width,
			junction_on.height * scale.height
		);
		ctx.restore();

		ctx.save();

		ctx.translate(x, y + focus_index*(junction_off.height*scale.height+10) + 5);
		if(is_show_right) {
			ctx.rotate(rotate);
			ctx.translate(-100 + 20, 0);
		}
		else {
			ctx.rotate(-rotate);
			ctx.translate(-100 - 20, 0);
		}



		ctx.fillStyle = font_color;
		ctx.font = FONT_SIZE.toString() + "px 'OradanoGSRR'";

		ctx.textAlign = 'left';
		ctx.textBaseAlign = 'middle';

		ctx.fillText(junction_list[focus_index], 0, 0); // 1行表示

		ctx.restore();


	}

};

// メッセージウィンドウの位置を取得
DrawSerif._getMessagePos = function(obj){
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
