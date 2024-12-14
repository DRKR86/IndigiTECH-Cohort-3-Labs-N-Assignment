// David Robidoux Dec 9/2024 Lab 22B

alert("Welcome To The Haunted Manssion Game Let Get Started!!!");

// Decision 1

let enterName = prompt("What Is Your Name Please??");
console.log(enterName);

let scenario = prompt(
  "You Are At Crossroads With Two Choices: Left or Right room. Please Pick The Direction You Wanna Go?"
);

// Answers 1
if (scenario == "right") {
  alert("You Dead");
}
if (scenario == "left") {
  alert("Yay Still Alive More On Please!!");
}

// Decision 2

let scenario2 = prompt(
  "You have Found a Chest that need both a key and code to open Do You have a Key???"
);

let scenario3 = prompt(
  "You have Found a Chest that need both a key and code to open Do you have the code???"
);

// Answer 2 Putting two answers together from two Quesrions
if (scenario2 == "yes" && scenario3 == "yes") {
  alert("You Win a Million Dollar!!! YAY!!! And Get to Move To next Room!!!");
}
// Answer 2 with Or
if (scenario2 == "yes" || scenario3 == "no") {
  alert("You Win No Money But Can Move on To Next Room");
} else if (scenario2 == "no" || scenario3 == "yes") {
  alert("You Win No Money But Can Move on To Next Room");
}

// Decision 3
let scenario4 = prompt(
  "I’m light as a feather, yet the strongest person can’t hold me for long. What am I?"
);

let scenario5;

if (scenario4 == "breath") {
  alert("please Enter Room!!!");
} else {
  scenario5 = prompt(
    "The more you take, the more you leave behind. What am I?"
  );
}
if (scenario5 == "footsteps") {
  alert("Please Enter The For Some fun");
} else "You Dead";

let scenario6 = prompt("Did You Sloved The Earlier Riddle");
let scenario7 = prompt("Do you Still Have The Key From The Start");

if (scenario6 == "yes" && scenario7 == "yes") {
  alert("YAY!!!! You Get Oout of the haunted Manssion");
} else {
  alert("You Dead!!!");
}
