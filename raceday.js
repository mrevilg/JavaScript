// Race Day Registration Project

// Randomized number assignment (inclusive)
let raceNumber = Math.floor(Math.random() * 1000);

// Variable assigned with bool value
let registeredEarly = false;

// Variable to take runner age
var age = 0;

// control flow for of-age AND registered early

if (registeredEarly && age > 18) {
    raceNumber += 1000;
}

// control flow to determin race time

if (registeredEarly && age > 18) {
    console.log(`Race will begin at 9:30, your race number is ${raceNumber}.`);
}