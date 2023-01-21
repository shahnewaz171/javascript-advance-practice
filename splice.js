let age = [22, 12, 34, 30, 40];

age.splice(3, 3, 100, 200);
// age.splice(-1, 2, 80, 90, 100); // first value is start deleting and second value is how many values will be deleted and others values will inserted.

// console.log(age);

// let y = (2, 3, 5);

// console.log(y);

const myFunction = (...arguments) => {
  return [].slice.call(arguments);
};

console.log(myFunction(2, 1, 4, 5));
