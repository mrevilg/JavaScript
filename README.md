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