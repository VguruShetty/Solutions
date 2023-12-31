function generateNumber(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num);
      }, 3 * 1000);
    });
  }
  
  generateNumber(10)
    .then((result) => {
      console.log(result);
      return generateNumber(result * 2);
    })
    .then((result) => {
      console.log(result);
      return generateNumber(result * 3);
    })
    .then((result) => console.log(result));
  