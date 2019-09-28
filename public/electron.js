// electron エントリポイント
'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

let mainWindow = null;

var isShowDialog = false;
function closeWindow () {
	// 複数回ダイアログを表示しない
	if(isShowDialog) return;

	if(!mainWindow) return;

	isShowDialog = true;
	mainWindow.webContents.executeJavaScript(`
		window.confirmClose();
	`, true, (isQuit) => {
		if(isQuit) {
			// ゲーム終了
			app.quit();
		}
		else {
			// ゲーム終了キャンセル
			isShowDialog = false;
		}
	});
};



function createWindow () {
	mainWindow = new BrowserWindow({
		"width":          960,
		"height":         720,
		"useContentSize": true,  // フレームのサイズをサイズに含まない
		"resizable":      false, // ウィンドウのリサイズを禁止
		"alwaysOnTop":    true,  // 常に最前面
	});


	mainWindow.loadURL(`file://${__dirname}/index.html`);

	// フルスクリーンにするか否か確認する
	mainWindow.webContents.executeJavaScript(`
		window.confirmFullScreen();
	`, true, (isFullScreen) => {
		if(isFullScreen) {
			// フルスクリーン
			mainWindow.setResizable(true);
			mainWindow.setFullScreen(true);

			mainWindow.webContents.executeJavaScript(`
				window.changeFullScreen();
			`, true);
		}
	});


	// Open the DevTools.
	//mainWindow.webContents.openDevTools()

	globalShortcut.register('Escape', closeWindow);
	globalShortcut.register('Alt+F4', closeWindow);

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
