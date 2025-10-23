 // bookmarks.js
import { getUserIds, getData, setData } from "./storage.js";

// Populate User Dropdown
export function populateUserDropdown(selectElement) {
  console.log("Populating user dropdown...");
  const users = getUserIds();
  console.log("Users:", users);

  selectElement.innerHTML = ""; // clear existing options

  users.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = `User ${userId}`;
    selectElement.appendChild(option);
  });
}

// Render bookmarks for a selected user
export function renderBookmarksForUser(userId) {
  const container = document.getElementById("bookmarksContainer");
  container.innerHTML = ""; // clear existing bookmarks

  const data = getData(userId) || [];

  if (data.length === 0) {
    container.innerHTML = `<p>No bookmarks available for User ${userId}.</p>`;
    return;
  }

  const bookmarks = [...data].reverse(); // reverse chronological order

  bookmarks.forEach((bookmark) => {
    const div = document.createElement("div");

    const title = document.createElement("a");
    title.href = bookmark.url;
    title.textContent = bookmark.title;
    title.target = "_blank";

    const desc = document.createElement("p");
    desc.textContent = bookmark.description;

    const timestamp = document.createElement("small");
    timestamp.textContent = `Added on: ${new Date(bookmark.timestamp).toLocaleString()}`;

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(timestamp);

    container.appendChild(div);
  });
}

// Handle adding a new bookmark
export function handleAddBookmark() {
  const userSelect = document.getElementById("user-select");
  const titleInput = document.getElementById("titleInput");
  const urlInput = document.getElementById("urlInput");
  const descInput = document.getElementById("descInput");

  const userId = userSelect.value;
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !url || !description) {
    alert("Please fill in all fields!");
    return;
  }

  const newBookmark = {
    title,
    url,
    description,
    timestamp: new Date().toISOString(),
  };

  const currentData = getData(userId) || [];
  currentData.push(newBookmark);
  setData(userId, currentData);

  renderBookmarksForUser(userId);

  document.getElementById("bookmarkForm").reset();
}
