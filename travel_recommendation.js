// TravelBloom - search and recommendation logic

const API_URL = 'travel_recommendation_api.json';
let travelData = null;

// Fetch the JSON data once and reuse it
async function loadData() {
  if (travelData) return travelData;
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Could not load data (status ${response.status})`);
  }
  travelData = await response.json();
  console.log('Travel data loaded:', travelData);
  return travelData;
}

// Pick recommendations based on the keyword.
// Accepts any form of the word: beach / Beaches / BEACH, temple / temples, country / countries.
function getRecommendations(data, keyword) {
  if (keyword.startsWith('beach')) {
    return data.beaches;
  }
  if (keyword.startsWith('temple')) {
    return data.temples;
  }
  if (keyword.startsWith('countr')) {
    return data.countries.flatMap(country => country.cities);
  }
  // A specific country name, e.g. "japan"
  const country = data.countries.find(c => c.name.toLowerCase() === keyword);
  if (country) {
    return country.cities;
  }
  return [];
}

function showMessage(text) {
  const results = document.getElementById('results');
  results.innerHTML = `<p class="message">${text}</p>`;
}

function displayResults(items) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="result-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button type="button" class="btn-visit">Visit</button>
      </div>
    `;
    results.appendChild(card);
  });
}

async function search() {
  const input = document.getElementById('searchInput');
  const keyword = input.value.trim().toLowerCase();

  if (!keyword) {
    showMessage('Please enter a keyword such as beach, temple or country.');
    return;
  }

  try {
    const data = await loadData();
    const items = getRecommendations(data, keyword);
    if (items.length === 0) {
      showMessage(`No recommendations found for "${input.value.trim()}". Try beach, temple or country.`);
    } else {
      displayResults(items);
    }
  } catch (error) {
    console.error(error);
    showMessage('Sorry, the recommendations could not be loaded. Please try again later.');
  }
}

function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}

document.getElementById('btnSearch').addEventListener('click', search);
document.getElementById('btnClear').addEventListener('click', clearResults);
document.getElementById('searchInput').addEventListener('keydown', event => {
  if (event.key === 'Enter') search();
});
