// Race Day Registration Project

// Randomized number assignment (inclusive)
let raceNumber = Math.floor(Math.random() * 1000);

// Variable assigned with bool value
let registeredEarly = true;

// Variable to take runner age
var age = 19;

// control flow for of-age AND registered early

if (registeredEarly && age > 18) {
    raceNumber += 1000;
}

// control flow to determin race time

if (registeredEarly && age > 18) {
    console.log(`Race will begin at 9:30, your race number is ${raceNumber}.`);
}   else if (!registeredEarly && age > 18){
    console.log(`Race will begin at 11:00, your race number is ${raceNumber}.`);
}   else if (age < 18){
    console.log(`Race will begin at 12:30, your race number is ${raceNumber}.`);
}   else { 
    console.log(`Go to tht eregistration desk.`);
}