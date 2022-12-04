const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rfta('./day4/input.txt');

const result = arr.map(x => x.split(','));

let count = 0;

// Part 1
for(let i = 0; i < result.length; i++) {
  let temp1 = [];
  let temp2 = [];
  for(let j = 0; j < 2; j++) {
    for(let k = Number(result[i][j].split('-')[0]); k <= Number(result[i][j].split('-')[1]); k++) {
      if(j === 0) temp1.push(k.toString())
      if(j === 1) temp2.push(k.toString())
    }
  }

  let countAdded = false;
  if(temp1.every((x) => temp2.includes(x))) {
    count++
    countAdded = true;
  }
  if(temp2.every((x) => temp1.includes(x)) && !countAdded) {
    count++
  }
}

console.log(count);

count = 0;

// Part 2
for(let i = 0; i < result.length; i++) {
  let temp1 = [];
  let temp2 = [];
  for(let j = 0; j < 2; j++) {
    for(let k = Number(result[i][j].split('-')[0]); k <= Number(result[i][j].split('-')[1]); k++) {
      if(j === 0) temp1.push(k.toString())
      if(j === 1) temp2.push(k.toString())
    }
  }

  let countAdded = false;
  if(temp1.some((x) => temp2.includes(x))) {
    count++
    countAdded = true;
  }
  if(temp2.some((x) => temp1.includes(x)) && !countAdded) {
    count++
  }
}

console.log(count);