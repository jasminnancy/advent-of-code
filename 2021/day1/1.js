const { fileToNumArray } = require('../utils.js');
const data = fileToNumArray('./1Data.txt')

// both parts
const getNoOfIncreases = (data, interval) => data.reduce(
  (total, currVal, currIndex) => (data[currIndex + interval] > currVal) ? total + 1 : total, 
  0 // initial value of total
);

console.log("Part 1: " + getNoOfIncreases(data, 1))
console.log("Part 2: " + getNoOfIncreases(data, 3))