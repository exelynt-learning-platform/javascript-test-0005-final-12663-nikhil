/**
 * Generates a number pattern using nested loops
 * @param {number} totalRows - Number of rows in the pattern
 * @returns {string} - Generated pattern
 */
function generateNumberPattern(totalRows) {
  let currentNumber = 1;
  let pattern = "";

  for (let row = 1; row <= totalRows; row++) {
    let rowOutput = "";

    for (let column = 1; column <= row; column++) {
      rowOutput += currentNumber + " ";
      currentNumber++;
    }

    pattern += rowOutput.trim() + "\n";
  }

  return pattern;
}

const result = generateNumberPattern(5);
console.log(result);