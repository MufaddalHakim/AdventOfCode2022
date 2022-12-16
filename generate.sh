#!/bin/bash

read -d '' template << EOM
const fs = require('fs');

const input = fs.readFileSync(\`\${process.argv[2]}.txt\`, 'utf-8').split('\\\n');
EOM

mkdir ./$1
echo "$template" > ./$1/p1.js
echo "$template" > ./$1/p2.js

touch "./$1/test.txt"
touch "./$1/input.txt"
