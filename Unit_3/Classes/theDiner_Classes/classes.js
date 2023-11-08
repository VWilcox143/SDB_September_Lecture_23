/*
    - Employees
        - Manager
            - Create tables
        - Host
            - Set tables
        - Server
            - Serve tables

        Employee number

    -Table
*/

const employeeNumbers = [];
const tableNumbers = [];
class Employee {

    static setEmployee(role, name, payRate) {
        //create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100-1)+1);
        let numberToUse; 

        if(employeeNumbers.includes(setEmployeeNumber))
        {
            let tempNumber = setEmployeeNumber + "a";
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber
        }

        //Set hire date
        let today = new Date();

        // Set role
        const usedClass = role; // designates the class to target.

        return new usedClass(name, numberToUse, today, payRate);
    }

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
        //'Number' makes it read as a number, not a string.
    }
    //* Challenge: Write a method that allows to change their hire date.
}

class Manager extends Employee {

    constructor(name, employee_number, dateHired, payRate) 
    {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Manager'; 
    }

    createTable(number, seats) {
        let table = new Table(number, seats);
        return table; 
        //* Challenge: How can we evaluate if a table number already exists?
    
    }
    
}

class Server extends Employee {

    constructor(name, employee_number, dateHired, payRate) 
    {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Server'; 
    }

    serveTable(table) {
        table.updateStatus('eating...');
    }
}

class Host extends Employee {

    constructor(name, employee_number, dateHired, payRate) 
    {
        super(name, employee_number, dateHired, payRate);
        this.role = 'Host'; 
    }

    setTable(table){
        table.updateSeating();
    }
}




//const employee = new Employee('Joe', 1, new Date(), 18);
const manager = Employee.setEmployee(Manager,'Jane', 18);
const server = Employee.setEmployee(Server,'Dan', 18);
const host = Employee.setEmployee(Host,'Lena', 18);
console.log(manager, host, server);


//Tables have
class Table {
    constructor(tableNumber, seatNumber) {
        this.tableNumber = tableNumber;
        this.seatNumber = seatNumber;
        this.seated = false;
        this.status = 'Empty';
    }

    updateSeating() {
        if(this.seated) {
            this.seated = false;
            this.status = 'Empty';
        } else {
            this.seated = true;
            this.status = "Waiting...";
        }
    }

    updateStatus(status) {
        if(status !== undefined) {
            this.status = status;
        } else {
            this.status = 'Waiting...'
        }
    }
}

const table10 = manager.createTable(10, 2);
console.log(table10);
const table12 = manager.createTable(12, 2)
console.log(table12)


//table.updateStatus('Eating');

