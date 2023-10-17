/*
    Array
        - Denoted with square brackets [ ]
        - Indices start at zero (0)
        - Using a propert called "length", we can find the sum of the data stored.
*/

let list = ['milk', 'bread', 'chicken', 'coffee' ];
//             0       1        2           3
console.log(list[2]);
console.log(list.length);

list[0] = 'chocolate milk'
console.log(list);

let avengers = [ 
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
]

console.log(typeof avengers);
console.log(avengers instanceof Array);

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello, ${avengers[0]}. Hello, ${avengers[5][0]}`);

//! Array methods
// .push()
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('pizza'); // does need some argument to push or add to array. Adds to the end of the array.
console.log('Push:', food);

// .splice(target position, how many removed, with what)
food.splice(1,1,'Tacos');
console.log('SPLICE', food);

food.splice(1,0,'Steak');
console.log('SPLICE 2', food);

// .pop()
food.pop(); //removes item from the end of the array
console.log('POP:', food);

// .shift();
food.shift(); //removes item from the beginning of the array
console.log("SHIFT:", food);

// .unshift() (add item, [optional])
food.unshift('Hamburger', 'Salad');
console.log('UNSHIFT:', food);

// .toString()
let rgb = ['red','green','blue'];
console.log(typeof rgb.toString());
console.log(typeof rgb);



