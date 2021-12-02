const fs = require('fs')

const fileToString = (filename) => fs.readFileSync(filename, "utf8");

const fileToLineArray = (filename) => fileToString(filename).split("\n");

const fileToNumArray = (filename) => fileToLineArray(filename).map(string => parseInt(string))

module.exports = { fileToLineArray, fileToNumArray };