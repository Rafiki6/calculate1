calculate.onclick = calculateLoan
function calculateLoan(){

    let amountPay = Number(amount.value);
    let rateMounth = Number(rate.value);
    let yearValue = Number(year.value);

    const apr = rateMounth/1200;
    const term = yearValue*12;
    const payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
}
