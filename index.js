const newDiv = document.createElement("div");
newDiv.textContent = "FURNISHING THE INTERIORS IS ALSO AS WELL IMPORTANT";
document.body.appendChild(newDiv);

const existingDiv = document.querySelector('.my-class');
existingDiv.textContent = 'Updated content';
existingDiv.setAttribute('class', 'new-class');

document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});

const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput').value.trim();

  searchResults.innerHTML = '';

  if (searchInput !== '') {
    const apiUrl =`https://developer.dribbble.com/${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        displaySearchResults(data);
      })
      .catch(error => { 
        console.error('There was a problem with the fetch operation:', error);
      });
  } else {
    alert('Please enter a search term.');
  }
});

function displaySearchResults(data) {
  if (Array.isArray(data)) {
    data.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = result.title; 
      searchResults.appendChild(resultDiv);
    });
  } else {
    console.error('Data is not an array.');
  }
}

