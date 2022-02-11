# JavaScript
JS Learning Repo

This is a test update from readme to VSCode.

Additional Content Text

JS Primative Data Types

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.

String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.

Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.

Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

Object: Collections of related data.

Arithmetic Operators

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %

String Concatenation: Operators can also concatenate strings

Properties: All strings have 'properties' like .length

Methods: A '.[something]' such as: 
    'example string'.methodName()
    console.log('hello'.toUpperCase()); // Prints 'HELLO'
    console.log('Hey'.startsWith('H')); // Prints true (Boolean)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Built-In Objects: Standard objects: console, Math etc, also contain Methods:
    console.log(Math.random()); // Prints a random number between 0 and 1
    console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
    console.log(Math.ceil(43.8)); // Prints smallest int >= decimal
    console.log(Number.isInteger(2017)); //Prints 'true'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Variable Declaration / Keywords

var favoriteFood = 'pizza'
var numOfSlices = 8
console.log(favoriteFood);
console.log(numOfSlices);

'let' signals a variable can be reassigned

let/var can be assigned without a value

'const' is a variable that is immutable

Mathmatical Assignment Operators

    let x = 20;
    x -= 5; // Can be written as x = x - 5
    console.log(x); // Output: 15
    
    let y = 50;
    y *= 2; // Can be written as y = y * 2
    console.log(y); // Output: 100
    
    let z = 8;
    z /= 2; // Can be written as z = z / 2
    console.log(z); // Output: 4

Increment and Decrement Operator (++ or --) Plus or Minus 1
    var favoriteAnimal = 'Cat';
    console.log('My favorite animal: ' + favoriteAnimal);

String Concatenation with Variables.
In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 

    const myPet = 'armadillo';
    console.log(`I own a pet ${myPet}.`);
    // Output: I own a pet armadillo.

typeof operator

The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

    const unknown1 = 'foo';
    console.log(typeof unknown1); // Output: string
    
    const unknown2 = 10;
    console.log(typeof unknown2); // Output: number
    
    const unknown3 = true; 
    console.log(typeof unknown3); // Output: boolean

Conditional Statements

if requires curly brackt code blocks

    if (true) {
    console.log('This message will print!'); 
    } // Prints: This message will print!

    let sale = true;

    sale = false;

    if(sale) {
    console.log('Time to buy!');
    } else {
    console.log('Time to wait for a sale.'); // This will print
    }

if / else if / else

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

Switch statement (long else if scenario)

switch () is if
case and break are else if
default and break are else

Comparison Operators
Same as standard aside from: 
Is equal to: ===
Is not equal to: !==

Logical Operators
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)

Truthy and Falsy: non-boolean defaults
'present or non-present'

Default falsy values:
0
Empty strings '' or ""
null
undefined
NaN (not a number)

    let numberOfApples = 0;
    
    if (numberOfApples){
    console.log('Let us eat apples!');
    } else {
    console.log('No apples left!');
    }
    
    // Prints 'No apples left!'

Truthly values: ||

Shor Circuit Evaluation:

    let tool = '';
    let writingUtensil = tool || 'pen'
    console.log(`The ${writingUtensil} is mightier than the sword.`);

    tool = 'marker';
    writingUtensil = tool || 'pen'
    console.log(`The ${writingUtensil} is mightier than the sword.`);

Ternary Operator - Shorthand if/else for True/False

    let isNightTime = true;
    
    if (isNightTime) {
    console.log('Turn on the lights!');
    } else {
    console.log('Turn off the lights!');
    }

    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.

    let isLocked = false;
    isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

    let isCorrect = true;
    isCorrect ? console.log('Correct!') : console.log('Incorrect!');

    let favoritePhrase = 'Love That!';
    favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

Function Declarations

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration.

A function declaration consists of:
- The function keyword. (function declared)
- The name of the function, or its identifier, followed by parentheses. (name of the function)
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly   brackets, { }.

    greetWorld(); // Output: Hello, World!
    
    function greetWorld() {
    console.log('Hello, World!');
    }

    function getReminder() {
    console.log('Water the plants.');
    }

To call a function, simply call the identifier: greetWorld();

Parameters are placeholders for arguments

    function calculateArea(width, height/*para*/) {
    console.log(width * height); //para in a function, are variables
    }

    calculateArea(10, 6/*arg*/) //arguments when called, are variables

    const rectWidth = 10;
    const rectHeight = 6;

    calculateArea(rectWidth, rectHeight);

Default Parameters

    function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
    } // Default parameters

    makeShoppingList();

Function Returns

