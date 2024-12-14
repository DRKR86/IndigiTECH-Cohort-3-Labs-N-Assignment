// David Robidoux Dec 5/2024 Lab 21
alert("Welcome to the Space Quiz");
// Question 1
let spaceQuestion = prompt("Is the Earth part of the Milky Way galaxy?");

// Anwser 1
if (spaceQuestion == "yes") {
  alert("Correct");
} else {
  alert("Incorrect");
}
console.log(spaceQuestion);

// Question 2

let spaceQuestion2 = prompt(
  "Which planet is known as the 'Red Planet'? (Mars or Jupiter)"
);

if ((spaceQuestion2 = "Mars")) {
  alert("Correct");
} else {
  alert("Incorrect");
}
console.log(spaceQuestion2);

// Question 3
let spaceQuestion3 = prompt(
  "What is the largest planet in our solar system? (Jupiter, Saturn, Uranus, Neptune)"
);
//  Anwser 3
if (spaceQuestion3 == "Jupiter") {
  alert("Correct Good Work");
} else if ("Saturn") {
  alert("Try Again");
} else {
  alert("Good Try But you don't Nothing bout Space");
}
console.log(spaceQuestion3);

// Question 4
let spaceQuestion4 = Number(
  prompt("How Many Plants are in our solor system??")
);

if (spaceQuestion4 == "Eight") {
  alert("You Got the Correct Answer");
} else if ("Five") {
  alert("Sorry Your Wrong Try Again Please");
}

// Question 5

let spaceQuestion5 = prompt("True or False: The Earth is flat");
if (spaceQuestion5 == "false") {
  alert("Correct");
} else {
  alert("incorrect");
}
