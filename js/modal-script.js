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
