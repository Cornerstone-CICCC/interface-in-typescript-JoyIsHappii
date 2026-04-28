// Interfaces TypeScript
// Exercise: Creating an Interface for a Triangle

// Create an interface named Triangle with properties: sideA, sideB, sideC. All the properties should be the type number.

// Add three methods to the interface: calculatePerimeter, calculateArea, and isTriangle.

// Define a variable using the interface Triangle and assign it an object.

// Test the methods of the interface - reference the example below.

// const myTriangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 5
//   // ...
// };

// console.log(myTriangle.calculatePerimeter()); // 12
// console.log(myTriangle.calculateArea()); // 6
// console.log(myTriangle.isTriangle()); // true

interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

const myTriangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,
  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  },

  calculateArea(): number {
    const a = this.sideA;
    const b = this.sideB;
    const c = this.sideC;
    return (
      Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2)) / 4
    ); //A = √[4a²b² - (a² + b² - c²)²]/4
  },
  isTriangle(): boolean {
    const a = this.sideA;
    const b = this.sideB;
    const c = this.sideC;

    return a + b > c && a + c > b && b + c > a; //(a+b>c, a+c>b, b+c>a)
  },
};

console.log(myTriangle.calculatePerimeter()); // 12
console.log(myTriangle.calculateArea()); // 6
console.log(myTriangle.isTriangle()); // true
