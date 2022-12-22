const fs = require('fs');

const input = fs.readFileSync(`${process.argv[2]}.txt`, 'utf-8').split('\n');

let prioritySum = 0;
for (let i = 0; i < input.length;) {
  let str1 = input[i++];
  let str2 = input[i++];
  let str3 = input[i++];

  let common1 = new Set();
  for (let j = 0; j < str1.length; j++) {
    common1.add(str1.charAt(j));
  }

  let common2 = new Set();
  for (let j = 0; j < str2.length; j++) {
    if (common1.has(str2.charAt(j))) {
      common2.add(str2.charAt(j));
    }
  }

  for (let j = 0; j < str3.length; j++) {
    if (common2.has(str3.charAt(j))) {
      prioritySum += getPriority(str3.charAt(j));
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