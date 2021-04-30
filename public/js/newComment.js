/* eslint-disable no-undef */
const newFormHandler = async (event) => {
  event.preventDefault();

  const description = $("#comm-desc").val().trim();
  const { pathname } = window.location;
  const id = pathname.slice(6);

  console.log(id);

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        description,
        postId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert(response.statusText);
      document.location.replace(window.location.href);
    } else {
      alert(response.statusText);
    }
  }
};

$(".new-comment-form").on("submit", newFormHandler);
