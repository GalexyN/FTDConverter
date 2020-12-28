var isValid = (s) => {
  if (s.length % 2 === 1) {
    return false;
  }
  var sSplit = s.split('');

  let overallPositionCheck = true;

  var pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
    }

  let positionCheck = true;
  
  var acceptedPositions = (arr, testingIndex, matchingIndex, maxLength) => {
      if(!Object.keys(pairs).includes(arr[testingIndex])) {
          return;
      }
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
        positionCheck = true;
        if(!positionCheck) {
            overallPositionCheck = false;
        } else {
        overallPositionCheck = true;

        }
    }
  }

  for (let i = 0; i < sSplit.length; i ++) {
      debugger;
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
}

module.exports = isValid;