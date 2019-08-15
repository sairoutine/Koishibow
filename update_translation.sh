#!/bin/sh
node ./node_modules/.bin/i18n4v -o src/js/data/translation/en.json ./src/js/ -e node_modules
node ./node_modules/.bin/i18n4v -o src/js/data/translation/ch.json ./src/js/ -e node_modules
node ./node_modules/.bin/i18n4v -o src/js/data/translation/ja.json --fill-copy ./src/js/ -e node_modules
