/* 
    Ternary Conditional Statement
    - Super cool syntax
    -A shortcut for writing and if, if/else/, or else/if statement.
    - (condition) ? true result: false result;
    -Ternaries REQUIRE the default/else 
*/

// let num = 6; // Yes!
let num = 0; // Nope, Nada
//Ternary:

(num > 0) ? console.log('Yes!') : console.log('Nope!')

//Instead of:
if (num > 0) {
    console.log('Yes!')
} else {
    console.log('Nada!')
}

// Ternary with two conditions vs. else if statement.

// let x = 1; all good bye
// let x = -5; All hi
let x = 0; // All Hello

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
}else {
    console.log("goodbye")
}

//Ternary
(x == 0) ? console.log("Hello!") : (x < 0) ? console.log("Hi!") : console.log("Goodbye!");

// Other way to write ternary
(x == 0) ? console.log("Hello! V2") 
    : (x < 0) ? console.log("Hi! V2") 
    : console.log("Goodbye! V2");