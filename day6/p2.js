const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();

let signal = input[0];

let map = new Map();
let i = 0;
for (; i < signal.length; i++) {
  let char = signal.charAt(i);
  if (map.has(char)) {
    map.set(char, map.get(char) + 1);
  }
  else {
    map.set(char, 1);
  }

  if (i >= 14) {
    map.set(signal.charAt(i - 14), map.get(signal.charAt(i - 14)) - 1);
    if (map.get(signal.charAt(i - 14)) == 0) map.delete(signal.charAt(i - 14));
  }

  if (map.size == 14) break;
}

console.log(i+1);