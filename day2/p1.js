const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');

let score = 0;
input.forEach((move) => {
  move = move.split(' ');
  score += shapeScore(move[1]) + outcomeScore(move[0], move[1]);
})
console.log(score);

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
