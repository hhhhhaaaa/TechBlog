/* eslint-disable no-undef */
const signupForm = async (event) => {
  event.preventDefault();

  const name = $("#name-signup").val().trim();
  const password = $("#password-signup").val().trim();

  if (name && password) {
    const response = await $.post(
      "/api/users",
      JSON.stringify({
        name,
        password,
      })
    );

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

$(".signup-form").on("submit", signupForm);
