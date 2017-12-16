'use strict';
var base_object = require('./next_field_button_base');
var Util = require('../../hakurei').util;

var ObjectRightNextFieldButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectRightNextFieldButton, base_object);


ObjectRightNextFieldButton.prototype.nextFieldName = function() {
	var field_data = this.scene.getFieldData();
	return field_data.right_field;
};

ObjectRightNextFieldButton.prototype.setPosition = function(){
	this.x(this.scene.width - 48);
	this.y(this.scene.height/2);
};

module.exports = ObjectRightNextFieldButton;
