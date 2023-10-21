

function calculateLoan() {

    let amountPay = Number(document.getElementById("amount").value);
    let rateMounth = Number(document.getElementById("rate").value);
    let yearValue = Number(document.getElementById("year").value);
 

    const apr = rateMounth / 1200;
    const term = yearValue * 12;
    const payment = amountPay * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);

    document.getElementById("result").value = payment.toFixed(2);
}
const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.onclick = calculateLoan;