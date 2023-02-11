const range = (start, end, step) => {
  let currentValue = start;

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (currentValue <= end) {
            result = {
              value: currentValue,
              done: false,
            };
            currentValue += step;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
};

console.log([...range(100, 3000, 5)]);
