/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1] = digits[digits.length - 1] + 1;
  
  var checkForTen = (arr, index) => {
      if (arr[index] === 10) {
        if (arr[0] === 10) {
          arr.splice(0, 0, 0)
          index ++;
        }
          arr[index] = 0;
          arr[index - 1] = arr[index - 1] + 1;
      }
      
      if (arr[index - 1] === 10) {
          return checkForTen(arr, index - 1);
      } else {
          return arr;
      }
  }
  
  return checkForTen(digits, digits.length - 1);
}

console.log(plusOne([9, 9]))