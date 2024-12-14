alert("Welcome To The Haunted Mansion Game");

let question1 = prompt("What Is Players Name");

let decision = prompt(
  "You Are At Crossroads With Two Choices: Left or Right room. Please Pick The Direction You Wanna Go?"
);
if (decision == "right") {
  alert("You Dead");
}
if (decision == "left") {
  alert("Yay Your Living");
}

let decision2 = prompt(
  "You have Found a Chest that need both a key and code to open Do You have a Key???"
);
let decision3 = prompt(
  "You have Found a Chest that need both a key and code to open Do you have the code???"
);

// Putting two answer together from two questions
if (decision2 == "yes" && decision3 == "yes") {
  alert("You Win a Million Dollars!!! YAY!!!!");
}

let decision4 = prompt(
  "What has cities, but no houses; forests, but no trees; and rivers, but no water?"
);
let decision5;
// Answer to question 1 if anwsered worng second quesion pop up all  within the same IF STATEMENT
if (decision4 == "map") {
  alert("Walk into the room!!!");
} else {
  decision5 = prompt(
    "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?"
  );
  if (decision5 == "echo") {
    alert("please enter the room for party");
  } else {
    ("you dead");
  }
}
// Can only store one (decision6) for js
let decision6 = prompt("Did You sloved the earlier riddle?");
let decision7 = prompt("Do You Still Have The Key From the Start?");
if (decision6 == "yes" && decision7 == "yes") {
  alert("YAY!!!! You Get Out Of The Haunted Mansion!!!");
} else {
  alert(" You Dead");
}
