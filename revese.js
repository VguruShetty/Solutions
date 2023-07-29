const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((reversed, current) => {
  // Prepend the current element to the reversed array
  return [current, ...reversed];
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
