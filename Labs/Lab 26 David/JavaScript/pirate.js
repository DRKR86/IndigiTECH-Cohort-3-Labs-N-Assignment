// Task 1: Welcome Aboard, Pirate!
function welcomePirate(name) {
  document.write(`Ahoy, ${name}! Welcome aboard the Black Pearl!<br>`);
}

// Task 2: Calculate Treasure in the Chest
function calculateTreasure(goldCoins, silverCoins) {
  const totalValue = goldCoins * 1000 + silverCoins * 100;
  document.write(
    `The total value of the treasure chest is ${totalValue} doubloons.<br>`
  );
}

// Task 3: Is the Pirate Ship Ready for Battle?
function checkBattleReadiness(shipStatus) {
  if (shipStatus === "ready") {
    document.write("Your ship is ready for battle, Captain!<br>");
  } else {
    document.write("Your ship is not ready, prepare for battle!<br>");
  }
}

// Task 4: Pirate Crew Member Count
function countCrewMembers(crewList) {
  const numberOfCrew = crewList.length;
  document.write(`There are ${numberOfCrew} members in the crew!<br>`);
}

// Task 5: Sail to a New Island
function sailToIsland(islandName, distance) {
  const days = Math.ceil(distance / 30);
  document.write(`It will take ${days} days to sail to ${islandName}.<br>`);
}

// Task 6: Pirate Rations
function calculateRations(days, crewMembers) {
  const totalRations = days * crewMembers * 3;
  document.write(
    `The total number of rations needed for the journey is ${totalRations}.<br>`
  );
}

// Task 7: Find the Pirate Ship's Coordinates
function displayCoordinates(latitude, longitude) {
  document.write(`Current coordinates: ${latitude}, ${longitude}<br>`);
}

// // Example usage
// welcomePirate("Jack Sparrow");
// calculateTreasure(10, 20);
// checkBattleReadiness("ready");
// countCrewMembers(["Jack", "Will", "Elizabeth"]);
// sailToIsland("Tortuga", 90);
// calculateRations(10, 5);
// displayCoordinates(25.774, -80.19);
