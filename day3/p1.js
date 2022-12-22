const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');

let prioritySum = 0;
for (let str of input) {
  let h1 = str.slice(0, str.length/2);
  let h2 = str.slice(str.length/2, str.length);
  
  let items1 = new Set();
  for (let i = 0; i < h1.length; i++) {
    items1.add(h1.charAt(i));
  }

  for (let i = 0; i < h2.length; i++) {
    if (items1.has(h2.charAt(i))) {
      // console.log(h2.charAt(i), getPriority(h2.charAt(i)));
      prioritySum += getPriority(h2.charAt(i));
      break;
    }
  }

}

function getPriority(ch) {
  let ascii = ch.charCodeAt(0);
  if (ascii > 97) return ascii - 96;
  else return ascii - 38;
}

console.log(prioritySum);