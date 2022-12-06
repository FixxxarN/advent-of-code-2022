const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rfta('./day6/input.txt').join(' ').split('');

// Part 1 & Part 2

let lastDistinct = [];
let result = 0;

for(let i = 0; i < arr.length; i++) {
  lastDistinct.push(arr[i]);
  if(lastDistinct.length > 14) { // <----- 4 for part 1 and 14 for part 2
    lastDistinct = [...lastDistinct.slice(1, lastDistinct.length)]
    if(new Set(lastDistinct).size === lastDistinct.length) {
      result = i + 1;
      break;
    }
  }
}

// Part 1 1850

// Part 2 2823

console.log(result);