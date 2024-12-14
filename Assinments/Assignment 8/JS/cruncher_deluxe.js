// David Robidoux Dec 4/2024 Assignemnt 8

// number input 1

let num1 = Number(prompt("Enter A number Please"));
let num2 = Number(prompt("Enter A Second Please"));

//  Calculation 1

let total = num1 + num2;
let sum = num1 * num2;
alert("Total for Adding Number 1 & Number 2 is: " + " " + total);
alert("And If We Multiplied Total We Get The Sum Of: " + sum);

// number input 2

let num3 = Number(prompt("Enter A Thrid Number Please"));

// Calculation 2

let sub = num3 - sum;
let div = sum / num3;

alert("Total For Number 3 Being Subtracking From Over All Sum: " + sub);
alert("Total For Over All Sum Being Divided buy Number 3: " + div);

let num4 = Number(prompt("Enter A Fourth Number Please"));

// Final Calculation
let result = sub - div;
let finalResul = result + num4;

alert("The final result of all calculations are" + finalResul);
