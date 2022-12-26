const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();

let grid = [];
for (let i = 0; i < input.length; i++) {
  let row = [];
  for (let j = 0; j < input[i].length; j++) {
    row.push(false);
  }
  grid.push(row);
}

// left
for (let i = 0; i < input.length; i++) {
  let max = -1;
  for (let j = 0; j < input[i].length; j++) {
    let height = parseInt(input[i].charAt(j))
    if (height > max) {
      max = height;
      grid[i][j] = true;
    }
  }
}


// top
for (let i = 0; i < input[0].length; i++) {
  let max = -1;
  for (let j = 0; j < input.length; j++) {
    let height = parseInt(input[j].charAt(i));
    if (height > max) {
      max = height;
      grid[j][i] = true;
    }
  }
}

// right
for (let i = 0; i < input.length; i++) {
  let max = -1;
  for (let j = input[i].length; j >= 0; j--) {
    let height = parseInt(input[i].charAt(j))
    if (height > max) {
      max = height;
      grid[i][j] = true;
    }
  }
}

// bottom
for (let i = 0; i < input[0].length; i++) {
  let max = -1;
  for (let j = input.length-1; j >= 0; j--) {
    let height = parseInt(input[j].charAt(i));
    if (height > max) {
      max = height;
      grid[j][i] = true;
    }
  }
}


// count visible
let visible = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (grid[i][j]) visible++;
  }
}
console.log(visible);