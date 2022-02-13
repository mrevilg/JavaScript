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

// Helper Functions - Functions within another function (Python Decorators)

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions (function within a variable)

const plantNeedsWater = function (day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}

console.log(plantNeedsWater('Tuesday'));

// Arrow Functions

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise Body Arrow Functions

// Zero Parameters
const functionName = () => {};

// One Parameter
const functionName = paramOne => {};

// Two or more parameters
const functionName = (paramOne, paramTwo) => {};

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Block and Scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// Block Scope (block only scope)

function logVisibleLightWaves () {
  const  lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves); // this will throw an error

// Scope Pollution (too many global)

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'; // should include let stars to solve
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Tight Scope

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  };
  console.log(lightWaves);
};

logVisibleLightWaves();

// Array and Element Access

three = 'third hobby'

const hobbies = ['1', 2, three];
console.log(hobbies);


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0]; // Assigns zero element
console.log(listItem);

console.log(famousSayings[2]); // logs to screen element three
console.log(famousSayings[3]); // error/undefined

// Element Updates
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'; // 2nd Element aka 1st Indeces updated
console.log(groceryList);

// Arrays with let and Const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';
console.log(utensils);

// Array Properties .length

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// .push() allows us to add items to the end of an array.
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('litter box', 'pet kitty');

console.log(chores); // log to screen full array

// .pop(), removes the last item of an array.
chores.pop();

// other

console.log(chores); // Logs to screen array with last elem removed

var groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// Changing Array within a Function

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
}

console.log(removeElement(concept));

removeElement(concept);

console.log(concept);

// Array Inception

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

// for loop

for (let counter = 5; counter <= 10; counter++){
  console.log(counter);
}

for (let counter = 3; counter >= 0; counter--){
  console.log(counter); // loop in reverse
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

    for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i])
    } // using .length

// Nested Loops

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// While Loops

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = '';
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

// Do..While

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

// Break (keyword)

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
}