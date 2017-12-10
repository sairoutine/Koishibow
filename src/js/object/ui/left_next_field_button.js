'use strict';
var base_object = require('./next_field_button_base');
var Util = require('../../hakurei').util;

var ObjectLeftNextFieldButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectLeftNextFieldButton, base_object);


ObjectLeftNextFieldButton.prototype.nextFieldName = function() {
	var field_data = this.scene.getFieldData();
	return field_data.left_field;
};

ObjectLeftNextFieldButton.prototype.setPosition = function(){
	this.x(48);
	this.y(this.scene.height/2);
};

ObjectLeftNextFieldButton.prototype.rotateAdjust = function(){
	return 180;
};


module.exports = ObjectLeftNextFieldButton;
