const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n\n');

let elves = [];
for (let i of input) {
  elves.push(i.split('\n'));
}

let sums = [];
for (let elf of elves) {
  let sum = 0;
  for (let i = 0; i < elf.length; i++) {
    sum += parseInt(elf[i]);
  }
  sums.push(sum);
}

sums.sort(function (a, b) {
  return a - b;
});
console.log(sums[sums.length - 1] + sums[sums.length-2] + sums[sums.length-3]);