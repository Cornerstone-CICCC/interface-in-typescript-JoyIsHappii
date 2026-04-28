// Exercise: Implementing Discriminated Unions

// Create interfaces Bird and Horse with respective properties and a discriminated property breed.
// Implement a function moveAnimal that print how animal moves based on animal (Bird or Horse) parameter received. Eg: bird fly, horse gallop.

interface Bird {
    type: "bird";
    breed: string;
}

interface Horse {
    type: "horse";
    breed: string;
}


function moveAnimal(animal: Bird | Horse): void {
  if (animal.type === "bird") {
    console.log(`The bird flies.`);
  } else if (animal.type === "horse") {
    console.log(`The horse gallops.`);
  }
}

// Example usage:
const myBird: Bird = { breed: "Sparrow", type: "bird" };
const myHorse: Horse = { breed: "Arabian", type: "horse" };

moveAnimal(myBird); // Output: The bird flies.
moveAnimal(myHorse); // Output: The horse gallops.