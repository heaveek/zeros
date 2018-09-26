module.exports = function getZerosCount(number) {
  let countZero = 1;

  for(let i = 1; Math.floor(number / Math.pow(5, i)) <= 1; i++) {
    countZero += Math.floor(number / Math.pow(5, i));
  }
  
  return countZero; 
}
