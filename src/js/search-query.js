import { NewTrendApi, NewSearchApi } from './news-api';
import filmCardMarkupCreator from './cards-markup';


const carts = document.querySelector('.container-catalog');
const form = document.querySelector('.search');
const searchInputEl = document.querySelector('.search__input');

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();

TrendApi.fetchTrend().then(dataForCatalog => {
  localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
  addCards(dataForCatalog);
  
}).catch(console.log);

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  // SearchApi.resetPage();
  SearchApi.query = e.currentTarget.elements.searchQuery.value;  //можливо варто додати trim()
  console.log(SearchApi.query);
  if (!SearchApi.query) {
    try {
      const dataForCatalog = await TrendApi.fetchTrend();
      console.log(dataForCatalog);
      localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
      await TrendApi.fetchTrend().then(addCards);
    } catch(error) {
      console.log(error.message);
    }
    return;
  }

  try {
    const dataForCatalog = await SearchApi.fetchSearch();
    console.log(dataForCatalog);
    localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
    await SearchApi.fetchSearch().then(addCards);
  } catch(error) {
    console.log(error.message);
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
