// Single Inheritance

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const dog: Dog = {
//   name: "Buddy",
//   breed: "Golden Retriever",
// };

// console.log(dog.name); // Output: Buddy
// console.log(dog.breed); // Output: Golden Retriever

// Optional field in Parent

// interface Animal {
//   name?: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const dog: Dog = {
//   breed: "German Shepherd",
// };

// console.log(dog.breed); // Output: German Shepherd

// Multiple inheriatnce

// interface Swimable {
//   swim(): void;
// }

// interface Eatable {
//   eat(): void;
// }

// interface Duck extends Swimable, Eatable {
//   quack(): void;
// }

// const duck: Duck = {
//   swim() {
//     console.log("Duck is swimming");
//   },
//   eat() {
//     console.log("Duck is eating");
//   },
//   quack() {
//     console.log("Duck is quacking");
//   },
// };

// duck.eat();
// duck.swim();
// duck.quack();

// interface A {
//   x: number;
// }

// interface B extends A {
//   y: string;
// }

// interface C extends B {
//   z: boolean;
// }

// const c: C = {
//   x: 10,
//   y: "Hello Developer!",
//   z: true,
// };

// console.log(c.x);
// console.log(c.y);
// console.log(c.z);
