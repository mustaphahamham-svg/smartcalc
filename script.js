function mortgage(){

let price = Number(document.getElementById("price").value);
let down = Number(document.getElementById("down").value);
let rate = Number(document.getElementById("rate").value);
let years = Number(document.getElementById("years").value);


let loan = price - down;

let monthlyRate = rate / 100 / 12;

let payments = years * 12;


let payment =
loan *
(monthlyRate * Math.pow(1 + monthlyRate, payments)) /
(Math.pow(1 + monthlyRate, payments)-1);


document.getElementById("result").innerHTML =
"Monthly Payment: $" + payment.toFixed(2);

}
