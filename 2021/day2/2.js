const { fileToLineArray } = require('../utils.js');
const data = fileToLineArray('./2Data.txt');

// helper method
const splitItem = (item) => ({ 
  move: item.split(' ')[0], 
  amt: parseInt(item.split(' ')[1]) 
});

// part 1
const calculatePosition = (data) => {
  let pos = { h: 0, d: 0 };
  data.forEach(line => {
    const { move, amt } = splitItem(line);
    if (move === 'forward') pos.h += amt
    if (move === 'down') pos.d += amt
    if (move === "up") pos.d -= amt
  });

  return (pos.h * pos.d)
};

// part 2
const calculateComplicatedPosition = (data) => {
  let pos = { h: 0, d: 0, a: 0 };
  data.forEach(line => {
    const { move, amt } = splitItem(line);
    if (move === 'forward') {
      pos.h += amt
      pos.d += pos.a * amt
    }
    if (move === 'down') pos.a += amt
    if (move === "up") pos.a -= amt
  })

  return (pos.d * pos.h)
}

console.log("Part 1: " + calculatePosition(data))
console.log("Part 2: " + calculateComplicatedPosition(data))
