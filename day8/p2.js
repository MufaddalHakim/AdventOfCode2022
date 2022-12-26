const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');
input.pop();


let maxScore = 0;
for (let a = 0; a < input.length; a++) {
  for (let b = 0; b < input[a].length; b++) {
    let height = parseInt(input[a].charAt(b));
    
    // left
    let left = 0;
    let i = a; let j = b;
    while (j-- > 0) {
      left++;
      if (parseInt(input[i].charAt(j)) >= height) break;
    }

    // right
    let right = 0;
    i = a; j = b;
    while (j++ < input[i].length-1) {
      right++;
      if (parseInt(input[i].charAt(j)) >= height) break;
    }

    // top
    let top = 0;
    i = a; j = b;
    while (i-- > 0) {
      top++;
      if (parseInt(input[i].charAt(j)) >= height) break;
    }

    // bottom
    let bottom = 0;
    i = a; j = b;
    while (i++ < input.length-1) {
      bottom++;
      if (parseInt(input[i].charAt(j)) >= height) break;
    }

    let score = left * right * top * bottom;
    if (score > maxScore) maxScore = score;
  }
}

console.log(maxScore);