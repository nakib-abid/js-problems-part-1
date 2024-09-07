// math, abs, round, ceil, floor, random number

const min = Math.min(45, 21, 65, 99, 126, 10);
console.log(min);

const max = Math.max(45, 21, 65, 99, 126, 200);
console.log(max);

// value of PI
console.log(Math.PI);

// abs / absolute tells the gap between two numbers
console.log(Math.abs(5 - 10));

// Converts any decimal number to a whole number
console.log(Math.round(2.24));
console.log(Math.round(2.84));

// Forces any decimal number to be converted to an integer
console.log(Math.floor(2.9999));
console.log(Math.ceil(2.1111));

// give a random number
console.log(Math.random());
console.log(Math.random()*20);
const rand = Math.round(Math.random()*10);
console.log(rand);

// generate random number
const randomNumber = Math.floor(Math.random() * (20 - 10)) + 10;  
console.log(randomNumber);