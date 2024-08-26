//filter function
//filter function is used to filter out the elements from an array that doesn't satisfy the condition
//filter function returns a new array with the elements that satisfy the condition
//filter function doesn't change the original array
//filter function takes a callback function as an argument
//callback function takes three arguments
//element, index, array
//callback function should return a boolean value

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter((element) => element % 2 === 0);
// console.log(even);

//map()
//map() function is used to transform the elements of an array
//map() function returns a new array with the transformed elements
//map() function doesn't change the original array
//map() function takes a callback function as an argument
//callback function takes three arguments
//element, index, array
//callback function should return a transformed element
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = numbers2.map((element) => element * element);
// console.log(square);

//find()
//find() function is used to find the first element that satisfies the condition
//find() function returns the first element that satisfies the condition
//find() function doesn't change the original array
//find() function takes a callback function as an argument
//callback function takes three arguments
//element, index, array
//callback function should return a boolean value
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstEven = numbers3.find((element) => element % 2 === 0);
// console.log(firstEven);


//concat()
//concat() function is used to concatenate two or more arrays
//concat() function returns a new array
//concat() function doesn't change the original array
// let numbers4 = [1, 2, 3, 4, 5];
// let numbers5 = [6, 7, 8, 9, 10];
// let numbers6 = numbers4.concat(numbers5);
// console.log(numbers6);


let numbers7 = [1, 2, 3, 4, 5];
let numbers8 = [6, 7, 8, 9, 10];
let numbers9 = numbers7.concat(numbers8);
// console.log(numbers9);

let numbers10 = Array.from(numbers9);
// console.log(numbers10);

//cpoyWithin() function is used to copy the elements of an array to another position in the same array 
//copyWithin() function returns the modified array
//copyWithin() function changes the original array
//copyWithin() function takes three arguments
//target, start, end
//target is the position where the elements will be copied
let numbers11 = numbers9.copyWithin(2, 0, 3);
// console.log(numbers11);

let numbers12 = Array.of(1, 2, 4, 5);
// console.log(numbers12);

let numbers13 = numbers9.entries();
console.log(numbers13);

// let numbers14 = numbers9.every((element) => element > 0);
// console.log(numbers14);

// let numbers15 = numbers9.fill(0);
// console.log(numbers15);

// let numbers16 = numbers9.findIndex((element) => element > 0);
// console.log(numbers16);

// let numbers17 = numbers9.flat();
// console.log(numbers17);

// let numbers18 = numbers9.flatMap((element) => element * 2);
// console.log(numbers18);

// numbers9.forEach((element) => console.log(element));
// let numbers19 = numbers9.includes(0);
// console.log(numbers19);

// let numbers20 = numbers9.indexOf(0);
// console.log(numbers20);

// let numbers21 = numbers9.join();
// let numbers22 = numbers9.keys();
// console.log(numbers22);

// let numbers23 = numbers9.lastIndexOf(0);
// console.log(numbers23);

// let numbers24 = numbers9.reduce((acc, element) => acc + element, 0);
// console.log(numbers24);

// let numbers25 = numbers9.reduceRight((acc, element) => acc + element, 0);
// console.log(numbers25);

// let numbers26 = numbers9.reverse();
// console.log(numbers26);

// let numbers27 = numbers9.shift();
// console.log(numbers27);

// let numbers28 = numbers9.slice(0, 3);
// console.log(numbers28);

// let numbers29 = numbers9.some((element) => element > 0);
// console.log(numbers29);

// let numbers30 = numbers9.sort();
// console.log(numbers30);

// let numbers31 = numbers9.splice(0, 3);
// console.log(numbers31);

// let numbers32 = numbers9.toLocaleString();
// console.log(numbers32);

// let numbers33 = numbers9.toString();
// console.log(numbers33);

// let numbers34 = numbers9.unshift(0);
// console.log(numbers34);

// let numbers35 = numbers9.values();
// console.log(numbers35);

// let numbers36 = numbers9.valueOf();
// console.log(numbers36);

// let numbers37 = numbers9.push(0);
// console.log(numbers37);

// let numbers38 = numbers9.pop();
// console.log(numbers38);

// let numbers39 = numbers9.shift();
// console.log(numbers39);


