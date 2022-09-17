const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please enter details");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    form.reset();
  }
}
