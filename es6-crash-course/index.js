const prom = new Promise((resolve, reject) => {
  // async
  setTimeout(() => {
    resolve(100);
  }, 2000)
})

prom.then(data => {
  console.log(data)
})