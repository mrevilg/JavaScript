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
