const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n\n');

let elves = [];
for (let i of input) {
  elves.push(i.split('\n'));
}

let max = 0;
for (let elf of elves) {
  let sum = 0;
  for (let i = 0; i < elf.length; i++) {
    sum += parseInt(elf[i]);
  }
  max = Math.max(max, sum);
  console.log(sum);
}

console.log(max);