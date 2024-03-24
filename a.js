
const apiKey = 'AIzaSyAFaIam8bAOGcBZCMnvHSDuPnKyn1GVrAw';
const engineId = 'f02b2fb0dfb7a4332';

function searchQvision3() {
  
  window.location.href='search-result.html';
  const searchTerm = document.getElementById('search-term').value;
  const encodedTerm = encodeURIComponent(searchTerm);
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineId}&q=${encodedTerm}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        const results = JSON.stringify(data); // Convert data to JSON string
        localStorage.setItem('searchResults', results); // Store results in local storage
        window.location.href = 'search-result.html'; // Redirect to found.html
      } else {
        alert('No results found!');
      }
    })
    .catch(error => console.error(error));
}


const storedResults = JSON.parse(localStorage.getItem('searchResults'));
if (storedResults) {
  const resultList = document.getElementById('results-list');
  storedResults.items.forEach(item => {
    const listItem = document.createElement('div');
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.title;
    listItem.appendChild(link);
    resultList.appendChild(listItem);
  });
  localStorage.removeItem('searchResults'); // Clear local storage after use
} else {
  
}

function next_page(){
  window.location.href = 'sign-in.html';
 
}


function home(){
  window.location.href ='index.html';
}