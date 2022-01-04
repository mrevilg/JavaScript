// Magic 8 Ball Project


// define a variable called userName that is set to an empty string.
let userName = '';

// create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion. The value of the variable should be a string that is the question
const userQuestion = 'What is your question for the great magic ball?!';

// Write a console.log() for the userQuestion, stating what was asked. 
console.log(`${userName} asked: ${userQuestion}`);

// We need to generate a random number between 0 and 7.
var randomNumber = Math.floor(Math.random() * 8);

// Create one more variable named eightBall, and set it equal to an empty string.

let eightBall ='';

// create a control flow.

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

// print the Magic Eight Ball’s answer

console.log(`The Magic 8 Ball answered: ${eightBall}`);

/*
Comment Block
*/