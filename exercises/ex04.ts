// Exercise: Type against Interface

// Define an type alias Participant with properties name (string) and role (string).
// Define an interface Event with properties date (Date), title (string), and participants (array of Participant objects).
// Create an object called event1 using the Event interface.
// Invert the exercise, using Event as a type alias and participants as an interface.
// DO NOT GET STUCK HERE TOO LONG - max 5 mins

// Did something change? Discuss with your classmates.

// type Participant = {
//     name: string;
//     role: string;
// };

// interface myEvent {
//     date: Date;
//     title: string;
//     participants: Participant[];
// }

// const event1: myEvent = {
//     date: new Date(),
//     title: "Christmas Party",
//     participants: [
//         { name: "Alice", role: "Host" },
//         { name: "Bob", role: "Guest" },
//     ],
// };

// console.log(event1);

//Inverted the exercise, using Event as a type alias and participants as an interface.

interface Participant {
  name: string;
  role: string;
}
type myEvent = {
  date: Date;
  title: string;
  participants: Participant[];
};

const event2: myEvent = {
  date: new Date(),
  title: "New Year's Eve Party",
  participants: [
    { name: 'Charlie', role: 'Host' },
    { name: 'Dave', role: 'Guest' },
  ],
};

console.log(event2);
