/*
! Functions
    - Block of code which performs a particular task.
    - Simplified programs which run a task when invoked
*/

/* 
! Function Declaration
    (1)       (2)
    function hi() {

        console.log('Hi');
    }

    1: Keyword
    2: Name of function
        - parenthesis is for parameter. 
*/
function hi() {
    console.log('Hi!');
}


/* 
! Function Expression

    let hey = function hi() {
        console.log('Hi!');
    }

    1: The variable "hey" is now representative of the function "hi"

    * Does NOT get hoisted
*/

let hey = function hello() {
    console.log('Hi again')
}


/*
    function hi() {
        console.log('hi);
    }

    (1)
    hi();

    1: This is how we call, or "invoke" our function.
*/

function greetings() {
    console.log('Hello');
}

greetings; 
greetings();
console.log(greetings);

//Create a function that, when invoked, lists out the numbers 1-10. Name our function "counting".

function counting() {
    for(let x = 1; x<=10; x++) {
        console.log(x)
    }
}

counting();

//Given an array, create a function that lists out values individually.

let arr = ['This', 'is', 'really', 'cool'];

let arrList = function arrList() {
    for(item of arr) {
        console.log(item);
    }
}

arrList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];


function callDogs() {
    //console.log(dogArray);
    for(dog in dogArray) {
        console.log(dogArray[dog])
        console.log(`${dogArray[dog]} is in spot ${dog}`);
    }
}

callDogs();



let num1 = 1;
let num2 = 2;
let newNum = 5;

function addTwoNumbers(one, two) {
    let sum = one + two;
    console.log(sum);
}

addTwoNumbers(num1, num2);
addTwoNumbers(num1, newNum);