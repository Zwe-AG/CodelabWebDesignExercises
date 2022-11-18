// let num1, num2;
// num1 = parseInt(prompt("Enter first number"));
// num2 = parseInt(prompt("Enter second number"));
// for (num1; num1 <= num2; num1++) {
//   console.log(num1);
// }

// let num1, num2;
// num1 = parseInt(prompt("Enter first number"));
// while (num1 > 5) {
//   num1 = parseInt(prompt("Enter first number"));
// }
// num2 = parseInt(prompt("Enter second number"));
// while (num2 <= 5) {
//   num2 = parseInt(prompt("Enter second number"));
// }
// for (num1; num1 <= num2; num1++) {
//   console.log(num1);
// }

// No argument function
function getName() {
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
}

// getName ();

// One argument function
function getNumber(num1) {
  console.log(num1);
}
// getNumber (100);

// Multi argument function
function getNumbers(num1, num2) {
  console.log(num1);
  console.log(num1 + num2);
}
// getNumbers (100,200);

// var num10 = 1000; //Global Varibale
// function testing(){
//     var num1 = 10; // Local Variable
//     console.log(num1);
//     console.log(num10);
// }
// console.log(num1);//Error

// Type function (Return)
function typeFunction(num1, num2) {
  return num1 + num2;
}
var result = typeFunction(10, 20);
// console.log(result);

// Void function (Return)
function voidFunction(num1, num2) {
  console.log(num1 + num2);
}
// voidFunction(100,200);

var greeting = function () {
  console.log("Hello");
};

// greeting();

var userName = function (name) {
  console.log(name);
};

// userName("Mg Mg");

//Arrow function
var userEmail = (email) => {
  console.log(email);
};
// userEmail("zwehtetag2019@gmail.com")

// Array

// Simple Array
var numbers = new Array(1, 4, "mgmg", "10.0", true);
// console.log(numbers);
// console.log(numbers.length);

let fruits = ["mgmg", "aungaung", "zawzaw", "kaungkaung", "paingpaing"];
// console.log(fruits);
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Associated Array
let associatetArray = [];
associatetArray["firstStudent"] = "susu";
associatetArray["secondStudent"] = "myamya";
associatetArray["thirdStudent"] = "yuyu";
// console.log(associatetArray["thirdStudent"]);

let associatArray = {
  name: "Zwe Htet",
  age: 19,
  greeting() {
    // console.log("Hi");
    console.log(`Hello ${this.name}`);
  },
};

let popularPlaces = {};
popularPlaces["firstPlace"] = "Yangon";
// 'Yangon'
popularPlaces["secondPlace"] = "Mandalay";
// 'Mandalay'
popularPlaces["thirdPlace"] = "Bago";
// 'Bago'
//popularPlaces
// {firstPlace: 'Yangon', secondPlace: 'Mandalay', thirdPlace: 'Bago'}
// popularPlaces["firstPlace"];
// 'Yangon'
// popularPlaces.firstPlace
// 'Yangon'
// popularPlaces.thirdPlace
// 'Bago'
// popularPlaces.thirdPlace = "Mawlamyine";
// 'Mawlamyine'
// popularPlaces
// {firstPlace: 'Yangon', secondPlace: 'Mandalay', thirdPlace: 'Mawlamyine'}
// popularPlaces.thirdPlace
// 'Mawlamyine'

// console.log(associatArray["name"]);
// console.log(associatArray.name);
// console.log(associatArray.greeting());

// let num1 = [1,2,3,4];
// num1.push(3,4,5);
// console.log(num1);
// var num2 = [...num1,4];
// console.log(num2);

var num1 = [10, 20, 30, 40, 50];
let result = num1.map(function (n) {
  return n * 10;
});
console.log(result);

var arr = [10, 20, 30, 40];

// var a = arr[0];
// var b = arr[1];

[a, b, c, d] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function show(a, b) {
  console.log(a);
  console.log(b);
}
var arr1 = [20, 30];
// show(arr1[0],arr[1]);
// show(arr1);

function show([a, b]) {
  console.log(a);
  console.log(b);
}
// show(arr1)

// Object

