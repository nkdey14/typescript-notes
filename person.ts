export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}
