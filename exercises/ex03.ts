// Exercise: Implementing Multiple Interfaces

// Let's make the Triangle interface reusable from the exercise above.
// Create a new interface named Shape with the methods to calculate the perimeter and area: calculatePerimeterand calculateArea.
// Implement the Shape interface in news interfaces (extends), like Rectangle, Circle, and Square.
// Make the correct modifications in the methods to calculate the perimeter and area for each shape.

interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  sideLength: number;
}

class Rectangle implements Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square implements Shape {
  sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculatePerimeter(): number {
    return 4 * this.sideLength;
  }

  calculateArea(): number {
    return Math.pow(this.sideLength, 2);
  }
}

const myRectangle = new Rectangle(5, 10);
console.log("Rectangle Perimeter:", myRectangle.calculatePerimeter()); // Rectangle Perimeter: 30
console.log("Rectangle Area:", myRectangle.calculateArea()); // Rectangle Area: 50

const myCircle = new Circle(7);
console.log("Circle Perimeter:", myCircle.calculatePerimeter()); // Circle Perimeter: 43.982297150257104
console.log("Circle Area:", myCircle.calculateArea()); // Circle Area: 153.93804002589985

const mySquare = new Square(4);
console.log("Square Perimeter:", mySquare.calculatePerimeter()); // Square Perimeter: 16
console.log("Square Area:", mySquare.calculateArea()); // Square Area: 16