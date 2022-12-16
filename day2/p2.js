const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');

let score = 0;
input.forEach((move) => {
  move = move.split(' ');
  let myMove = getMyMove(move[0], move[1]);
  score += shapeScore(myMove) + outcomeScore(move[0], myMove);
})
console.log(score);

function getMyMove(x, y) {
  if (y == 'X') return getLosingMove(x);
  if (y == 'Y') return getDrawingMove(x);
  if (y == 'Z') return getWinningMove(x);
}

function getWinningMove(x) {
  if (x == 'A') return 'Y';
  if (x == 'B') return 'Z';
  if (x == 'C') return 'X';
}

function getDrawingMove(x) {
  if (x == 'A') return 'X';
  if (x == 'B') return 'Y';
  if (x == 'C') return 'Z';
}

function getLosingMove(x) {
  if (x == 'A') return 'Z';
  if (x == 'B') return 'X';
  if (x == 'C') return 'Y';
}

function shapeScore(x) {
  if (x == 'X') return 1;
  if (x == 'Y') return 2;
  if (x == 'Z') return 3;
}

function outcomeScore(x, y) {
  x = x.charCodeAt(0) - 65;
  y = y.charCodeAt(0) - 65 - 23;

  let winningOutcomes = [[0, 1], [1, 2], [2, 0]];

  let win = false;
  winningOutcomes.forEach((outcome) => {
    if (outcome[0] == x && outcome[1] == y) win = true;
    return;
  })

  if (win) return 6;
  else if (x == y) return 3;
  else return 0;
}
