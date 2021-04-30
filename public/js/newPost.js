/* eslint-disable no-undef */
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = $("#post-title").val().trim();
  const description = $("#post-desc").val().trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert(response.statusText);
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

$(".new-post-form").on("submit", newFormHandler);
