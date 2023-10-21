const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const year = document.getElementById("year");
const result = document.getElementById("result")

function calculateLoan(){

    let amountPay = Number(amount.value);
    let rateMounth = Number(rate.value);
    let yearValue = Number(year.value);
    let result = Number(result.value)

    const apr = rateMounth/1200;
    const term = yearValue*12;
    const payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
   
    result.value = payment;
}

calculate.onclick = calculateLoan