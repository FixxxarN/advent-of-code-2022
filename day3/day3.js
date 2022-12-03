const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rfta('./day3/input.txt');

// Part 1
let errors = [];

for(let i = 0; i < arr.length; i++) {
  let firstHalf = arr[i].substring(0, arr[i].length / 2);
  let secondHalf = arr[i].substring(arr[i].length / 2, arr[i].length)

  let temp = [];
  for(let j = 0; j < arr[i].length / 2; j++) {
    if(firstHalf.includes(secondHalf[j]) && !temp.includes(secondHalf[j])) {
      temp.push(secondHalf[j])
      errors.push(secondHalf[j])
    }
  }
}

let count = errors.reduce((a, b) => { 
  if(b === b.toUpperCase()) {
    return a + `${b}`.charCodeAt(0) - 38
  }
  return a + `${b}`.charCodeAt(0) - 96 
} ,0)

console.log('Part 1', count);

// Part 2

count = 0;

let badges = [];

for(let i = 2; i < arr.length; i += 3) {
  let firstGroup = arr[i - 2];
  let secondGroup = arr[i - 1];
  let thirdGroup = arr[i];

  let temp = [];

  if(firstGroup.length > secondGroup.length && firstGroup.length > thirdGroup.length) {
    for(let j = 0; j < firstGroup.length; j++) {
      if(secondGroup.includes(firstGroup[j]) && thirdGroup.includes(firstGroup[j]) && temp.length < 1) {
        badges.push(firstGroup[j])
        temp.push(firstGroup[j])
      }
    }
  }
  else if(secondGroup.length > thirdGroup.length && secondGroup.length > firstGroup.length) {
    for(let j = 0; j < secondGroup.length; j++) {
      if(firstGroup.includes(secondGroup[j]) && thirdGroup.includes(secondGroup[j]) && temp.length < 1) {
        badges.push(secondGroup[j])
        temp.push(secondGroup[j])
      }
    }
  }
  else {
    for(let j = 0; j < thirdGroup.length; j++) {
      if(firstGroup.includes(thirdGroup[j]) && secondGroup.includes(thirdGroup[j]) && temp.length < 1) {
        badges.push(thirdGroup[j])
        temp.push(thirdGroup[j])
      }
    }
  }
}

count = badges.reduce((a, b) => { 
  if(b === b.toUpperCase()) {
    return a + `${b}`.charCodeAt(0) - 38
  }
  return a + `${b}`.charCodeAt(0) - 96 
} ,0)

console.log('Part 2', count);