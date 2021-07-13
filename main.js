// septinta uzduotis

let numberr = 0;

const minusND7 = document.querySelector("minus");
const plusND7 = document.querySelector("plus");
const numberND7 = document.querySelector(".number");
const resetND7 = document.querySelector(".reset");

function minusClick() {
    numberrND7.innerText = number - 1;
}

function plusClick() {
    numberrND7.innerText = number + 1;
}

function resetClick() {
    numberrND7.innerText = 0;
}

minusND7.addEventListener('Click', minusClick); 
plussND7.addEventListener('Click', plusClick); 
resetND7.addEventListener('Click', resetClick); 

