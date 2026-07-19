# TypeScript Basics Notes

TypeScript adds static typing to JavaScript, making code easier to read, safer, and more maintainable.

## 1. Variables and Types

Use `let` and `const` instead of `var`, and prefer explicit types when the meaning is not obvious.

```ts
const name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
```

TypeScript also infers types automatically:

```ts
const city = "Seattle"; // inferred as string
let score = 100; // inferred as number
```

Common basic types:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `any`
- `unknown`

Union and intersection types:

```ts
let id: number | string;
id = 123;
id = "abc";
```

Tuples store fixed-length arrays with known types:

```ts
let point: [number, number] = [10, 20];
```

Enums define named constants:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
```

## 2. Scope: `let`, `const`, and `var`

`let` and `const` are block scoped. `var` is function scoped.

```ts
function testLet() {
  if (true) {
    let x: number = 10;
    console.log(x);
  }
  // console.log(x); // Error: x is not defined here
}

function testVar() {
  if (true) {
    var x: number = 20;
    console.log(x);
  }
  console.log(x); // Works because var is function scoped
}
```

Definite assignment assertion (`!`) tells TypeScript a variable will be initialized later.

```ts
let value!: number;
value = 5;
console.log(value);
```

A variable declared without initialization can be `undefined`:

```ts
let optionalNumber: number | undefined;
console.log(optionalNumber); // undefined
```

## 3. Operators and Expressions

Use arithmetic and comparison operators as in JavaScript.

```ts
const a = 12;
const b = 4;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);
```

Logical and conditional expressions:

```ts
const allowed = age >= 18 && isActive;
const status = age > 18 ? "Adult" : "Minor";
```

Nullish coalescing and optional chaining:

```ts
const value = undefined ?? "default";
const personName = person?.name;
```

## 4. Conditionals

Use `if`, `else if`, and `else` to branch logic.

```ts
const temperature = 25;

if (temperature >= 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Warm");
} else {
  console.log("Cool");
}
```

`switch` works well for multiple discrete values:

```ts
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

## 5. Loops

Repeat actions using `for`, `while`, and `do...while`.

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

```ts
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

```ts
let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 5);
```

## 6. Functions

Declare named functions with typed parameters and return values.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Nitin"));
```

Arrow functions are concise and work well for callbacks.

```ts
const add = (x: number, y: number): number => x + y;
console.log(add(10, 20));
```

Optional parameters and defaults:

```ts
function format(text: string, uppercase = false): string {
  return uppercase ? text.toUpperCase() : text;
}
```

Function type interfaces:

```ts
interface Add {
  (a: number, b: number): number;
}

const sum: Add = (a, b) => a + b;
```

## 7. Arrays

Arrays hold ordered values of the same type.

```ts
const numbers: number[] = [1, 2, 3];
const fruits: Array<string> = ["Apple", "Banana", "Orange"];
```

Tuples store a fixed number of elements with specific types.

```ts
const employeeRecord: [number, string] = [1, "John"];
```

Array helpers:

```ts
const filtered = numbers.filter((n) => n > 1);
const doubled = numbers.map((n) => n * 2);
```

## 8. Objects, Types, and Interfaces

Use type aliases or interfaces to describe object shapes.

```ts
type User = {
  id: number;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Nitin",
};
```

Optional and readonly properties:

```ts
interface UserProfile {
  readonly id: number;
  name: string;
  email?: string;
}

const profile: UserProfile = {
  id: 1,
  name: "Nitin",
};

profile.name = "Sam";
// profile.id = 2; // Error: readonly property
```

Interfaces can extend other interfaces or combine multiple contracts.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Rex",
  breed: "German Shepherd",
};
```

Multiple interface inheritance:

```ts
interface Swimable {
  swim(): void;
}

interface Flyable {
  fly(): void;
}

interface Duck extends Swimable, Flyable {
  quack(): void;
}

