class Product{
    name = 'Apple';
    weight = '100gm'

    constructor(name, weight, year){
        this.name = this.name;
        this.weight = this.weight;
        this.year = year;
    }
    age() {
        let date = new Date();
        return 2020 - this.year;
      }
}

const newProduct = new Product('Pizza', '500gm', 2014);

console.log(newProduct);
console.log(newProduct.age())


let user = {
    name: "GFG",
    gfg1:() => {
        console.log("hello " + this.name); // no 'this' binding here
    },
    gfg2(){       
        console.log("Welcome to " + this.name); // 'this' binding works here
    }  
 };
user.gfg1();
user.gfg2();


function Ages(a){
    console.log(a);
    // console.log(...arguments);
};

Ages(5, 7, 8, 12, 19);


const  ages = (a) => {
    // console.log(a);
    // console.log(...arguments);
};

ages(5, 7, 8, 12, 19);

const numbers = [1, 2, 4, 5, 7, 8, 2, 2, 2];
let multiply = [];

// console.log([...new Set(numbers)]);
// console.log(numbers.flat(Infinity));

for(let element of numbers){
    console.log(element);
}

const isTrue =  [[], {}, '', ' ', null, undefined, 0, '0', true, 'true'];

const result = isTrue.filter(Boolean);
// console.log(result);

const num = [1, 2, 4, 5, 7, 8, 3, 6, 9];

// const randoms = num.sort(() => Math.round() - 0.5);
console.log(num.sort(() => Math.random() - 0.5));