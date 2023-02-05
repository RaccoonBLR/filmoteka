import { NewTrendApi, NewSearchApi } from './news-api';
import filmCardMarkupCreator from './cards-markup';

const carts = document.querySelector('.container-catalog');
const form = document.querySelector('.search');
const searchInputEl = document.querySelector('.search__input');

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();

TrendApi.fetchTrend().then(dataForCatallog => {
  localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
  addCards(dataForCatallog);
});

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  // SearchApi.resetPage();
  SearchApi.query = e.currentTarget.elements.searchQuery.value;
  console.log(SearchApi.query);
  if (!SearchApi.query) {
    try {
      const dataForCatallog = await TrendApi.fetchTrend();
      console.log(dataForCatallog);
      localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
      await TrendApi.fetchTrend().then(addCards);
    } catch {
      error => console.log(error.message);
    }
    return;
  }

  try {
    const dataForCatallog = await SearchApi.fetchSearch();
    console.log(dataForCatallog);
    localStorage.setItem('current-movies', JSON.stringify(dataForCatallog));
    await SearchApi.fetchSearch().then(addCards);
  } catch {
    error => console.log(error.message);
  }
}

function addCards(data) {
  carts.innerHTML = filmCardMarkupCreator(data);
}

searchInputEl.addEventListener('click', onInputClean);

// функція для того, щоб при повторному пошуку інпуп очищувався сам (для зручності користувача)
function onInputClean() {
  searchInputEl.value = '';
}
