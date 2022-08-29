const hero = document.querySelector('.hero');
const magnifyingGlass = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('button');

// nav search bar
magnifyingGlass.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
});
searchInput.addEventListener('enter');
