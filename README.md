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