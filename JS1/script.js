// let personOne = [
//     "Zwe Htet",
//     "zwehtetag2019@gmail.com",
//     "20",
//     "male"
// ]

// personOne.forEach((detail)=>{
//     console.log(detail);
// })

// let filteredPerson = personOne.filter((detail)=>{
//     return detail == "male";
// })
// console.log(filteredPerson);

// let mappedPerson = personOne.map((detail)=>{
//     return 'Hello' + ' ' + detail;
// })
// console.log(mappedPerson);

// let result;
// if(10===10){
//     result = 'same';
// }else{
//     result = 'not same';
// }
// console.log(result);

// let result = 10 === 11 ? 'same' : 'not same';
// console.log(result);

// let fruits = ['mango','orange','banana','grape','apple','jack fruit'];

// let loopingFruits;
// for(let i = 0 ; i < fruits.length ; i++){
//     loopingFruits = fruits[i];
// }

// // console.log(typeof loopingFruits)
// if(loopingFruits = 'mango'){
//     console.log('This is mango');
// }else if(loopingFruits = 'orange'){
//     console.log('This is orange');
// }else {
//     console.log("This is all fruits")
// }

// let fruit = prompt('Enter fruit name');
// switch (fruit) {
//     case 'mango':
//         console.log('This is' + " " + fruit);
//         break;
//     case 'banana':
//         console.log('This is' + " " + fruit);
//         break;
//     default:
//         console.log('This is all fruit');
//         break;
// }

let documentName = document.getElementById('first');

var number = new Array(1,2,3,'Maung Maung','21 yrs old');

let getNumber = number[3];

documentName.innerHTML = getNumber;

var hobbies = [
    'football',
    'volleyball',
    'baseball',
    'chinlone'
] 

let hobby;

// for (var i = 0 ; i < hobbies.length ; i++){
//     hobby = hobbies[i];
// }

hobbies.forEach(x => {
    hobby = x;
});

documentName.innerHTML = hobby;

var assocaiatedArray  = [];

assocaiatedArray['name'] = "Zwe Htet";
assocaiatedArray['age'] = 20;
assocaiatedArray['address'] = "Yangon";
assocaiatedArray['job'] = "Web Developer";

console.log(assocaiatedArray);
console.log(assocaiatedArray['name']);

var assocaiatedArrayOne = {
    'name'  : "Kyaw Kyaw",
    'age'   : "20",
    greeting(){
        console.log('Good Morning');
        console.log(`Hello ${this.name}`);
    }
}

console.log(assocaiatedArrayOne['name']);
console.log(assocaiatedArrayOne.name);
console.log(assocaiatedArrayOne.greeting());


var car = new Object();
car.name  = "BMW";
car.price = "$282920";

console.log(car);
console.log(car.name);

function Book(title,price) {
    this.title  = title;
    this.price  = price;
}

let result = new Book('Loving days','$1000');
console.log(result);
console.log(result.title);

function Customer(product,type) {
    this.first = product;
    this.second = type;
}

let orderBox = new Customer('pizza','3');
console.log(orderBox);

let num =  1.638393;
console.log(num.toFixed(3));

let greeting = "Welcome to Myanmar";
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

let first = 'Helllo';
let second = new String('Helllo');
console.log(second); // object
console.log(first);

// Literal 

let book = {
    title : "Myanmar",
    year  : "2021",
    getTitle : function () {
        return `This title is ${this.title}`;
    }
}

console.log(book);
console.log(book.getTitle());
console.log(Object.keys(book));
console.log(Object.values(book));

// Constructor

function Magazines(title,author,year) {
    this.title  = title;
    this.author  = author;
    this.year  = year;
    this.getTitle = function () {
        return `This title is ${this.title}`;
    }
}

let resultone = new Magazines('English','Maung Maung','2022');
console.log(resultone)
console.log(resultone.getTitle());

function Movie(title,producer,year) {
    this.title = title;
    this.producer = producer;
    this.year = year;
    // this.getTitle = function () {
    //     return `This title is ${this.title}`;
    // }
}

// Prototype 
Movie.prototype.getTitle = function () {
    return `This title is ${this.title} written by ${this.producer} at ${this.year} years`;
}

Movie.prototype.getYear = function (){
    let year = new Date().getFullYear() - this.year ;
    return `This title is ${this.title} written by ${this.producer} at ${this.year} years And ${year}`;
}

let resultTwo = new Movie('Now you see me','Zaw Zaw','2000');
console.log(resultTwo);

function News(title,producer,year) {
    Movie(this,title,producer,year,month);
    this.month = month;
}

News.prototype = Object.create(Movie.prototype);
let resultThree = new Movie('See You Again','Kyaw Kyaw','2015','June');
console.log(resultThree.getYear());


let personThree = {
    name :  'Yu Yu',
    age  : 20,
    getTitle: function (){
        return `This name is ${this.name}`;
    },
}
console.log(personThree);
personThree.name = 'Pu Pu';
console.log(personThree);
console.log(personThree.name);

// let personTwo = Object.create(personThree);
// personTwo.name = 'Su Su';
// personTwo.age = 30;
// console.log(personTwo.name);

let personTwo = Object.create(
    personThree, {
        title : {value : 'Su Su'},
        age : {value : 30}
    }
)
console.log(personTwo);
console.log(personTwo.name);

let personFour = {
    name : 'min min',
    age : 10
}

let personFive = Object.create(personFour,{
    name : {value : 'zu zu'},
    age : {value : 20},
});
console.log(personFive);
console.log(personFive.age);

class Collector{
    constructor(title,author,year){
        this.title = title,
        this.author = author,
        this.year = year
    }
    setTitle(){
        this.title = 'English';
    }
    static show(){
        console.log('Morning');
    }
    greeting(){
        console.log('Evening');
    }
}

let resultFour = new Collector('Good','daw daw',2010);
console.log(resultFour);
console.log(resultFour.year);
resultFour.setTitle();
console.log(resultFour);
resultFour.greeting();
Collector.show();

class Researcher  extends Collector{
      constructor(title,author,year,month){
         super(title,author,year);
         this.month = month ;
      }
}

let maga = new Researcher('OOP','Zwe Htet',2022,'July');
console.log(maga);