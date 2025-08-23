//get elements
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");
const queryInputs = document.querySelectorAll('input[name="query"]');
const queryError = document.getElementById("query-error");
const consentError = document.getElementById("consent-error");
const messageError = document.getElementById("message-error");
const emailError = document.getElementById("email-error");
const firstnameError = document.getElementById("firstname-error");
const lastnameError = document.getElementById("lastname-error");
const submitBtn = document.getElementById("submit-btn");

//delete error message when type in firstname
firstNameInput.addEventListener("change", () => {
  if (firstNameInput.value) {
    firstnameError.style.display = "none";
  }
});
lastNameInput.addEventListener("change", () => {
  if (lastNameInput.value) {
    lastnameError.style.display = "none";
  }
});
emailInput.addEventListener("change", () => {
  if (emailInput.value) {
    emailError.style.display = "none";
  }
});
messageInput.addEventListener("change", () => {
  if (messageInput.value) {
    messageError.style.display = "none";
  }
});
consentError.addEventListener("change", () => {
  if (consentInput.checked) {
    consentError.style.display = "none";
  }
});
queryInputs.forEach((q) => {
  q.addEventListener("change", () => {
    if (q.checked) {
      queryError.style.display = "none";
    }
  });
});
//add on cick function
submitBtn.addEventListener("click", () => {
  if (!firstNameInput.value) {
    firstnameError.style.display = "block";
  }
  if (!lastNameInput.value) {
    lastnameError.style.display = "block";
  }
  if (!emailInput.value) {
    emailError.style.display = "block";
  }
  if (!messageInput.value) {
    messageError.style.display = "block";
  }
  if (!consentInput.checked) {
    consentError.style.display = "block";
  }
  if (!Array.from(queryInputs).some((q) => q.checked)) {
    queryError.style.display = "block";
  }
});
