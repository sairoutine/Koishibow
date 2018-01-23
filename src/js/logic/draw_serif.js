'use strict';

/* セリフを描画する */

// 静的クラス
var DrawSerif = function() {};

DrawSerif.drawWindow = function (ctx, fukidashi, x, y, is_reflect, lines) {
	ctx.save();

	if (!x && !y) return;

	// ウィンドウの大きさ
	var scale = this._getMessageWindowScale(lines);

	if(is_reflect) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}

	ctx.drawImage(fukidashi,
		x,
		y,
		fukidashi.width * scale.width,
		fukidashi.height * scale.height
	);
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
	return {width: scale_width, height: scale_height};
};




module.exports = DrawSerif;
