#!/bin/bash

if [ -f .env ]
then
  export $(cat .env | xargs)
fi

read -d '' template << EOM
const fs = require('fs');

const input = fs.readFileSync(\`\${process.argv[2]}.txt\`, 'utf-8').split('\\\n');
EOM

mkdir ./day$1
echo "$template" > ./day$1/p1.js
echo "$template" > ./day$1/p2.js


# Create input and test files
node getTestInput.js $1 > "./day$1/test.txt"
curl -s https://adventofcode.com/2022/day/$1/input --cookie "session=$session" > "./day$1/input.txt"
