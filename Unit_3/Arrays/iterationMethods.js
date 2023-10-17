//! Iteration Methods
/* 
    - Do not destroy the original array
    - Take in a callback function
    - loop through arrays
    - must have a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

const filteredFruit = fruits.filter(fruit => {
    //console.log('Parameter: ', fruit)
    let result = fruit !== 'mango';
    //console.log('Inside Filter:', result)
    return result;
})

// console.log(filteredFruit);

let fruit1 = 'pineapple';
// console.log(fruit1[0]);
//console.log(fruit1.includes('apple'));

//const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
//console.log(filteredFruit2);

//Function Example
function removeMango(fruit) {
    return fruit !== 'mango'
}

const filterFruit3 = fruits.filter(removeMango);
//console.log(filterFruit3);

/* 
! Challenge

*/
let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

const noFives = myNumberArray.filter(fiveLess => {
    let result = fiveLess !== 5;
    return result;
})

console.log(noFives);