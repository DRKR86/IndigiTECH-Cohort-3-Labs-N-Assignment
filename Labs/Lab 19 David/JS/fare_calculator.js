// David Robidoux Dec 2/2024 Lab 19

let baseFare = Number(prompt("Base Fare for Ride"));
let distance = Number(prompt("Distance Traveled"));
let ratePerKm = Number(prompt("Rate Per Km"));
let tips = Number(prompt("Big Tips Please"));

// dbf = distance based fare
let dbf = distance * ratePerKm;
let totalFare = baseFare + tips + dbf;

let result = "your total fare is: " + totalFare;

alert(result);
let taxed = (dbf + baseFare) * 1.13 + tips;

let result2 = "your fare with tax " + taxed;

alert(result2);
