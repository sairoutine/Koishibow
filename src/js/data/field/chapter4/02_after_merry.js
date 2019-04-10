'use strict';
var _ = require('i18n4v')

// メリーと最初に出会うフィールド(メリーと会話後)

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_02_after_merry",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_03",
	leftField: null,
	upField:    null,
	downField:  null,
	background: "chapter4-02-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー(立ち)",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "koishi","exp": null,  serif1: _("ねえねえ、友達っていい子？"), serif2: _("ねえねえ、友達っていい子？"), serif3: _("ねえねえ、友達っていい子？"), serif4: _("ねえねえ、友達っていい子？")},
				{"chara": "merry2","exp": null,  serif1: _("え？"), serif2: _("え？"), serif3: _("え？"), serif4: _("え？")},
				{"chara": "merry2","exp": "merry-reaction_06",  serif1: _("そうね、おおむね"), serif2: _("そうね、おおむね"), serif3: _("そうね、おおむね"), serif4: _("そうね、おおむね")},
				{"chara": "koishi","exp": null,  serif1: _("おおむねかー"), serif2: _("おおむねかー"), serif3: _("おおむねかー"), serif4: _("おおむねかー")},
				{"chara": "koishi","exp": null,  serif1: _("いいね"), serif2: _("いいね"), serif3: _("いいね"), serif4: _("いいね")},
			],
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
	],
};

