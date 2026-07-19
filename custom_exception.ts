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