Where to capture return data from a function to avoid 'undefined' results. That return needs to be assigned. 

    function monitorCount(rows, columns){
    return (rows * columns);
    }

    const numOfMonitors = (monitorCount(5, 4));

    console.log(numOfMonitors);

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

    function costOfMonitors (rows, columns){
    return monitorCount(rows, columns) * 200;
    }

    const totalCost = costOfMonitors(5, 4);

    console.log(totalCost);

We can use Function Expessions (think function within a var).

    const plantNeedsWater = function (day){
    if (day === 'Wednesday'){
        return true;
    } else {
        return false;
    }
    }

    console.log(plantNeedsWater('Tuesday'));

Arrow Functions

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } 

    const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
    };

Concise Body Arrow Functions

Refactoring syntax of fat arrow functions.
// Zero Parameters
const functionName = () => {};

// One Parameter
const functionName = paramOne => {};

// Two or more parameters
const functionName = (paramOne, paramTwo) => {};

A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

    const squareNum = (num) => {
    return num * num;
    };

Becomes:

    const squareNum = num => num * num;

The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.

Block and Scope

A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

    let satellite = 'The Moon';
    let galaxy = 'The Milky Way';
    let stars = 'North Star';

    function callMyNightSky () {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
    }

    console.log(callMyNightSky());

Block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

    function logVisibleLightWaves () {
    const  lightWaves = 'Moonlight';
    console.log(lightWaves);
    }

    logVisibleLightWaves();
    console.log(lightWaves); // this will throw an error

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Below, the variable 'stars' gets written over in in the callMyNightSky function.

    const satellite = 'The Moon';
    const galaxy = 'The Milky Way';
    let stars = 'North Star';

    const callMyNightSky = () => {
    stars = 'Sirius'; // should include let stars to solve
        return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
    };

    console.log(callMyNightSky());
    console.log(stars);

Tightly scoping your variables will greatly improve your code in several ways:

It will make your code more legible since the blocks will organize your code into discrete sections.
It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
It’s easier to maintain your code, since your code will be modular.
It will save memory in your code because it will cease to exist after the block finishes running.

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

Array and Element Access- [0,1,2,3,etc...]

Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position. One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Arrays can store any data type. Indces start at ZERO

    three = 'third hobby'

    const hobbies = ['1', 2, three];
    console.log(hobbies);


    const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

    var listItem = famousSayings[0]; // Assigns zero element
    console.log(listItem);

    console.log(famousSayings[2]); // logs to screen element three
    console.log(famousSayings[3]); // error/undefined

Element Updates

    let groceryList = ['bread', 'tomatoes', 'milk'];

    groceryList[1] = 'avocados'; // 2nd Element aka 1st Indeces updated
    console.log(groceryList);

Arrays with let and const

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

    let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

    const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

    condiments[0] = 'Mayo';
    console.log(condiments);

    condiments = ['Mayo'];

    utensils[3] = 'Spoon';
    console.log(utensils);

One of an array’s built-in properties is length and it returns the number of items in the array.

    const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

    console.log(objectives.length);

.push() allows us to add items to the end of an array.

    const chores = ['wash dishes', 'do laundry', 'take out trash'];

    chores.push('litter box', 'pet kitty');

    console.log(chores);

    chores.pop();

    console.log(chores); // Logs to screen array with last elem removed

Many more arry handling methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Changing an Array within a Function

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

Arrays within Arrays

    const numberClusters = [[1, 2], [3, 4], [5, 6]];

    const target = numberClusters[2][1];

Loops

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
an iteration statement is used to update the iterator variable on each loop.

    for (let counter = 5; counter <= 10; counter++){
    console.log(counter);
    }

The initialization is let counter = 5, so the loop will start counting at 5.
The stopping condition is counter <= 10, meaning the loop will run as long as the iterator variable, counter, is greater than or equal to 10.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 5, for the second iteration counter will equal 6, and so on.
The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 10 — the point that the condition becomes false is sometimes called the stop condition.

    for (let counter = 3; counter >= 0; counter--){
    console.log(counter); // loop in reverse
    }

Using .length

    const vacationSpots = ['Bali', 'Paris', 'Tulum'];

    for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i])
    }

Nested Loops

One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

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

While Loop

Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.

    const cards = ['diamond', 'spade', 'heart', 'club'];

    let currentCard = '';
    while (currentCard != 'spade') {
        currentCard = cards[Math.floor(Math.random() * 4)];
        console.log(currentCard);
    };

Do While Loop

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. 

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

    const firstMessage = 'I will print!';
    const secondMessage = 'I will not print!'; 
    
    // A do while with a stopping condition that evaluates to false
    do {
    console.log(firstMessage)
    } while (true === false);
    
    // A while loop with a stopping condition that evaluates to false
    while (true === false){
    console.log(secondMessage)
    };

