
/**
 *Create a new bookmark object
  @param {string} title 
  @param {string} url 
  @param {string} description 
  @returns {object} bookmark object with timestamp
 */
export function createBookmark(title, url, description) {
  return {
    title,
    url,
    description,
    timestamp: new Date().toISOString()
  };
}

/**
  Check if a URL already exists in bookmarks
 @param {Array} bookmarks - Array of bookmark objects
 @param {string} url - URL to check
 @returns {boolean} true if URL exists, false otherwise
 */
export function isDuplicate(bookmarks, url) {
  return bookmarks.some(bookmark => bookmark.url === url);
}

/**
 Example utility function: get all titles from bookmarks
 @param {Array} bookmarks
 @returns {Array} list of titles
 */
export function getBookmarkTitles(bookmarks) {
  return bookmarks.map(b => b.title);
}
