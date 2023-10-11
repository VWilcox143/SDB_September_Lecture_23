//! Parameters and Arguments
/*
                (1)
    function hi(name) {
        console.log(`Hi, ${name}`)
                            (2)
    }
        (3)
    hi("Bruce");

    1: The parameter(s) that the function is accepting or holding.
    2: Using string interpolation, we can refer to the parameter that was given to the function.
    3: This is where we define what the parameter's value will be.
        - known as an argument
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}!`)

}

order('Cheese pizza');
order('Burger');
order('Milk Shake');

function firstLast(firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(`Hi, my name is ${fullName}`)
}
;
firstLast('Bruce', 'Lee');
firstLast('Jimmy', 'Jam');
firstLast('Barney', 'Rubble');

let x = 1;

function one() {
    x = 2;
}

one();

function check() {
    if(x === 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

check();

console.log(x);