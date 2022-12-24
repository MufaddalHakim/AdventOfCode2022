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

// calculate the size of each directory
for (let command of input) {
  if (command.startsWith('$ cd')) {
    // listing = false;
    let dir = command.split(' ')[2];
    if (dir == '..') path.pop();
    else path.push(command.split(' ')[2]);
  }
  else if (command.startsWith('$ ls')) continue;
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


let total = 70_000_000;
let required = 30_000_000;
let target = Math.max(required - total + sizes.get('/'), 0);

let vals = [];
for (let [key, value] of sizes) {
  if (value >= target) vals.push([key, value]);
}

vals.sort(function(a, b) {
  return a[1] - b[1];
});
console.log(vals[0]);




// for (let [key, value] of sizes) {
//   console.log(key, value);
// }

// let count = 0;
// for (let command of input) {
//   // let match = command.match(/\$\s(cd|ls)|\d+|dir/g);
//   let match = command.match(/\d+/g);
//   if (match != null) count += parseInt(match[0]);  
// }
