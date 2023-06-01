#
npm i codemirror @codemirror/lang-sql
npm i codemirror @codemirror/lang-markdown
npm i codemirror @codemirror/lang-javascript
npm i rollup @rollup/plugin-node-resolve


node_modules/.bin/rollup editor.mjs -f iife -o editor.bundle.js \
  -p @rollup/plugin-node-resolve
