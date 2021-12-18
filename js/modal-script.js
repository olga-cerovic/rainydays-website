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

const showSignUpModal = () => {
  const signUpModal = document.getElementById("signUpModal");
  signUpModal.style.display = "block";
};

const closeSignUpModal = () => {
  const signUpModal = document.getElementById("signUpModal");
  signUpModal.style.display = "none";
};

window.onclick = function (event) {
  const signUpModal = document.getElementById("checkOutModal");
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
};
