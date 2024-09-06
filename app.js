"use strict";
const msg = "Hello World";
for (let i = 0; i < msg.length; i++) {
    console.log(msg[i]);
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("John", 30);
console.log(Person);
let a = 3;
function sayAnything(msg) {
    console.log(msg);
}
