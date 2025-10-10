const { useState } = require("react");

// Constructor Function
{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
        }
    }

    let harry = new Person("Haresh", 21);
    let alice = new Person("Paresh", 32);

    harry.greet();
    alice.greet();
}

// Constructor Function with Parameter
{
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.info = function () {
            console.log(`${this.brand} ${this.model} - ${this.year}`);
        }
    }

    let car1 = new Car("Ford", "Mustang", 1969);
    let car2 = new Car("Toyota", "Supra", 2005);

    car1.info();
    car2.info();
}

// JavaScript Function Closures
{
    function counter() {
        let count = 0; 
        return function () {
            count++;
            console.log("Count:", count);
        }
    }

    let myCounter = counter();
    myCounter(); 
    myCounter(); 
    myCounter(); 
}
