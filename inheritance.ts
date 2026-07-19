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
