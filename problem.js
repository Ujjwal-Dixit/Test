function sortedOddNumbers(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  const sortOddNumbers = oddNumbers.sort((num1, num2) => num1 - num2);

  let currentIndex = 0;
  const result = arr.map(num => {
    if (num % 2 !== 0) {
      return sortOddNumbers[currentIndex++];
    }
    return num;
  });
  return result;
}

module.exports = sortedOddNumbers;