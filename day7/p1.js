const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();


let path = [];
let sizes = new Map();

Map.prototype.getOrDefault = function(key, defaultValue) {
  if (this.has(key)) {
    return this.get(key);
  }
  return defaultValue;
}

let listing = false;
for (let command of input) {
  if (command.startsWith('$ cd')) {
    listing = false;
    let dir = command.split(' ')[2];
    if (dir == '..') path.pop();
    else path.push(command.split(' ')[2]);
  }
  else if (command.startsWith('$ ls')) {
    listing = true;
  }
  else {
    let size = command.split(' ')[0];
    if (size == 'dir') continue;

    let current_path = [...path];
    for (let i = 0; i < current_path.length; i++) {
      let path = current_path.slice(0, i + 1).join('/');
      sizes.set(path, sizes.getOrDefault(path, 0) + parseInt(size));
    }
  }
}

let sum = 0;
for (let [key, value] of sizes) {
  if (value <= 100000) sum += value;
}
console.log(sizes);
console.log(sum);