const ourForm = document.querySelector("form");

ourForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the form from sending a http request
  const amountInput = document.getElementById("amount");
  const rateInput = document.getElementById("rate");
  const termInput = document.getElementById("term");
  const repaymentInput = document.getElementById("repayment");
  const interestOnlyInput = document.getElementById("interest-only");

  console.log(amountInput.value);
  console.log(rateInput.value);
  console.log(termInput.value);
  console.log(repaymentInput.checked);
  console.log(interestOnlyInput.checked);

  if (repaymentInput.checked || interestOnlyInput.checked) {
    document.getElementById("radio-error").style.display = "none";
  } else {
    document.getElementById("radio-error").style.display = "block";
  }
  // an empty string is a falsy value -- evalues to fales if put as a condition
  console.log(Number(amountInput.value));

  if (Number(amountInput.value) && Number(amountInput.value) > 0) {
    document.getElementById("amount-error").style.display = "none";
  } else {
    document.getElementById("amount-error").style.display = "block";
  }
});
