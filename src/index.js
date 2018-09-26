module.exports = function getZerosCount(number) {
  let countZero = 0;

  for(let i = 1; number > Math.pow(5, i); i++) {
    countZero += Math.floor(number / Math.pow(5, i));
  }

  return countZero; 
}
