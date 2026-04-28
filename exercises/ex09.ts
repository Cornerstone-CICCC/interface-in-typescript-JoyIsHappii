// Exercise: Index Properties

// Create an interface ErrorContainer with an index property that holds error messages.
// Define an object errorBag using the ErrorContainer interface and display the error messages.

interface ErrorContainer {
    [key: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Invalid email address.",
    password: "Password must be at least 8 characters long."
};

console.log(errorBag.email); // Output: Invalid email address.
console.log(errorBag.password); // Output: Password must be at least 8 characters long.
