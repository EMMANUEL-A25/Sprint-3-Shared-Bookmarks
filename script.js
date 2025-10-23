// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.


// script.js
import { populateUserDropdown, renderBookmarksForUser, handleAddBookmark } from "./bookmarks.js";

document.addEventListener("DOMContentLoaded", () => {
  const userSelect = document.getElementById("user-select");
  const form = document.getElementById("bookmarkForm");

  // Populate the user dropdown
  populateUserDropdown(userSelect);

  // Render bookmarks for the initially selected user (optional)
  if (userSelect.value) {
    renderBookmarksForUser(userSelect.value);
  }

  // Update bookmarks when a new user is selected
  userSelect.addEventListener("change", () => {
    renderBookmarksForUser(userSelect.value);
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default form behavior
    handleAddBookmark();
  });
});