var car = new Object();
car.name = "BMW";
car.price = "$10000";
// console.log(car);

// Example
// let codeDesignWebsite = new Object();
// undefined
// codeDesignWebsite.nameOne = "wix";
// 'wix'
// codeDesignWebsite.nameTwo = "figma";
// 'figma'
// codeDesignWebsite.nameThree = "adobe Xd";
// 'adobe Xd'
// codeDesignWebsite
// {nameOne: 'wix', nameTwo: 'figma', nameThree: 'adobe Xd'}
// Object.keys(codeDesignWebsite);
// (3) ['nameOne', 'nameTwo', 'nameThree']
// Object.values(codeDesignWebsite)
// (3) ['wix', 'figma', 'adobe Xd']
// codeDesignWebsite.hasOwnProperty("nameOne");
// true
// codeDesignWebsite.hasOwnProperty("nameFour");
// false

function book(a, b) {
  this.title = a;
  this.price = b;
}

var result = new book("Myanmar", "100ks");
// console.log(result);
// console.log(result.price);

// new book = new Object();
// book.title = title;
// book.price = price;

let num = 1.363729;
// console.log(num.toFixed(3)); //1.363

var words = "Hello World";
// console.log(words[2]);
// console.log(words.toUpperCase()); //HELLO WORLD
// console.log(words.toLowerCase()); //hello world
// console.log(words.substring(0, 3)); //hel (index , count - 1)
// console.log(words.trim()); //if there is space ,become no space
// console.log(words.split(""));

var str = "Hello"; //string
var ob = new String("Hello"); //object

//literal

let books = {
  title: "Myanmar",
  year: 2021,
  getTitle: function () {
    return `the title is  ${this.title}`;
  },
};

// Change title name in literal function
books.title = "Maths";

// console.log(books);
// console.log(books.getTitle());
// console.log(Object.keys(books)); //['title', 'year', 'getTitle']
// console.log(Object.values(books)); //['Myanmar', 2021, ƒ]
// console.log(Object.values(books.getTitle()));// ['t', 'h', 'e', ' ', 't', 'i', 't', 'l', 'e', ' ', 'i', 's', ' ', ' ', 'M', 'y', 'a', 'n', 'm', 'a', 'r']

// Constructor
// function magazine(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getTitle = function () {
//     return `the title is  ${this.title}`;
//   };
// }

// var result1 = new magazine("English", "Mr Tin", 2020);
// console.log(result1);
// console.log(result1.title);//English
// console.log(result1.author);//Mr Tin
// console.log(result1.getTitle());//this title is English

//Example
// function popularBook (a,b,c){
//   this.title = a;
//   this.author = b;
//   this.price = c;
//   this.getTitle=()=>{
//       console.log(`${a} is very popular written by ${this.author}.We can buy with ${this.price}`)
//   }
// }
// undefined
// let result3 = new popularBook("Good inspiration","Morning Star","500ks");
// undefined
// result3
// popularBook {title: 'Good inspiration', author: 'Morning Star', price: '500ks', getTitle: ƒ}
// result3["author"]
// 'Morning Star'
// result3["getTitle"]()
// Good inspiration is very popular written by Morning Star.We can buy with 500ks

// Prototype

// function shirtShop(a, b, c) {
//   this.typeDesign = a;
//   this.price = b;
//   this.sizes = c;
// }
// shirtShop.prototype.getTypeDesign = function () {
//   return `${this.typeDesign} design is very good for you`;
// };
// shirtShop.prototype.getYears = function () {
//   let currentYear = Number("2011");
//   let year = new Date().getFullYear() - currentYear;
//   return `${this.typeDesign} design is very good at ${year} for you`;
// };
// let result4 = new shirtShop("Belt", "1200000ks", "2XL");
// console.log(result4.getYears());

