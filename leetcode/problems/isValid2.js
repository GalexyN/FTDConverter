/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  // var sSplit = s.split('');
  // const sObject = {};
  // for (let i = 0; i < sSplit.length; i ++) {
  //   if(sObject[sSplit[i]]) {
  //     sObject[sSplit[i]]++;
  //   } else {
  //     sObject[sSplit[i]] = 1;
  //   }
  // }

  // const sObjectKeys = Object.keys(sObject);
  // for (key of sObjectKeys) {
  //   if (key === '(') {
  //     if (sObject[key] !== sObject[')']) {
  //       return false;
  //     }
  //   } else if (key === '{') {
  //     if (sObject[key] !== sObject['}']) {
  //       return false;
  //     }
  //   } else if (key === '[') {
  //     if (sObject[key] !== sObject[']']) {
  //       return false;
  //     }
  //   }
  // }

  // //helper functions
  // const testLastIndex = (arr, index, matchingCharacter) => arr[arr.length - index - 1] === matchingCharacter;

  // const testNextIndex = (arr, index, matchingCharacter) => arr[index + 1] === matchingCharacter;

  // // checks position if the count is correct
  // let positionCheck = true;
  // const skippedParens = [')', ']', '}'];
  // if (skippedParens.includes(sSplit[0])) {
  //   return false;
  // }
  // for (let i = 0; i < sSplit.length; i ++) {
  //   if (skippedParens.includes(sSplit[i])) {
  //     continue;
  //   } else {
  //       if (sSplit[i] === '(') {
  //           if ((testLastIndex(sSplit, i, ')')) || (testNextIndex(sSplit, i, ')'))) {
  //             if (!testLastIndex(sSplit, i, ')')) {
  //               if (['}', ']'].includes(sSplit[i + 1])) {
  //                 positionCheck = false;
  //               }                
  //             } else if (!testNextIndex(sSplit, i, ')')) {
  //               if (['}', ']'].includes(sSplit[i + 1])) {
  //                 positionCheck = false;
  //               }
  //             }
  //           } else {
  //             positionCheck = false;
  //           }
  //       } else if (sSplit[i] === '[') {
  //         if ((testLastIndex(sSplit, i, ']')) || (testNextIndex(sSplit, i, ']'))) {
  //           if (!testLastIndex(sSplit, i, ']')) {
  //             if (['}', ')'].includes(sSplit[i + 1])) {
  //               positionCheck = false;
  //             } 
  //           } else if (!testNextIndex(sSplit, i, ']')) {
  //             if (['}', ')'].includes(sSplit[i + 1])) {
  //               positionCheck = false;
  //             }               
  //           }
  //         } else {
  //           positionCheck = false;
  //         }
  //       } else if (sSplit[i] === '{') {
  //         if(testLastIndex(sSplit, i, '}') || testNextIndex(sSplit, i, '}')) {
  //           if (!testLastIndex(sSplit, i, '}')) {
  //             if([')', ']'].includes(sSplit[i + 1])) {
  //               positionCheck = false;
  //             }
  //           } else if (!testNextIndex(sSplit, i, '}')) {
  //             if([')', ']'].includes(sSplit[i + 1])) {
  //               positionCheck = false;
  //             }
  //           }
  //         } else {
  //           positionCheck = false;
  //         }
  //       }
  //   }
  // }

  // if (positionCheck) {
  //   return true;
  // } else {
  //   return false;
  // }
  var sSplit = s.split('');

  let overallPositionCheck = true;

  var pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let positionCheck = true;

  var acceptedPositions = (arr, testingIndex, matchingIndex, maxLength) => {
    if (!(pairs[arr[testingIndex]] === arr[matchingIndex])) {
      positionCheck = false;
      if (matchingIndex + 2 > maxLength) {
        if (!positionCheck) {
          overallPositionCheck = false;
        } else {
          overallPositionCheck = true;
        }
        return;
      } else {
        acceptedPositions(arr, testingIndex, matchingIndex + 2, maxLength)
      }
    } else {
      if (!positionCheck) {
        overallPositionCheck = false;
      } else {
        overallPositionCheck = true;

      }
    }
  }

  for (let i = 0; i < sSplit.length; i++) {
    if (overallPositionCheck) {
      acceptedPositions(sSplit, i, i + 1, sSplit.length);

    } else {
      break;
    }
  }

  if (overallPositionCheck) {
    return true;
  } else {
    return false;
  }
};


module.exports = isValid;