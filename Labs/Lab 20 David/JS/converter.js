// David Robidoux Dec 4/2025 Lab 20

let usdAmount = Number(prompt("Enter USD Amount"));

let currExchageRate = 1.41;

let preExchargeRate = 1.25;

let currCanadian = usdAmount * currExchageRate;
console.log(currCanadian);

let olderrate = usdAmount * preExchargeRate;
console.log(olderrate);

let greater = currCanadian > olderrate;
console.log(greater);

let lesser = currCanadian < olderrate;
console.log(lesser);

let same = currCanadian === olderrate;
console.log(same);

let msg =
  "Today CAD amount " +
  currCanadian +
  " 5 Years ago amount is " +
  olderrate +
  " the rate has increased ";
alert(msg);
