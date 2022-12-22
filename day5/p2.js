const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();


let stacks = {
  '1': ['G', 'D', 'V', 'Z', 'J', 'S', 'B'],
  '2': ['Z', 'S', 'M', 'G', 'V', 'P'],
  '3': ['C', 'L', 'B', 'S', 'W', 'T', 'Q', 'F'],
  '4': ['H', 'J', 'G', 'W', 'M', 'R', 'V', 'Q'],
  '5': ['C', 'L', 'S', 'N', 'F', 'M', 'D'],
  '6': ['R', 'G', 'C', 'D'],
  '7': ['H', 'G', 'T', 'R', 'J', 'D', 'S', 'Q'],
  '8': ['P', 'F', 'V'],
  '9': ['D', 'R', 'S', 'T', 'J'],
}

// let stacks = {
//   '1': ['N', 'Z'],
//   '2': ['M', 'C', 'D'],
//   '3': ['P'],
// }

for (let move of input) {
  let regex = /move (\d+) from (\d+) to (\d+)/gi;
  let matches = move.matchAll(regex);

  for (let match of matches) {
    let quantity = match[1];
    let source = match[2];
    let target = match[3];

    let temp = [];
    for (let i = 0; i < quantity; i++) temp.push(stacks[source].pop());
    for (let i = 0; i < quantity; i++) stacks[target].push(temp.pop());
  }
}

let top = [];
for (let stack of Object.getOwnPropertyNames(stacks)) {
  top.push(stacks[stack][stacks[stack].length - 1]);
}
console.log(top.join(''));
