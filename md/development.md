# 開発環境構築
```
# nodenv のインストール(Unity でいう Unity Hub。複数のnodeバージョンを管理できます)
brew install nodenv

# console起動時のnodenv設定を追加(bash以外を使ってる場合は .bashrc　部分を修正してください)
nodenv init >> ~/.bashrc

# nodenv がインストールされたことの確認
nodenv -v

# nodeのインストール
nodenv install 14.16.0

# nodeのバージョンを指定
nodenv global 14.16.0

# node がインストールされたことの確認
node -v

# npm も同時にインストールされてるはずなので確認
# (Unityでいう upm。パッケージマネージャーです)
npm -v

# ゲームのソースコードとアセットをDL
git clone git@github.com:sairoutine/Koishibow.git

# ディレクトリへ移動
cd ./Koishibow

# 必要なパッケージを全てインストール
npm install

# 動作確認(ブラウザ)
# ローカルPC上でサーバーが立ち上がり、ブラウザが起動します。
# ブラウザ上で動作確認できます。Chrome Developer Toolも利用可能。
# またソースコードを編集すると、JSが自動でビルドされ、ゲームがオートリロードします。
npm run watch

# 動作確認(PC)
# Electron という web アプリをデスクトップアプリ化するフレームワークで起動します
npm run build:js # 手動でJSビルドする必要があります
npm run start

# ビルド
# Electronでデスクトップアプリを作成します。
npm run build:js:production
npm run build:win # windows向けビルド。mac上でもビルドできます
npm run build:mac # mac向けビルド。
```

デバッグモードON
```
# debug オプションを true にする
vim src/js/debug_constant.js
```
