// Exercise: Using Type Guards

// Define a union type StringOrNumber that includes string and number.
// Write a function printInfo that prints information based on the type of the argument (string or number).
// Call the function with both a string and a number.

type StringOrNumber = string | number;

function printInfo(value: StringOrNumber): void {
  if (typeof value === 'string') {
    console.log(`The string is: ${value}`);
  } else {
    console.log(`The number is: ${value}`);
  }
}

// Test the function with both a string and a number
printInfo('Hello');
printInfo(123);
