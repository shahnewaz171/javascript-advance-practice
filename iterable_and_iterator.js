// rules of iterable protocol - must have Symbol.iterator function and that function must return an iterator
// rules of iterator - must be a javascript object, it needs to implement a next() method and next() method return an object  with done: Boolean and a value
const array = ["Newaz", "Shahnewaz", "Khondokar"];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
