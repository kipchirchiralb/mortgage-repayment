const ourForm = document.querySelector("form");

ourForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the form from sending a http request
  const amountInput = document.getElementById("amount");
  const rateInput = document.getElementById("rate");
  const termInput = document.getElementById("term");
  const repaymentInput = document.getElementById("repayment");
  const interestOnlyInput = document.getElementById("interest-only");
  let errorCount = 0;

  if (repaymentInput.checked || interestOnlyInput.checked) {
    document.getElementById("radio-error").style.display = "none";
  } else {
    document.getElementById("radio-error").style.display = "block";
    errorCount++;
  }
  if (Number(amountInput.value) && Number(amountInput.value) > 0) {
    document.getElementById("amount-error").style.display = "none";
  } else {
    document.getElementById("amount-error").style.display = "block";
    errorCount++;
  }
  if (Number(rateInput.value) && Number(rateInput.value) > 0) {
    document.getElementById("rate-error").style.display = "none";
  } else {
    document.getElementById("rate-error").style.display = "block";
    errorCount++;
  }
  if (Number(termInput.value) && Number(termInput.value) > 0) {
    document.getElementById("term-error").style.display = "none";
  } else {
    document.getElementById("term-error").style.display = "block";
    errorCount++;
  }
  if (errorCount == 0) {
    showResult(
      Number(amountInput.value),
      Number(rateInput.value),
      Number(termInput.value),
      repaymentInput.checked,
      interestOnlyInput.checked
    );
  }
});
function showResult(amount, rate, term, isRepayment, isInterestOnly) {
  document.querySelector(".empty-result").style.display = "none";
  document.querySelector(".completed-result").style.display = "block";
  // calculate mortgage and show results
  if (isInterestOnly) {
    // chosen the radio for interest only
    let totalInterest = amount * (rate / 100) * term;
    document.querySelector(".results-container").innerHTML = `
      <h3>Your Total interest</h3>
      <p> ${totalInterest.toLocaleString()} </p>
      
    `;
  }
  if (isRepayment) {
    // chosen repayment -- UI
    let totalRepayment = amount + amount * (rate / 100) * term;
    let monthlyRepayment = totalRepayment / (term * 12);
    document.querySelector("#monthly-repayment-result").textContent =
      monthlyRepayment.toLocaleString();
    document.querySelector("#total-repayment-result").textContent =
      totalRepayment.toLocaleString();
  }
}
