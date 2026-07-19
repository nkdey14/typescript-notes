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
