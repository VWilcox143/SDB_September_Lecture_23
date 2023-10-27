/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/


class Vehicle {
    constructor (make, model, no_wheels, color) {
        this.make = make;
        this.model = model;
        this.no_wheels = no_wheels;
        this.color = color;
}
    engineOn() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns on its engine.`)
    }
     engineOff() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns off its engine.`)
    }
    
}
let newCar = new Vehicle ('Ford', 'Fiesta','', 'Red')
newCar.engineOn();
newCar.engineOff();
console.log(newCar);