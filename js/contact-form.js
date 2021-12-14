const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("#formButton");
const formError = document.querySelector("#formError");

function checkForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 0) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", checkForm, validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const emailPattern = /\S+@\S+\.\S+/;
  const patternMatches = emailPattern.test(email);
  return patternMatches;
}

function validateForm() {
  if (
    checkLength(firstName.value, 0) &&
    checkLength(lastName.value, 0) &&
    checkEmail(email.value) &&
    checkLength(message.value, 10)
  ) {
    button.disabled = false;
    formError.innerHTML = "Form submited successfully.";
  }
  console.log("hello11111");
}