const duck: Duck = {
  quack() {
    console.log("quack quack");
  },
  fly() {
    console.log("flying");
  },
  swim() {
    console.log("swimming");
  },
};
```

## 9. Classes and Inheritance

Classes bundle data and behavior.

```ts
class Person {
  constructor(public name: string) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("John");
person.greet();
```

Access modifiers:

```ts
class PersonPrivate {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

Protected members are accessible in subclasses.

```ts
class PersonProtected {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends PersonProtected {
  display(): void {
    console.log("Employee name is " + this.name);
  }
}

const employee = new Employee("John");
employee.display();
```

## 10. Array of Objects + Methods

Work with typed object arrays and array helpers.

```ts
type Employee = {
  id: number;
  name: string;
  salary: number;
};

const employees: Employee[] = [
  { id: 1, name: "John", salary: 10000 },
  { id: 2, name: "Smith", salary: 20000 },
  { id: 3, name: "Robert", salary: 30000 },
];
```

Find, filter, and iterate:

```ts
const employee = employees.find((e) => e.id === 3);
console.log(employee?.name);

const highEarners = employees.filter((e) => e.salary > 15000);
highEarners.forEach((e) => console.log(e.name));
```

## 11. Generics

Generics make code reusable across types.

```ts
function identity<T>(value: T): T {
  return value;
}

const value = identity<number>(42);
const text = identity<string>("hello");
```

## 12. Quick Summary

- TypeScript adds static types to JavaScript for safer code.
- Use `let`/`const`, typed variables, and type inference.
- Prefer `interface` and `type` for structured object shapes.
- `let` is block scoped, `var` is function scoped.
- Classes, access modifiers, and interface inheritance improve organization.
- Array helpers like `filter`, `map`, and `find` work with typed arrays.
- Generics keep utilities reusable across different types.

## Workspace Examples (from .ts files)

The following examples are pulled directly from the workspace .ts files. Each section shows the code from the corresponding file.

### abstract_class.ts

```ts
abstract class Shape {
  abstract area(): number;

  printArea() {
    console.log("Area is ", this.area());
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super(); // calling the constructor of the parent class
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

var circle = new Circle(5);
circle.printArea(); // Area is 78.53981633974483
```

### arrays.ts

```ts
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
console.log(numbers[2]); // 3

let fruits: string[] = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits);
console.log(fruits[1]); // banana
console.log(fruits.length); // 5

let numbersArr: Array<number> = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[2]); // 3
console.log(numbersArr.length); // 5

let students: { name: string; age: number }[] = [
  { name: "John", age: 20 },
  { name: "Smith", age: 22 },
  { name: "Bob", age: 21 },
  { name: "Alice", age: 23 },
];

console.log(students);
console.log(students[1].name); // Smith
console.log(students[2].age); // 21
console.log(students.length); // 4

let nums: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // 1 2 3 4 5
}
```

### class.ts

```ts
class Person {
  name: string; // public by default

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log("Hello, my name is " + this.name);
  }
}

var person = new Person("John");
console.log(person.name);
person.greet();

class PersonPrivate {
  private name: string; // non-static

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

var person2 = new PersonPrivate("John");
// console.log(person2.name); // cannot access private members outside the class
person2.greet();

class PersonProtected {
  protected name: string; // protected access specifier can be accessible using inheritance in another class

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends PersonProtected {
  display(): void {
    console.log("Employee name is " + this.name);
  }
}

var emp = new Employee("John");
emp.display();
```

### conditionalStatements.ts

```ts
let age: number = 29;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

let marks: number = 70;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

let day: number = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
```

### constructor.ts

```ts
class Emp {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

var emp1 = new Emp("Rahul", 30);
console.log(emp1.name, emp1.age);
```

### custom_exception.ts

```ts
class AgeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AgeError";
  }
}

function register(age: number) {
  if (age < 18) {
    throw new AgeError("Age must be atleast 18"); // throw new Error("Age must be atleast 18");
  }
  console.log("Registration Successful!!");
}

try {
  register(17);
} catch (e) {
  if (e instanceof AgeError) {
    console.log(e.message);
  }
}
```

### exception_example.ts

```ts
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); // throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (e) {
  console.log("Error:", (e as Error).message);
} finally {
  console.log("Execution completed"); // finally block will always execute
}
```

### exercise.ts

```ts
// Create Employee Array Object
type Employee = {
  id: number;
  name: string;
  salary: number;
};

var employees: Employee[] = [
  { id: 1, name: "John", salary: 20000 },
  { id: 2, name: "William", salary: 25000 },
  { id: 3, name: "Robert", salary: 30000 },
  { id: 4, name: "Michael", salary: 35000 },
];

// Search Employee Based on ID using find() Method, Arrow Function and Optional Chaining Operator
var result = employees.find((e) => e.id === 2);
console.log(result?.name);

// Employees with Salary Greater than 20000 using filter() Method, Arrow Function and Optional Chaining Operator
employees
  .filter((e) => e.salary > 20000)
  .forEach((e) => {
    console.log(e.name);
  });

// Print all Employee names
employees.forEach((e) => {
  console.log(e.name);
});
```

### functions.ts

```ts
function hello(): void {
  console.log("Hello World");
}

hello();

function helloNum(): number {
  return 6;
}

console.log(helloNum());

function testFunc(name: string, age: number): void {
  console.log(`My name is ${name} and my age is ${age}`);
}

testFunc("Ayush", 19);

var test = function () {
  console.log("Hello World");
};

test();

setTimeout(function () {
  console.log("Hello World");
}, 2000);

function sum(a: number, b: number): number {
  return a + b;
}

console.log("Sum:", sum(10, 20)); // 30

var sumArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(sumArrow(10, 20)); // 30
console.log("Sum:", sumArrow(40, 50));
```

### generics.ts

```ts
class Box<T> {
  constructor(public val: T) {
    this.val = val;
  }
  display(): void {
    console.log(this.val);
  }
}

var b1 = new Box<number>(10);
b1.display();

var b2 = new Box<string>("Hello");
b2.display();
```

### getters_setters.ts

```ts
class PersonGS {
  name!: string;

  set userName(name: string) {
    this.name = name;
  }

  get userName(): string {
    return this.name;
  }
}

var personGS = new PersonGS();
personGS.userName = "Komal";
console.log(personGS.userName);
```

### inheritance.ts

```ts
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  // interface -> class - implements
  start(): number {
    return 100;
  }
}

var car = new Car();
console.log(car.start());
```

### inheritance_interface.ts

```ts
// Single Inheritance

interface AnimalBase {
  name: string;
}

interface Dog extends AnimalBase {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log(dog.name); // Output: Buddy
console.log(dog.breed); // Output: Golden Retriever

// Optional field in Parent

interface AnimalOptional {
  name?: string;
}

interface DogOpt extends AnimalOptional {
  breed: string;
}

const dogOpt: DogOpt = {
  breed: "German Shepherd",
};

console.log(dogOpt.breed); // Output: German Shepherd

// Multiple inheritance

interface Swimable {
  swim(): void;
}

interface Eatable {
  eat(): void;
}

interface Duck extends Swimable, Eatable {
  quack(): void;
}

const duck: Duck = {
  quack() {
    console.log("quack quack");
  },
  fly() {
    console.log("flying");
  },
  swim() {
    console.log("swimming");
  },
};

duck.eat();
duck.swim();
duck.quack();

interface A {
  x: number;
}

interface B extends A {
  y: string;
}

interface C extends B {
  z: boolean;
}

const c: C = {
  x: 10,
  y: "Hello Developer!",
  z: true,
};

console.log(c.x);
console.log(c.y);
console.log(c.z);
```

### let_var.ts

```ts
function testLetScope() {
  if (true) {
    let x: number = 10;
    console.log(x);
  }
  // console.log(x); // Error as let is block scoped
}

function testVarScope() {
  if (true) {
    var x: number = 20;
    console.log(x);
  }
  console.log(x); // No error as var is function scoped
}

testVarScope();

var x: number | undefined;
console.log(x);

var xLater!: number; // trust me operator , used for later initialization
// console.log(xLater);
```

### loop.ts

```ts
let n: number = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

let n2: number = 6;

while (n2 < 10) {
  console.log(n2);
  n2++;
}

let num: number = 5;

do {
  console.log(num);
  num++;
} while (num < 5);
```

### objects.ts

```ts
var student: { name: string; age: number } = {
  name: "Nitin",
  age: 29,
};

console.log(student.name);
console.log(student.age);

var studentOpt: { name: string; age?: number } = {
  name: "Nitin",
};

console.log(studentOpt.name);
console.log(studentOpt.age);

type EmployeeType = {
  id: number;
  name: string;
  salary: number;
};

var emp: EmployeeType = {
  id: 1,
  name: "Nitin",
  salary: 10000,
};

console.log(emp.id);
console.log(emp.name);
console.log(emp.salary);
```

### operators.ts

```ts
let a: number = 10;
let b: number = 3;

console.log(a + b); //13
console.log(a - b); //7
console.log(a * b); //30
console.log(a / b); //3.3333333333333335
console.log(a % b); //1
console.log(a ** b); //1000

// Increment and Decrement Operators
console.log(++a); // Increment by 1
console.log(--b); // Decrement by 1

console.log(a++);
console.log(b--);
a++;
b--;

console.log(a);
console.log(b);

let ageT: number = 19;
let result: boolean = ageT > 18 ? true : false;
console.log(result); // true
```

### person.ts

```ts
export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}
```

### static.ts

```ts
class MathUtil {
  static PI = 3.14;

  static square(x: number) {
    return x * x;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));

// static methods can be called without creating an instance of the class
// static properties are shared among all instances of the class
```

### test.ts

```ts
import { Person } from "./person";

var person = new Person("Mike");
person.greet();
console.log(person.name);

class Contact extends Person {
  display() {
    console.log("Contact name is", this.name);
  }
}

var contact = new Contact("Hamza Ali Mazhari");
contact.display();
contact.greet();
console.log(contact.name);

// Example of super()

class AnimalBaseClass {
  constructor(public name: string) {
    this.name = name;
  }
}

class DogExt extends AnimalBaseClass {
  // constructor(name: string) {  // optional
  //   super(name);
  // }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

var dogExt = new DogExt("Tommy");
dogExt.bark();

// Method overriding

class AnimalClass {
  sound() {
    console.log("Animal is making sound");
  }
}

class DogClass extends AnimalClass {
  sound() {
    console.log("Dog is making sound");
  }
}

var dog2 = new DogClass();
dog2.sound();
```

### variables.ts

```ts
var x: number = 25;
console.log(x);

var username: string = "nkdey14";
console.log(username);

var flag: boolean = true;
console.log(flag);

var data: any = {
  id: 1,
  name: "Nitin",
  age: 29,
};
console.log(data);

var arr: Array<string> = ["mike", "john", "joe"];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

var n: Array<any> = [1, "mike", true, { id: 1, name: "Nitin" }];
console.log(n);
console.log(n[1]);
console.log(n.length);

enum Gender {
  MALE = 5,
  FEMALE,
}

console.log(Gender.MALE); // 5
console.log(Gender.FEMALE); // 6
console.log(Gender[5]);

var s1: string = "Nitin";
var s2: string = `My name is ${s1}`;
console.log(s2);

var s: string = "Nitin";
console.log(s);
console.log(s.length);
console.log(s.charAt(0));
console.log(s.indexOf("n"));

var n1: string | number;

n1 = 10;
console.log(n1);

n1 = "Nitin";
console.log(n1);
```

The following examples are pulled directly from the workspace .ts files. Each section shows the code from the corresponding file.

### abstract_class.ts

```ts
// abstract class Shape {
//   abstract area(): number;
//
//   printArea() {
//     console.log("Area is ", this.area());
//   }
// }
//
// class Circle extends Shape {
//   constructor(private radius: number) {
//     super(); // calling the constructor of the parent class
//   }
//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }
//
// var circle = new Circle(5);
// circle.printArea(); // Area is 78.53981633974483
```

### arrays.ts

```ts
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// console.log(numbers[2]); // 3
//
// let fruits: string[] = ["apple", "banana", "orange", "grape", "mango"];
// console.log(fruits);
// console.log(fruits[1]); // banana
// console.log(fruits.length); // 5
//
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers[2]); // 3
// console.log(numbers.length); // 5
//
// let students: { name: string; age: number }[] = [
//   { name: "John", age: 20 },
//   { name: "Smith", age: 22 },
//   { name: "Bob", age: 21 },
//   { name: "Alice", age: 23 },
// ];
//
// console.log(students);
// console.log(students[1].name); // Smith
// console.log(students[2].age); // 21
// console.log(students.length); // 4
//
// let nums: number[] = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]); // 1 2 3 4 5
// }
```

### class.ts

```ts
// class Person {
//   name: string; // public by default
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   greet(): void {
//     console.log("Hello, my name is " + this.name);
//   }
// }
//
// var person = new Person("John");
// console.log(person.name);
// person.greet();
//
// class Person {
//   private name: string; // non-static
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   greet(): void {
//     // by default it's public, it's optional to use public keyword here
//     console.log("Hello, my name is ${this.name}");
//   }
// }
//
// var person = new Person("John");
//
// console.log(person.name); // can not access private members outside the class
// person.greet();
//
// class Person {
//   protected name: string; // protected access specifier can be accessible using inheritance in another class
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// class Employee extends Person {
//   display(): void {
//     console.log("Employee name is " + this.name);
//   }
// }
//
// var emp = new Employee("John");
// emp.display();
```

### conditionalStatements.ts

```ts
// let age: number = 29;
//
// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }
//
// let marks: number = 70;
//
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 60) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }
//
// let day: number = 4;
//
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }
```

### constructor.ts

```ts
// class Emp {
//   constructor(
//     public name: string,
//     public age: number,
//   ) {}
// }
//
// var emp = new Emp("Rahul", 30);
// console.log(emp.name, emp.age);
```

### custom_exception.ts

```ts
class AgeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AgeError";
  }
}

function register(age: number) {
  if (age < 18) {
    throw new AgeError("Age must be atleast 18"); // throw new Error("Age must be atleast 18");
  }
  console.log("Registration Successful!!");
}

try {
  register(17);
} catch (e) {
  if (e instanceof AgeError) {
    console.log(e.message);
  }
}
```

### exception_example.ts

```ts
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); // throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (e) {
  console.log("Error:", (e as Error).message);
} finally {
  console.log("Execution completed"); // finally block will always execute
}
```

### exercise.ts

```ts
// Create Employee Array Object
// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };
//
// var employees: Employee[] = [
//   { id: 1, name: "John", salary: 20000 },
//   { id: 2, name: "William", salary: 25000 },
//   { id: 3, name: "Robert", salary: 30000 },
//   { id: 4, name: "Michael", salary: 35000 },
// ];
//
// Search Employee Based on ID using find() Method, Arrow Function and Optional Chaining Operator
//
// var result = employees.find((e) => e.id === 2);
// console.log(result?.name);
//
// Employees with Salary Greater than 20000 using filter() Method, Arrow Function and Optional Chaining Operator
//
// employees
//   .filter((e) => e.salary > 20000)
//   .forEach((e) => {
//     console.log(e.name);
//   });
// Print all Employee names
//
// employees.forEach((e) => {
//   console.log(e.name);
// });
```

### functions.ts

```ts
// function hello(): void {
//   console.log("Hello World");
// }
//
// hello();
//
// function hello(): number {
//   return 6;
// }
//
// console.log(hello());
//
// function test(name: string, age: number): void {
//   console.log(`My name is ${name} and my age is ${age}`);
// }
//
// test("Ayush", 19);
//
// var test = function () {
//   console.log("Hello World");
// };
//
// test();
//
// setTimeout(function () {
//   console.log("Hello World");
// }, 2000);
//
// function sum(a: number, b: number): number {
//   return a + b;
// }
//
// console.log("Sum:", sum(10, 20)); // 30
//
// var test = (a: number, b: number): number => {
//   return a + b;
// };
//
// console.log(test(10, 20)); // 30
// console.log("Sum:", test(40, 50));
```

### generics.ts

```ts
// class Box<T> {
//   constructor(public val: T) {
//     this.val = val;
//   }
//   display(): void {
//     console.log(this.val);
//   }
// }
//
// var b1 = new Box<number>(10);
// b1.display();
//
// var b2 = new Box<string>("Hello");
// b2.display();
```

### getters_setters.ts

```ts
// class Person {
//   name!: string;
//
//   set userName(name: string) {
//     this.name = name;
//   }
//
//   get userName(): string {
//     return this.name;
//   }
// }
//
// var person = new Person();
// person.name="Komal";
// console.log(person.userName);
```

### inheritance.ts

```ts
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  // interface -> class - implements
  start(): number {
    return 100;
  }
}

var car = new Car();
console.log(car.start());
```

### inheritance_interface.ts

```ts
// Single Inheritance
//
// interface Animal {
//   name: string;
// }
//
// interface Dog extends Animal {
//   breed: string;
// }
//
// const dog: Dog = {
//   name: "Buddy",
//   breed: "Golden Retriever",
// };
//
// console.log(dog.name); // Output: Buddy
// console.log(dog.breed); // Output: Golden Retriever
//
// Optional field in Parent
//
// interface Animal {
//   name?: string;
// }
//
// interface Dog extends Animal {
//   breed: string;
// }
//
// const dog: Dog = {
//   breed: "German Shepherd",
// };
//
// console.log(dog.breed); // Output: German Shepherd
//
// Multiple inheriatnce
//
// interface Swimable {
//   swim(): void;
// }
//
// interface Eatable {
//   eat(): void;
// }
//
// interface Duck extends Swimable, Eatable {
//   quack(): void;
// }
//
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
//
// duck.eat();
// duck.swim();
// duck.quack();
//
// interface A {
//   x: number;
// }
//
// interface B extends A {
//   y: string;
// }
//
// interface C extends B {
//   z: boolean;
// }
//
// const c: C = {
//   x: 10,
//   y: "Hello Developer!",
//   z: true,
// };
//
// console.log(c.x);
// console.log(c.y);
// console.log(c.z);
```

### let_var.ts

```ts
// function test() {
//   if (true) {
//     let x: number = 10;
//     console.log(x);
//   }
//   console.log(x); // Error as let is block scoped
// }
//
// function test() {
//   if (true) {
//     var x: number = 20;
//     console.log(x);
//   }
//   console.log(x); // No error as var is function scoped
// }
//
// test();
//
// var x: number | undefined;
// console.log(x);
//
// var x!: number; // trust me operator , used for later initialization
// console.log(x);
```

### loop.ts

```ts
// let n: number = 6;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }
//
// let n: number = 6;
//
// while (n < 10) {
//   console.log(n);
//   n++;
// }
//
// let num: number = 5;
//
// do {
//   console.log(num);
//   num++;
// } while (num < 5);
```

### objects.ts

```ts
// var student: { name: string; age: number } = {
//   name: "Nitin",
//   age: 29,
// };
//
// console.log(student.name);
// console.log(student.age);
//
// var student: { name: string; age?: number } = {
//   name: "Nitin",
// };
//
// console.log(student.name);
// console.log(student.age);
//
// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };
//
// var emp: Employee = {
//   id: 1,
//   name: "Nitin",
//   salary: 10000,
// };
//
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.salary);
```

### operators.ts

```ts
// let a: number = 10;
// let b: number = 3;
//
// console.log(a + b); //13
// console.log(a - b); //7
// console.log(a * b); //30
// console.log(a / b); //3.3333333333333335
// console.log(a % b); //1
// console.log(a ** b); //1000
//
// Increment and Decrement Operators
// console.log(++a); // Increment by 1
// console.log(--b); // Decrement by 1
//
// console.log(a++);
// console.log(b--);
// a++;
// b--;
//
// console.log(a);
// console.log(b);
//
// let age: number = 19;
// let result: boolean = age > 18 ? true : false;
// console.log(result); // true
```

### person.ts

```ts
export class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}
```

### static.ts

```ts
class MathUtil {
  static PI = 3.14;

  static square(x: number) {
    return x * x;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));

// static methods can be called without creating an instance of the class
// static properties are shared among all instances of the class
```

### test.ts

```ts
import { Person } from "./person";

// var person = new Person("Mike");
// person.greet();
// console.log(person.name);
//
// class Contact extends Person {
//   display() {
//     console.log("Contact name is", this.name);
//   }
// }
//
// var contact = new Contact("Hamza Ali Mazhari");
// contact.display();
// contact.greet();
// console.log(contact.name);
//
// Example of super()
//
// class Animal {
//   constructor(public name: string) {
//     this.name = name;
//   }
// }
//
// class Dog extends Animal {
// //   constructor(name: string) {  // optional
// //     super(name);
// //   }
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }
//
// var dog = new Dog("Tommy");
// dog.bark();
//
// Method overriding
//
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
```

### variables.ts

```ts
// var x: number = 25;
// console.log(x);
//
// var username: string = "nkdey14";
// console.log(username);
//
// var flag: boolean = true;
// console.log(flag);
//
// var data: any = {
//   id: 1,
//   name: "Nitin",
//   age: 29,
// };
// console.log(data);
//
// var arr: Array<string> = ["mike", "john", "joe"];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
//
// var n: Array<any> = [1, "mike", true, { id: 1, name: "Nitin" }];
// console.log(n);
// console.log(n[1]);
// console.log(n.length);
//
// enum Gender {
//   MALE = 5,
//   FEMALE,
// }
//
// console.log(Gender.MALE); // 5
// console.log(Gender.FEMALE); // 6
// console.log(Gender[5]);
//
// var s1: string = "Nitin";
// var s2: string = `My name is ${s1}`;
// console.log(s2);
//
// var s: string = "Nitin";
// console.log(s);
// console.log(s.length);
// console.log(s.charAt(0));
// console.log(s.indexOf("n"));
//
// var n1: string | number;
//
// n1 = 10;
// console.log(n1);
//
// n1 = "Nitin";
// console.log(n1);
```
