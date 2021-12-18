function snackbarFunction() {
  const snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

function snackbarForm() {
  const snackbarForm = document.getElementById("snackbarForm");
  snackbarForm.className = "show";
  setTimeout(function () {
    snackbarForm.className = snackbarForm.className.replace("show", "");
  }, 3000);
}
