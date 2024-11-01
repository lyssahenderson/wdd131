// form-demo.js
function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;
  
    // Validation code goes here
  
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    const theForm = document.getElementById("checkoutForm");
    const creditCardContainer = document.getElementById("creditCardContainer");
    const paypalContainer = document.getElementById("paypalContainer");
  
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    document.querySelector("#creditCard").required = false;
    document.querySelector("#paypalUsername").required = false;
  
    if (e.target.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      document.querySelector("#creditCard").required = true;
    } else if (e.target.value === "paypal") {
      paypalContainer.classList.remove("hide");
      document.querySelector("#paypalUsername").required = true;
    }
  }
  
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // Event listeners will be added later
  function togglePaymentDetails(e) {
    const creditCardContainer = document.getElementById("creditCardContainer");
    const paypalContainer = document.getElementById("paypalContainer");
  
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    document.querySelector("#creditCard").required = false;
    document.querySelector("#paypalUsername").required = false;
  
    if (e.target.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      document.querySelector("#creditCard").required = true;
    } else if (e.target.value === "paypal") {
      paypalContainer.classList.remove("hide");
      document.querySelector("#paypalUsername").required = true;
    }
  }
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;
  
    // Validation for "name" field
    if (theForm.name.value !== "Bob") {
      errors.push("Only people named 'Bob' can submit this form.");
      isValid = false;
    }
  
    // Validation for "creditCard" field
    const creditCardField = document.getElementById("creditCard");
    if (creditCardField.value && creditCardField.value !== "1234123412341234") {
      errors.push("Only '1234123412341234' is accepted as a credit card number.");
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
    }
  }
  