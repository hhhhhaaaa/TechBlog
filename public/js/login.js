/* eslint-disable no-undef */
const loginForm = async (event) => {
  event.preventDefault();

  const name = $("#name-login").val().trim();
  const password = $("#password-login").val().trim();

  if (name && password) {
    const response = await $.post("/api/users/login", {
      name,
      password,
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

$(".login-form").on("submit", loginForm);
