'use strict';
var base_object = require('../../hakurei').object.sprite;
var Util = require('../../hakurei').util;

var ObjectLeftNextFieldButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectLeftNextFieldButton, base_object);


ObjectLeftNextFieldButton.prototype.nextFieldName = function() {
	var field_data = this.scene.getFieldData();
	return field_data.right_field;
};

ObjectLeftNextFieldButton.prototype.setPosition = function(){
	this.x(this.scene.width - 48);
	this.y(this.scene.height/2);
};

module.exports = ObjectLeftNextFieldButton;
