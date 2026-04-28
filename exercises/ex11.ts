// Exercise: Nullish Coalescing
// Create a variable userInput with a null value.
// Use nullish coalescing to set a default value Please enter something... if userInput is null or undefined.
// Display the resulting value.

const userInput: string | null = null;
const result = userInput ?? "Please enter something...";

console.log(result);