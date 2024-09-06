const msg: string = "Hello World";

for (let i = 0; i < msg.length; i++) {
    console.log(msg[i]);
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("John", 30);
console.log(Person)

let a: number = 3;
function sayAnything(msg: string): void {
    console.log(msg);
}