// AND NOR OR

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

let Salary = false;
let loans = false;
let eligibleForLoan1 = Salary || loans;
console.log(eligibleForLoan1);

let rejected = !eligibleForLoan1;
console.log('rejected', rejected);

console.log(false || true);
let s = "Sailesh";
console.log(false || s);


let userColor = "black";
let defaultColor = "blue";
let selectedColor = userColor || defaultColor;
console.log(selectedColor);
