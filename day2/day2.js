const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rfta('./day2/input.txt');

let points = 0;

for(let i = 0; i < arr.length; i++) {
  let opponent = arr[i][0];
  let player = arr[i][2];

  if(opponent === 'A' && player === 'X') {
    points += 4;
  }
  if(opponent === 'B' && player === 'Y') {
    points += 5;
  }
  if(opponent === 'C' && player === 'Z') {
    points += 6;
  }
  if(opponent === 'A' && player === 'Y') {
    points += 8;
  }
  if(opponent === 'A' && player === 'Z') {
    points += 3;
  }
  if(opponent === 'B' && player === 'X') {
    points += 1;
  }
  if(opponent === 'B' && player === 'Z') {
    points += 9;
  }
  if(opponent === 'C' && player === 'X') {
    points += 7;
  }
  if(opponent === 'C' && player === 'Y') {
    points += 2;
  }
}

// Part 1
console.log(points);

// Part 2 
points = 0;
for(let i = 0; i < arr.length; i++) {
  let opponent = arr[i][0];
  let player = arr[i][2];

  if(opponent === 'A' && player === 'X') {
    points += 3;
  }
  if(opponent === 'B' && player === 'Y') {
    points += 5;
  }
  if(opponent === 'C' && player === 'Z') {
    points += 7;
  }
  if(opponent === 'A' && player === 'Y') {
    points += 4;
  }
  if(opponent === 'A' && player === 'Z') {
    points += 8;
  }
  if(opponent === 'B' && player === 'X') {
    points += 1;
  }
  if(opponent === 'B' && player === 'Z') {
    points += 9;
  }
  if(opponent === 'C' && player === 'X') {
    points += 2;
  }
  if(opponent === 'C' && player === 'Y') {
    points += 6;
  }
}

console.log(points);