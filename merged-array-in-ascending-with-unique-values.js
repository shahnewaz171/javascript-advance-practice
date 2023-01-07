const array1 = [1, 2, 3, 4, 4, 6];
const array2 = [3, 5, 6, 7, 6];

const mergedWithAscendingSorted = array1?.concat(array2)?.sort((a, b) => a - b);

const uniqueValues = [...new Set(mergedWithAscendingSorted)];
console.log(uniqueValues);

const mergedWithDescendingSorted = [...array1, ...array2]?.sort(
  (a, b) => b - a
);

const uniqueValues2 = [...new Set(mergedWithDescendingSorted)];
console.log(uniqueValues2);
