// electron エントリポイント
'use strict';
const electron = require('electron');
const app = electron.app;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

let mainWindow;

// 日本語 or 英語
const IS_JA = true;

const FULLSCREEN_DIALOG_TITLE = IS_JA ? "フルスクリーン起動" : "Full Screen"
const FULLSCREEN_DIALOG_MESSAGE = IS_JA ? 'フルスクリーンで起動しますか？' : "Do you wish to make the window full screen?"
const EXIT_DIALOG_TITLE = IS_JA ? "終了" : "Exit"
const EXIT_DIALOG_MESSAGE = IS_JA ? 'ゲームを終了しますがよろしいですか？' : "Do you wish to exit the game?"
/* tw
フルスクリーン起動	啟動全螢幕模式
フルスクリーンで起動しますか？	要以全螢幕啟動嗎？
終了	結束
ゲームを終了しますがよろしいですか？	請問要結束遊戲嗎？
*/
/* ch
フルスクリーン起動	启动全屏模式
フルスクリーンで起動しますか？	想要启动全屏模式吗？
終了	结束
ゲームを終了しますがよろしいですか？	您确定要结束游戏吗？
*/
function createWindow () {
	// dialog 表示
	var fullscreen_answer = dialog.showMessageBox({
		type: 'question',
		buttons: ['Yes', 'No'],
		title: FULLSCREEN_DIALOG_TITLE,
		message: FULLSCREEN_DIALOG_MESSAGE,
	});
	// fullscreen
	if(fullscreen_answer === 0) {
		mainWindow = new BrowserWindow({
			fullscreen: true,
		});
	}
	// not fullscreen
	else {
		mainWindow = new BrowserWindow({
			"width":          960,
			"height":         720,
			"useContentSize": true,  // フレームのサイズをサイズに含まない
			"resizable":      false, // ウィンドウのリサイズを禁止
			"alwaysOnTop":    true,  // 常に最前面
		});

	}

	mainWindow.loadURL(`file://${__dirname}/index.html`);
	// Open the DevTools.
	//mainWindow.webContents.openDevTools()

	// if fullscreen
	if(fullscreen_answer === 0) {
		mainWindow.webContents.executeJavaScript(`
			window.changeFullScreen();
		`, true);
	}

	var is_show_dialog = false;
	var close_function = function() {
		if(is_show_dialog) return;

		is_show_dialog = true;
		var quit_answer = dialog.showMessageBox({
			type: 'question',
			buttons: ['Yes', 'No'],
			title: EXIT_DIALOG_TITLE,
			message: EXIT_DIALOG_MESSAGE
		});
		if(quit_answer === 0) {
			app.quit();
		}
		is_show_dialog = false;
	};

	globalShortcut.register('Escape', close_function);
	globalShortcut.register('Alt+F4', close_function);

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('will-quit', () => {
	// Unregister all shortcuts.
	globalShortcut.unregisterAll();
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});
