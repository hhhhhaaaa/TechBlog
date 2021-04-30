/* eslint-disable no-undef */

const signupForm = async (event) => {
  event.preventDefault();

  const { pathname } = window.location;
  const id = pathname.slice(11);
  const title = $("#post-title").val().trim();
  const description = $("#post-desc").val().trim();

  if (title && description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

$(".update-post-form").on("submit", signupForm);

const deleteButton = async (event) => {
  event.preventDefault();

  const { pathname } = window.location;
  const id = pathname.slice(11);

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  console.log(response);

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

$("#deleteBtn").on("click", deleteButton);
