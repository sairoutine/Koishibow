'use strict';
// Electron のレンダラプロセスならば
if(window.require) {
	// zoomさせない
	window.require('electron').webFrame.setVisualZoomLevelLimits(1,1);


	window.addEventListener('DOMContentLoaded', function() {
		// Electron かつ Steam モードのならば
		if(window.game.isSteam()) {
			var greenworks = window.require('./js/greenworks.js');

			// steam API init
			if(!greenworks.init()) {
				throw new Error('Error on initializing steam API.');
			} else {
				var steamId = greenworks.getSteamId();
				console.log(process.versions.greenworks);
				console.log("My Name: [" + steamId.getPersonaName() + "]");
			}
		}
	});
}