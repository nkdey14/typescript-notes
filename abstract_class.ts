// abstract class Shape {
//   abstract area(): number;

//   printArea() {
//     console.log("Area is ", this.area());
//   }
// }

// class Circle extends Shape {
//   constructor(private radius: number) {
//     super(); // calling the constructor of the parent class
//   }
//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// var circle = new Circle(5);
// circle.printArea(); // Area is 78.53981633974483
