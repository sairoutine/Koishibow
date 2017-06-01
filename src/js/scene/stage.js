'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var jsonData = require('../animetest');
var SsaPlayer = require('../vendor/SsaPlayer');
var SsImageList = SsaPlayer.SsImageList;
var SsAnimation = SsaPlayer.SsAnimation;
var SsSprite = SsaPlayer.SsSprite;

var SceneStage = function(core) {
	base_scene.apply(this, arguments);
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	var data = jsonData;

	var data_index = 0;

	var imageList = new SsImageList(data[data_index].images, "./image/", true);
	var animation = new SsAnimation(data[data_index].animation, imageList);

	var sp1 = new SsSprite(animation);

	sp1.x = 400;
	sp1.y = 400;
	sp1.rootScaleX = 0.5;
	sp1.rootScaleY = 0.5;

	this.sprite = sp1;
};




SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);


};

// 画面更新
SceneStage.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;

	var t = new Date().getTime();

	ctx.save();

	this.sprite.draw(ctx, t);
	ctx.restore();
};

/*
		var screen_width = 0;
		var screen_height = 0;

		var spr_x = 0;
		var spr_y = 0;
		var sprite = null;
		var data = null;
		var data_index = 0;

		function  OnButtonClick1()
		{
			data_index = data_index - 1;
			if ( data_index < 0 ) data_index = 0;

			var imageList = new SsImageList(data[data_index].images, "./datas/", true);
			var animation = new SsAnimation(data[data_index].animation, imageList);		
			sprite = new SsSprite(animation);
			sprite.x = spr_x + screen_width/2;
			sprite.y = spr_y + screen_height/2;
		}
		
		function  OnButtonClick2()
		{
			data_index = data_index + 1;
			
			if ( data_index > data.length ) data_index = data.length;
			
			var imageList = new SsImageList(data[data_index].images, "./datas/", true);
			var animation = new SsAnimation(data[data_index].animation, imageList);		
			sprite = new SsSprite(animation);
			sprite.x = spr_x + screen_width/2;
			sprite.y = spr_y + screen_height/2;
		}
		
		function  OnButtonClick3()
		{
			spr_x = Number(document.js.txtx.value);
			spr_y = Number(document.js.txty.value);

			sprite.x = spr_x + 400;
			sprite.y = spr_y + 300;
		}
*/

module.exports = SceneStage;
