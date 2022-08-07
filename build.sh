#!/bin/sh

npm run build
cp ./public/index.html docs/
cp -r ./public/css docs/