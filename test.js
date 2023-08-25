const chai = require('chai');
const expect = chai.expect;

const oddSortedNumbers = require('./problem.js');

describe('oddSortedNumbers', function () {
  it('should sort odd numbers in ascending order and keep even numbers in their original place', function () {
    const inputArray = [9, 7, 2, 4, 5, 0, 6];
    const expectedOutput = [5, 7, 2, 4, 9, 0, 6];
    expect(oddSortedNumbers(inputArray)).to.deep.equal(expectedOutput);
  });

  it('should handle empty array', function () {
    const inputArray = [];
    const expectedOutput = [];
    expect(oddSortedNumbers(inputArray)).to.deep.equal(expectedOutput);
  });

  it('should handle an array with only even numbers', function () {
    const inputArray = [2, 4, 6, 8];
    const expectedOutput = [2, 4, 6, 8];
    expect(oddSortedNumbers(inputArray)).to.deep.equal(expectedOutput);
  });

  it('should handle an array with only odd numbers', function () {
    const inputArray = [9, 7, 5, 3, 1];
    const expectedOutput = [1, 3, 5, 7, 9];
    expect(oddSortedNumbers(inputArray)).to.deep.equal(expectedOutput);
  });

});