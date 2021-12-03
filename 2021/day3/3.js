const { fileToLineArray } = require('../utils.js');
const data = fileToLineArray('./3Data.txt');

// part 1
const createDiagnosticReport = (data) => {
  const totalOnes = new Array(data[0].length).fill(0);
  data.forEach(binary => {
    for (let i = 0; i < data[0].length; i++) {
      if (binary[i] === '1') totalOnes[i]++;
    }
  })

  const gamma = totalOnes.map(o => o > data.length / 2 ? '1' : '0').join('');
  const epsilon = gamma.split('').map(bit => String(1 - bit)).join('');
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
};

// part 2
//helper method
const getRating = (data, co2 = false, i = 0) => {
  while (data.length > 1) {
    const commonVal = (
      data.reduce(
        (total, currVal) => currVal[i] === '1' ? total + 1 : total, 
        0 // initial value of total
      ) < data.length / 2
    ) ? "0" : "1";
    const checkVal = co2 ? commonVal : String(1 - commonVal);
    data = data.filter(s => s[i] === checkVal);
    i++;
  }
  return data[0];
};


const createLifeSupportRating = (data) => {
  const oxygenRating = getRating(data);
  const co2Rating = getRating(data, true);
  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
};

console.log('Part 1: ', createDiagnosticReport(data));
console.log('Part 2: ', createLifeSupportRating(data));
