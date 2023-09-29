/* 
    CONDITIONALS
    - It's a way for us (as devs) to ask a question and provide a response depending on the condition of what we're asking
    - Devs == Inventors: we design and ask the question but also determine the answer options. 
    - Conditionals focus on a thing being true, or being false.
    - Evaluates an expression and responds if it is true.
    - Falsy
        - false
        - 0
        - empty strings
        - null
        - undefined
        - NaN (not a number
*/

// IF Conditional Statements

let isOn = true;

if (isOn == true) {
    console.log('The light is on in the room!'); // The light is on in the room
};

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn) {
    console.log("The light is on, heck yeah!");
};

let isOff = false;

if (isOff == false) {
console.log('The Light is Off...')
}

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket.')
}

//IF ElSE Conditional Statement

let temp = 75;

if (temp <70) {
    console.log('I will grab a sweater.');
} else { 
    console.log("I'm good to go.")
}

//AND, &&, check to see if both are equal

let username = "myUserName";
let password = '1234'; //To see false else statement run, change pass

if (username == "myUserName" && password == '1234') {
    console.log("Welcome, user. You are logged in.")
} else {
    console.log("Kick rocks, sucka.")
}

// OR, ||, checks if one statement is true OR the other.

let email = 'myemail@email.com'
let uName = 'discoCowboy69'

if (email == 'myemail@email.com'  || uName == 'discoCowboy69' ){
    console.log('Welcome User');
} else {
    console.log('Login info was incorrect.')
}

// NOT, ! 

let rain = true; // Nothing in the console because rain = true

if (!rain) {// (rain != true) also works
    console.log('It is a nice, sunny day.')
}

//ELSE IF Conditional Statement
//This can let us check more than one condition (asking multiple questions)
//Once one of the conditions is met (results in true) it will exit the statement/code block.

//let grade = 92; //This grade is passing! Great Job!
//let grade = 70; // Not quite passing, reach out to the teacher.
let grade = 50; // Needs to be reworked and resubmitted.

if (grade >= 75) {
    console.log('This grade is passing! Great job!')
} else if (grade >= 69) {
    console.log('Not quite passing, reach out to the teacher.')
} else {
    console.log('Needs to be reworked and resubmitted.')
}