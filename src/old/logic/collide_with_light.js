'use strict';
// 静的クラス
var CreateDarkerImage = function() {};

CreateDarkerImage.check = function (piece, main_stage) {
	// 光の当たり判定の円の位置と大きさ(2つある)
	var R1 = 180;
	var R2 = 60;
	var map1 = main_stage.calcLightCollisionPosition(336);
	var map2 = main_stage.calcLightCollisionPosition(100);

	// 1つ目の円
	if(Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(R1, 2)) {
		return true;
	}

	// 2つ目の円
	if(Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(R2, 2)) {
		return true;
	}

	return false;
};


module.exports = CreateDarkerImage;
