const apiKey = "AIzaSyCxiJWFHDa2lK-cpsd-W8F0tq66yS-z2CE";  // Replace with your actual YouTube Data API Key

const searchForm = document.getElementById("search-form"); // Reference the search form
const searchResults = document.getElementById("search-results");
let nextPageToken = null; // Variable to store next page token

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = document.getElementById("search-query").value;
  const maxResults = 10; // Adjust the number of results per page as desired

  // Make a search request with pagination parameters
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=${maxResults}&key=${apiKey}${nextPageToken ? '&pageToken=' + nextPageToken : ''}`)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = ""; // Clear previous results

      if (data.items) {
        data.items.forEach(item => {
          const videoId = item.id.videoId;
          const title = item.snippet.title;
          const thumbnail = item.snippet.thumbnails.default.url;

          // Embed video using iframe (or display links as needed)
          const videoIframe = document.createElement("iframe");
          videoIframe.width = "320"; // Adjust width as needed
          videoIframe.height = "180"; // Adjust height as needed
          videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
          videoIframe.frameborder = 0;
          videoIframe.allowfullscreen = true;

          // Create a container for video information
          const videoItem = document.createElement("video-grid");
          videoItem.classList.add("video-preview");

          // Display video title above the iframe
          const videoTitle = document.createElement("h3");
          videoTitle.textContent = title;
          videoItem.appendChild(videoTitle);

          videoItem.appendChild(videoIframe);

          searchResults.appendChild(videoItem);
        });

        // Check for next page token and create pagination buttons (optional)
        nextPageToken = data.nextPageToken;
        if (nextPageToken) {
          const nextButton = document.createElement("button");
          nextButton.textContent = "Next Page";
          nextButton.addEventListener("click", () => {
            // Functionality to load the next page of results using nextPageToken
            // ... (replace with your implementation to call the search again with nextPageToken)
          });
          searchResults.appendChild(nextButton);
        }
      } else {
        searchResults.innerHTML = "No results found.";
      }
    })
    .catch(error => {
      console.error(error);
      searchResults.innerHTML = "Error: Failed to fetch videos.";
    });
});
