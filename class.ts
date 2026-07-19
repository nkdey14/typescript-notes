// class Person {
//   name: string; // public by default

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(): void {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// var person = new Person("John");
// console.log(person.name);
// person.greet();

// class Person {
//   private name: string; // non-static

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(): void {
//     // by default it's public, it's optional to use public keyword here
//     console.log("Hello, my name is ${this.name}");
//   }
// }

// var person = new Person("John");

// console.log(person.name); // can not access private members outside the class
// person.greet();

// class Person {
//   protected name: string; // protected access specifier can be accessible using inheritance in another class

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   display(): void {
//     console.log("Employee name is " + this.name);
//   }
// }

// var emp = new Employee("John");
// emp.display();
