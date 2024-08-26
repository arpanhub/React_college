//destructuring assignment
//Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.
const proglang = [
    'HTML',
    'CSS',
    'JS',
    'PYTHON',
    'C',
    'JAVA'
]
var lang_1 = proglang[0];
var lang_2 = proglang[1];
var lang_3 = proglang[2];
var lang_4 = proglang[3];
console.log("language->"+lang_1);
const [first,second,third,,fifth] = proglang;
console.log(first);
console.log(second);
console.log(third);
console.log(fifth);

//sread operator in JS
//crate array of vegetables and fruits of 10 elements each
const vegetables = ['tomato','potato','onion','cabbage','brinjal','carrot','beetroot','capsicum','ladyfinger','spinach'];
const fruits = ['apple','banana','mango','orange','grapes','papaya','guava','watermelon','pineapple','pomegranate'];
const fruitscopy = [...fruits];
console.log(fruitscopy);
const allfoods = [...vegetables,...fruits];
console.log(allfoods);
const newfoodArray = ['cucumber',...vegetables,'pineapple'];
console.log(newfoodArray);

const person = {name:"aasd",age:20};
const address = {city:"bangalore",state:"karnataka"};
console.log(person.name);
console.log(person.age);
console.log(address.city);
console.log(address.state);
const personaddress = {...person,...address};
console.log(personaddress);
