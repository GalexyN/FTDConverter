/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let answer = [];
  // get possible values
  let possibliities = nums.slice();
  // get max length of array
  let maxSlots = nums.length;
  // get all possibliities in position 1
    // send position 1 arrays and do all possible with position 2 
    // repeat
  // if max slots is filled then push finished array
  let recurse = (currentArr, currentSlot, numsArr ) => {
      if (currentSlot === maxSlots) {
          let finishedArr = currentArr.slice();
          answer.push(finishedArr);
          return;
      }
      for (let i = 0; i < numsArr.length; i ++) {
          currentArr.push(numsArr[i]);
          let arrPassToRecurse = numsArr.slice();
          arrPassToRecurse.splice(i, 1);
          recurse(currentArr, currentSlot + 1, arrPassToRecurse)
          currentArr.pop();
      }
  }
  
  recurse ([], 0, possibliities)
  console.log(answer);
};

permute([1,2,3])