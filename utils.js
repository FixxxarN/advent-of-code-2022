const fs = require('fs');

const rf = (filePath) => {
  return fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' });
}

const rfta = (filePath) => {
  return rf(filePath).split('\n');
}

const rftaon = (filePath) => {
  return rf(filePath).split('\n').map(x => Number(x));
}

const arrMax = (arr) => Math.max(...arr);
const arrMin = (arr) => Math.max(...arr);
const arrSortD = (arr) => arr.sort((a, b) => b - a)
const arrSortA = (arr) => arr.sort((a, b) => a - b)

module.exports = {
  rf,
  rfta,
  rftaon,
  arrMax,
  arrMin,
  arrSortD,
  arrSortA
}