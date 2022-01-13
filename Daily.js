//Test for JS Daily File


console.log('Hello World');
// Prints to screen: Hello World

console.log(Math.random(5)); // Comments can go anywhere

/*

block comment

*/

console./* even here */log(123);

console.log(20.49); //Floats don't need special treatment
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0
console.log(42 + 3.5) // etc

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('Hello ' + 'World'); // Prints 'Hello World'

console.log('Teaching the world how to code'.length); // Prints string length property

console.log('hello'.lastIndexOf()); // Prints -1

console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
console.log(Math.ceil(43.8)); // Prints smallest int >= decimal
console.log(Number.isInteger(2017)); //Prints 'true'


var favoriteFood = 'pizza'
var numOfSlices = 8
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true // let can be reassigned
console.log(changeMe = false)

const entree = 'Enchiladas' // immutable variable
console.log(entree);

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// Increment and Decrement Operators

let gainedDollar = 3;
let lostDollar = 50;

console.log(gainedDollar++); //Prints 3
lostDollar--;

console.log(gainedDollar); // Print 4
console.log(lostDollar); // Prints 49

// Concatenation with String Variables
var favoriteAnimal = 'Cat';
console.log('My favorite animal: ' + favoriteAnimal);

// String Interpolation
var myName = 'Stephen'
var myCity = 'London'
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// typeof operator

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);

// if

if (true) {
console.log('This message will print!'); 
} // Prints: This message will print!

let sale = true;
sale = false;
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Swich kewyord - multi else/if algo

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// see 8ball.js 

// Compartive Operators

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

// Logical Operators

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel >8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

// Truthly and Falsy

let wordCount = 5; // 0

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = ''; // string

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Short Circuit Evaluation using || as a thruthly

let tool = '';
let writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);

tool = 'marker';
writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary if/else for True/False evaluation shorthand

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Function Declaration

greetWorld(); // Output: Hello, World!
    
function greetWorld() { 
  console.log('Hello, World!');
}

function getReminder() { 
  console.log('Water the plants.');
}

function greetInSpanish(){
  console.log('Buenas Tardes');
}

greetWorld();
getReminder();
greetInSpanish();

// Parameters and Arguments

function calculateArea(width, height/*para*/) {
  console.log(width * height); //para in a function, are variables
}

calculateArea(10, 6/*arg*/) //arguments when called, are variables

const rectWidth = 10;
const rectHeight = 6;

calculateArea(rectWidth, rectHeight);

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole')

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
} // Default parameters

makeShoppingList();

// Function Returns

function monitorCount(rows, columns){
  return (rows * columns);
}

const numOfMonitors = (monitorCount(5, 4));

console.log(numOfMonitors);