function magazine(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

magazine.prototype.getTitle = function () {
  return `the book title is ${this.title} written by ${this.author} produced by ${this.year}`;
};

magazine.prototype.getYears = function () {
  const year = new Date().getFullYear() - this.year;
  return `the book title is ${this.title} written by ${this.author}& book's life ${year}years`;
};

var result1 = new magazine("OOP", "Aung Aung", 2020);
console.log(result1.getYears());

function News(title, author, year, month) {
  magazine.call(this, title, author, year); //inheritence
  this.month = month;
  this.getTitle = function () {
    return `the book title is ${this.title} written by ${this.author} produced by ${this.year}`;
  };
}

// If we use magazine prototype in News function
News.prototype = Object.create(magazine.prototype); //inheritence

var result2 = new News("Frontend", "U Aung", 2010, 3);

// Sport Constructor

// function Sports(name,type,month){
//     this.name = name;
//     this.type = type;
//     this.month = month;
// }

// Sports.prototype.getTitle = function(){
//    return `This is ${this.title}`;
// }

// Sports.prototype.getType = function(){
//   return `This is ${this.type}`;
// }

// let result10 = new Sports("Ronaldo","Football","2000");

// function Soccers(name,type,month,game){
//   Sports.call(this,name,type,month);
//   this.game = game;
// }

// Soccers.prototype = Object.create(Sports.prototype);

// let result20 = new Soccers("Messi","Football","2000","DLS");

// Developer Details Constructor 

// function Developer(role,age,programming){
//   this.role = role;
//   this.age = age;
//   this.programming = programming;
// }

// Developer.prototype.getRole = function(){
//   return `This role is ${this.role}`;
// }

// Developer.prototype.getAge = function(){
//   return `This age is ${this.age}`;
// }

// let result30 = new Developer("Web Developer",20,"PHP");

// function Developertool(role,age,programming,tool){
//   Developer.call(this,role,age,programmin);
//   this.tool = tool;
// }

// Developertool.prototype = Object.create(Developer.prototype);

// console.log(result2);

// If there is not "getTitle" in fuction
// console.log(result2.getTitle()); //Error

// If there is  "getTitle" in fuction
// console.log(result2.getTitle()); //No Error

// If we use magazine prototype in News function
// console.log(result2.getYears());

// Object & Class Extend

const toys = {
  title: "Robot",
  price: "1000ks",
  getName: function () {
    return `This toy is ${this.name}`;
  },
};
// console.log(toys);//{name: 'Robot', price: '1000ks', getName: ƒ}

toys.title = "Car";
toys.price = "20000ks";
// console.log(toys);//{name: 'Car', price: '20000ks', getName: ƒ}

var toy1 = Object.create(toys);
// console.log(toy1);
// console.log(toys);

toy1.title = "Train";
toy1.price = "30000ks";
// console.log(toy1); //{title: 'Train', price: '30000ks'}
// console.log(toys);//{title: 'Robot', price: '1000ks', getName: ƒ}

// or

var toy1 = Object.create(toys, {
  title: { value: "Train" },
  price: { value: 30000 },
});
// console.log(toy1); //{title: 'Train', price: 30000}
// console.log(toys);//{title: 'Robot', price: '1000ks', getName: ƒ}

class Phone {
  constructor(title, price, year) {
    this.title = title;
    this.price = price;
    this.year = year;
  }
  setTitle() {
    this.title = "Samsung";
  }
  static show() {
    console.log("Hello Moring!");
  }
  greeting() {
    console.log("Good Night!");
    // this.title = "MAC Book";
  }
}

// var phone1 = new Phone("Iphone", "$2000000", 2000);
// console.log(phone1); //{title: 'Iphone', phone2: '$2000000', year: 2000}
// phone1.setTitle();
// console.log(phone1); // {title: 'Samsung', price: '$2000000', year: 2000}
// phone1.greeting(); // Good Night
// console.log(phone1); //{title: 'MAC Book', price: '$2000000', year: 2000}

// phone1.show(); // Error
// Phone.show(); // Hello Moring!

class Laptop extends Phone {
  constructor(title, price, year, modal) {
    super(title, price, year);
    this.modal = modal;
  }
}

let electronic = new Laptop("ASUS", "$293839", 2021, "Modal-3");
// console.log(electronic); // {title: 'ASUS', price: '$293839', year: 2021, modal: 'Modal-3'}
// console.log(electronic.greeting()); //Good Night!
