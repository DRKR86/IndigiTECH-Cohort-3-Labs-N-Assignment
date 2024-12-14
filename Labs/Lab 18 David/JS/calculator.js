// David Robidoux Dec 3/2024 Lab 18

let billAmount = Number(prompt("Enter Bill Amount "));

let tipAmount = Number(prompt("Enter Tip %"));

let amount = (billAmount * tipAmount) / 100;

let total = billAmount + amount;

alert("Total Amount Due $" + total);
