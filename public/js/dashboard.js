/* eslint-disable no-undef */
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = $("#project-name").val().trim();
  const description = $("#project-desc").val().trim();

  if (name && description) {
    const response = await $.post(
      "/api/projects",
      JSON.stringify({
        name,
        description,
      })
    );

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Unable to create post.");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

$(".new-project-form").on("submit", newFormHandler);
$(".project-list").on("click", delButtonHandler);
