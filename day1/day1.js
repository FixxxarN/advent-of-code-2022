const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rftaon('./day1/input.txt');

const newArr = [];

let calories = 0;
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 0) {
    newArr.push(calories);
    calories = 0;
  }
  
  calories += arr[i];
}

// Part 1
console.log('Part 1', arrMax(newArr))

// Part 2
const sorted = arrSortD(newArr)
console.log('Part 2', sorted[0] + sorted[1] + sorted[2]);

/* 

Global rank:

Part 1: 5092
Part 2: 4474

*/