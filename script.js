//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const firstname = document.querySelector("#first-name-input");
const submitBtn = document.querySelector("#submit-btn");
const lastname = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");

firstname.onkeyup = () => {
  firstname.classList.remove("is-valid");
  firstname.classList.remove("is-invalid");
};
lastname.onkeyup = () => {
  lastname.classList.remove("is-valid");
  lastname.classList.remove("is-invalid");
};
email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid");
};
password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFisrtnameOK = false;
  let isLastnameOK = false;
  let isEmailOK = false;
  let isPasswordOK = false;
  if (firstname.value === "") firstname.classList.add("is-invalid");
  else {
    firstname.classList.add("is-valid");
    isFisrtnameOK = true;
  }
  if (lastname.value === "") lastname.classList.add("is-invalid");
  else {
    lastname.classList.add("is-valid");
    isLastnameOK = true;
  }
  if (email.value === "") email.classList.add("is-invalid");
  else {
    if (validateEmail(email.value) == true) {
      email.classList.add("is-valid");
      isEmailOK = true;
    } else {
      email.classList.add("is-invalid");
    }
  }
  if (password.value.length > 6) {
    password.classList.add("is-valid");
    isPasswordOK = true;
  } else {
    password.classList.add("is-invalid");
  }
  if (isFisrtnameOK && isLastnameOK && isEmailOK && isPasswordOK)
    alert("Registered successfully");
};
