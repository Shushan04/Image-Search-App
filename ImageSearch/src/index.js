//import {ACCESS_KEY,API_URL, searchInput, searchBtn, showBtn,resultContainer } from "./constants";
const ACCESS_KEY = 'RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw';
const API_URL = 'https://api.unsplash.com';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const showBtn = document.getElementById('show-btn');
const resultContainer = document.getElementById('result');

let page = 1;
let inputData = 'card';

function handleSearchFetch() {
  const url = `${API_URL}/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`;

  fetch(url)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      renderSearchResult(data.results);
    })
    .catch(error => {
      console.error('Error', error);
    });
}

function handleSearch() {
  inputData = searchInput.value.trim();
  page = 1;
  resultContainer.innerHTML = '';
  handleSearchFetch();
}

searchBtn.addEventListener('click', handleSearch);

function handleShowMore() {
  page+=1;
  handleSearchFetch();
}

showBtn.addEventListener('click', handleShowMore);

function renderSearchResult(results) {
  results.forEach(result => {
    const img = document.createElement('img');
    img.src = result.urls.regular;
    img.classList.add('image-item');

    resultContainer.appendChild(img);
  });
}


