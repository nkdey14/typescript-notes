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
