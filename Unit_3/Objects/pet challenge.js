class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
    return `${this.name} says, ${this.voice}`
    }

    fly() {
        if (this.flies = true) {
            return `${this.name} takes to the skies!`;
        } else {
            return `${this.name} can only gaze upward...`;
        }


    }
}

class Dog extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
        this.flies = false
    }
}

let buttons = new Dog('Buttons', 'brown', 'ruff', false);

class Cat extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }
}

let mayo = new Cat('Mayo', 'black', 'mew.');

class Bird extends Pet {
    constructor(name, color, voice) {
        super(name, color)
        this.voice = voice;
        this.flies  
    }
}
let rex = new Dog ('Rex', 'white', 'arf', false)
let rocco = new Bird('Rocco', 'black', 'sqwawk', true);
console.log(rex.fly());