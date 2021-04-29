/* eslint-disable no-undef */
const logout = async () => {
  const response = await $.post("/api/users/logout");

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

$("#logout").on("click", logout);
