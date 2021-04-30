/* eslint-disable no-undef */
const loginForm = async (event) => {
  event.preventDefault();

  const name = $("#name-login").val().trim();
  const password = $("#password-login").val().trim();

  if (name && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {

      alert(response.statusText);
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

$(".login-form").on("submit", loginForm);
