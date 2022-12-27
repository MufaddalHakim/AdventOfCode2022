const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();

let head = [0, 0];
let tail = [];
for (let i = 0; i < 9; i++) tail.push([0,0]);
let visited = new Set();

for (let move of input) {
  for (let i = 0; i < move.split(' ')[1]; i++) {
    let dir = move.split(' ')[0];
    switch (dir) {
      case 'U':
        head[1]++;
        break;
      case 'D':
        head[1]--;
        break;
      case 'L':
        head[0]--;
        break;
      case 'R':
        head[0]++;
        break;
    }

    for (j = 0; j < 9; j++) {
      let leader = head;
      if (j > 0) leader = tail[j-1];
      tail[j] = findTailPos(leader, tail[j]);
    }
    visited.add(tail[8].toString());
    // console.log(move, head, tail);
  }
}
console.log(visited);

function findTailPos(head, tail) {
  if (Math.abs(head[0] - tail[0]) > 1) {
    if (head[0] > tail[0]) tail[0]++;
    else tail[0]--;
    tail[1] = head[1];
  }
  if (Math.abs(head[1] - tail[1]) > 1) {
    if (head[1] > tail[1]) tail[1]++;
    else tail[1]--;
    tail[0] = head[0];
  }
  return tail;
}

console.log(visited.size);
