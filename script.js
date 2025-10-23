// script.js
import { populateUserDropdown, renderBookmarksForUser, handleAddBookmark } from "./bookmarks.js";
import { clearData } from "./storage.js"; // needed to clear bookmarks

document.addEventListener("DOMContentLoaded", () => {
  const userSelect = document.getElementById("user-select");
  const form = document.getElementById("bookmarkForm");
  const clearBtn = document.getElementById("clearBookmarksButton"); // button to clear bookmarks
  const feedback = document.getElementById("feedbackMessage"); // feedback message element

  // --- Feedback helper ---
  function showFeedback(message) {
    feedback.textContent = message;
    feedback.style.display = "block";
    setTimeout(() => {
      feedback.style.display = "none";
    }, 3000);
  }

  // --- Handle Enter key submission anywhere in the form ---
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent default Enter behavior (newline in textarea)
      handleAddBookmark();
      showFeedback(`Bookmark added for User ${userSelect.value}!`);
    }
  });

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

  // Handle form submission via submit button
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default form behavior
    handleAddBookmark();
    showFeedback(`Bookmark added for User ${userSelect.value}!`);
  });

  // Handle clearing bookmarks
  clearBtn.addEventListener("click", () => {
    const userId = userSelect.value;
    clearData(userId); // remove all bookmarks for the selected user
    renderBookmarksForUser(userId);
    showFeedback(`All bookmarks cleared for User ${userId}.`);
  });
});
