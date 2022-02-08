const bill_input = document.getElementById('input-bill');
const tip_btn = document.querySelectorAll('.btn')
const custom = document.getElementById('custom');
const people = document.getElementById('input-number');
const tipValue = document.getElementById('tip-value');
const totalValue = document.getElementById('total-value');
const btn_reset = document.getElementById('btn-reset');

// variables

let bill = 0;
let people_number = 0;
let tipPercent = 0;
let tipAmount = 0;
let tipAmount_Person = 0;
let total_person = 0;


function setTipPercent(input) {
    if (input.id !== 'custom') {
        custom.value = "";
        tipPercent = parseInt(input.id);
        console.log(tipPercent);
    } else {
        tipPercent = custom.value;
        console.log(tipPercent)
    }
}

function finilize() {
    bill = bill_input.value;
    people_number = people.value;
    Calc();
}

function Calc() {
    if (people.value !== "") {
        tipAmount = bill * (tipPercent / 100);
        tipAmount_Person = tipAmount / people_number;
        tipValue.innerHTML = "$" + tipAmount_Person;
        total_person = bill / people_number + tipAmount_Person;
        totalValue.innerHTML = "$" + total_person;
    }
}

function reset() {
    tipValue.innerHTML = "$0.00";
    totalValue.innerHTML = "$0.00";
    bill_input.value = "";
    people.value = "";
    custom.value = "";
    bill = 0;
    people_number = 0;
    tipPercent = 0;
    tipAmount = 0;
    tipAmount_Person = 0;
    total_person = 0;
    console.log(tipAmount)
}

setInterval(finilize, 100);