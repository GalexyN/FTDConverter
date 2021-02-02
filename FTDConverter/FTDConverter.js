const fs = require('fs');
const headers = 'SETTLEMENT DATE|CUSIP|SYMBOL|QUANTITY (FAILS)|DESCRIPTION|PRICE'.split('|');

fs.promises.readFile('./failedToDeliver20210201_half.txt', 'utf-8')
  .then(data => {
    let storage = [];
    let formattedData = headers;
    let gmeData = data.split('\n').filter(item => item.includes('|GME|'));
    gmeData = gmeData.map(row => row.split('|'));
    gmeData.forEach(item => {
      let combinedData = {};
      item.forEach((el, index) => {
        combinedData[formattedData[index]] = el;
      })
      storage.push(combinedData);
    })
    return storage;
  })
  .then(combinedStorage => {
    combinedStorage.forEach(el => {
      el['quantity (fails)'.toUpperCase()] = Number(el['quantity (fails)'.toUpperCase()]);
      el.PRICE = Number(el.PRICE);
    })
    return combinedStorage;
  })
  .then(storage => {
    let totalFailedToDeliver = 0;
    storage.forEach(el => totalFailedToDeliver += el['QUANTITY (FAILS)']);
    console.log(`total failed to deliver = ${totalFailedToDeliver.toLocaleString()}`);
  })

