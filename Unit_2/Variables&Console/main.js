// Single line comment: ctrl+/
/* Multi-line comment: shift+alt+a */

// * Variables

/* 

    Variables are named containers for storing data values.

    We name the variables so that we can refer to them and the values they hold at a later time. Consider that we are naming these variables to help us be directed to a value type.
    We can create a variable through three different keywords:
    1: var
    2: let
    3: const
    4: (none/no keyword)
*/


let a = 2;

//  (1) (2) (3) (4)
    let  b   =   1;

/* 
    1. Use JS keyword to denote the creation of a variable.
    2. The name of the variable, what the developer refers to/calls on to get the stored value. Variable names should be to the point/pertain to the data.
        - Should be camelCase, lower case first letter & upper case each next starting letter.
    3. Assignment operator: equal sign, = 
    4. The initial variable value, its starting value. 
*/

// * Variable Declaration vs. Initialization

// Declaration: declaring the variable but not assigning it.
let x;
console.log("Declaration of x: ", x); //Declaration of x:  undefined

let apple;

// Initialization: variable is given/set a value
let y = 4;

let life = 42;

// Reassign a variable value, reassign declared or initialized variable (not const keyword variables)
x = 20;
console.log("Initialization 1: ", x);

x = 100;
console.log("Initialization 2: ", x)

apple = 12;

// Assigning to other variables / create variables from variables. 

let firstName = "Kate"; // string datatype
let lastName = "Lockhart";

let fullName = firstName + " " + lastName;
let fullN = firstName + lastName; 

/* 
    * Console

    - A place to see text output / code results
    - There is a console object attached to the browser
    - We have a console in VSC to view results/what is logged.

    .log()
*/

console.log(fullName);

console.log(2+2); // 4 

console.log(x);

// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

today = "Super!";
// javaScript = "Meh."; //

console.log(today, javaScript);