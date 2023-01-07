// A constructor is a special method that creates and initializes an object instance of a class
// New keyword is used to create an instance of an object that has an constructor function.
// A class is like a template from which new objects are created. Any class you create will always have a head and a body. A head typically includes modifiers and the keyword of the class while the body includes data members and member functions.
class Employee {
  constructor() {
    this.id = 101;
    this.name = "Shahnewaz";
  }
}

const emp = new Employee();
console.log(emp);
