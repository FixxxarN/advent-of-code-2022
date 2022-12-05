const { rftaon, rfta, rf, arrMax, arrMin, arrSortD, arrSortA } = require('../utils.js');

const arr = rf('./day5/input.txt');

const split = arr.split('\n');

const crateStructure = split.slice(0, split.findIndex((x => x === '')))
const moves = split.slice(split.findIndex((x => x === '')) + 1)

crateStructure.reverse();

const indexesForStacks = [];

// Part 1 & 2

let map = {};

for(let j = 0; j < crateStructure[0].length; j++) {
  if(crateStructure[0][j] !== ' ') {
    indexesForStacks.push(j)
    map[j] = [];
  }
}  

for(let i = 1; i < crateStructure.length; i++) {
  for(let j = 0; j < indexesForStacks.length; j++) {
    if(crateStructure[i][indexesForStacks[j]] !== ' ')
    map[indexesForStacks[j]].push(crateStructure[i][indexesForStacks[j]])
  }
}

indexesForStacks.forEach((index, i) => {
  Object.defineProperty(map, i, Object.getOwnPropertyDescriptor(map, index));
  delete map[index]
})


for(let i = 0; i < moves.length; i++) {
  const moveArr = moves[i].split(' ');
  const stackToTakeFrom = moveArr[3] - 1;
  const amountToTake = moveArr[1]
  const stackToPutTo = moveArr[5] - 1;

  let temp = map[stackToTakeFrom].slice(-amountToTake).reverse() // Part 2 <----- Without reverse
  map[stackToTakeFrom] = map[stackToTakeFrom].slice(0, map[stackToTakeFrom].length - amountToTake)
  temp.forEach((x) => { map[stackToPutTo].push(x) });
}

let message = '';
Object.values(map).forEach((x) => message += x[x.length - 1])

console.log(message);

// Part 1 PTWLTDSJV
// Part 2 WZMFVGGZP