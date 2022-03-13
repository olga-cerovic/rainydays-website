const showModal = () => {
  const checkOutModal = document.getElementById("checkOutModal");
  checkOutModal.style.display = "block";
};

const closeModal = () => {
  const checkOutModal = document.getElementById("checkOutModal");
  checkOutModal.style.display = "none";
};

window.onclick = function (event) {
  const checkOutModal = document.getElementById("checkOutModal");
  if (event.target == checkOutModal) {
    checkOutModal.style.display = "none";
  }
};

// const showSignUpModal = () => {
//   const signUpModal = document.getElementById("signUpModal");
//   signUpModal.style.display = "block";
// };

// const closeSignUpModal = () => {
//   const signUpModal = document.getElementById("signUpModal");
//   signUpModal.style.display = "none";
// };

// window.onclick = function (event) {
//   const signUpModal = document.getElementById("checkOutModal");
//   if (event.target == signUpModal) {
//     signUpModal.style.display = "none";
//   }
// };

const showSignUpModal = () => {
  const subscribeModal = document.getElementById("signUpModal");
  const subscribeModalText = document.getElementById("signUpModalText");
  const emailValue = document.getElementById("subscribeInput").value;
  subscribeModal.style.display = "block";
  subscribeModalText.innerHTML = `${emailValue}, thank you for subscribing!`;
};

const closeSignUpModal = () => {
  const signUpModal = document.getElementById("signUpModal");
  signUpModal.style.display = "none";
};

window.onclick = function (event) {
  const subscribeModal = document.getElementById("signUpModal");
  if (event.target == subscribeModal) {
    subscribeModal.style.display = "none";
  }
};

const onSubscribeInputChange = () => {
  const subscribeInputValue = document.getElementById("subscribeInput").value;
  const subscribeInputIsValid = document
    .getElementById("subscribeInput")
    .checkValidity();
  if (subscribeInputValue === "" || subscribeInputIsValid === false) {
    document.getElementById("subscribeButton").disabled = true;
  } else {
    document.getElementById("subscribeButton").disabled = false;
  }
};
