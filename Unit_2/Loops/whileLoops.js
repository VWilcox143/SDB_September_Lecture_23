/* 
    ? While Loops

    - While loop loops through a block of code WHILE a specific is true.

    - Structure: 
        while (condition) {
            ...code to run/execute
        }

    - The main purpose for while loops are when the iteration is uncertain. 
        - If we don't know how much content is in the data we are referencing/looping through
    
*/

let n = 1;

while ( n < 10 ) {
    console.log(`n before addition, start of loop: ${n}`); // string interpolation (dolllar sign, curlies)
    n++;
    console.log(`n after addition, end of loop: ${n}`);
    console.log("----------------");
}

console.log(`While loop is finished running, final value: ${n}`);

// Use a while loop to create and log a string. Pretend online cart.

let cartMsg = "";
let z = 0; // Zero items in cart

while ( z < 5 ) {
    z++;
    cartMsg = `You have ${z} item(s) in your cart!`;
    console.log(cartMsg);
}

console.log(`You hav ${z} items in your cart. Would you like to checkout now?`);

// Create a Spider-Man story line with a while loop and an array.

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
];

let structure = city[0];
// console.log(structure); // building

let pos = 0;
// console.log(city[pos]); // building

console.log("Welcome to the adventures of Spider-Man!! Looks like there's a thief on the loose!");

while ( structure != "empty street") {
    console.log(`Spider-Man swings from the ${structure} in pursuit of the thief!}`);
    pos++;
    structure = city[pos];
    console.log(`Spider-Man lands on the ${structure}!`);
    console.log('--------------')
}

console.log(`Spider-Man lands in the ${structure}! He corners and confronts the thief! Spidey saves the day again!!`);

/* 
    ? Do While Loops
    - Also loop through a block of code while a specified condition is true BUT...
        ! loop will run the code block ONCE, BEFORE checking if the condition is true and will keep running as long as the condition stays true.

    Structure:
    do {
        code to run/execute
    } while ( condition )

    -Works just like while loops with the exception that it will run the code block at least once.
*/

let num = 5; 

do {
    console.log(`The number is ${num}.`);
    num++;
} while ( num < 10 );

console.log(`Final total after do while ran: ${num}.`);

// Do code block will run once, even if condition is not true:
let value = 20;

do {
    value *= 2;
    console.log("Do code block is running...")
} while ( value > 100 );

console.log(value); // 40


// Mock switching a group of accounts from deactivated to active, use a boolean. 

// Declare and initialize an object called accounts
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

// Use square brackets notation with the object's property key to get the true/false value
// Want a variable which starts at 1 (acct1, etc) that we can increment.
let acctNum = 1;

do {
    // Create a log message to prove the account is currently inactive.
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`
    );

    // Activating message and set account to true.
    console.log('Activating.....');
    accounts[`acct${acctNum}`] = true;

    // Confirmation message
    console.log(
        `acct${acctNum} is currently active: set to ${accounts[`acct${acctNum}`]}.`
    );

    // After acct is activated (set to true), add 1 to acctNum variable to move to the next account.
    acctNum++;
} while ( accounts[`acct${acctNum}`] == false )

// Process complete message
console.log("All accounts are active.");
console.table(accounts); //.table instead of .log