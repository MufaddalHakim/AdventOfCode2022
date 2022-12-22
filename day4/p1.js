const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();

let free = 0;
for (let pairs of input) {
  let start1 = parseInt(pairs.split(',')[0].split('-')[0]);
  let end1 = parseInt(pairs.split(',')[0].split('-')[1]);

  let start2 = parseInt(pairs.split(',')[1].split('-')[0]);
  let end2 = parseInt(pairs.split(',')[1].split('-')[1]);

  if ((start1 <= start2) && (end1 >= end2)) free++;
  else if ((start2 <= start1) && (end2 >= end1)) free++;  
}

console.log(free);