// * Data Types

/* 
    Booleans
    - A boolean has only two values: true or false
*/

let on = true; 
let off = false;

console.log(on, off);

/* 
    Null
    - Null is an empty value.
    - Think of it as an empty container: Nothing is in it, but it still exists as a space to fill
*/

let empty = null; 
console.log(empty);

/* 
    Undefined
    -No value is assigned and does not act like an empty container.
*/

let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the variable.
console.log(undef); // undefined

let correct;// write like this instead
console.log(correct); // undefined

/* 
    Numbers
    -Numbers are interpreted as written in JS. No special characters needed to code  */

    let degrees = 98;
    console.log(degrees);


    let precise = 999999999999999; // 15 9s
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9s: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004 // JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

// Quick, cool thing:
let a = Number("42"); // Turns a string of numbers into numbers
console.log(a);

/* 
    String
    - String are datatypes to represent text.
    - Wrapped in single or double quotes.
    - Primitive datatype: strings, numbers, booleans, null, undefined.
        ^basic and most early used datatypes
*/

let stringOne = "double quotes";
const stringTwo = 'single quotes';

console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1234 + 567;
let second = '1234' + '567';

console.log(first) // No quotes do arithmetic
console.log(second) // Quotes put text together, strings combined

// typeof: can check the datatype of a variable/item
console.log(typeof first); // number
console.log(typeof second); // string

console.log(second[2]) // 3, can access characters with square bracket notation

/* 
    Objects
    - Objects are used to store many values instead of a singular one.
    - Need to be denoted/defined by {curly brackets}
    - Inside the object, we use key value pairs
        key: value, <-- multiple key value pairs need to be separated by a comma.
*/

let frodo = {
    race: 'hobbit', 
    altName: 'The Ring Bearer',
    rings: 1,
    cloak: true
}

console.log(frodo); // {race, altName, rings, cloak}
console.log(typeof frodo); // object
console.log(frodo.altName); // The Ring Bearer

/* 
    Arrays
    - Arrays are containers which hold list of items.
    - Need to denote arrays with [square brackets]
*/

//  (1)    (2)            (3)
let list = [ 'item1', 'item2', 'item3' ];
/* 
    1. Name of the array/list
    2. Array is inside of []
    3. Each item, regardless of datatype, are comma separated.
*/

let burritos = [ 'large', 2, true];
console.log(burritos);

console.log(typeof burritos); // Object, JS defines objects as a container that can hold multiple datatypes.

console.log(burritos[0]); // large

/* 
    DataType Literals:
    - A literal represents a fixed value that we as developers insert into the code.

    - Literals Include:
        - string literals(character wrapped in quotations)
        - numeric literals (integers)
        - boolean literals (true/false)
        - object literals (key/value pairs)
        - array literals (lists)
*/

// STRING LITERAL
let car = 'Ford';

// NUMERIC LITERAL
let december = 12;

// BOOLEAN LITERAL
let tired = true;
//A value of truth or false

// OBJECT LITERAL
let soups = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
};
// objects hold what are known as key/value pairs. Our soup object has 3 keys (a, b, c), and each of those keys have their own value tied to it

console.log(soup.c); //beef and barley
/*
    - objects use something called dot notation. Dot notation allows us to dig through an object and grab specific data
    - above we are calling our 'soup' variable and using dot notation to grab the key 'c' that's inside our object. Doing so will return the value associated with the key of 'c' (beef and barley)
*/

// ARRAY LITERAL
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(days.toString()); //Monday, Tuesday, Wednesday, Thursday, Friday
//this is a method that comes built into javascript to help us separate an array into strings

console.log(days.length);
// this is a property of arrays. Properties are things that already belong to an object


/* 
    Special Values
    - Not all math comes out making sense. Multiplication is hard, thus we have these special values.
    - Infinity
    - NaN
    */

let inf = 5 / 0
console.log(inf);

let notAnumber = "string" * 317;
console.log(notAnumber); // NaN , not a number

