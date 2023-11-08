//! Classes
/*
    - Introduced in 2015
    - A function which helps us create objects.
    - Defines a category of objects

    * Base Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter;
        }

        methodName() {
            ... code block
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
console.log(one);

//1     2
class Item {
    // 3            4
    constructor(name, desc, price) {
//      5      6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/*
    1. Keyword to establish what type of "function".
    2. The name of our class. Should be Pascal Case.
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed objects. Est. values of the new object.
    5. Keyword - Refers to "this" specific object being created.
    6. The name of the key to our new object.
    7. The value for those keys being created (set by parameters).
*/

let itemZero = new Item();
// console.log(itemZero); // returns an object with set keys which hold undefined values.

let itemOne = new Item('beans', 'canned', 0.89);
// console.log(itemOne);

//let brokenItem = Item();
//console.log(brokenItem);
// TypeError: Class constructor cannot be invoked without 'new'.

//! Factory Functions
let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(z,x,p) {
    //return new Item(z,x,p);
};

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction); 

//! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; //making a default value for this key.
    }

    addToInventory(newItem) {
//
        this.items.push(newItem);
        console.log('Item Added!')
    }

}

let dryGoods = new DeptInventory('Dry Goods');
//console.log(dryGoods);

let itemTwo = new Item('corn', 'canned', 0.79);

dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

/*
    1. Establish a name of the  method.
    2. This method requires a parameter. (not all methods will need this)
    3. "this" keywords references the specific object (dryGoods).
    4. Using an array method to add the "item object" to the items array.
    5. Creating new objects (Dept / Item)
    6. Invoking the method available to dryGoods object.
*/

//! Factory Methods
class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s; 
        this.sales_tax; 
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }


}

let itemToSell = Expense.addUpchargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell);

let anotherItem = Expense.addUpchargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem);