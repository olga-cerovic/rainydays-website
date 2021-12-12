const checkOutModal = document.getElementById("check-out-modal");

const checkOutButton = document.getElementById("check-out-button");

const closingSpan = document.getElementsByClassName("check-out-modal-close")[0];

checkOutButton.onclick = function () {
  checkOutModal.style.display = "block";
};

closingSpan.onclick = function () {
  checkOutModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == checkOutModal) {
    checkOutModal.style.display = "none";
  }
};
