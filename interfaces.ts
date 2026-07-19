// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const user: User = {
//   id: 1,
//   name: "Nitin",
//   email: "nitin@gmail.com",
// };

// console.log(user.id);
// console.log(user.name);
// console.log(user.email);

// interface User {
//   id: number;
//   name: string;
//   email?: string;
// }

// const user: User = {
//   id: 1,
//   name: "Nitin",
// };

// console.log(user.id);
// console.log(user.name);
// console.log(user.email); // undefined

// interface User {
//   readonly id: number;
//   name: string;
//   email?: string;
// }

// const user: User = {
//   id: 1,
//   name: "Nitin",
// };

// user.name = "Sam";
// // user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// console.log(user.id);
// console.log(user.name); // will print 'Sam'
// console.log(user.email); // undefined

// interface Add {
//   (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

// console.log(add(10, 20));

// interface Test {
//   (x: number): void;
// }

// const test: Test = (x) => console.log(x);

// test(300);

// interface Person {
//   name: string;
//   greet(): void;
// }

// const person: Person = {
//   name: "Ayush",
//   greet() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person.greet();

// interface Employee {
//   id: number;
//   name: string;
//   greet(): void;
//   test(): number;
// }

// const emp: Employee = {
//   id: 1,
//   name: "Nitin",
//   greet() {
//     console.log(`My name is ${this.name}`);
//   },
//   test() {
//     return 100;
//   },
// };

// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.test());
// emp.greet();
