// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  let splited =  str.split('')
  return splited.filter(letters => letters === 'B').length
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countBs;
