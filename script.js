const user_password = document.querySelector("#password");
const confirm_user_Password = document.querySelector("#confirm-password");

user_password.addEventListener("input", () => {
  if (user_password.value != confirm_user_Password.value) {
    user_password.setCustomValidity("Passwords don't match");
    confirm_user_Password.setCustomValidity("Passwords don't match");
  } else {
    user_password.setCustomValidity("");
    confirm_user_Password.setCustomValidity("");
  }
});

confirm_user_Password.addEventListener("input", () => {
  if (user_password.value != confirm_user_Password.value) {
    user_password.setCustomValidity("Passwords don't match");
    confirm_user_Password.setCustomValidity("Passwords don't match");
  } else {
    user_password.setCustomValidity("");
    confirm_user_Password.setCustomValidity("");
  }
});
