// shallow copy - when we are changing the value of clone object then it will reflect into original as well, because both are pointing to same reference object.
const person = {
  map: "Shahnewaz",
  age: "24",
  date: new Date(),
  set: new Set([1, 2, 3]),
  map: {
    name: new Map([["apples", 500]]),
  },
  designation: "Developer",
};

const newPerson = { ...person }; //shallow copy
newPerson.object.map?.set("bananas", 300);
newPerson.set?.add(10);

const assign = Object.assign({}, person); //shallow copy because it's not worked nested object as a deep copy
assign.map.name?.set("dd", 222);
console.log(person?.map);
console.log(assign?.map);
console.log(person.map === newPerson.map);
console.log(person.date === newPerson.date);

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; //deep copy
arr2[0] = 5;
console.log("arr1", arr1);
console.log("arr2", arr2);
