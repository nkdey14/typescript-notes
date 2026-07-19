import { Person } from "./person";

// var person = new Person("Mike");
// person.greet();
// console.log(person.name);

// class Contact extends Person {
//   display() {
//     console.log("Contact name is", this.name);
//   }
// }

// var contact = new Contact("Hamza Ali Mazhari");
// contact.display();
// contact.greet();
// console.log(contact.name);

// Example of super()

// class Animal {
//   constructor(public name: string) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
// //   constructor(name: string) {  // optional
// //     super(name);
// //   }
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// var dog = new Dog("Tommy");
// dog.bark();

// Method overriding

class Animal {
  sound() {
    console.log("Animal is making sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog is making sound");
  }
}

var dog = new Dog();
dog.sound();
